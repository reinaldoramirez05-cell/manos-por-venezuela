# NOTES — Manos por Venezuela (hub)

Site structure (current):
- `index.html` — **action-first landing hub**: 3 primary actions + stats ticker + the categorized directory.
- `donar.html` — donation hub (verified orgs to donate to).
- `buscar.html` — find / report a missing relative.
- `centros.html` — physical collection centers + official accounts + Hogar Bambi.
- `cifras.js` — shared **bilingual** stats data (feeds the `index.html` ticker + the `donar.html` hero/section); English comes from the `*_en` fields, read via `cifrasFor('en')`.
- `en/` — English mirror of all four pages (`en/index.html`, `en/donar.html`, `en/buscar.html`, `en/centros.html`); Spanish stays at root. A header **ES / EN** toggle links each page to its counterpart.
- **Landing "Reportes en vivo" section** — link-out cards to live community platforms (Hazlo Hoy map · Puertas Abiertas housing). Pure outbound links, nothing stored. (An earlier team-confirmed ephemeral list + `reportes.js` were removed.)

**Type:** Newsreader (display serif) + Public Sans (body), set via one Google-Fonts `@import` +
quoted `'Newsreader'` / `'Public Sans'` in each page's CSS. Chosen to look distinct from the
**desaparecidos** citizen site, which uses the same **Fraunces + Inter** pairing the hub had before.
The colour palette (night / gold / clay / bone) was deliberately kept. A small header override
(`.brand`/`.nav` nowrap) keeps the nav on one line since Public Sans runs wider than Inter.

Notes below are ordered: buscar.html, then centros.html, then the landing hub.
(Heads-up: some earlier notes say "recursos.html" or call `index.html` the donation page — that was
before the landing swap. The hub was built as `recursos.html`, then promoted to `index.html`;
donations now live at `donar.html`.)

**Core safety guarantee (all pages):** they store nothing and collect nothing. No
forms, no inputs, no database, no backend, and no JavaScript. Every action is an
outbound link to an external system. If a future change would break that, **stop and
flag it** — it is the foundation of the hub's safety and credibility.

---

## ⛔ Hard rules (safety rules, not preferences)

These come straight from `buscar-spec.md`. Each must hold on every future edit.

| # | Hard rule | How `buscar.html` satisfies it | Status |
|---|-----------|--------------------------------|--------|
| 1 | **Store nothing, collect nothing.** No forms, DB, or backend; every action is an outbound link. | Zero `<form>`/`<input>`/`<script>`; no fetch/XHR/localStorage; static HTML only. All 6 links are `target="_blank" rel="noopener noreferrer"`. | ✅ |
| 2 | **Reality note appears BEFORE any list of search tools.** | The reality note (`#realidad`) sits between the hero and the first tier section; no tool/link list precedes it. | ✅ |
| 3 | **Every tool labeled by trust tier, visibly.** Verified vs. citizen never mixed without labels. | Tier legend before the cards + a tier badge on every card ("Verificado" gold dot / "Ciudadana · sin verificar" half-clay dot). | ✅ |
| 4 | **Citizen sites carry an explicit disclaimer on every card** (community-run, unverified, not controlled by us, data only as reliable as the submitter). | `.disc` block on both citizen cards: "Sin verificar: es comunitaria, no la controlamos, y los datos son tan fiables como quien los envió." | ✅ |
| 5 | **Never embed/iframe external sites; link out only.** Each citizen card carries the "it's overwhelmed, not gone" line. | No `<iframe>`/`<embed>`/`<object>` anywhere. Both citizen cards end with: "Si el sitio no carga, está saturado — vuelve a intentarlo más tarde. No ha desaparecido." | ✅ |
| 6 | **No money flows; say so.** Reassurance near the top: tools are free, never ask for payment; demanding money = scam. | Clay-accented scam line inside the reality note; reinforced by the "Ojo a las estafas" checklist item (clay `!` marker). | ✅ |
| 7 | **Keep index.html's honesty standard.** When a tier is strained or unverified, say so plainly. | Cruz Roja Venezolana flagged "riguroso, pero saturado"; Desaparecidos flagged "operador desconocido / CNN no pudo validarla"; citizen-tier intro states the limits up front. | ✅ |

---

## Build decisions & intentional deviations

- **No JavaScript at all.** Cards are static HTML (index.html renders them via JS). This
  is deliberate: it maximizes resilience on poor connections and makes the
  "collect nothing" guarantee self-evident. Shared CSS is copied verbatim so the two
  pages look like one site.
- **`rel="noopener noreferrer"` on every outbound link.** `noreferrer` is added (beyond
  index.html's `noopener`) so external sites don't receive a Referer revealing the user
  came from a missing-persons search page — consistent with the privacy ethos of Rule 1.
- **Verified-tier kicker uses a deeper gold** (`--gold-ink: #7a5c10`) instead of the bright
  flag-gold `#e8b23a`. Bright gold as small uppercase text on the bone background fails
  legibility/contrast. The deep gold still reads as gold and honors the spec's
  "section kicker in gold" intent while staying readable. (Citizen + guide kickers keep the
  default clay.)
- **Section 8 "Venezuela Ayuda" is intentionally omitted from v1.** Spec marks it
  investigate/optional and "needs scope check before linking." Linking an unverified,
  official-looking portal would risk Rule 7. Tracked below as pending.
- **Section 7 "Alianza por Venezuela" is an informal mention only — no hyperlink.** The spec
  gave no verified URL, so it is named (migrant-led, Argentina) and framed as informal,
  below the citizen tier. Needs a verified channel before any link is added.

---

## Verification status (from spec — re-verify before launch)

- ✅ **familylinks.icrc.org** — live, free + consent-based.
- ✅ **Venezuelan Red Cross tracing page** — live, has contact emails; HQ damaged / volunteers strained.
- ✅ **Local Red Cross societies (EC, CO, MX, CR, HN, AR)** — confirmed activated for Venezuelans.
- ✅ **Venezuela Te Busca** — named public creator; self-describes as unverified.
- ✅ **Desaparecidos Terremoto Venezuela** — high traffic / stable; unverified; press (CNN) could not reach the operator.
- ⚠️ **Venezuela Ayuda** — needs scope check before linking (omitted from v1; may belong on the help page instead).
- ⚠️ **Alianza por Venezuela** — informal mention only; needs a verified social/official channel before linking.
- 🔻 **All citizen sites have crashed under load** — never embed, always link out (Rule 5).
- 🔁 **Re-verify all links before launch and periodically** — crisis resources change fast.

### Live links used on the page (check each before launch)

| Card / element | URL |
|----------------|-----|
| Cruz Roja / ICRC — Restoring Family Links | https://familylinks.icrc.org/ |
| RFL — how it works | https://familylinks.icrc.org/how-it-works |
| Cruz Roja Venezolana — tracing | https://familylinks.icrc.org/organization/venezuelan-red-cross |
| Local Red Cross directory (diaspora) | https://familylinks.icrc.org/directory |
| Venezuela Te Busca | https://venezuelatebusca.com |
| Desaparecidos Terremoto Venezuela | https://desaparecidosterremotovenezuela.com |

---

## centros.html — collection centers, official accounts, Hogar Bambi

Inherits **all** the hard rules above. Added emphasis for this page: **lives depend on
accuracy.** A wrong address/phone/handle can send someone across a broken city or to an
impersonator. Anything from a single, unverified source ships with a visible
`⚑ Por confirmar` chip; donation-routing details (Zelle/address) and "official" handles
were checked against primary sources before publishing.

### Decisions applied (research → confirm step)
- **Two tiers** (#1): **Oficial** (gold dot — alcaldías, FANB/Gobernación, Cáritas, Cruz Roja) vs. **Comunitario · sin verificar** (half-clay — students, vecinos, parroquias).
- **Publish-with-flag** (#4): single-source hours/phones shown with `⚑ Por confirmar`.
- **La Carlota Air Base / Almacenadora Caracas omitted** (#3): bulk military logistics intake, not public drop-offs.
- **No JavaScript**; static HTML. Map links are Google Maps *search* URLs containing only public venue text — never user data (Rule 1 intact).

### Verification status (re-verify before launch — data changes hourly)
- ✅ **Caracas alcaldía centers** — Chacao, Baruta, Sucre, El Hatillo _[finanzasdigital 26-jun; eldiario 25-jun]_
- ⚑ **Cáritas / CEV Montalbán** phone (+58 212-443-3153) & hours (8:30–16:30) — single source, flagged _[corroborate with caritasvenezuela.org]_
- ✅ **Caracas comunitario** — FCU-UCV, Altamira, Club Hípico (Rotaract), parroquias _(tier = unverified by design)_ _[eldiario; ciudadccs]_
- ✅/⚑ **La Guaira — Complejo Polideportivo José María Vargas** confirmed; exact municipality/address/hours unpublished _[teleSUR 28-jun]_
- ⚑ **El Junquito** — UNES + Bomberos de Macarao (+ reported CDI, iglesia, jefatura, escuela); no addresses/hours published; state presence reported weak, supplies don't always reach La Toma/El Hondón _[diarioavance 28-jun; elnacional 27-jun]_
- ✅ **Official Instagram handles — verified vs. primary source:** @funvisis · @cruzrojave · @cicr_ve · @unicefvenezuela · @caritasdevzla (via caritasvenezuela.org) · @hogarbambi (via hogarbambi.org + eldiario)
- ✅ **Hogar Bambi** — Zelle admin@bambifoundation.org; drop-off Hogar Bambi 4, calle Oriente, casa N.º 13, San Bernardino; needs fórmula / leche en polvo / cunas portátiles / sábanas / toallas _[eldiario 27-jun; hogarbambi.org]_
- 🔁 Re-verify everything — crisis resources change by the hour.

### Hub wiring
- Added cross-links: "Centros" / "Buscar familiar" in `index.html` nav; "Centros de acopio" in `buscar.html` nav + footer.
- Fixed `index.html`'s stale "Próximamente · Buscar a un familiar" card (was `href="#"`) → now links `buscar.html`.

### Still open (would improve safety)
- Confirm Cáritas/CEV phone + hours; La Guaira municipality + street address; El Junquito exact points + addresses.
- Before relying on Hogar Bambi's Zelle, re-check it on @hogarbambi / hogarbambi.org.

---

## index.html — action-first landing hub + categorized directory

**The site's landing page** (title "Cómo ayudar"; this is now the root `index.html`). The logo on
every page points here. Its hero leads with the three primary actions — **Centros de acopio ·
Buscar a un familiar · Dónde donar** — followed by an animated **stats ticker** ("Balance 24-J")
rendered from `cifras.js`, then the category jump-bar and the directory. The donation hub moved to
`donar.html`. (Built as `recursos.html`, then promoted to the landing page.)

The user supplied the links and the categories; I cross-referenced each against its own
site/news before publishing, tiered them honestly, and put a visible caveat on anything
that didn't fully check out. Every external link is outbound-only with
`rel="noopener noreferrer"`; no JS.

### Verified / institutional
- **We Love Foundation** (welove.foundation) — US 501(c)(3), ex–I Love Venezuela; earthquake campaign.
- **Misiones Salesianas** (misionessalesianas.org) — registered NGO (R2800680G); Salesians in VZ since 1894.
- **International Medical Corps** — 501(c)(3) (EIN 95-3949646), in VZ since 2019; active quake response.
- **Hogar Bambi** — also on centros.html; children 0–18; @hogarbambi.
- **ASONACOP** — VZ Consejos de Protección network. *Institutional, not a direct donation channel* (said on card).

### ⚠️ Flagged but included (user-curated; visible caveat on the card)
- **Sun.Risas — Venezuela Earthquake Relief** (fundraise.sunrisas.org) — Doral FL; **no nonprofit registration/EIN shown.** Card says "verifica antes de donar."
- **The House Project** (thehouse-project.org) — multi-country, earthquake banner; **no formal NGO registration shown.** Mild caveat on card.
- **Alimenta la Solidaridad** (alimentalasolidaridad.org) — legitimate 501(c)(3) (EIN 83-3573144) **but announced an operations pause in May 2026** under VZ's NGO law. Card notes it; still accepts donations.

### Comunitario · sin verificar
- **Hazlo Hoy** (terremoto.hazlohoy.org) — honest citizen aggregator (maw.dev); explicitly not official. In the landing "Reportes en vivo" section.
- **Puertas Abiertas VZLA** (puertasabiertasvzla.org) — solidarity-housing community network (people offer temporary shelter to those who lost their homes). Citizen-run; in "Reportes en vivo" with a coordinate-safely caveat. _[verified live in-browser 30-Jun; not widely indexed]_
- **SismoAyuda VE** (sismoayudave.com) — volunteer engineers; preliminary remote assessment, *not* an official inspection (noted).
- **Pilar VZLA** (pilarvzla.com) — citizen structural self-triage (ATC-20 green/yellow/red; some cases reviewed by engineers); "preliminary, not an engineer's inspection" caveat. Engineering section. _[verified live in-browser 30-Jun; web fetch was bot-blocked]_
- **Mapa de Daños / terremotovenezuela.com** — operator unknown, no official affiliation (noted).
- **Desaparecidos Terremoto Venezuela** — also on buscar.html; unverified (press couldn't reach the operator).

### Mascotas (Instagram)
- **@perrosextremos** — documented K-9 rescue (Tsunami; 30+ located) _[Semana, Infobae, teleSUR]_.
- **@laikamascotas** — Laika's "Una garra por Venezuela" campaign; **Colombia-based, ran 25–30 Jun** (time-limited) _[Pulzo, El Tiempo, Infobae]_.

### Hub wiring
- Every page's logo + a nav item point to the landing hub (`index.html`); the hub links out to `centros.html`, `buscar.html`, `donar.html`. (The donation page's nav item to the hub still reads "Recursos" — relabel to "Inicio" if desired.)

---

## Maintenance checklist

- [ ] To change the emergency figures, edit ONLY `cifras.js` (the shared data file). It feeds `donar.html` (hero strip + "La emergencia en cifras" section) and `index.html` (the animated ticker). The hero pulls numbers from `grupos` by `ref`; the ticker uses the short `t` label — nothing is typed twice. Each figure has an English twin (`n_en`/`t_en`/`l_en`); the `en/` pages render via `cifrasFor('en')`.
- [ ] **Bilingual upkeep:** any copy edit on a root (ES) page must also be made on its `en/` counterpart — the two are separate files. The header **ES/EN** toggle on every page links to its sibling; if you add/rename a page, update both toggle targets.
- [x] ~~Swap the placeholder "suggest a resource" email before launch.~~ **PARKED 2026-06-30.** The CTA was removed from all 4 places it lived — landing hero (`index.html`, `en/index.html`) and donation-page footer (`donar.html`, `en/donar.html`) — to avoid shipping the dead `mailto:` placeholders. Each spot now has a `<!-- … restaurar desde NOTES.md -->` breadcrumb. **To restore:** build a free Google Form at **forms.new**, then re-add the CTA pointing to it with `target="_blank" rel="noopener noreferrer"`. Suggested form — Title: *"Recomienda un recurso confiable — Manos por Venezuela"*; fields: (1) Nombre del recurso ✱, (2) Tipo de ayuda [opción múltiple: Donaciones · Búsqueda de personas · Niños · Salud · Ingeniería · Mascotas · Alojamiento · Otro], (3) Enlace oficial ✱, (4) ¿Cómo verificarlo? [párrafo], (5) Tu contacto (opcional, no se publica). Settings: **collect email OFF**, **limit-to-1-response OFF**. Stays collect-nothing — submissions land in the maintainer's own Google account, never on the site.
- [ ] Periodically re-verify the citizen-platform links — especially the live-community ones (Hazlo Hoy, Puertas Abiertas) and the engineering tools (SismoAyuda VE, Pilar VZLA); they're small/new and can move or go down.
- [ ] Re-verify every link above before launch, then on a recurring basis.
- [ ] Confirm citizen-site disclaimers (Rule 4) and "overwhelmed, not gone" lines (Rule 5) are present on **every** citizen card if cards are added.
- [ ] Keep the reality note above all tool listings (Rule 2) and the money/scam line near the top (Rule 6).
- [ ] Resolve **Venezuela Ayuda** scope; decide help-page vs. search-page placement.
- [ ] Find a **verified** Alianza por Venezuela channel before linking it.
- [ ] Re-verify every `⚑ Por confirmar` item (Cáritas phone/hours, La Guaira municipality/address, El Junquito points/addresses) and promote or remove the flag.
- [ ] Re-confirm the 6 official Instagram handles still point to the genuine accounts (impersonation risk spikes after disasters).
- [ ] Keep La Carlota / Almacenadora **off** as public drop-offs (bulk military logistics).
- [ ] Re-check the two unregistered donation links (Sun.Risas, The House Project) — keep-with-flag or remove.
- [ ] Confirm **Alimenta la Solidaridad**'s operational status (paused May 2026) before relying on it.
- [ ] **@laikamascotas** campaign window was 25–30 Jun — refresh or remove once it closes.
- [ ] **Never** add a feature that receives, holds, or transmits anyone's personal data (Rule 1). If a request would, stop and flag it.

_Last updated: 28 June 2026._
