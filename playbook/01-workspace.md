# 01 — Workspace Layout

> *Think of it like a filing cabinet with labeled drawers. Everything has a home.*

## The Big Picture

All business files live under **one local Git repo**:

```
C:\GitHub Local\Business Ideas\
└── Setup Concierge\
    ├── Advisory Panel\    — AI panel members, consultations, action items
    ├── Black Nexus\       — Creative agency work (shared with JB)
    ├── Dashboard\         — Legacy (now in command-center repo)
    ├── Finances\          — Invoices (sent/received), expenses
    ├── Playbook\          — This manual you're reading
    ├── Resources\         — Walkthroughs, daily summaries, templates
    └── WNQ\               — Warriors Never Quit client work
```

## Other Key Locations

| What | Where |
|------|-------|
| Dashboards (source of truth) | `C:\GitHub Local\command-center\` |
| Career Hub | `command-center\career\index.html` |
| Business Dashboard | `command-center\business\index.html` |
| Agent Workflows | `C:\GitHub Local\.agent\workflows\` |
| Web Dev Projects | `Business Ideas\Web Development\` |
| Snapshots (backups) | `Business Ideas\.snapshots\` |

## Rules

- **No OneDrive.** Everything is local Git. Sync happens via Gist or GitHub Pages.
- **Markdown first.** Write in `.md`, preview with your reader. Export PDF only for formal submissions or signatures.
- **Flat is better than nested.** Don't bury files 5 folders deep.

## 🛡️ Path Isolation (The DMZ)

To prevent data leakage during collaboration, we maintain a hard boundary between **Private** and **Shared** files.

- **Private Strategic Lane:** `Business Ideas\Setup Concierge\Advisory Panel\Consultations\`. This folder is NEVER pushed to a remote organization.
- **Shared Operational Lane:** `command-center\`. This is the multi-remote repo for partner collaboration.
- **The Filter:** Any strategic finding must be "ejected" into a clinical requirement before being moved from the Private lane to the Shared lane.
