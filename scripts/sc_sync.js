/**
 * sc_sync.js — Advanced Surgical Dashboard Sync Engine (Cycle V8.8.9-Sec)
 * DDIA-Aligned / CDA Operational Standard
 * Includes: Pull, Push, Heartbeat, and Local Sidecar Server
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Paths
const BASE_DIR = path.join('C:', 'GitHub Local');
const CONFIG_PATH = path.join(BASE_DIR, '.agent', 'config', 'surgical_secrets.json');
const DATA_DIR = path.join(BASE_DIR, 'command-center', 'data');
const LOG_PATH = path.join(BASE_DIR, 'command-center', 'logs', 'sync.log');

// Port for Sidecar Server
const SIDECAR_PORT = 3001;

// LANES
const LANES = {
    business: 'sc_dashboard_state.json',
    career: 'ch_dashboard_state.json'
};

// --- Utilities ---

function log(msg, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] [${type}] ${msg}\n`;
    console.log(line.trim());
    if (!fs.existsSync(path.dirname(LOG_PATH))) fs.mkdirSync(path.dirname(LOG_PATH), { recursive: true });
    fs.appendFileSync(LOG_PATH, line);
}

function loadConfig() {
    if (!fs.existsSync(CONFIG_PATH)) {
        log("Config Missing: Run 'sc-setup' to initialize secrets.", 'ERROR');
        process.exit(1);
    }
    return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
}

// --- GitHub Gist API Wrappers ---

async function request(method, gistId, pat, payload = null) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.github.com',
            path: `/gists/${gistId}`,
            method: method,
            headers: {
                'User-Agent': 'sc-sync-v8',
                'Authorization': `Bearer ${pat}`,
                'Content-Type': 'application/json'
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                if (res.statusCode >= 400) {
                    reject(new Error(`GitHub API Error: ${res.statusCode} - ${data}`));
                } else {
                    resolve(JSON.parse(data));
                }
            });
        });

        req.on('error', reject);
        if (payload) req.write(JSON.stringify(payload));
        req.end();
    });
}

// --- Core Operations ---

async function pull(providedPat = null) {
    const { gistId, pat: localPat } = loadConfig();
    const pat = providedPat || localPat;
    log(`📡 Initiating Pull from Gist: ${gistId}...`);

    try {
        const gist = await request('GET', gistId, pat);
        if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

        Object.keys(LANES).forEach(lane => {
            const filename = LANES[lane];
            const file = gist.files[filename];
            if (file && file.content) {
                const targetPath = path.join(DATA_DIR, filename);
                fs.writeFileSync(targetPath, file.content);
                log(`✅ Synced Lane: ${lane} -> ${targetPath}`);
            } else {
                log(`⚠️ Missing data for lane: ${lane}`, 'WARN');
            }
        });

        const manifest = { last_synced: new Date().toISOString(), status: 'clean' };
        fs.writeFileSync(path.join(DATA_DIR, 'sync_manifest.json'), JSON.stringify(manifest, null, 2));
        return manifest;
    } catch (e) {
        log(`Sync Pull Failed: ${e.message}`, 'ERROR');
        throw e;
    }
}

async function push(specificFiles = null, providedPat = null) {
    const { gistId, pat: localPat } = loadConfig();
    const pat = providedPat || localPat;
    log(`🚀 Initiating Push to Gist: ${gistId}...`);

    try {
        let files = {};
        if (specificFiles) {
            files = specificFiles;
        } else {
            Object.keys(LANES).forEach(lane => {
                const filename = LANES[lane];
                const localPath = path.join(DATA_DIR, filename);
                if (fs.existsSync(localPath)) {
                    files[filename] = { content: fs.readFileSync(localPath, 'utf8') };
                }
            });
        }

        if (Object.keys(files).length === 0) {
            log("No local data found to push.", 'WARN');
            return;
        }

        await request('PATCH', gistId, pat, { files });
        log("✅ Gist synchronization successful.");

        const manifest = { last_synced: new Date().toISOString(), status: 'synced' };
        fs.writeFileSync(path.join(DATA_DIR, 'sync_manifest.json'), JSON.stringify(manifest, null, 2));
        return manifest;
    } catch (e) {
        log(`Sync Push Failed: ${e.message}`, 'ERROR');
        throw e;
    }
}

// --- Sidecar Server ---

function startServer() {
    const server = http.createServer(async (req, res) => {
        // Simple CORS
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
            res.writeHead(204);
            res.end();
            return;
        }

        if (req.url === '/pull' && req.method === 'GET') {
            try {
                const manifest = await pull();
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(manifest));
            } catch (e) {
                res.writeHead(500);
                res.end(e.message);
            }
        } else if (req.url === '/push' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', async () => {
                try {
                    const payload = JSON.parse(body);
                    // Pass PAT if provided, else use local secret
                    const manifest = await push(payload.files, payload.pat);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(manifest));
                } catch (e) {
                    res.writeHead(500);
                    res.end(e.message);
                }
            });
        } else if (req.url === '/config' && req.method === 'GET') {
            try {
                const { gistId } = loadConfig();
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ gistId, sidecar: true, version: 'V8.9.1' }));
            } catch (e) {
                res.writeHead(500);
                res.end(e.message);
            }
        } else if (req.url === '/status' && req.method === 'GET') {
            const manifestPath = path.join(DATA_DIR, 'sync_manifest.json');
            const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : { status: 'unknown' };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(manifest));
        } else if (req.url.startsWith('/fetch') && req.method === 'GET') {
            try {
                const url = new URL(req.url, `http://${req.headers.host}`);
                const relativePath = url.searchParams.get('path');
                if (!relativePath) throw new Error("Missing path parameter");

                log(`🔗 Sidecar Fetch: ${relativePath}`);

                const fullPath = path.join(BASE_DIR, 'command-center', relativePath);

                // Security: Prevent directory traversal outside of command-center
                const resolvedRoot = path.resolve(path.join(BASE_DIR, 'command-center'));
                const resolvedTarget = path.resolve(fullPath);
                if (!resolvedTarget.startsWith(resolvedRoot)) {
                    res.writeHead(403);
                    res.end("Forbidden: Outside of workspace");
                    return;
                }

                if (!fs.existsSync(fullPath)) {
                    res.writeHead(404);
                    res.end("File Not Found");
                    return;
                }

                const ext = path.extname(fullPath).toLowerCase();
                const mimeTypes = { '.json': 'application/json', '.md': 'text/markdown', '.html': 'text/html' };
                res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
                res.end(fs.readFileSync(fullPath));
            } catch (e) {
                res.writeHead(500);
                res.end(e.message);
            }
        } else {
            res.writeHead(404);
            res.end("Not Found");
        }
    });

    server.listen(SIDECAR_PORT, '127.0.0.1', () => {
        log(`🚀 Surgical Sidecar listening on 127.0.0.1:${SIDECAR_PORT} (Loopback Secured)`);
    });
}

// --- CLI Entry ---

const args = process.argv.slice(2);
const command = args[0];

(async () => {
    switch (command) {
        case 'pull':
            await pull();
            break;
        case 'push':
            await push();
            break;
        case 'serve':
            startServer();
            break;
        case 'heartbeat':
            const interval = parseInt(args[1]) || 5;
            log(`💓 Heartbeat Mode Active: Interval ${interval}m`);
            startServer(); // Heartbeat mode also serves sidecar
            setInterval(pull, interval * 60 * 1000);
            break;
        default:
            console.log(`
Usage: node sc_sync.js <command> [options]

Commands:
  pull           Fetch data from Gist to local cache
  push           Update Gist with local cache data
  serve          Start local Sidecar API for Dashboard
  heartbeat [N]  Run background sync every N minutes + Start Sidecar
            `);
    }
})();
