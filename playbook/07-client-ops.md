# 07 — Client Ops

> *Every client gets the same structure, every session gets documented.*

## Client Folder Structure

When you run `/new-client`, this scaffold is created:

```
Setup Concierge\[Client Name]\
├── Action Items\      — Tracked tasks for this client
├── Media\             — Photos, videos, brand assets
├── Meeting Notes\     — Session-by-session notes
├── Sessions\          — Individual session folders (via /new-session)
└── Website & Strategy\ — Briefs, audits, strategy docs
```

## Current Clients

| Client | Folder | Status |
|--------|--------|--------|
| **Warriors Never Quit (WNQ)** | `Setup Concierge\WNQ\` | Active — website revamp |

## Session Workflow

1. **Before:** Run `/new-session` to create a dated session folder with pre-filled templates
2. **During:** Take notes, capture decisions, track deliverables
3. **After:** Run `/consolidate` to sweep action items and archive the session

## Finances & Revenue Tracking

Setup Concierge utilizes a dual-engine tracking system to monitor both career stability and business growth.

### Finance Hub Structure

Located at `Setup Concierge\Finances\`:

```markdown
Finances\
├── Invoices Sent\      — Billed via J4AFoundation LLC
├── Invoices Received\  — Vendor & service billing
├── Expenses\           — Operational & dev costs
└── investment_tracker.md — Long-term capital tracking
```

### Dashboard Finance Engine

The **Master Hub Header** displays real-time growth metrics:

- **Ecosystem Gross**: Combined Career (Sterling) + Business (SC) projected monthly income.
- **Business Growth**: A progress bar showing the ratio of business revenue to career baseline (Goal: 100%+ replacement).
- **Time Shield**: Dynamic status based on hour of day (Deep Work vs. Sterling Hours).

### Invoicing Protocol

1. **Draft:** Create invoice in Markdown using the `Invoices Sent\` template.
2. **Review:** Ensure J4AFoundation LLC branding is present and details are verified:
   - **Business Name:** J4AFoundation LLC
   - **Tax ID (EIN):** `[INSERT EIN FROM SECURE VAULT]`
   - **Routing Number:** `[INSERT ROUTING FROM SECURE VAULT]`
   - **Account Number:** `[INSERT ACCOUNT FROM SECURE VAULT]`
3. **Export:** Convert to PDF using `npx md-to-pdf` or the `/generate-pdfs` workflow.
4. **Send:** Deliver link/PDF to client via preferred comms channel.

## Website Delivery

For clients who need websites:

1. Create a **Site Brief** (goals, branding, content)
2. Run `/build-site` which combines the brief + brand kit + industry playbook
3. Output goes to `Web Development\` for staging
4. Deploy to client hosting (GitHub Pages, Wix, WordPress, etc.)
