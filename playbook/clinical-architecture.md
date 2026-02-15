# DDIA Map: Clinical Data-Intensive Architecture

This document maps core concepts from Martin Kleppmann's *Designing Data-Intensive Applications* to the **Clinical Development Agency (CDA)** operational standards.

## 🩺 Reliability: Fault-Tolerant Operations
>
> *The system must work even when things go wrong.*

- **CDA Protocol**: **Surgical Sync (V8 Engine)**.
- **Implementation**: Every session ends with a "Push One, Push All" Git sweep combined with Gist-backed metadata.
- **Fault Tolerance**: If a local workspace is corrupted, the Gist ID acts as a "Secondary Snapshot" to restore the most critical task states and action items.

## 🏗️ Maintainability: The Blueprint Standard
>
> *Systems should be easy for people to work on in the future.*

- **CDA Protocol**: **Playbook-First Architecture**.
- **Implementation**: No workflow is "manual" more than 3 times; it must be codified in `.agent/workflows`.
- **Evolvability**: The Hub Launcher allows adding new Hubs (e.g., Finance Hub) without refactoring the core Master Hub logic.

## 📦 Partitioning: Hub Separation
>
> *Dividing a large dataset into smaller chunks.*

- **CDA Protocol**: **Strategic Lane Partitioning**.
- **Implementation**: The separation of `Business Hub` and `Career Hub` reduces the "Master State" JSON size and prevents context-leak (e.g., seeing private business task metrics while doing career interviews).

## 🪵 Change Data Capture: Captain’s Log
>
> *Capturing all changes to a database and following them.*

- **CDA Protocol**: **EOD Log Compaction (RayRay's Protocol)**.
- **Implementation**: We treat the Captain's Log as a stream of "Clinical Events". At the end of the day, `/consolidate` archives these events into permanent markdown files, effectively "checkpointing" the system state.

## 🔗 Consensus: Strategic Coherence
>
> *Getting multiple nodes to agree on a value.*

- **CDA Protocol**: **Sprint Command Consensus**.
- **Implementation**: The Advisory Panel review acts as the "Consensus Algorithm". Decisions aren't logged until the Panel (Mira, Darius, Derek) provides the "Consolidated Verdict," ensuring all strategic nodes are aligned.

---
**Reference**: Kleppmann, M. (2017). *Designing Data-Intensive Applications*. O'Reilly Media.
