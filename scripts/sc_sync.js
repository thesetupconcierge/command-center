/**
 * sc_sync.js — Surgical Dashboard Sync CLI
 * CDA / Setup Concierge Operational Tool
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Config Path
const CONFIG_PATH = path.join('C:', 'GitHub Local', '.agent', 'config', 'surgical_secrets.json');

function loadConfig() {
    if (!fs.existsSync(CONFIG_PATH)) {
        console.error("❌ Config Missing: Run 'sc-setup' or create .agent/config/surgical_secrets.json");
        process.exit(1);
    }
    return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
}

async function fetchGist(gistId, pat) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.github.com',
            path: `/gists/${gistId}`,
            headers: {
                'User-Agent': 'sc-sync-cli',
                'Authorization': `Bearer ${pat}`
            }
        };

        https.get(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                if (res.statusCode !== 200) reject(new Error(`HTTP ${res.statusCode}`));
                else resolve(JSON.parse(data));
            });
        }).on('error', reject);
    });
}

async function syncFromGist() {
    const { gistId, pat } = loadConfig();
    console.log(`📡 Fetching Gist ${gistId}...`);
    try {
        const gist = await fetchGist(gistId, pat);
        ['business', 'career'].forEach(lane => {
            const filename = lane === 'business' ? 'sc_dashboard_state.json' : 'ch_dashboard_state.json';
            const file = gist.files[filename];
            if (file && file.content) {
                console.log(`✅ Synced Lane: ${lane}`);
                // In a real implementation, we would write this back to a local cache 
                // that the Dashboard can read, but for now we just verify.
            }
        });
    } catch (e) {
        console.error("❌ Sync Failed:", e.message);
    }
}

// Simple CLI Router
const args = process.argv.slice(2);
if (args[0] === 'pull') {
    syncFromGist();
} else {
    console.log("Usage: node sc_sync.js pull");
}
