# Workflow Quick Reference

> How to use the automation workflows set up for this workspace.

*Created: 2026-02-08*

---

## Available Workflows

| Command | What It Does |
|---------|-------------|
| `/new-session` | Scaffolds a full session folder + pre-filled invoice, agreement, and receipt |
| `/generate-pdfs` | Converts markdown files → styled PDFs |
| `/search` | Searches all business docs by keyword |
| `/organize-files` | Batch move, rename, restructure files |
| `/cleanup` | Remove empty folders and temp files |

All workflows auto-run without approval prompts.

---

## Usage Examples

**New session:**
> "Set up a new session for WNQ — Photo Session on 2026-03-15, 3 hours at $200/hr"

**Generate PDFs:**
> "Generate PDFs for the new session"

**Search:**
> "Search all my docs for scholarship"

**Organize:**
> "Move all PDFs into a PDF folder"

**Cleanup:**
> "Clean up empty folders"

---

## Templates

Reusable document templates live in `Resources/Templates/`:

| Template | Purpose |
|----------|---------|
| `invoice_template.md` | Client invoice with rate/total calculations |
| `service_agreement_template.md` | Service scope, deliverables, usage rights |
| `session_receipt_template.md` | Session completion confirmation + payment status |

Templates use `{{PLACEHOLDER}}` variables that get filled in automatically by the `/new-session` workflow.

---

*This document will be updated as new workflows are added.*
