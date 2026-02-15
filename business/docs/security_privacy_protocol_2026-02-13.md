# Security & Privacy Protocol: BN-CDA

**Flag:** 🔴 [PRIVATE: SETUP CONCIERGE ONLY]

## 🛡️ 1. Path Isolation (The "DMZ")

The workspace is split into **Private (Strategic)** and **Shared (Tactical)** lanes.

| Repository | Scope | Remote | Security Level |
|------------|-------|--------|----------------|
| `Business Ideas` | Personal/Strategy | LOCAL ONLY | HIGH (Private) |
| `Career Hub` | Founder Career | LOCAL ONLY | HIGH (Private) |
| `antigravity` | AI Operations | LOCAL ONLY | HIGH (Private) |
| `command-center` | Agency Ops | **Shared Org** | MEDIUM (Shared) |

**Rule:** NEVER `git push` from `Business Ideas`, `Career Hub`, or `antigravity` to a public or shared remote.

---

## 🔍 2. Strategic Masking (Auto-Grep)

The `/consolidate` workflow now includes a **Strategic Leak Check**:

- Before `git push origin main` in `command-center`:
  - The system scans all staged changes for the tokens: `PRIVATE`, `SC ONLY`, `[CONFIDENTIAL]`.
  - If found: **SYNC ABORTED.**
  - Derek must review and mask before retry.

---

## 🔑 3. Credential Hygiene

- **Secrets:** No API keys, passwords, or Gist IDs are to be written in Markdown files.
- **Environment:** Use `.env` files (excluded by `.gitignore`) or OS environment variables.
- **Anti-Pattern:** Antigravity will block requests to "Document this API key in the strategy doc."

---

## 🏛️ 4. IP Access Control (The V8 Vault)

- **Shared Partner Access:** JB Scott has access to the `command-center` and the agency's implementation repositories.
- **Restricted Access:** No partner has access to the `v8engine` source code or the strategic consultation logs in `Advisory Panel/Consultations`.
- **Mirroring:** Deliverables from V8 are "ejected" as static files or compiled assets into the shared implementation lane.

---
*Maintained by Antigravity OS — Security Revision 1.0 (Feb 13, 2026)*
