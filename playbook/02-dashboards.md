# 02 — Dashboards

> *Your cockpit. Two screens, one glance, everything that matters.*

## The Hub

**URL:** [thesetupconcierge.github.io/command-center](https://thesetupconcierge.github.io/command-center/)

A landing page with two cards that link to:

| Dashboard | Purpose (Unified CDA Governance) |
|-----------|---------|
| **Setup Concierge** (Business) | Clinical consulting, revenue, client ops, Captain's Log |
| **Career Hub** | Professional Development — Scorecards, PPCL/Siemens prep |

## Clinical Context Isolation

The system operates in two distinct lanes to preserve mental focus. Business-specific metrics (Revenue, badges) are **hidden** in Career Hub mode to create a clean, diagnostic environment for high-stakes technical preparation.

## Key Features (Both Dashboards)

- **Scorecard Circles** — visual progress rings per work area
- **Captain's Log** — timestamped notes with tags (#win, #concern, #note)
- **Task Checklists** — click to cycle: ⬜ → 🟡 → ✅
- **Hamburger Nav** — mobile slide-out drawer with links + actions
- **Mobile Stack Mastery** — Robust 1-column layout for iPhone usage.
- **Deep Link Mastery** — Section-level URLs (anchor links) with automatic highlight logic.
- **Gist Sync** — cloud-syncs state across devices via a private GitHub Gist

## How Sync Works

1. Both dashboards share **one private Gist** with two separate files:
   - `sc_dashboard_state.json` (business)
   - `ch_dashboard_state.json` (career)
2. Your PAT + Gist ID are stored in `localStorage` under `sc_gist_config`
3. Set it once per browser → both dashboards auto-connect
4. Changes sync on every save with a 2-second debounce

## Source of Truth

Edit dashboards directly in `C:\GitHub Local\command-center\`. Deploy with `/deploy-dashboard`.
