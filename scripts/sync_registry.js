const fs = require('fs');
const path = require('path');

const BASE_DIR = 'C:\\GitHub Local';
const COMMAND_CENTER_DIR = path.join(BASE_DIR, 'command-center');
const REGISTRY_PATH = path.join(COMMAND_CENTER_DIR, 'registry_data.json');

// Order matters: More specific paths or categories should come last if they overlap
const CATEGORY_MAP = {
    'Business Ideas/Setup Concierge/Advisory Panel/Consultations/Markdown': 'advisory',
    'Business Ideas/Setup Concierge/black_nexus/Strategy/Markdown': 'nexus',
    'Business Ideas/Setup Concierge/black_nexus/Pitch Decks/Markdown': 'nexus',
    'Business Ideas/Setup Concierge/Resources': 'concierge',
    'Career Hub/opportunities/abbvie_–_sterling_engineering/interview_prep/notes': 'career',
    'Business Ideas/Setup Concierge/WNQ/Website & Strategy': 'wnq',
    'Business Ideas/Setup Concierge/Resources/Walkthroughs': 'history',
    'Business Ideas/Setup Concierge/Resources/Walkthroughs/Markdown': 'history',
    'Business Ideas/Setup Concierge/Advisory Panel/Consultations/Assets/Markdown': 'ideas',
    'Business Ideas/Setup Concierge/Strategy/Parking Lot': 'ideas',
    'command-center/business/docs': 'advisory',
    'command-center/career/docs': 'career',
    'command-center/playbook': 'governance'
};

function copyPdf(sourcePath, category, fileName) {
    let destSubDir = '';
    switch (category) {
        case 'career': destSubDir = 'career/docs'; break;
        case 'governance': destSubDir = 'playbook'; break;
        case 'concierge': destSubDir = 'business/docs'; break;
        case 'advisory': destSubDir = 'business/docs'; break;
        case 'nexus': destSubDir = 'business/docs'; break;
        case 'wnq': destSubDir = 'business/docs'; break;
        case 'history': destSubDir = 'business/docs'; break;
        case 'ideas': destSubDir = 'business/docs'; break;
        default: destSubDir = 'business/docs';
    }

    const destDir = path.join(COMMAND_CENTER_DIR, destSubDir);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    const destPath = path.join(destDir, fileName);

    // Only copy if different or doesn't exist
    if (!fs.existsSync(destPath) || fs.statSync(sourcePath).mtime > fs.statSync(destPath).mtime) {
        console.log(`📂 Mirroring PDF: ${fileName} -> ${destSubDir}`);
        fs.copyFileSync(sourcePath, destPath);
    }
}

function scanDocs() {
    console.log('🚀 Starting Registry Scan with Mirroring...');

    if (!fs.existsSync(REGISTRY_PATH)) {
        console.error(`❌ Registry file not found at ${REGISTRY_PATH}`);
        return;
    }

    let registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));

    // Process each mapped directory
    for (const [relPath, category] of Object.entries(CATEGORY_MAP)) {
        const actualPath = path.join(BASE_DIR, relPath);

        if (!fs.existsSync(actualPath)) {
            console.warn(`⚠️ Path not found: ${actualPath}`);
            continue;
        }

        console.log(`📂 Scanning category [${category}]: ${actualPath}`);
        const files = fs.readdirSync(actualPath);

        const mdFiles = files.filter(f => f.endsWith('.md'));
        const pdfFiles = files.filter(f => f.endsWith('.pdf'));

        mdFiles.forEach(md => {
            const baseName = path.basename(md, '.md');
            const pdfName = `${baseName}.pdf`;
            const hasPdf = pdfFiles.includes(pdfName);

            if (hasPdf) {
                copyPdf(path.join(actualPath, pdfName), category, pdfName);
            }

            // Generate a clean display name
            const displayName = baseName
                .replace(/_/g, ' ')
                .replace(/-\d{2,4}/g, '') // Rough date removal
                .replace(/\b\w/g, l => l.toUpperCase())
                .trim();

            // Unified path logic
            let scPath = '';
            if (relPath.includes('Business Ideas/Setup Concierge') || relPath.includes('black_nexus')) {
                // Determine destination-relative path for registry_data.json
                // Registry expects paths relative to their lane-specific logic in index.html resolveDocPath
                scPath = md;
            } else if (relPath.includes('Career Hub')) {
                scPath = 'career/docs/' + md;
            } else if (relPath.startsWith('command-center')) {
                scPath = path.relative(COMMAND_CENTER_DIR, path.join(actualPath, md)).replace(/\\/g, '/');
            }

            if (!scPath) return;

            // Normalize scPath (remove leading career/docs if already handled by switch)
            if (scPath.startsWith('career/docs/')) scPath = path.basename(scPath);

            // Check if this path already exists in ANY category
            let foundInRegistry = false;

            for (const catKey in registry) {
                const existingIndex = registry[catKey].docs.findIndex(d => d.name === displayName || d.path.includes(scPath));
                if (existingIndex !== -1) {
                    foundInRegistry = true;
                    // Update entry
                    registry[catKey].docs[existingIndex].pdf = hasPdf;
                    // Note: intentionally not changing path if it exists to avoid breaking links
                    break;
                }
            }

            if (!foundInRegistry) {
                console.log(`✨ Adding doc to [${category}]: ${displayName}`);
                registry[category].docs.push({
                    name: displayName,
                    path: scPath,
                    pdf: hasPdf
                });
            }
        });
    }

    // Clean up
    for (const catKey in registry) {
        registry[catKey].docs = registry[catKey].docs.filter(d => d.path && d.path !== "");
    }

    fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 4));
    console.log('✅ Registry Sync & Mirroring Complete.');
}

scanDocs();

