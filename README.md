# Servi Land Rover

Sitio web para **Servi Land Rover** construido con **React + Vite**.

El proyecto está organizado como una **SPA (Single Page Application)**: el navegador carga una sola vez y React renderiza cada sección (Header/Hero/About/Services/Gallery/Testimonials/CTA/Footer).

---

## Tecnologías usadas

- **React** (v19)
  - Componentes reutilizables para armar las secciones del sitio.
- **React Router**
  - *(Si usas rutas en el futuro; actualmente el render es directo en App.jsx)*
- **Vite**
  - Bundler para desarrollo y build de producción.
- **@vitejs/plugin-react**
  - Soporte del plugin oficial para React en Vite.
- **React Icons** (`react-icons`)
  - Íconos para UI.
- **React Responsive Carousel** (`react-responsive-carousel`)
  - Carruseles (por ejemplo, en la galería/testimonios si aplica).
- **styled-components**
  - Estilos por componente (CSS-in-JS).
- **Floating WhatsApp**
  - Componente para mostrar el acceso rápido a WhatsApp.

---

## React Compiler (optimización)

En `vite.config.js` se activa el **React Compiler** de la configuración del plugin de React.

Este modo permite que el compilador de React genere optimizaciones a partir del código (mejoras de rendimiento y optimización del trabajo interno del reconciliador).

> Nota: puede afectar el rendimiento de build (aunque suele optimizar la ejecución).

---

## Scripts

En `package.json`:</n
- `npm run dev` → ejecuta el servidor de desarrollo con Vite.
- `npm run build` → genera la versión optimizada para producción en `dist/`.
- `npm run lint` → corre ESLint.
- `npm run preview` → previsualiza el build de producción.

---

## Estructura del proyecto

- `src/main.jsx`
  - Punto de entrada: monta la app en `#root`.
- `src/App.jsx`
  - Ensambla las secciones principales del sitio.
- `src/components/*`
  - Componentes de UI (Hero, Header, Gallery, etc.).

---

## Despliegue

Normalmente se despliega en **Vercel** usando:

- `Install command`: `npm install`
- `Build command`: `npm run build`

---

Si necesitas que este README incluya una captura del sitio, el link de Vercel o el checklist de despliegue (env vars), puedo actualizarlo.
