# DolarLive

## Introducción

DolarLive es una extensión para navegadores basados en Chromium, diseñada específicamente para Argentina. Esta extensión proporciona valores actualizados de diferentes tipos de cambio del dólar utilizando la [API de DolarApi](https://dolarapi.com/docs/), datos de inflación y tasas de plazo fijo desde [ArgentinaDatos](https://argentinadatos.com/), permitiendo a los usuarios obtener cotizaciones del dólar oficial, dólar blue, dólar tarjeta, entre otros, junto con información financiera relevante.

Desarrollada con React y TypeScript, DolarLive emplea [CRXJS](https://github.com/crxjs/chrome-extension-tools) para su estructura y se beneficia de librerías como shadcn/ui, Recharts y Framer Motion para ofrecer una experiencia de usuario moderna con gráficos interactivos y animaciones fluidas.

## Características Principales

- **Cotizaciones en Tiempo Real**: Accede a las últimas cotizaciones del dólar en Argentina (Blue, Oficial, Tarjeta, MEP, CCL, Cripto, Mayorista, Bolsa).
- **Calculadora de Conversión**: Calcula el equivalente en pesos de diferentes tipos de dólares y viceversa.
- **Inflación**: Visualiza la evolución de la inflación mensual e interanual con gráficos interactivos.
- **Tasas de Plazo Fijo**: Consulta las mejores tasas TNA de los principales bancos argentinos.
- **Históricos**: Compara la evolución del dólar Blue vs Oficial con selectores de rango temporal (1M, 3M, 6M, 1A).
- **Amplia Compatibilidad**: Funciona en Chrome, Edge, Opera y otros navegadores basados en Chromium.
- **Indicador de Estado**: Muestra en tiempo real si la API está disponible.

## Vista Previa de la Extensión

![Vista Frontal de DolarLive](./src/assets/PosterFront.png)
![Vista Posterior de DolarLive](./src/assets/PosterBack.png)

## Instalación

### Desde la Tienda Oficial

Para una instalación rápida y segura, visita la [página de la extensión en Chrome Web Store](https://t.co/k3usF9snUz) y añádela a tu navegador con un solo clic.

### Instalación Manual

Si prefieres una instalación manual, sigue estos pasos:

1. Descarga la carpeta `dolarLiveExtension` desde este repositorio.
2. Abre Chrome y navega a `Más herramientas > Extensiones`.
3. Activa el `Modo Desarrollador`.
4. Haz clic en `Cargar descomprimida` y selecciona la carpeta `dolarLiveExtension` que descargaste.

## Stack Tecnológico

- React 18 + TypeScript
- Vite + CRXJS (Chrome Extension)
- Tailwind CSS + shadcn/ui
- Recharts (gráficos)
- Framer Motion (animaciones)
- Axios

## APIs Utilizadas

- [DolarApi](https://dolarapi.com/) - Cotizaciones del dólar en tiempo real
- [ArgentinaDatos](https://argentinadatos.com/) - Inflación, plazo fijo e históricos

## Agradecimientos Especiales

Un agradecimiento especial a [Enzo Notario](https://github.com/enzonotario), creador de la API de DolarApi que ha sido fundamental para el desarrollo de esta extensión. ¡Gracias, Enzo!

---

Con ❤️ por Luca.
