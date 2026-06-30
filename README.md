# Manos por Venezuela 🇻🇪

Sitio web humanitario y **directorio de ayuda verificada** tras el terremoto del 24 de junio de 2026 en Venezuela. Conecta a las personas con centros de acopio, organizaciones de donación confiables, búsqueda de familiares y recursos comunitarios — en **español** e **inglés**.

> **No recaudamos dinero ni recogemos datos de nadie.** Solo reunimos y verificamos enlaces a quienes sí ayudan. Es un sitio estático: sin backend, sin base de datos, sin formularios que almacenen información.

## Estructura

| Archivo | Página |
|---|---|
| `index.html` | Inicio — hub de acción (empieza aquí) |
| `centros.html` | Centros de acopio (Caracas, La Guaira, El Junquito) |
| `buscar.html` | Buscar a un familiar |
| `donar.html` | Dónde donar — organizaciones verificadas |
| `cifras.js` | Datos compartidos de la emergencia (fuente única, bilingüe) |
| `en/` | Espejo en inglés de cada página |

Documentación interna y reglas de verificación: `NOTES.md`, `buscar-spec.md`, `centros-spec.md`.

## Ver en local

No requiere instalación. Desde la carpeta del proyecto:

```bash
python -m http.server 8765
```

Luego abre <http://localhost:8765/> (español) o <http://localhost:8765/en/> (inglés).

## Despliegue

Sitio estático — se publica tal cual, sin paso de build. Conectado a **Netlify** (despliegue automático en cada `push` a `main`). La raíz del repositorio es la raíz del sitio; ver `netlify.toml`.

## Principios

1. **Recolecta nada.** Ninguna función recibe, guarda ni transmite datos personales.
2. **Solo fuentes verificadas**, con su nivel de confianza visible (verificado / comunitario).
3. **Bilingüe**: todo cambio en una página en español debe replicarse en su gemela en `en/`.

---

*Una iniciativa independiente de la diáspora. Verifica siempre antes de donar o actuar.*
