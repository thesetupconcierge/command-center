const fs = require('fs');
const path = require('path');

const BASE_DIR = 'C:\\GitHub Local';
const REGISTRY_PATH = path.join(BASE_DIR, 'command-center', 'registry_data.json');

// Order matters: More specific paths or categories should come last if they overlap
const CATEGORY_MAP = {
    'Business Ideas/Setup Concierge/Advisory Panel/Consultations/Markdown': 'advisory',
    'Business Ideas/Setup Concierge/Black Nexus/Strategy/Markdown': 'nexus',
    'Business Ideas/Setup Concierge/Black Nexus/Pitch Decks/Markdown': 'nexus',
    'Business Ideas/Setup Concierge/Resources': 'concierge',
    'Career Hub/docs': 'career',
    'Business Ideas/Setup Concierge/WNQ/Website & Strategy': 'wnq',
    'Business Ideas/Setup Concierge/Resources/Walkthroughs': 'history',
    'Business Ideas/Setup Concierge/Resources/Walkthroughs/Markdown': 'history',
    'Business Ideas/Setup Concierge/Advisory Panel/Consultations/Assets/Markdown': 'ideas',
    'Business Ideas/Setup Concierge/Strategy/Parking Lot': 'ideas',
    'command-center/business/docs': 'advisory',
    'command-center/career/docs': 'career',
    'command-center/playbook': 'governance'
};

function scanDocs() {
    console.log('🚀 Starting Registry Scan...');

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
            const hasPdf = pdfFiles.includes(`${baseName}.pdf`);

            // Generate a clean display name
            const displayName = baseName
                .replace(/_/g, ' ')
                .replace(/-\d{2,4}/g, '') // Rough date removal
                .replace(/\b\w/g, l => l.toUpperCase())
                .trim();

            // Unified path logic - Normalize slashes for comparison
            const normalizedActualPath = actualPath.replace(/\\/g, '/');
            const normalizedBaseDir = BASE_DIR.replace(/\\/g, '/');
            const scProjectRoot = normalizedBaseDir + '/Business Ideas/Setup Concierge';

            let scPath = '';
            if (normalizedActualPath.includes('Business Ideas/Setup Concierge')) {
                scPath = path.relative(path.join(BASE_DIR, 'Business Ideas/Setup Concierge'), path.join(actualPath, md)).replace(/\\/g, '/');
            } else if (normalizedActualPath.includes('Career Hub')) {
                scPath = 'career/docs/' + md;
            }

            if (!scPath) return;

            // Check if this path already exists in ANY category
            let foundInRegistry = false;
            let existingCategory = '';

            for (const catKey in registry) {
                const existingIndex = registry[catKey].docs.findIndex(d => d.path === scPath);
                if (existingIndex !== -1) {
                    foundInRegistry = true;
                    existingCategory = catKey;

                    // If it's found in the WRONG category, remove it so it can be added to the CURRENT (more specific) category
                    if (catKey !== category) {
                        console.log(`🔄 Moving doc to correct category [${category}]: ${displayName}`);
                        registry[catKey].docs.splice(existingIndex, 1);
                        foundInRegistry = false; // Trigger re-add below
                    } else {
                        // Update PDF status
                        registry[catKey].docs[existingIndex].pdf = registry[catKey].docs[existingIndex].pdf || hasPdf;
                    }
                    break;
                }
            }

            if (!foundInRegistry) {
                console.log(`✨ Adding doc to [${category}]: ${displayName} -> ${scPath}`);
                registry[category].docs.push({
                    name: displayName,
                    path: scPath,
                    pdf: hasPdf
                });
            }
        });
    }

    // Clean up any entries with empty paths
    for (const catKey in registry) {
        registry[catKey].docs = registry[catKey].docs.filter(d => d.path && d.path !== "");
    }

    fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 4));
    console.log('✅ Registry Sync Complete.');
}

scanDocs();
