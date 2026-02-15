# 06 — Action Items

> *You say "I need to send that tomorrow." The system catches it so you don't have to.*

## Two Modes, Always Listening

### Mode 1: Capture — Detect New Items

The AI watches for commitment signals during conversation:

- "I will…", "I need to…", "let me…", "don't forget to…"
- "send to…", "upload to…", "follow up with…"

**Noise filters** — these are NOT captured:

- Vague: "I might…", "maybe I'll…"
- Questions: "should I…?"
- Instructions to the AI: "can you…", "build me…"

When items are detected, they're presented for approval before adding to the dashboard.

### Mode 2: Completion — Detect Done Items

When you say things like "I already sent it" or "that's done," the AI:

1. Cross-references against your **Next Actions** on the dashboard
2. If a match is found, asks to mark it complete
3. Never marks anything done without your confirmation

## Where Items Live

**Next Actions** section on the Business Dashboard (`NEXT_ACTIONS` array in `index.html`), sorted by urgency:

| Urgency | When |
|---------|------|
| 🔴 **NOW** | Do today |
| 🟡 **SOON** | This week |
| ⚪ **LATER** | Backlog |

## Safety Rails

- **Capture is aggressive, insertion is conservative** — better to catch too many and dismiss
- **Never auto-adds** — always asks first
- **Cross-references before adding** — no duplicates
- **One item per deliverable** — doesn't over-split tasks

## End-of-Day Sweep

`/consolidate` runs a final sweep to catch anything the real-time detection missed.
