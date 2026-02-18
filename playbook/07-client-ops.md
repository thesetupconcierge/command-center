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

## Invoicing

Invoices live in:

```
Setup Concierge\Finances\
├── Invoices Sent\     — What you've billed clients
├── Invoices Received\ — What vendors bill you
└── Expenses\          — Operational costs
```

Invoices are created as markdown and sent through J4AFoundation LLC (the legal entity behind Setup Concierge). Export to PDF on-demand when ready to send (mobile MD-to-PDF tools or `npx md-to-pdf`).

## Website Delivery

For clients who need websites:

1. Create a **Site Brief** (goals, branding, content)
2. Run `/build-site` which combines the brief + brand kit + industry playbook
3. Output goes to `Web Development\` for staging
4. Deploy to client hosting (GitHub Pages, Wix, WordPress, etc.)
