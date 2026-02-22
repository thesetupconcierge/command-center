# Naming Conventions — Setup Concierge Workspace

**Established:** February 8, 2026  
**Applies to:** All files and folders in the Setup Concierge workspace

---

## File Naming

### Format

```
document_type_context_YYYY-MM-DD.extension
```

### Rules

| Rule | Example |
|------|---------|
| All lowercase | `invoice_wnq_photo_session.md` |
| Underscores between words | `service_agreement_wnq.md` |
| Date at the end, before extension | `pitch_deck_2026-02-06.md` |
| Date format: `YYYY-MM-DD` | `2026-02-08` (not `02-08-2026`) |
| No spaces in filenames | ✅ `meeting_notes.md` · ❌ `meeting notes.md` |
| Be descriptive but concise | ✅ `invoice_wnq_photo_session` · ❌ `inv_1` |

### Common Prefixes

| Prefix | Use For |
|--------|---------|
| `invoice_` | Client invoices |
| `service_agreement_` | Contracts and agreements |
| `session_receipt_` | Session receipts |
| `meeting_notes_` | Meeting summaries |
| `panel_response_` | Advisory panel feedback |
| `panel_refinement_` | Panel refinement documents |
| `pitch_deck_` | Pitch presentations |

---

## Folder Naming

### Rules

| Rule | Example |
|------|---------|
| **Title Case** for folders | `Website & Strategy` |
| Dates in session folders | `2026-02-07 Photo Session` |
| Client names as-is | `WNQ`, `Black Nexus` |

### Standard Subfolders

Every document folder must contain:

```
Assets/
├── Markdown/    ← source .md files
└── PDF/         ← generated or finalized .pdf files
```

### Special Subfolders

| Folder | Purpose | Location |
|--------|---------|----------|
| `Completed/` | Finished action items | Inside `Action Items/` |
| `Previous Versions/` | Superseded documents | Inside any document folder |

---

## Document Structure

### All documents should include

1. **Title** — clear `# Heading`
2. **Date** — at the top of the file
3. **Horizontal rules** (`---`) between sections
4. **Tables** — for structured data whenever possible

### Templates

Reusable templates live in `Resources/Templates/` and use `{{PLACEHOLDER}}` variables:

- `{{CLIENT_NAME}}`
- `{{DATE}}`
- `{{SERVICE_TYPE}}`
- etc.

---

*Follow these conventions for all new files. When in doubt, match existing patterns.*
