# Guía para agentes de IA

Este sitio es una plantilla de Ixbal: HTML, CSS y JavaScript sin dependencias ni paso de compilación. Lo que ves en `index.html` es exactamente lo que se publica.

## Reglas

- **No agregues frameworks, bundlers ni dependencias de npm.** El entorno no ejecuta `npm install`.
- **Valida siempre** con `npm run check` después de cada cambio. Debe terminar en `✓`.
- **Colores, tipografía y espacios solo en `assets/css/tokens.css`.** Los títulos usan `--font-display` y el texto `--font-sans`. No escribas colores hexadecimales fuera de ese archivo; usa `var(--color-…)`.
- **Un archivo CSS por componente o sección.** Si creas uno nuevo, impórtalo en `assets/css/main.css` dentro de su capa (`components` o `sections`).
- **Clases con convención BEM:** `bloque__elemento--modificador` (por ejemplo `service-card__title`, `button--primary`).
- **JavaScript en módulos** dentro de `assets/js/modules/`, registrados en `assets/js/main.js`. Los módulos localizan elementos con atributos `data-*` y no fallan si no los encuentran.
- **Íconos** en el sprite `assets/img/icons.svg`; agrega un `<symbol id="…">` y úsalo con `<use href="assets/img/icons.svg#…">`.
- **WhatsApp, teléfono y correo de contacto los administra Ixbal** ("Tu negocio"). No los escribas ni los cambies en el HTML: si la persona pide cambiarlos, usa la herramienta `actualizar_datos_negocio`. Cada liga lleva `data-contact="whatsapp"`, `"phone"` o `"email"`; ponlo también en las ligas nuevas.

## Datos que se repiten

Cuando cambies uno de estos datos, cámbialo en **todos** sus lugares:

| Dato | Dónde aparece |
|---|---|
| Nombre del negocio | `<title>`, `og:title`, `.brand__name`, `aria-label` del logo, JSON-LD, pie de página, `alt` de imágenes |
| WhatsApp | Todos los enlaces con `data-contact="whatsapp"` (formato `https://wa.me/52XXXXXXXXXX`) |
| Teléfono | Enlaces con `data-contact="phone"` (formato `tel:+52XXXXXXXXXX`) y `telephone` del JSON-LD |
| Dirección | Sección `#visitanos`, `src` del mapa y `address` del JSON-LD |
| Horario | Tabla `[data-hours]` en `#visitanos` (atributos `data-days`, `data-open`, `data-close`) y `openingHoursSpecification` del JSON-LD |
| Color principal | `--color-primary` en `tokens.css`, `theme-color`, `logo.svg`, `favicon.svg`, `og-image.svg`, `placeholder.svg` |
| Precio de un tratamiento | Tarjeta destacada en `#tratamientos`, su renglón en `.treatment-menu` y los paquetes que lo incluyan |
| Promoción de primera visita | `.hero__note` y la pregunta frecuente si la mencionas |

`npm run check` detecta WhatsApp o teléfonos distintos entre sí, archivos que no existen, anclas rotas, imágenes sin `alt` y JSON-LD inválido.

## Espacios de imagen

Cada foto del sitio vive en un espacio declarado en `template.json` → `imageSlots`:

```html
<figure class="media media--square" data-slot="galeria-1" data-placeholder data-hint="Foto del local · 1:1">
  <img src="assets/img/placeholder.svg" alt="Descripción de la foto" width="1200" height="1200" loading="lazy">
</figure>
```

Para poner una foto real en un espacio:

1. Cambia el `src` del `<img>` por la ruta de la foto. Las fotos que se suben desde Ixbal llegan a `images/` (por ejemplo `images/fachada.jpg`); usa esa ruta tal cual, sin mover ni renombrar el archivo.
2. Escribe un `alt` que describa la foto real y actualiza `width` y `height` con sus medidas.
3. Borra `data-placeholder` y `data-hint` del `<figure>`. Así desaparece la etiqueta de relleno.
4. No cambies la clase `media--…` ni el `data-slot`: CSS recorta la foto a la proporción del espacio.

Las fotos de `images/` que trae la plantilla son de ejemplo (generadas con IA para Jacaranda Spa): reemplázalas por las del negocio real siguiendo los mismos pasos, y borra del repositorio las de ejemplo que ya no se usen.

Si la persona sube varias fotos sin decir dónde van, asígnalas según la `label` de cada espacio en `imageSlots`. `npm run check` dice cuántos espacios siguen con imagen de relleno.

## Estructura

```
index.html                 Página única, dividida en secciones con comentarios ============
assets/css/main.css        Orden de capas e imports
assets/css/tokens.css      Identidad visual (edita aquí primero)
assets/css/base.css        Reset y elementos HTML
assets/css/layout.css      Contenedores, secciones, rejillas
assets/css/components/     Piezas reutilizables (botón, tarjeta, encabezado…)
assets/css/sections/       Estilos propios de cada sección de la página
assets/css/utilities.css   Clases de una sola responsabilidad
assets/js/main.js          Registra los módulos
assets/js/modules/         Comportamiento (menú de navegación, horario, año)
assets/img/                Logo, íconos e imágenes de relleno
images/                    Fotos que sube la persona desde Ixbal (se crea al subir la primera)
template.json              Metadatos para la galería de plantillas de Ixbal
scripts/check.mjs          Validador sin dependencias
```

## Tareas comunes

- **Agregar un tratamiento a la carta:** copia un `<li class="treatment-list__item">` dentro de su categoría en `.treatment-menu`.
- **Destacar un tratamiento:** copia un `<li class="featured-treatment">` completo con un `data-slot` nuevo y agrégalo a `imageSlots`.
- **Agregar a alguien al equipo:** copia un `<li class="team-member">` con un `data-slot` nuevo (`equipo-4`…) y agrégalo a `imageSlots`.
- **Cambiar el paquete destacado:** mueve la clase `package--featured` y el `<span class="package__badge">` a otra tarjeta.
- **Quitar una sección:** borra el `<section>` completo y su enlace en `.site-nav__list`.
- **Nueva sección:** crea el `<section class="section" id="…">`, su archivo en `assets/css/sections/`, impórtalo en `main.css` y agrega el enlace al menú.
- **Cambiar fotos:** sigue los pasos de "Espacios de imagen".
- **Nuevo espacio de imagen:** agrega el `<figure class="media" data-slot="…">` y su entrada en `imageSlots` de `template.json`.
