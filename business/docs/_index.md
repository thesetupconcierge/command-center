# Setup Concierge — Master Index

**Last Updated:** February 11, 2026  
**Owner:** Justice · J4AFoundation LLC

---

## 📂 Workspace Map

### 📊 Dashboard

**→ [Open Master Dashboard](./_dashboard.md)** — 66 action items tracked across all areas

---

### 🏢 Advisory Panel

Panel of expert advisors providing strategic guidance.

| Folder | Contents |
|--------|----------|
| [Members/](./Advisory%20Panel/Members/) | 12 panel member profiles |
| [Consultations/](./Advisory%20Panel/Consultations/) | Reviews, proposals, panel responses |
| [Action Items/](./Advisory%20Panel/Action%20Items/) | Active work stemming from consultations |
| [Meeting Notes/](./Advisory%20Panel/Meeting%20Notes/) | Panel meeting records |

---

### ⚡ Black Nexus

Clinical development agency (CDA) — innovation lab.  
**GitHub Org:** [`blacknexuscda`](https://github.com/blacknexuscda)

| Folder | Contents |
|--------|----------|
| [Pitch Decks/](./Black%20Nexus/Pitch%20Decks/) | Investor and partner presentations |
| [Strategy/](./Black%20Nexus/Strategy/) | Strategic planning + GitHub collaboration guide |
| [Tasks/](./Black%20Nexus/Tasks/) | JB project brief, ClickUp template, daily summaries |
| [Action Items/](./Black%20Nexus/Action%20Items/) | Active to-dos |
| [Meeting Notes/](./Black%20Nexus/Meeting%20Notes/) | Meeting records |

---

### 🏗️ Architecture & Ecosystem

Ecosystem-level planning, mobile dev stack, and architectural audits.

| Document | Contents |
|----------|----------|
| [Ecosystem Architecture Audit](./Advisory%20Panel/Consultations/Assets/Markdown/ecosystem_architecture_audit_2026-02-11.md) | Full ecosystem map, 8-question audit, layer order, panel review |
| [Branch Discipline Guide](./Resources/branch_discipline_guide_2026-02-11.md) | Branch strategy: main → dev → feature/* |
| [Commit Convention Guide](./Resources/commit_convention_guide_2026-02-11.md) | Logbook-style commit format with area tags |
| [Devcontainer Template](./Resources/Templates/devcontainer_template.jsonc) | GitHub Codespaces config for V8 Engine |

**Repo Roles:** CORE (V8 Engine) · SERVICE (Web Dev Pipeline) · PRODUCT (Black Nexus Site, WNQ) · TOOL (Workflows, Dashboard) · SEPARATE (Career Hub)

---

### 🎯 WNQ (Warriors Never Quit)

Active client — nonprofit brand revamp + event photography.

| Folder | Contents |
|--------|----------|
| [Sessions/](./WNQ/Sessions/) | Photo sessions with invoices, agreements, receipts |
| [Website & Strategy/](./WNQ/Website%20%26%20Strategy/) | Website revamp docs and strategy |
| [Media/](./WNQ/Media/) | Brand assets, logos, photos |
| [Action Items/](./WNQ/Action%20Items/) | Active client tasks |
| [Meeting Notes/](./WNQ/Meeting%20Notes/) | Client meeting records |

---

### 💰 Finances

Financial tracking across all operations.

| Folder | Contents |
|--------|----------|
| [Invoices Sent/](./Finances/Invoices%20Sent/) | Invoices issued to clients |
| [Invoices Received/](./Finances/Invoices%20Received/) | Vendor/contractor invoices |
| [Expenses/](./Finances/Expenses/) | Business expense records |

---

### 🛠️ Resources

Templates, guides, and reference materials.

| Folder | Contents |
|--------|----------|
| [Templates/](./Resources/Templates/) | Reusable document templates (invoice, agreement, receipt, devcontainer) |
| [Walkthroughs/](./Resources/Walkthroughs/) | Session work summaries |
| [Action Items/](./Resources/Action%20Items/) | System improvement tasks |
| [automation_tips_and_tricks](./Resources/automation_tips_and_tricks_2026-02-08.md) | Automation concepts and tips |
| [workflow_quick_reference](./Resources/workflow_quick_reference_2026-02-08.md) | How to use all workflows |
| [branch_discipline_guide](./Resources/branch_discipline_guide_2026-02-11.md) | Git branch strategy and naming |
| [commit_convention_guide](./Resources/commit_convention_guide_2026-02-11.md) | Logbook-style commit format |

---

## ⚡ Quick Reference

### Workflows Available

| Command | Purpose |
|---------|---------|
| `/morning` | Daily startup — git checkpoint, dashboard health, queue review |
| `/consolidate` | End-of-day — compress work, archive trackers, update dashboard |
| `/new-session` | Scaffold a session folder with pre-filled docs |
| `/new-client` | Scaffold a full client folder structure |
| `/new-opportunity` | Scaffold a career opportunity folder |
| `/build-site` | Generate a client website from brief + brand kit |
| `/search` | Search all business docs by keyword |
| `/organize-files` | Batch file operations |
| `/cleanup` | Remove empty folders and temp files |
| `/snapshot` | Create timestamped backup of critical files |
| `/panel-review` | Run advisory panel review |

### File Naming Convention

`document_type_context_YYYY-MM-DD.md`  
Example: `invoice_WNQ_photo_session_2026-02-07.md`

### Folder Convention

- All folders use **Title Case**
- Every document folder has `Assets/Markdown/` (PDF generated on-demand only)
- Completed items move to `Action Items/Completed/`
- Old versions move to `Previous Versions/`

---

*This is a living document — update as the workspace evolves.*
