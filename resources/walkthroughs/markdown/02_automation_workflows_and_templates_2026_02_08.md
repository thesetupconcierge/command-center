# Automation Workflows & Templates — Walkthrough

**Date:** February 8, 2026

---

## What Was Done

### 1. Turbo Workflows Created

Created 5 auto-run workflows in `.agent/workflows/`:

| Workflow | Purpose |
|----------|---------|
| `/organize-files` | Create dirs, move, rename files |
| `/cleanup` | Remove empty folders, temp files |
| `/new-session` | Scaffold full session folder + pre-filled docs |
| `/generate-pdfs` | Convert markdown → PDF |
| `/search` | Search all business docs by keyword |

All use `// turbo-all` for auto-running without approval prompts.

### 2. Reusable Templates Created

Created 3 templates in `Resources/Templates/` with `{{PLACEHOLDER}}` variables:

- `invoice_template.md`
- `service_agreement_template.md`
- `session_receipt_template.md`

### 3. Resources Folder Established

Created `Resources/` as a top-level reference folder containing:

- `automation_tips_and_tricks_2026-02-08.md` — 7 automation tips with priority recommendations
- `workflow_quick_reference_2026-02-08.md` — usage guide for all workflows
- `Templates/` — reusable document templates
- `Walkthroughs/` — session walkthrough copies
