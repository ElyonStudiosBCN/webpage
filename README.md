# 🎵 Elyon Studios – Web Oficial

## 🌐 Overview del Proyecto

**Elyon Studios** es la página web oficial de un estudio creativo de música con sede en Barcelona. Esta plataforma está diseñada para establecer una **presencia digital sólida**, captar nuevos clientes y mostrar el trabajo artístico y profesional del estudio. El sitio se construye con un enfoque **moderno, accesible y responsive**, ofreciendo una experiencia fluida tanto en ordenadores como en dispositivos móviles.

---

## 🧩 Tecnologías principales

- ⚛️ **React** con Vite para una experiencia de desarrollo rápida y moderna.
- 🔁 **React Router v6+** para una navegación fluida y declarativa.
- 🌍 **i18next** para traducción multilingüe (Español / Inglés).
- 🎨 **CSS Variables + Theming** para una paleta de colores configurable (modo claro/oscuro).
- 🧱 **Estructura modular** basada en componentes (`Layout`, `Navbar`, `Footer`, etc.).

---

## 🏗️ Estructura del Sitio

- `Home` – Página de inicio con presentación del estudio.
- `Servicios` – Detalle de servicios:  
  - Grabación / Producción  
  - Composición / Bandas Sonoras  
  - Piano / Vocal Coaching
- `Portfolio` – Muestras de trabajos organizadas por categoría:  
  - Cine, Videojuegos, Anuncios  
  - Jazz, Pop, Rock, Musicales...
- `Sobre mí` – Biografía del artista y visión del estudio.
- `Media` – Integración con plataformas: YouTube, Spotify, Instagram y Blog.
- `Contacto` – Formulario, email, teléfono y Google Maps.

---

## ✨ Características destacadas

- 🌙 **Modo Claro/Oscuro** con paleta de colores centralizada.
- 🌐 **Soporte multilenguaje** con cambio dinámico (español / inglés).
- 📱 **Diseño completamente responsive**.
- 🧠 Preparado para **SEO on-page** (etapa 3).
- 🔧 Enfocado en **modularidad, escalabilidad y mantenibilidad**.

---

## 🚀 Próximas etapas

1. Finalización del diseño responsive y el footer.
2. Consolidación de la paleta de colores y theming.
3. Integración completa de i18n en todo el sitio.
4. Optimización SEO, performance y accesibilidad (a11y).
5. Despliegue en Vercel o Netlify.

---

## Roadmap

### 🟢 Etapa 1 – Inicialización del Proyecto ✅

- [x] Crear proyecto Vite con plantilla React  
- [x] Configurar estructura de carpetas (`src/pages`, `src/components`)  
- [x] Instalar `react-router-dom`  
- [x] Crear rutas y sistema de Layout común (`Navbar`, `Layout`)  
- [x] Validar que la navegación funcione correctamente  

---

### 🎨 Etapa 2 – Diseño Base y Sistema Visual

- [x] Definir paleta de colores con CSS Variables en `theme.css`  
- [x] Añadir tipografías profesionales desde Google Fonts  
- [x] Crear estilos globales (`index.css`) y contenedores reutilizables  
- [x] Implementar componente `Footer` común a todas las páginas  
- [x] Integrar la paleta en todos los componentes base (Navbar, Layout, Footer)  

---

### 🌐 Etapa 3 – Desarrollo de Páginas

- [ ] **Home:** Introducción clara, llamada a la acción, resumen de servicios  
- [ ] **Servicios:** Descripción detallada de servicios (grabación, composición, coaching)  
- [ ] **Portfolio:** Galería organizada por categorías (BSO, grabación, géneros musicales)  
- [ ] **Sobre mí:** Biografía, experiencia, foto, visión artística  
- [ ] **Media:** Integración de YouTube, Spotify, blog, Instagram  
- [ ] **Contacto:** Formulario funcional, datos de contacto, mapa Google  

---

### ⚙️ Etapa 4 – Funcionalidades y Optimización

- [ ] Añadir animaciones de entrada con `framer-motion` o CSS  
- [ ] Implementar formulario funcional (EmailJS, Netlify Forms o backend propio)  
- [ ] Añadir modo oscuro con CSS variables  
- [ ] Adaptación responsive y mobile-first  
- [ ] Añadir SEO básico con React Helmet (títulos, meta tags dinámicos)  
- [ ] Mejorar accesibilidad según WCAG 2.1  

---

### 🚀 Etapa 5 – Publicación y Mantenimiento

- [ ] Optimizar imágenes y recursos para velocidad  
- [ ] Auditoría SEO avanzada:  
  - Etiquetas `<title>` y meta descripción únicas  
  - Open Graph para redes sociales  
  - Crear y subir `robots.txt` y `sitemap.xml`  
  - Configurar Google Search Console y Google Analytics  
- [ ] Pruebas cross-browser y responsive  
- [ ] Publicar en GitHub Pages, Vercel o Netlify  
- [ ] Configurar URLs amigables y redirecciones si es necesario  
- [ ] Planificar mantenimiento y futuras mejoras  

---

💡 Proyecto en desarrollo por **Elyon Studios BCN**


## 🎨 Guia práctica para variables de colores

| Variable                 | Usage Description                                       | Example Usage                                   |
|--------------------------|----------------------------------------------------------|--------------------------------------------------|
| `--color-bg`             | Main background color of the page                        | `body`, main layout background                   |
| `--color-bg-soft`        | Section background, light variant                        | Alternating `<section>` backgrounds              |
| `--color-surface`        | Elevated surface elements                                | Cards, modals, containers                        |
| `--color-text`           | Main readable text color                                 | Paragraphs, titles                               |
| `--color-muted`          | Secondary/de-emphasized text                             | Captions, timestamps                             |
| `--color-primary`        | Brand accent color (gold)                                | Buttons, highlights, logo elements               |
| `--color-primary-hover`  | Hover state of primary color                             | Buttons, links on hover                          |
| `--color-primary-light`  | Light variant of brand color                             | Card hovers, active tags                         |
| `--color-accent`         | Secondary accent (optional)                              | Icons, pills, tags                               |
| `--color-accent-hover`   | Accent hover state                                       | Hover buttons or badges                          |
| `--color-success`        | Positive feedback or status                              | Form success, green badges                       |
| `--color-warning`        | Warnings and alerts                                      | Field warnings, toasts                           |
| `--color-error`          | Errors and destructive actions                           | Error banners, inputs                            |
| `--color-border`         | Neutral borders and separators                           | Inputs, cards, nav dividers                      |
| `--color-shadow`         | Shadow for depth/elevation                               | Cards, modals, floating buttons                  |
| `--color-link`           | Link text color                                          | Inline links, underlined navigation              |
| `--color-link-hover`     | Hover state of link color                                | Highlighted text links                           |
| `--button-bg`            | Default button background                                | Primary and secondary buttons                    |
| `--button-hover`         | Button background on hover                               | Hover effect for CTA buttons                     |
| `--button-text`          | Text color inside buttons                                | Depends on background contrast                   |
| `--color-footer-bg`      | Footer background color                                  | Footer layout background                         |
| `--color-navbar-bg`      | Navbar background color                                  | Top navigation bar                               |

