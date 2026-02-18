# 04 — Git Strategy

> *Three repos, each with its own job. Local backups, cloud deploys.*

## The Repos

| Repo | Location | Remote? | Purpose |
|------|----------|---------|---------|
| **Business Ideas** | `C:\GitHub Local\Business Ideas\` | ❌ Local only | All business files — sensitive, never pushed |
| **Command Center** | `C:\GitHub Local\command-center\` | ✅ GitHub Pages | Dashboards — pushed to deploy |
| **Career Hub** | `C:\GitHub Local\Career Hub\` | ❌ Local only | Career-specific files |

## Why Local?

Business files contain client info, financials, strategy docs. They stay on your machine, versioned by Git for history, but never pushed remotely. The `.gitignore` excludes media, generated PDFs, and large binaries — source of truth is always the markdown.

## What Gets Pushed?

Only `command-center` → triggers GitHub Pages rebuild at:

- `thesetupconcierge.github.io/command-center/`
- `.../command-center/business/`
- `.../command-center/career/`

## Branching

Keep it simple: **everything on `main`**. No feature branches needed for a solo operation. Commit messages follow patterns:

- `checkpoint: morning Feb 11` — daily save from `/morning`
- `consolidate: end-of-day Feb 11` — wrap from `/consolidate`
- `[deploy] dashboard update 2026-02-11 15:57` — from `/deploy-dashboard`

## Snapshots

For before-big-changes safety, run `/snapshot` to create a timestamped copy in `.snapshots/`.
