/* ═══════════ CIFRAS · fuente única de la verdad (bilingüe) ═══════════
   Edita SOLO este archivo para actualizar las cifras de la emergencia. Lo usan:
     · index.html / en/index.html       → ticker animado            (n / t)
     · donar.html / en/donar.html       → hero + "cifras" / "figures" (n / l / hero / nota)
   Español = campos base (n, t, l, titulo, nota, actualizado).
   English = campos `_en` (n_en, t_en, l_en, titulo_en, nota_en, actualizado_en).
   El hero toma sus números de `grupos` por `ref`; en `l` puedes intercalar otra cifra con {id}. */
const cifras = {
  actualizado: "28 de junio de 2026",
  actualizado_en: "June 28, 2026",
  grupos: [
    { titulo:"Víctimas y desplazados", titulo_en:"Casualties & displaced", filas:[
      { id:"fallecidos",   n:"1.450",   n_en:"1,450",   t:"fallecidos",             t_en:"dead",                  l:"fallecidos confirmados",                                          l_en:"confirmed dead" },
      { id:"heridos",      n:"3.150",   n_en:"3,150",   t:"heridos",                t_en:"injured",               l:"personas heridas",                                                l_en:"people injured" },
      { id:"sinLocalizar", n:"+50.000", n_en:"50,000+", t:"sin localizar",          t_en:"unaccounted for",       l:"personas aún sin localizar",                                      l_en:"people still unaccounted for" },
      { id:"desplazados",  n:"12.721",  n_en:"12,721",  t:"desplazados",            t_en:"displaced",             l:"desplazados en refugios temporales",                              l_en:"displaced in temporary shelters" }
    ]},
    { titulo:"Daños a edificaciones", titulo_en:"Building damage", filas:[
      { id:"colapsados", n:"189",    n_en:"189",    t:"edificios colapsados",      t_en:"buildings collapsed",  l:"edificios colapsados por completo, en su mayoría multifamiliares", l_en:"buildings fully collapsed, mostly apartment blocks" },
      { id:"graves",     n:"585",    n_en:"585",    t:"con daño grave",            t_en:"severely damaged",     l:"con daño estructural grave",                                      l_en:"with severe structural damage" },
      { id:"infra",      n:"~1.423", n_en:"~1,423", t:"infraestructuras afectadas", t_en:"structures impacted", l:"infraestructuras afectadas: viviendas, hospitales y escuelas",     l_en:"structures impacted: homes, hospitals and schools" }
    ]},
    { titulo:"Niñez", titulo_en:"Children", filas:[
      { id:"ninosExpuestos", n:"3,9 M",   n_en:"3.9M",    t:"niños expuestos",     t_en:"children exposed",   l:"niños vivían en las zonas de sacudida severa",          l_en:"children lived in the severe-shaking zones" },
      { id:"ninosNecesidad", n:"680.000", n_en:"680,000", t:"niños en necesidad",  t_en:"children in need",   l:"niños necesitan ayuda y protección urgente (UNICEF)",   l_en:"children need urgent aid and protection (UNICEF)" }
    ]},
    { titulo:"Mascotas", titulo_en:"Pets", filas:[
      { id:"mascotas", n:"Miles",   n_en:"Thousands", t:"mascotas afectadas", t_en:"pets affected",     l:"mascotas y animales callejeros desplazados o atrapados",                                            l_en:"pets and street animals displaced or trapped" },
      { id:"caninas",  n:"Decenas", n_en:"Dozens",    t:"unidades caninas",   t_en:"K-9 search units",  l:'de unidades caninas de búsqueda activas entre los escombros. <a href="index.html#mascotas">Cómo ayudar →</a>', l_en:'K-9 search units active in the rubble. <a href="index.html#mascotas">How to help →</a>' }
    ]}
  ],
  hero: [
    { ref:"fallecidos",     l:"fallecidos confirmados; {heridos} heridos",            l_en:"confirmed dead; {heridos} injured" },
    { ref:"sinLocalizar",   l:"personas aún sin localizar (muchas, incomunicadas)",   l_en:"still unaccounted for (many simply out of contact)" },
    { ref:"ninosNecesidad", l:"niños necesitan ayuda urgente (UNICEF)",               l_en:"children need urgent aid (UNICEF)" }
  ],
  nota: "Varían según la fuente y la hora. Que más de 50.000 personas figuren como “sin localizar” no quiere decir 50.000 fallecidos: con las comunicaciones caídas, muchas simplemente están incomunicadas. En las ciudades costeras más golpeadas, hasta un tercio de las estructuras resultó dañado. Entre las víctimas hay niños, aunque todavía no se ha publicado un desglose oficial por edad.",
  nota_en: "These figures vary by source and by the hour. More than 50,000 people listed as “unaccounted for” does not mean 50,000 dead: with communications down, many are simply out of contact. In the hardest-hit coastal cities, up to a third of structures were damaged. Children are among the victims, though no official breakdown by age has been published yet."
};

const statById = (id) => {
  for (const g of cifras.grupos){ const f = g.filas.find(x => x.id === id); if (f) return f; }
  return { n:"", l:"" };
};
const fillCap = (s) => s.replace(/\{(\w+)\}/g, (_, id) => statById(id).n);

/* Language-aware view used by the English pages (lang:'en'); 'es' returns the base fields. */
function cifrasFor(lang){
  const en = lang === 'en';
  const pick = (o, k) => (en && o[k + '_en'] != null) ? o[k + '_en'] : o[k];
  const num  = (id) => pick(statById(id), 'n');
  const fill = (s) => s.replace(/\{(\w+)\}/g, (_, id) => num(id));
  return {
    actualizado: pick(cifras, 'actualizado'),
    grupos: cifras.grupos.map(g => ({
      titulo: pick(g, 'titulo'),
      filas:  g.filas.map(f => ({ n: pick(f, 'n'), t: pick(f, 't'), l: pick(f, 'l') }))
    })),
    hero: cifras.hero.map(h => ({ n: num(h.ref), l: fill(pick(h, 'l')) })),
    nota: pick(cifras, 'nota')
  };
}
