# Commit Convention Guide

**Last Updated:** February 11, 2026  
**Style:** Logbook (surgical, readable, auditable)

---

## Format

```text
[area] verb: concise description

Optional body with context (why, not what)
```

## Area Tags

| Tag | When to use |
| --- | ----------- |
| `[v8]` | V8 Engine core changes |
| `[ui]` | Frontend / UI changes |
| `[api]` | Backend / Express route changes |
| `[auth]` | Clerk / authentication changes |
| `[data]` | Supabase / IndexedDB / state changes |
| `[deploy]` | Cloud Run / Docker / CI changes |
| `[docs]` | Documentation only |
| `[dash]` | Dashboard changes |
| `[web]` | Client website work |
| `[ops]` | Workflows, scripts, tooling |
| `[fix]` | Bug fixes |
| `[chore]` | Maintenance, cleanup, deps |

## Examples

```text
[v8] add: timeline scrubber with frame-level precision
[fix] resolve: shot save race condition on rapid edits
[data] migrate: project schema to v3 with shot arrays
[deploy] config: add health check endpoint for Cloud Run
[docs] update: ecosystem map with mobile dev assessment
[dash] add: architecture task section with 12 items
[chore] cleanup: remove dead imports from storageService
```

## Rules

| Rule | Why |
| ---- | --- |
| **One commit = one logical change** | Easier to revert, easier to review |
| **Present tense verbs** | "add" not "added", "fix" not "fixed" |
| **No vague messages** | Never use "update", "fix stuff", "wip" |
| **Reference issue IDs if applicable** | `[fix] resolve: login crash (#42)` |
| **Keep subject under 72 characters** | Fits in git log columns |

## Anti-Patterns

```text
❌ "update"
❌ "fix stuff"  
❌ "wip"
❌ "asdfasdf"
❌ "minor changes"
❌ "test" (unless actually adding tests)
```

## Cost

**$0** — It's just a naming convention.

---

*Reference: Ecosystem Architecture Audit — Feb 11, 2026*
