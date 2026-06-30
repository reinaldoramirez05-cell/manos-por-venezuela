# buscar.html — Build Spec for Claude Code

> Companion page to index.html (the donation/help hub). This is the "find a missing relative" page.
> Same visual system as index.html: deep night-blue (#1a2238), flag gold (#e8b23a), clay accent (#c1502e), bone background (#f6f1e7), Fraunces display + Inter body. Reuse the same header, footer, and card styling so the two pages feel like one site.

---

## ⛔ HARD RULES (do not violate — these are safety rules, not preferences)

1. **Store nothing. Collect nothing.** This page has no forms, no database, no backend. Every action is an outbound link to an external system. We never receive, hold, or transmit anyone's personal data. (This is the core safety guarantee. If a future feature would break it, stop and flag it.)
2. **Reality note appears BEFORE any list of search tools.** Nobody sees a search link before they see the expectation-setting note. This prevents false hope.
3. **Every tool is labeled by trust tier, visibly.** Verified (Red Cross/ICRC) and citizen-run (community sites) are never mixed without clear labels. A user must always know which kind they're using.
4. **Citizen sites get an explicit disclaimer on every card:** community-run, unverified, we don't control them, data is only as reliable as who submitted it.
5. **Never embed or iframe the external sites.** They have repeatedly crashed under traffic. Link out only. Each citizen card carries a quiet line: "If the site won't load, it's overwhelmed — try again later, it hasn't disappeared."
6. **No money flows here, and say so.** A reassurance line near the top: these search tools are free and never ask for payment. Anyone demanding money for information about a missing person is running a scam.
7. **Keep the honesty standard from index.html.** The page's credibility is that it tells people the truth other pages won't. When a tier is strained or a site is unverified, say so plainly.

---

## PAGE STRUCTURE (top to bottom)

### 1. Header
Reuse index.html header exactly. Active nav state on a "Buscar a un familiar" link. Keep a link back to the help/donation page.

### 2. Hero (calmer + smaller than the donation hero)
- Eyebrow: "Terremoto del 24 de junio · Búsqueda de personas"
- H1, gentle tone. Draft: "Buscar a un ser querido"
- Lede: acknowledge the fear, promise clarity. Draft: "Reunimos los canales reales para buscar y reportar personas tras el terremoto — los oficiales y los ciudadanos — y te explicamos cómo usar cada uno con seguridad."
- NO stat counters here. This is not the place for big numbers. Keep it human.

### 3. ⭐ Reality note (the most important block on the page)
A styled callout (use the clay-accent "truth banner" style from index.html). Plain Spanish, warm, honest. Must convey:
- Being listed as "desaparecido" very often just means **no phone signal**, not the worst. Comms across the country are down; tens of thousands of "missing" reports likely include people who are simply incommunicado, and some reports are duplicates.
- The rescue window: agencies treat the first 48–72 hours as most critical, but it can extend when people have access to air and water. (Frame as honest hope, not a countdown clock. Do NOT add a live timer — it would be cruel.)
- A breath: "Antes de buscar, respira. Aquí tienes cómo hacerlo bien."
- The money/scam reassurance line (Hard Rule 6) lives here or directly under this.

### 4. Verified tier — "Canales oficiales y verificados"
Section kicker in gold. Cards using the index.html card style, but tier-badged "Verificado" (gold filled dot). Cards:

**a) Cruz Roja / ICRC — Restoring Family Links**
- URL: https://familylinks.icrc.org/  (how-it-works: https://familylinks.icrc.org/how-it-works )
- The headline selling point: **free, and nothing you share is disclosed without your consent.** This is the key contrast with citizen sites — lead with it.
- Note it's the gold standard: staffed, with the Central Tracing Agency behind it.

**b) Cruz Roja Venezolana — tracing (búsqueda)**
- URL: https://familylinks.icrc.org/organization/venezuelan-red-cross
- In-country arm. Contact emails exist on that page for tracing requests.
- Honesty line: its HQ was itself damaged and volunteers are stretched — rigorous but strained.

**c) ⭐ Diaspora-specific: your LOCAL Red Cross**
- This is the highest-value action for users abroad. Red Cross societies in **Ecuador, Colombia, Mexico, Costa Rica, Honduras, and Argentina** have ALREADY activated family-links services for Venezuelans. Someone in Bogotá or Buenos Aires can contact their local Red Cross directly.
- Link to the RFL directory so they can find their country: https://familylinks.icrc.org/directory
- Frame: "¿Estás fuera de Venezuela? Empieza aquí."

### 5. Citizen tier — "Plataformas ciudadanas"
Section kicker. Intro sentence sets the frame honestly: fast, free, widely used by families inside Venezuela — but community-run and unverified, so use them with that in mind. Each card tier-badged "Ciudadana · sin verificar" (a half/hollow dot to distinguish from gold verified). Order matters — present in THIS order:

**a) Venezuela Te Busca** (venezuelatebusca.com) — listed FIRST because it's the most accountable.
- Has a named, public creator (digital entrepreneur Julia Alessandra Mariano, @juliaamariano) who has spoken to press on record.
- Is honest about its own limits — tells users it doesn't verify submissions and that data is the submitter's responsibility. (A citizen tool that admits it's unverified is safer to route to.)
- Lets you register a case, search existing reports, and mark someone found. Filter by name, age, location.

**b) Desaparecidos Terremoto Venezuela** (desaparecidosterremotovenezuela.com) — listed second.
- Highest traffic and most stable of the citizen tools; presents as a non-partisan citizen tool.
- BUT less transparent about who runs it — CNN tried to reach it and got no response and could not independently validate it. Say this plainly on the card.

Both cards must carry: the Hard Rule 5 "if it won't load, it's overwhelmed, not gone" line, and the Hard Rule 4 unverified disclaimer.

### 6. "Cómo buscar de forma segura" — checklist
Simple styled list (not cards). Drawn from guidance the platforms themselves give:
- **Busca antes de reportar** — revisa si ya existe un caso para no duplicar.
- **Aporta datos que sirven** — nombre completo, edad, rasgos distintivos, la ropa que llevaba, y sobre todo el último lugar conocido. Una foto reciente marca la diferencia.
- **Deja un contacto fiable** — es lo que permite verificar y avisarte si hay novedades.
- **Reporta en más de una plataforma, pero anota dónde** — para poder actualizar todas.
- **Avisa en cuanto la encuentres** — marcar a alguien como "localizado" libera a rescatistas y voluntarios.
- **Cuidado con las cifras virales** — los números cambian cada hora; cita siempre fecha y hora, o ve a la fuente en vivo.
- **Cuídate tú también** — apóyate en familiares, vecinos o líneas de apoyo psicológico. La espera agota.
- **Ojo a las estafas** — nadie legítimo te cobrará por información sobre un desaparecido.

### 7. Lightweight mention — social media / diaspora
One small block, not a card: search has also moved to Instagram/X. **Alianza por Venezuela** (migrant-led, Argentina) helps Venezuelans abroad reconnect. Keep this clearly "informal" — below the citizen tier in prominence.

### 8. (Investigate, optional) Venezuela Ayuda
A civil-society portal centralizing earthquake reports + aid (incl. infrastructure-damage reports). Verify scope before linking. May belong on the help page rather than here. Flagged for follow-up, not required for v1.

### 9. Footer
Reuse index.html footer. Same independent-initiative disclaimer + "last updated" date + sources. Add a cross-link: "¿Quieres ayudar de otra forma? → Donar y ayudar" pointing to index.html.

---

## TONE GUIDANCE
- This page will be read by people in real fear. Every line should reduce panic, not amplify it.
- No big red numbers, no countdown timers, no urgency theater.
- Spanish-first, warm, plain. Short sentences.
- When something is uncertain or unverified, saying so IS the reassurance — it tells the reader we're not hiding anything.

## VERIFICATION STATUS (for NOTES.md)
- ✅ familylinks.icrc.org — live, confirmed this response, free + consent-based
- ✅ Venezuelan Red Cross tracing page — live, has contact emails, HQ damaged/strained
- ✅ Local RC societies (EC, CO, MX, CR, HN, AR) — confirmed activated for Venezuelans
- ✅ Venezuela Te Busca — named creator, self-describes as unverified
- ✅ Desaparecidos Terremoto Venezuela — high traffic/stable, unverified, press couldn't reach operator
- ⚠️ Venezuela Ayuda — needs scope check before linking
- 🔻 ALL citizen sites have crashed under load — never embed, always link out
- 🔁 Re-verify all links before launch and periodically; crisis resources change fast
