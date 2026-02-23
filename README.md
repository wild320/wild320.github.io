# Wild Jaramillo - Portafolio & Tech Blog 🚀

![Wild Jaramillo Portfolio Preview](./assets/img/wild-logo.png)

Este repositorio contiene el código fuente de mi **Portafolio Personal y Blog de Tecnología**, diseñado y construido para mostrar mis proyectos, perfil profesional y publicar artículos sobre innovación web. El proyecto está pensado para ser alojado directamente en **GitHub Pages**.

🌐 **Vista en vivo:** [https://wild320.github.io](https://wild320.github.io)

## ✨ Características de este Proyecto

- **Modo Oscuro / Claro Automático:** Interfaz que se adapta de manera dinámica y nativa (mediante CSS Media Queries `prefers-color-scheme`) según las preferencias de lectura del sistema operativo o navegador de cada visitante.
- **Glassmorphism y UI Moderna:** Implementación de estilos modernos, transparencias, sombras y gradientes dinámicos tipo Sci-Fi Dark Mode sin depender de librerías externas.
- **Arquitectura SPA (Single Page Application) sin Frameworks:** Usando _Vanilla JavaScript_ moderno para renderizar y navegar por los artículos del blog a través de un simple almacenamiento JSON base (`blogData.js`), simulando el comportamiento avanzado de frameworks modernos pero con un rendimiento ultraligero y de forma 100% estática.
- **Diseño Responsive:** Layouts fluidos usando metodologías `Grid` y `Flexbox` diseñados `mobile-first` que se auto-ajustan perfectamente en pantallas y dispositivos de cualquier tamaño (smartphones, tablets, escritorio).
- **Redes Sociales Dinámicas y WhatsApp:** Accesos eficientes y optimizados, implementando logos SVG inyectados y coloreados vía CSS filters y un botón flotante dinámico de WhatsApp.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue desarrollado íntegramente con tecnologías bases, destacando un pleno entendimiento de los pilares de la web, priorizando la mínima fricción y el mejor performance posible:

- **HTML5:** Marcado semántico y accesible. Etiqueta `<picture>` para cambios dinámicos de imágenes y Assets según el tema seleccionado.
- **CSS3:** Variables nativas (`:root`), Grid Layout, Flexbox, animaciones `@keyframes`, Media Queries avanzados y efecto Glassmorphism.
- **JavaScript (ES6+):** Utilizado para implementar lógica de frontend puro y crear la carga dinámica del blog mediante parámetros en rutas del navegador.
- **GitHub Pages:** Para Integración y Despliegue Continuo (CI/CD) automáticos y Hosting gratuito y rápido de repositorios.

## 📁 Estructura del Proyecto

```text
wild320.github.io/
|-- assets/
|   |-- icon/          # Archivos SVG de las redes sociales
|   |-- img/           # Imágenes y logos del portafolio (wild-logo, fotos de perfil, etc.)
|-- js/
|   |-- app.js         # Lógica central en JS para renderizar la interfaz de los blogs de manera dinámica
|   |-- blogData.js    # Data local simulando una Base de Datos NoSQL con la info de cada artículo
|-- index.html         # Pantalla principal (Hero, presentación corta)
|-- profile.html       # Sección "Sobre mí" y lista de Proyectos
|-- blogs.html         # Lista principal renderizada con las Miniaturas de cada Post
|-- article.html       # Molde de artículo único que usa Vanilla JS SPA para cargar contenido
|-- styles.css         # Hoja de estilos principal (paleta de colores, animaciones, core UI)
|-- mobile.css         # Hoja de estilos con Media Queries dedicada a dispositivos móviles
`-- README.md          # Este archivo de documentación
```

## 🚀 Instalación y uso local

No requiere la instalación de librerías pesadas (ej: NPM, Node, Webpack).

1. Clona el repositorio:
   ```bash
   git clone https://github.com/wild320/wild320.github.io.git
   ```
2. Accede a la carpeta generada.
3. Puedes utilizar la extensión **Live Server** de VSCode (o abrir `index.html` en tu navegador) para previsualizar y desarrollar localmente.

## 🤝 Contribuciones y Contacto

Siéntete libre de clonar y forcar este repositorio para investigar cómo lograr una web moderna puramente en tecnologías web sin usar un entorno JS empaquetado y pesado.

Puedes contactarme a través de:

- [LinkedIn Profile](https://www.linkedin.com/in/wild320/)
- [GitHub Network](https://github.com/wild320)

---

_Diseñado y desarrollado en 2026. Wild Jaramillo._
