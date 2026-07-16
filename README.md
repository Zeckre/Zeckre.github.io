# CodeNexo - Landing Page

Landing page para CodeNexo, agencia de desarrollo móvil y eCommerce.

## Estructura del Proyecto

```
proyecto/
├── index.html          # HTML principal
├── css/
│   └── styles.css      # Estilos custom (glass-panel, text-gradient, smooth-scroll)
├── js/
│   └── main.js         # JavaScript (menú móvil, formulario, smooth scroll)
├── assets/
│   ├── images/         # Imágenes del proyecto (logo, hero mockup)
│   └── icons/          # Iconos (reserved)
└── README.md           # Este archivo
```

## Tecnologías

- **HTML5** - Estructura semántica
- **Tailwind CSS** (vía CDN) - Utility-first CSS framework
- **JavaScript** vanilla - Sin dependencias
- **Google Fonts** - Inter, JetBrains Mono, Material Symbols

## Cómo Abrir

### Opción 1: Servidor local (recomendado)

```bash
# Python 3
python3 -m http.server 8000

# Node.js (si tienes http-server instalado)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

### Opción 2: Directamente en el navegador

Abre `index.html` directamente. Nota: algunas funciones pueden no funcionar correctamente por restricciones de seguridad del navegador con archivos `file://`.

## Archivos Importantes

- `index.html` - Página principal con Tailwind config y estructura HTML
- `css/styles.css` - Estilos custom que complementan Tailwind
- `js/main.js` - Interactividad (menú móvil, validación de formulario)

## Personalización

### Colores

Los colores se definen en el objeto `tailwind.config` dentro de `index.html`. Sigue el sistema de diseño Material Design 3.

### Fuentes

- **Geist** - Headlines y display text
- **Inter** - Body text
- **JetBrains Mono** - Labels y código

### Contenido

Edita directamente el HTML en `index.html`. Las secciones están claramente comentadas.

## Notas

- Las imágenes están alojadas localmente en `assets/images/`
- El proyecto usa Tailwind CSS vía CDN (requiere conexión a internet)
- El formulario de contacto es funcional pero no envía datos a un servidor
