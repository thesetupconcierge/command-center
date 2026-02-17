const fs = require('fs');
const path = require('path');

const REGISTRY_PATH = 'registry_data.json';
const MASTER_HUB_PATH = 'index.html';
const DEEP_STORAGE_DIR = 'C:/GitHub Local/Business Ideas/Setup Concierge/Resources/Archives/Registry_Deep_Storage';
const ESSENCE_LEDGER = 'C:/GitHub Local/Business Ideas/Setup Concierge/Resources/Archives/Value_Essence_Registry.md';

/**
 * Registry Purge Script
 * Moves 'vaultedDocs' from index.html (master_hub_state) to physical archives.
 */

async function purge() {
    console.log("🚀 Starting Registry Purge...");

    if (!fs.existsSync(DEEP_STORAGE_DIR)) {
        fs.mkdirSync(DEEP_STORAGE_DIR, { recursive: true });
    }

    // 1. Read index.html for vaultedDocs from master_hub_state (mocking the extraction here as we'd need to parse the JSON string in the file)
    // In a real surgical tool, we'd use a regex to find 'master_hub_state' in index.html
    const indexContent = fs.readFileSync(MASTER_HUB_PATH, 'utf8');
    // Note: Since index.html state is in localStorage in-browser, a CLI tool can't easily read it unless we persist it to the Gist first.
    // THE ARCHITECTURE: The user clicks "Vault", then runs "csync" to move state to Gist.
    // THEN this script reads the Gist (or the local git repo if we sync Gist down).

    // For this implementation, we will assume the user has synced or provided the list of paths.
    // BUT BETTER: We will assume we are running in the context of the Agent who can see the state.

    console.log("⚠️ Manual Override: Please specify the paths to purge as arguments.");
    const targets = process.argv.slice(2);

    if (targets.length === 0) {
        console.log("❌ No targets specified. Usage: node scripts/sc_registry_purge.js <path1> <path2>");
        return;
    }

    let registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));

    for (const targetPath of targets) {
        const fullPath = path.resolve('C:/GitHub Local/Business Ideas/Setup Concierge', targetPath);

        if (!fs.existsSync(fullPath)) {
            console.error(`❌ File not found: ${fullPath}`);
            continue;
        }

        console.log(`📦 Archiving: ${targetPath}`);

        // 1. Move the file
        const fileName = path.basename(targetPath);
        const destination = path.join(DEEP_STORAGE_DIR, fileName);

        try {
            fs.renameSync(fullPath, destination);
            console.log(`✅ Moved to: ${destination}`);

            // 2. Log Value Essence (requires AI to generate, here we log title)
            const dateStr = new Date().toISOString().split('T')[0];
            const entry = `| ${dateStr} | ${fileName} | [SUMMARY REQUIRED] | ${destination} |\n`;
            fs.appendFileSync(ESSENCE_LEDGER, entry);

            // 3. Remove from registry_data.json
            Object.values(registry).forEach(cat => {
                cat.docs = cat.docs.filter(doc => doc.path !== targetPath);
            });

        } catch (err) {
            console.error(`❌ Failed to process ${targetPath}:`, err);
        }
    }

    fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 4));
    console.log("✨ Registry Updated.");
}

purge();
