# centros.html — Build & Verification Spec

> Third page of the hub (with `index.html` = donar, `buscar.html` = buscar familiar).
> This is the "where to physically take a donation" page: collection centers (centros de
> acopio) in **Caracas, La Guaira, and El Junquito**, plus official accounts to follow and
> the Hogar Bambi foundation.
> Same design system as the other pages. Inherits ALL of buscar.html's hard rules.

---

## ⛔ HARD RULES (inherited — do not violate)

1. **Store nothing, collect nothing.** No forms, DB, backend, or JS data collection. Every action is an outbound link. (Map links are outbound only; the address in a maps query is public venue data, never user data.)
2. **Expectation-setting note appears BEFORE any list of centers.** Here that note is "confirma antes de salir" + the scam/authorized warning.
3. **Every center labeled by trust tier, visibly** — Oficial (gold) vs. Comunitario · sin verificar (half-clay).
4. **Lives depend on accuracy. Publish nothing unverified without flagging it.** Any address/phone/hour from a single source carries a visible "⚑ Por confirmar" chip.
5. **Verify-before-you-go is mandatory copy.** Hours/addresses change hourly; the page must tell people to confirm the center is still open and still needs the item before traveling.
6. **Authorized centers + anti-scam.** Route donations only to authorized points; after a disaster fake centers/accounts appear; nobody legitimate charges to help. (Funvisis: "no te dejes engañar por fuentes no oficiales.")
7. **Honesty over optics.** Where the state response is thin (El Junquito) or a venue lacks published details, say so plainly.

---

## PAGE STRUCTURE
1. Header (reuse; active = "Centros de acopio"; links to buscar.html + index.html).
2. Hero (calm, no stat counters) + area chips (Caracas / La Guaira / El Junquito).
3. Reality note — "confirma antes de salir" + qué llevar + scam/authorized line.
4. Tier legend.
5. Caracas — Oficial (alcaldías + Cáritas/CEV) then Comunitario (UCV, Altamira, Club Hípico, parroquias).
6. La Guaira — Complejo Polideportivo José María Vargas (oficial).
7. El Junquito — authorized points + critical honesty caveat.
8. Hogar Bambi — featured foundation help block.
9. "Cómo donar bien" checklist.
10. Cuentas oficiales — verified Instagram accounts.
11. Footer (cross-links to index.html + buscar.html; sources; last updated).

---

## DATA (with source + confidence) — re-verify before launch

### Caracas — OFICIAL (alcaldías)
- **Chacao — Sede de Desarrollo Social.** Calle Los Ángeles, al lado del C.C. Sambil Chacao. Tel 0424-1285989 / 0424-2042253 / 0424-1268442. Recibe: agua, jugos, sábanas/cobijas limpias, protectores de colchón, enlatados. _[finanzasdigital 26-jun; eldiario 25-jun]_
- **Baruta — 4 puntos (24 h).** Plaza Alfredo Sadel (Las Mercedes) · PC Baruta (El Cafetal) · Comandancia PoliBaruta · Concha Acústica de Bello Monte. Tel 0212-9416277 / 0212-9432401 / 0412-3362122. Recibe: no perecederos, agua, insumos médicos, higiene. _[finanzasdigital 26-jun]_
- **Sucre — 2 puntos.** Coliseo de La Urbina (PoliSucre) · Plaza Millennium (Av. Rómulo Gallegos, Los Dos Caminos). Recibe: medicinas vigentes, cobijas, higiene, agua, víveres. _[finanzasdigital 26-jun]_
- **El Hatillo — 5 puntos.** Alcaldía (frente Plaza Bolívar) · PC El Hatillo · Redoma de La Lagunita · Av. Sur 2 (Los Naranjos) · El Cigarral. Pide: pañales, fórmulas, compotas, ropa limpia. _[finanzasdigital 26-jun]_

### Caracas — INSTITUCIONAL (Iglesia)
- **Cáritas / CEV — Montalbán.** Av. Teherán, 200 m de la UCAB, frente a Urb. Juan Pablo II (sede CEV). ⚑ Tel +58 212-443-3153 · 8:30–16:30 **POR CONFIRMAR** (una fuente). _[búsqueda; corroborar con caritasvenezuela.org]_

### Caracas — COMUNITARIO · sin verificar
- **FCU-UCV** — Edif. Federación de Centros Universitarios, Plaza del Rectorado, UCV (estudiantes). _[eldiario; ciudadccs]_
- **Altamira** — 4.ª avenida, entre 9.ª y 10.ª transversal (quinta El Bejucal). _[eldiario]_
- **Terrazas del Club Hípico** — Rotaract Caracas (Baruta). _[ciudadccs]_
- **Parroquias** — Iglesia La Paz (Montalbán I) · San Bernardino de Siena (San Bernardino) · Ntra. Sra. del Buen Consejo (Caricuao). _[eldiario; ciudadccs]_

### La Guaira — OFICIAL
- **Complejo Polideportivo José María Vargas** (municipio probable Catia La Mar — ⚑ por confirmar). Recibe: ropa, calzado, medicamentos esenciales, no perecederos. Operan FANB + Gobernación + Alcaldía. Dirección exacta/horario no publicados. _[teleSUR 28-jun]_

### El Junquito — AUTORIZADO (contexto crítico)
- **Puntos autorizados reportados:** UNES El Junquito · Estación de Bomberos (Macarao, acopio central, filas largas) · y, reportados sin detalle, CDI, iglesia, jefatura, escuela. ⚑ Sin direcciones/horarios/contactos publicados. _[diarioavance 28-jun; elnacional 27-jun]_
- **Caveat obligatorio:** presencia estatal reducida; los insumos no siempre llegan a La Toma, El Hondón ni más allá de la UNES. Lo más pedido: pañales, ropa de niños, higiene femenina.

### Cuentas oficiales (Instagram) — handles VERIFIED vs. primary source
- **@funvisis** — Funvisis · sismos/réplicas, fuente oficial. _[IG verificada, 435K; bio anti-fake]_
- **@cruzrojave** — Cruz Roja Venezolana · rescate/ayuda. _[IG verificada, 84K]_
- **@cicr_ve** — CICR Venezuela · búsqueda de familiares. _[IG verificada]_
- **@unicefvenezuela** — UNICEF Venezuela · niñez. _[IG verificada, 205K]_
- **@caritasdevzla** — Cáritas de Venezuela · ayuda/acopio. _[verificada vía caritasvenezuela.org]_
- **@hogarbambi** — Hogar Bambi · niñez en riesgo. _[verificada vía hogarbambi.org + eldiario]_

### Hogar Bambi (Fundación)
- Asociación civil sin fines de lucro; niños 0–18 separados de su familia (abandono, maltrato, abuso, pobreza extrema). Tras el terremoto activó refugio/atención a niños referidos por el Consejo de Protección y los que ya viven en sus hogares.
- **Llevar insumos:** Hogar Bambi 4, calle Oriente, casa N.º 13, San Bernardino (Caracas). Necesitan: fórmula infantil, leche en polvo, cunas portátiles (tipo Graco), sábanas, toallas.
- **Zelle (exterior):** admin@bambifoundation.org · **Info:** +58 414-3081107 · **Sede:** +58 212-550-5539 / 550-5714 · hogarbambi@hogarbambi.org
- **IG** @hogarbambi · **Web** hogarbambi.org · GlobalGiving. _[eldiario 27-jun; hogarbambi.org; local10]_

---

## TONE
Same as the other pages: Spanish-first, calm, plain, honest. The reassurance here is precision — telling people exactly what's confirmed and what isn't so they don't waste a dangerous trip across a broken city.

## SOURCES
eldiario.com · finanzasdigital.com · ciudadccs.info · telesurtv.net · diarioavance.com · elnacional.com · hogarbambi.org · caritasvenezuela.org · instagram.com (handle verification). All dated 24–28 June 2026 — **re-verify before launch and periodically.**
