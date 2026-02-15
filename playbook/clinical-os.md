# 🩺 BN-CDA: Clinical OS (v1.1)

**For:** Implementation Partners (JB Scott)
**Status:** Shared Operational Standards

## 🎯 The "Clinical OS" Standard

At the Black Nexus Clinical Development Agency, we don't just "write code"—we implement **Surgical Solutions**. Every task assigned via the Roadmap operates under the **Clinical OS** framework to ensure first-pass success.

---

## 🛠️ Phase 1: Standard Directives

### 1. The Mirror Test (Dashboard Build)

- **Directive:** Your private dashboard MUST mirror the architectural data structure of the [Command Center](file:///C:/GitHub%20Local/command-center/index.html). Use the existing `state.json` contract.
- **Troubleshoot:**
  - *Issue:* Gist sync failing on mobile.
  - *Resolution:* Verify the Gist ID has READ/WRITE permissions for your specific token. Check CORS headers if using a local dev server.
  - *Issue:* UI is "Vibe-heavy" but "Data-light".
  - *Resolution:* If a card doesn't have a linked JSON state or Log array, it's a "Ghost Card." Remove it.

### 2. Standard Library Hygiene

- **Directive:** Use ONLY vanilla CSS or approved design tokens. No ad-hoc libraries without Derek's audit.
- **Troubleshoot:**
  - *Issue:* Conflicting styles on multiple breakpoints.
  - *Resolution:* Follow the [Mobile First CSS Strategy](file:///C:/GitHub%20Local/command-center/playbook/design-tokens.md). Use CSS variables for all HSL values.

---

## 🔬 Clinical Troubleshooting (General Scenarios)

| Scenario | Diagnostic Trigger | Recovery Action |
|----------|-------------------|-----------------|
| **Path Drift** | Files created outside the [Playbook](file:///C:/GitHub%20Local/command-center/playbook/01-workspace.md) structure. | Immediately move to canonical path. Update all symlinks and README references. |
| **Context Leak** | Accidental reference to SC Private strategy in shared code. | **CRITICAL STOP.** 1. Identify the leak depth. 2. Scrub git history using `git-filter-repo`. 3. Force-push the sanitized main. 4. Notify Derek immediately for a security audit. |
| **Logic Bloat** | A function exceeding 40 lines without a sub-module. | Refactor into `utils/` or `services/`. Maintain the "Clinically Clean" state. |

- **Git Conflict** | Divergent main branch on shared repo. | **Do NOT force push.** Reach out to Darius (Ops Director) for a rebase sync under **Sprint Command** authority. |

---

## 🏁 The 10-Second Rule

If Justice cannot find your implementation, verify its status, and see the diagnostic output in **10 seconds or less**, the task is considered "Incomplete."

---
*Maintained by **Derek Simmons (Ops Supervisor)** for the **Sprint Command** | **General Advisory Panel** Audit Passed: Feb 14*
