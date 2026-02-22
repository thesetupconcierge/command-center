# Branch Discipline Guide

**Last Updated:** February 11, 2026  
**Applies to:** All repos in the ecosystem

---

## Branch Strategy

```text
main ─── production-ready code (protected)
  └── dev ─── integration branch (daily work merges here)
        ├── feature/* ─── new capabilities
        ├── fix/* ─── bug fixes
        ├── experiment/* ─── exploratory (never merge without review)
        └── hotfix/* ─── emergency production fixes (branch from main)
```

## Rules

| Rule | Details |
| ---- | ------- |
| **Never commit directly to main** | Always merge via PR or reviewed merge |
| **Dev is the daily driver** | Work happens here or in feature branches off dev |
| **Feature branches are short-lived** | Merge back to dev within 1-3 days max |
| **Experiments stay isolated** | Don't merge experiments without explicit review |
| **Hotfixes branch from main** | Merge to main AND dev after fix |

## Naming Conventions

```text
feature/add-timeline-scrubber
feature/stripe-webhook-retry
fix/shot-save-race-condition
experiment/webgpu-rendering
hotfix/clerk-auth-crash
```

## Protection Rules (When Ready)

For repos with branch protection enabled:

- **main:** Require PR + 1 approval, no force push
- **dev:** Allow direct push (solo), require PR (team)
- **feature/*:** No restrictions

## Cost

**$0** — Git branches are free. GitHub branch protection is free on public repos, included in Pro/Team for private.

---

*Reference: Ecosystem Architecture Audit — Feb 11, 2026*
