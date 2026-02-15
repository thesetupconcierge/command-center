# 03 — Workflows

> *Slash commands that run your operation. Type the name, follow the steps.*

## Where They Live

All workflows: `C:\GitHub Local\.agent\workflows\*.md`

## The Core Three

### `/morning` — Open the Shop

Run at the start of each session. It:

1. Reads Captain's Log entries from Gist (what you noted between sessions)
2. Checks all 3 repos for uncommitted work
3. Verifies the revenue section is current month
4. Prints your Next Actions queue (NOW / SOON / LATER)
5. Scans for stale action item files (7+ days untouched)
6. Validates all agent file paths are correct
7. Outputs a formatted **Morning Brief**

### `/consolidate` — Close the Shop

Run at the end of a session. It:

1. **Action Item Sweep** — catches commitments you made in the conversation
2. **Completion Sweep** — checks if existing items were finished
3. **Captain's Log Export** — archives today's log entries to markdown
4. **Git Checkpoint** — surgical sync strategy (Private + Shared repos)
5. **Daily Summary** — writes a session summary to Resources
6. **Playbook Staleness Check** — flags pages not updated in 7+ days
7. **Dashboard Link Refresh** — suggests new docs to link
8. **Security Sweep** — scans shared repos for strategic leaks before pushing

### `/deploy-dashboard` — Ship It

One command: stages, commits, and pushes `command-center` to GitHub Pages.

## Other Workflows

| Command | What it does |
|---------|-------------|
| `/new-client` | Scaffold a client folder with standard subfolders |
| `/new-session` | Create a session folder with pre-filled docs |
| `/new-opportunity` | Scaffold a career opportunity folder |
| `/build-site` | Generate a website from brief + brand kit + playbook |
| `/snapshot` | Timestamped backup of critical files |
| `/cleanup` | Remove empty folders and temp files |
| `/search` | Full-text search across all business files |
| `/panel-review` | Run advisory panel review of the whole system |
| `/organize-files` | Batch move/rename files into folder structures |

## Adding a New Workflow

1. Create `C:\GitHub Local\.agent\workflows\your-workflow.md`
2. Add YAML frontmatter with a `description`
3. Write numbered steps — the agent follows them literally
4. Add `// turbo-all` if all steps are safe to auto-run
