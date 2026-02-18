# 05 — Advisory Panel

> *A boardroom full of experts — who happen to be AI personas. They challenge your thinking.*

## What It Is

A simulated advisory board of AI personas, each with a distinct specialty. When you run `/panel-review`, they analyze your system, strategy, or deliverable and give feedback from their unique angle.

## Build Your Own Panel

The panel is **fully customizable** — pick roles that match your business needs. Here's a template to get started:

| Role | Focus Area | Example Questions They'd Ask |
|------|-----------|------------------------------|
| **Strategist** | Positioning, market timing | "Who's the ideal customer?" |
| **Operations** | Process, SOPs, efficiency | "Can this scale with 10 clients?" |
| **Finance** | Revenue, pricing, cash flow | "What's the unit economics here?" |
| **Legal/Risk** | Compliance, contracts | "What liability are you carrying?" |
| **Marketing** | Brand, outreach, content | "How does this sound to a cold lead?" |
| **Tech** | Architecture, tooling | "Will this break when X changes?" |
| **UX/Design** | User experience, accessibility | "Can someone use this in 5 seconds?" |
| **Sales** | Pipeline, acquisition | "What's the close rate look like?" |
| **Client Success** | Retention, delivery quality | "Would the client renew?" |
| **Innovation** | Future-proofing, emerging tech | "What's the 3-year version?" |

> **Tip:** You don't need all 10+. Start with 3–5 that cover your blind spots. Add more as your operation grows.

## Where It Lives

```
Setup Concierge\Advisory Panel\
├── Members\           — One folder per panelist (bios, perspectives)
├── Consultations\     — Full panel reviews with assets
├── Meeting Notes\     — Individual session notes
└── Action Items\      — Tasks generated from reviews
```

## How to Use

- **Full review:** `/panel-review` — all panelists weigh in on a topic
- **Targeted:** Ask a specific panelist by name for focused advice
- **Consultation outputs** go into `Consultations\` as markdown (PDF only for formal deliverables)

## Making It Yours

Each panelist folder in `Members\` contains their persona definition. To add or customize a member:

1. Create a folder with their name
2. Define their expertise, communication style, and the lens they evaluate through
3. The more specific you make them, the sharper their feedback gets
