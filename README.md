# Plantilla Ixbal · Spa

Plantilla para spas, centros de masajes, estéticas y consultorios de bienestar. Estilo **suave minimalista**: rosa empolvado y salvia, mucho espacio en blanco y títulos en serif fina (Cormorant Garamond).

**Incluye:** hero con foto panorámica y promoción de primera visita, tratamientos destacados con foto, carta completa con duración y precio, paquetes, "tu visita" paso a paso, equipo con retratos, opiniones, preguntas frecuentes, horario con indicador de “Abierto ahora”, tarjetas de regalo, mapa y datos estructurados de spa para Google.

## Uso

```bash
npm run dev     # servidor local en http://localhost:4321
npm run check   # valida el sitio (sin dependencias)
```

También puedes abrir `index.html` con cualquier servidor estático. No requiere compilación.

## Personalizar

1. **Identidad:** colores y tipografía en `assets/css/tokens.css`.
2. **Contenido:** textos, tratamientos, precios y paquetes en `index.html`, organizado por secciones.
3. **Imágenes:** la plantilla tiene 8 espacios de imagen listados en `imageSlots` de `template.json`, con fotos de ejemplo en `images/` generadas con IA (`gpt-image-2.5-sunburst`). Reemplázalas por fotos reales del negocio; ver [AGENTS.md](AGENTS.md#espacios-de-imagen).

Las reglas de arquitectura y la lista de datos que se repiten están en [AGENTS.md](AGENTS.md).

## Publicar

Es un sitio estático: sirve la raíz del repositorio en GitHub Pages, Netlify, Vercel o AWS Amplify.

> Antes de publicar, convierte `assets/img/og-image.svg` a PNG de 1200 × 630 y usa una URL absoluta en `og:image`: WhatsApp y Facebook no muestran vistas previas en SVG.
