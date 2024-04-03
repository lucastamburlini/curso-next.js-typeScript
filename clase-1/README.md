# Freelance Tips

- [English](#english)

  - [Project Description](#project-description)
  - [Deployment](#deployment)
  - [Key Features](#key-features)
  - [Assigned and Completed Tasks](#assigned-and-completed-tasks)
  - [Technological Constraints](#technological-constraints)
  - [Work Constraints](#work-constraints)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Environment Variables](#environment-variables)
  - [Playwright Testing](#playwright-testing)

- [Español](#español)

  - [Descripción del Proyecto](#descripción-del-proyecto)
  - [Despliegue](#despliegue)
  - [Funcionalidades Principales](#funcionalidades-principales)
  - [Tareas asignadas y realizadas](#tareas-asignadas-y-realizadas)
  - [Restricciones tecnológicas](#restricciones-tecnológicas)
  - [Restricciones de trabajo](#restricciones-de-trabajo)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Variables de Entorno](#variables-de-entorno)
  - [Pruebas con Playwright](#pruebas-con-playwright)

---

# English

## Project Description

Freelance Tips is a web application that represents a community dedicated to sharing information about freelancing with the rest of the world. The platform allows users to discover and share practical tips, tricks, and strategies for succeeding as a freelancer in today's competitive job market.

<font color="green">

## Despliegue

The application is deployed on Vercel and can be accessed at [https://freelance-tips.vercel.app/](https://freelance-tips.vercel.app/).

</font>

## Key Features

- The homepage (Root) describes the web platform.
- A Navbar is included on all routes with links to at least 3 or more different routes.
- The stylistic design is consistent throughout the application.
- React is used as the sole technology (bootstrapped with Vite).
- Images and external resources are used, with local assets as a last resort.
- HTML `<a>` elements are not used for routing, providing a SPA experience to the user.
- Infinite scroll is implemented for posts and a "UP!" button to scroll back to the top of the page.
- Tests are conducted with Playwright to verify the frontend's correct operation.
- A contact form is integrated, allowing users to send emails to communicate with the administrator.
- Detailed documentation is available in Spanish and English to facilitate the use and understanding of the project.
- The design is responsive on all pages to ensure an optimal experience on different devices.
- A fictitious database is used for users and posts for demonstration and development purposes.
- Login and logout functionality is implemented to manage user sessions securely with Firebase, including data persistence to keep the session active.
- The project is deployed on Vercel for public access and viewing.
- Reusable primary and secondary buttons are used.
- A global context is implemented to manage user and post information throughout the application.
- Functionality to create and upload publications locally.

## Assigned and Completed Tasks

- [x] Create a web application that represents a community dedicated to sharing information with the rest of the world (can be on any topic chosen by the student).
- [x] Must have a Root page that talks about the web platform.
- [x] Must have a Navbar that is present on all routes of the application and that redirects to at least 3 different routes (including Root).
- [x] Try to bring images and resources from the internet (hardcode it in the code and local assets as a last option).
- [x] Try to provide a coherent stylistic design to the application.
- [x] Do not use `<a>` HTML elements for routing since they do not provide a SPA experience to the user.

## Technological Constraints

- [x] Must use React (bootstrapped with Vite).
- [x] Do not create an external server for the application.

## Work Constraints

- [x] Must be done individually.

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Usage

To run the application in a local environment, use the following command:

```bash
npm run dev
```

This will start the development server, and you can access the application at http://localhost:5173 or your preferred port.

## Environment Variables

The project uses the following environment variables for EmailJS configuration:

- `EMAILJS_USERID`: Your EmailJS user ID.
- `EMAILJS_SERVICEID`: Your EmailJS service ID.
- `EMAILJS_TEMPLATEID`: The ID of the EmailJS template you want to use.

Make sure to create a `.env.local` file in the root of the project and add these environment variables.

# Playwright Tests

This project uses Playwright for automated testing, which are divided by views. To run the tests with Playwright, follow these steps:

First, make sure you have all the necessary dependencies installed. You can install them using npm:

```bash
npm install
```

Run the application in a local environment using the following command:

```bash
npm run dev
```

**Important!**
Log in to the application with your Google account.

Run the tests with Playwright, using the following command:

```bash
npx playwright test
```

This command will run the automated tests and open a browser to show the process. You can also view the test results in the console.

```bash
npx playwright show-report
```

This will open a browser with the detailed report of the tests, where you can see information about the test cases, results and errors found.

---

# Español

## Descripción del Proyecto

Freelance Tips es una aplicación web que representa una comunidad dedicada a compartir información sobre freelancing con el resto del mundo. La plataforma permite a los usuarios descubrir y compartir consejos prácticos, trucos y estrategias para tener éxito como freelancer en el competitivo mundo laboral actual.

<font color="green">

## Despliegue

La aplicación está desplegada en Vercel y puedes acceder a ella en [https://freelance-tips.vercel.app/](https://freelance-tips.vercel.app/).

</font>

## Funcionalidades Principales

- La página de inicio (Root) describe la plataforma web.
- Se incluye una Navbar en todas las rutas con enlaces a al menos 3 o más diferentes rutas.
- El diseño estilístico es coherente en toda la aplicación.
- Se utiliza React (bootstrapped con Vite) como única tecnología.
- Se emplean imágenes y recursos externos, utilizando assets locales como último recurso.
- No se utilizan elementos `<a>` de HTML para el routing, ofreciendo una experiencia de SPA al usuario.
- Se implementa scroll infinito para los posts y un botón "UP!" para volver a la parte superior de la página.
- Se realizan pruebas con Playwright para verificar el correcto funcionamiento del frontend.
- Se integra un formulario de contacto que permite a los usuarios enviar correos electrónicos para comunicarse con el administrador.
- La documentación detallada está disponible en español e inglés para facilitar el uso y la comprensión del proyecto.
- El diseño es responsive en todas las páginas para garantizar una experiencia óptima en diferentes dispositivos.
- Se utiliza una base de datos ficticia para usuarios y posts con fines de demostración y desarrollo.
- Se implementa la funcionalidad de login y logout para gestionar las sesiones de usuario de manera segura con Firebase, incluyendo persistencia de datos para mantener la sesión activa.
- El proyecto se despliega en Vercel para su acceso y visualización pública.
- Se utilizan botones primarios y secundarios reutilizables.
- Se implementa un contexto global para gestionar la información de usuario y posts en toda la aplicación.
- Funcionalidad para crear y subir publicaciones de forma local.

## Tareas asignadas y realizadas

- [x] Crear una aplicacion web que represente una comunidad dedicada a compartir información con el resto del mundo (puede ser sobre cualquier topico que elija el estudiante)
- [x] Tiene que tener una pagina Root que hable sobre la plataforma web
- [x] tiene que haber un Navbar que este presente en todas las rutas de la aplicación y que redirija como minimo a 3 rutas diferentes (Root incluida)
- [x] Tratar de traer imagenes y recursos desde el internet (hardcodearlo en el codigo y assets locales como ultima opción)
- [x] Tratar de proporcionarle un diseño estilístico coherente a la aplicación
- [x] No utilizar elementos `<a>` de HTML para el routing puesto que no proporcionan una experiencia de SPA al usuario

Restricciones tecnológicas:

- [x] Si o si se debe utilizar React (bootstrapeado con Vite )
- [x] No crear un servidor externo a la aplicación

Restricciones de trabajo:

- [x] Tiene que ser realizado individualmente

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```

## Uso

Para ejecutar la aplicación en un entorno local, utiliza el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en http://localhost:5173 o tu puerto de preferencia.

## Variables de Entorno

El proyecto utiliza las siguientes variables de entorno para la configuración de EmailJS:

- `EMAILJS_USERID`: Tu ID de usuario de EmailJS.
- `EMAILJS_SERVICEID`: El ID de tu servicio de EmailJS.
- `EMAILJS_TEMPLATEID`: El ID de la plantilla de EmailJS que deseas utilizar.

Asegúrate de crear un archivo `.env.local` en la raíz del proyecto y agregar estas variables de entorno.

# Pruebas con Playwright

Este proyecto utiliza Playwright para realizar pruebas automatizadas, las mismas están divididas por vistas. Para ejecutar las pruebas con Playwright, sigue los siguientes pasos:

Primero, asegúrate de tener todas las dependencias necesarias instaladas. Puedes instalarlas utilizando npm:

```bash
npm install
```

Ejecutar aplicación en un entorno local utilizando el siguiente comando:

```bash
npm run dev
```

**¡Importante!**
Inicia sesión en la aplicación con tu cuenta de Google.

Ejecuta las pruebas con Playwright, utiliza el siguiente comando:

```bash
npx playwright test
```

Este comando ejecutará las pruebas automatizadas y abrirá un navegador para mostrar el proceso. También, puedes ver los resultados de las pruebas en la consola.

```bash
npx playwright show-report
```

Esto abrirá un navegador con el reporte detallado de las pruebas, donde podrás ver información sobre los casos de prueba, resultados y errores encontrados.
