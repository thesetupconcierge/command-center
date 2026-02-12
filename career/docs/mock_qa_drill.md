# Mock Q&A Drill — AbbVie Interview Simulation

> Practice round organized by interviewer. Read each question, pause, then deliver your answer aloud.
> ⏱️ Target: 60-90 seconds per answer. Time yourself.

---

## Round 1: John Walters — Associate Director, Hiring Manager

*John evaluates: project delivery, communication, documentation, team fit*

### Q1: "Walk me through your background and what brings you here today."

**Your Answer:**
> "I'm a critical environment and building automation professional with experience across data centers, hospitality, and facilities operations. Most relevantly, I spent time at CyrusOne's 2.1 million square-foot Chicago campus as a Siemens BAS console operator — running Apogee and Insight in production across 18 data halls. Before that, I was an L4 tech at Microsoft and worked in building engineering at the Palmer House Hilton. I'm drawn to this role because pharma controls engineering represents the highest-stakes application of BAS — you're not just protecting equipment, you're protecting human health. I want to bring my critical-environment discipline to that mission."

**Why this works:** Hits CyrusOne/Siemens first (your differentiator), shows trajectory, explains the "why pharma" pivot cleanly.

---

### Q2: "How do you handle documentation and change management?"

**Your Answer:**
> "At Microsoft, every task required a Method of Procedure — I wrote and reviewed MOPs daily. I maintained Corrigo ticketing with real-time updates, and at CyrusOne I used MCIM and Salesforce for work order tracking. I've had a 100% MOP compliance rate, and two of my templates were adopted as team standards. In a GxP environment like AbbVie, I know documentation isn't optional — it's how you prove regulatory compliance. I'm already wired to work that way."

**Why this works:** Directly addresses pharma compliance concern. Shows he won't need to train you on documentation discipline.

---

### Q3: "Why are you leaving your current role?"

**Your Answer:**
> "I've had a great experience at Microsoft, but the work is primarily reactive maintenance in a data center environment. I'm looking to move into controls engineering where I can apply my BAS knowledge more directly — troubleshooting, programming, and optimizing systems rather than just monitoring them. This role is the next logical step in my career trajectory toward becoming a full controls engineer."

**Why this works:** Frames the move as growth, not escape. Positions AbbVie as the upgrade.

---

## Round 2: Gino Pisano — HVAC Controls Software Developer

*Gino evaluates: Siemens platform familiarity, PPCL, BACnet protocols, troubleshooting approach*

### Q4: "What's your experience with Siemens building automation systems?"

**Your Answer:**
> "At CyrusOne, I was the console operator on both Siemens Apogee and Insight — monitoring and responding to alarms across a 2.1 million square-foot campus with 63 chillers, 48 AHUs, and 135 CRAHs. I navigated the graphics, interpreted trending data, and understood the sequence of operations for major equipment. I also worked with Delta Controls EnteliWEB and TAC/IA on the same campus, so I've developed the ability to context-switch across BAS platforms quickly."

**Why this works:** Concrete numbers prove real experience. Multi-platform mention shows breadth.

---

### Q5: "Have you done any PPCL programming?"

**Your Answer:**
> "I haven't written production PPCL code, but I've operated systems running PPCL sequences and I understand the logic structure — IF/THEN/ELSE conditional flows, DEFINE statements, point assignments, and how PPCL drives sequence of operations in Apogee. I've studied the syntax patterns, and I'm genuinely excited to go deeper. I know you're actively developing PPCL here, and honestly, learning from someone with your hands-on experience is one of the things that attracted me to this role."

**Why this works:** Honest about the gap but shows initiative and study. The compliment to Gino is genuine and strategic — positions you as a learner, not a threat.

---

### Q6: "How would you troubleshoot a VAV box not maintaining setpoint?"

**Your Answer:**
> "I'd start at the BAS — check if the controller is communicating, verify the setpoint and current reading, look at the damper position and command versus actual. If the controller looks good, I'd check the physical side — is the actuator responding? Is the damper stuck? Is there adequate airflow from the AHU upstream? I'd also check the reheat valve if it's a reheat VAV. If everything mechanical checks out, I'd look at the control sequence — is the PID loop oscillating? Is the dead band too tight? And I'd check trending data to see if this is a new issue or a pattern. Everything gets documented in the ticket."

**Why this works:** Shows systematic approach — digital to physical to logic. The documentation callout at the end reinforces compliance mindset.

---

### Q7: "What do you know about BACnet?"

**Your Answer:**
> "BACnet is the standard communication protocol for building automation. I understand the object model — analog inputs, analog outputs, binary values, multi-state values — and how devices communicate over BACnet/IP networks or BACnet MSTP for field-level devices. At CyrusOne I interacted with BACnet data through the Siemens front-end, viewing object properties and point values. I know BACnet is the backbone of how Siemens controllers communicate, and understanding the object types and their properties is fundamental to troubleshooting and programming."

**Why this works:** Shows working knowledge without overclaiming. References real experience using BACnet data through Siemens.

---

## Round 3: Michael Ester — 27-Year HVAC Controls Engineer

*Michael evaluates: respect, reliability, willingness to learn legacy systems, humility*

### Q8: "What appeals to you about controls engineering in a pharmaceutical environment?"

**Your Answer:**
> "In data centers, we protected equipment. In pharma, you're protecting processes that affect human health — the temperature precision for a drug manufacturing environment is a different level of consequence. I've worked in critical environments my entire career, but this is the most meaningful application of that discipline. I'm also drawn to the complexity — pharma facilities have layered validation requirements that make the controls work more technically challenging and more professionally rewarding."

**Why this works:** Shows maturity and genuine motivation. Acknowledges pharma is harder, which Michael will respect.

---

### Q9: "We have some legacy systems here that are older than you. How do you feel about working with older technology?"

**Your Answer:**
> "Some of the best engineering I've encountered has been in older systems. At the Palmer House Hilton — built in 1871, rebuilt in 1925 — I worked with pneumatic controls alongside newer DDC systems. I learned that legacy systems often have reliability and robustness that newer platforms can't match. My approach is always to learn the history first — understand why it was built that way before suggesting changes. I'd want to learn from your 27 years of experience with these systems before I ever presume to know better."

**Why this works:** Directly respects Michael's tenure. Shows humility. The Palmer House example proves comfort with old systems.

---

### Q10: "How do you handle situations where you don't know the answer?"

**Your Answer:**
> "I say 'I don't know, but here's how I'll find out.' At CyrusOne, when I encountered an unfamiliar alarm on the Delta Controls system, I didn't guess — I escalated appropriately, referenced the documentation, and then followed up by learning the system so I'd handle it independently next time. I built a cross-reference guide mapping alarm types across all four BAS platforms we ran. In controls engineering, guessing can cause equipment damage or safety issues, so I'm very comfortable saying 'let me verify before I act.'"

**Why this works:** Shows humility and safety consciousness. Michael will strongly value someone who doesn't freelance with equipment.

---

## Round 4: Closing Questions

### Q11: "Do you have any questions for us?"

**Pick 3-4 from this list:**

1. "What does a typical day or week look like in this role?"
2. "Is this primarily new construction, retrofit, or legacy migration work?"
3. "What version of Desigo CC is standardized, and is there legacy Insight infrastructure still running?"
4. "What does the training path look like for Siemens platforms?"
5. "How large is the controls engineering team on this account?"
6. "Is there potential for this role to convert to permanent?"
7. **Always end with:** *"What's the next step in the interview process?"*

---

## ⏱️ Drill Instructions

1. Set a timer. Read each question aloud.
2. Pause 3 seconds to "think" (like you would in a real interview).
3. Answer aloud. Aim for 60-90 seconds — no longer.
4. If you ramble, stop and restart with fewer words.
5. Focus on the **first sentence** — that's what they'll remember.
6. Run through all 11 questions twice. Second pass should be tighter.

> **Total drill time: ~30 minutes.** Worth every second.
