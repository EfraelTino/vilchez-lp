# Vilches - Sitio Web Profesional

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **¿Ya eres un astronauta experimentado?** ¡Elimina este archivo y diviértete!

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Comandos Disponibles](#-comandos-disponibles)
- [Guía de Desarrollo](#-guía-de-desarrollo)
- [Componentes Principales](#-componentes-principales)
- [Recursos de Aprendizaje](#-recursos-de-aprendizaje)
- [Autor](#-autor)
- [Licencia](#-licencia)

---

## 📖 Descripción del Proyecto

**Vilches** es un sitio web profesional construido con **Astro**, un framework moderno y de alto rendimiento. El proyecto incluye secciones para servicios, trabajos, maquinarias, clientes y contacto.

### Características Principales

- ⚡ Rendimiento optimizado con Astro
- 🎨 Diseño responsivo y moderno
- 📱 Compatible con dispositivos móviles
- 🚀 SEO amigable
- 💅 Estilos CSS personalizados
- 🔧 Componentes reutilizables
- 📝 Sistema de tipos TypeScript

---

## 🚀 Estructura del Proyecto

```text
vilches/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── [recursos estáticos]
│   ├── components/
│   │   ├── Clients.astro          # Sección de clientes
│   │   ├── Contact.astro          # Formulario de contacto
│   │   ├── Footer.astro           # Pie de página
│   │   ├── Maquinarias.astro      # Catálogo de maquinarias
│   │   ├── Principal.astro        # Sección principal/hero
│   │   ├── Services.astro         # Servicios ofrecidos
│   │   ├── Someone.astro          # Equipo/Nosotros
│   │   ├── Works.astro            # Portafolio/Trabajos
│   │   └── ui/
│   │       ├── About.astro        # Información adicional
│   │       └── Header.astro       # Encabezado/Navegación
│   ├── css/
│   │   └── global.css             # Estilos globales
│   ├── layouts/
│   │   └── Layout.astro           # Plantilla principal
│   ├── lib/
│   │   └── types.ts               # Definiciones de tipos TypeScript
│   ├── pages/
│   │   └── index.astro            # Página principal
│   └── env.d.ts
├── package.json
├── pnpm-lock.yaml
├── astro.config.mjs
├── tsconfig.json
└── README.md
```

### Descripción Detallada de Carpetas

| Carpeta | Propósito |
|---------|-----------|
| `/public/` | Archivos estáticos que se sirven directamente |
| `/src/assets/` | Recursos del proyecto (imágenes, iconos, etc.) |
| `/src/components/` | Componentes Astro reutilizables |
| `/src/components/ui/` | Componentes de interfaz de usuario |
| `/src/css/` | Archivos de estilos CSS globales |
| `/src/layouts/` | Plantillas de diseño base |
| `/src/lib/` | Utilidades, tipos y funciones auxiliares |
| `/src/pages/` | Rutas y páginas del sitio (auto-generan rutas) |

Para más información, consulta la [guía de estructura de proyectos de Astro](https://docs.astro.build/en/basics/project-structure/).

---

## 📦 Requisitos Previos

Asegúrate de tener instalado:

- **Node.js** versión 16.12.0 o superior
- **pnpm** versión 7.0 o superior (gestor de paquetes)
- Un editor de código (VS Code recomendado)

### Instalar pnpm (si no lo tienes)

```bash
npm install -g pnpm
```

Verifica la instalación:

```bash
pnpm --version
```

---

## 🔧 Instalación

### Paso 1: Navegar al Proyecto

```bash
cd c:\Users\efrae\OneDrive\Documentos\vilches
```

### Paso 2: Instalar Dependencias con pnpm

```bash
pnpm install
```

### Paso 3: Verificar Instalación

```bash
pnpm astro --version
```

---

## 🧞 Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Descripción |
|---------|-------------|
| `pnpm install` | Instala todas las dependencias |
| `pnpm run dev` | Inicia servidor local en `http://localhost:4321` |
| `pnpm run build` | Compila el proyecto para producción en `./dist/` |
| `pnpm run preview` | Vista previa local del build compilado |
| `pnpm run astro ...` | Ejecutar comandos CLI de Astro |
| `pnpm run astro -- --help` | Obtener ayuda de la CLI de Astro |

### Ejemplos Prácticos

**Iniciar desarrollo:**
```bash
pnpm run dev
```
Abre `http://localhost:4321` en tu navegador.

**Compilar para producción:**
```bash
pnpm run build
```
Los archivos compilados estarán en `./dist/`

**Previsualizar compilación:**
```bash
pnpm run preview
```

---

## 📚 Guía de Desarrollo

### Estructura de Componentes

Los componentes están organizados por funcionalidad:

#### Componentes Principales
- **Header.astro** - Navegación y encabezado
- **Principal.astro** - Sección hero/bienvenida
- **Services.astro** - Catálogo de servicios
- **Maquinarias.astro** - Catálogo de equipos/máquinas
- **Works.astro** - Portafolio de trabajos realizados
- **Clients.astro** - Clientes y testimonios
- **Someone.astro** - Equipo/Nosotros
- **Contact.astro** - Formulario de contacto
- **Footer.astro** - Pie de página

### Agregar una Nueva Página

1. Crea un archivo `.astro` en `/src/pages/`

```astro
// filepath: src/pages/servicios.astro
---
import Layout from '../layouts/Layout.astro';
import Services from '../components/Services.astro';
---

<Layout title="Nuestros Servicios">
  <Services />
</Layout>
```

2. La página será accesible en `/servicios`

### Crear un Nuevo Componente

1. Crea un archivo `.astro` en `/src/components/`

```astro
// filepath: src/components/MiComponente.astro
---
interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<section class="componente">
  <h2>{title}</h2>
  <p>{description}</p>
</section>

<style>
  .componente {
    padding: 2rem;
    background: #f0f0f0;
  }
</style>
```

2. Importa el componente en tus páginas:

```astro
import MiComponente from '../components/MiComponente.astro';

<MiComponente title="Título" description="Descripción" />
```

### Trabajar con Estilos

**Estilos Globales:** Edita `/src/css/global.css`

```css
/* filepath: src/css/global.css */
:root {
  --color-primary: #0066cc;
  --color-secondary: #ff6b6b;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
}
```

**Estilos por Componente:**

```astro
<style>
  .elemento {
    color: var(--color-primary);
  }
</style>
```

### Usar TypeScript

El proyecto incluye definiciones de tipos. Edita `/src/lib/types.ts`:

```typescript
// filepath: src/lib/types.ts
export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio?: number;
}

export interface Cliente {
  nombre: string;
  empresa: string;
  testimonio: string;
}
```

Usa los tipos en tus componentes:

```astro
---
import type { Servicio } from '../lib/types';

const servicios: Servicio[] = [
  { id: 1, nombre: 'Servicio 1', descripcion: 'Descripción' }
];
---
```

---

## 🧩 Componentes Principales

### Header (Navegación)
Ubicado en `/src/components/ui/Header.astro`
- Navegación principal
- Menú responsivo
- Logo

### Principal (Hero)
Ubicado en `/src/components/Principal.astro`
- Sección de bienvenida
- Llamada a la acción (CTA)

### Services (Servicios)
Ubicado en `/src/components/Services.astro`
- Listado de servicios
- Descripciones y características

### Maquinarias
Ubicado en `/src/components/Maquinarias.astro`
- Catálogo de equipos
- Especificaciones técnicas

### Works (Portafolio)
Ubicado en `/src/components/Works.astro`
- Trabajos realizados
- Galería de proyectos

### Clients (Clientes)
Ubicado en `/src/components/Clients.astro`
- Logos de clientes
- Testimonios

### Contact (Contacto)
Ubicado en `/src/components/Contact.astro`
- Formulario de contacto
- Información de ubicación

### Footer
Ubicado en `/src/components/Footer.astro`
- Enlaces rápidos
- Información de contacto
- Redes sociales

---

## 📝 Mejores Prácticas

### 1. Nomenclatura de Componentes
- Usa PascalCase para componentes (ej: `MiComponente.astro`)
- Usa kebab-case para archivos CSS (ej: `estilos-globales.css`)

### 2. Organización de Código
- Mantén componentes pequeños y reutilizables
- Agrupa componentes relacionados en carpetas
- Documenta props y comportamientos

### 3. Performance
- Usa lazy loading para imágenes
- Minifica CSS y JavaScript
- Optimiza recursos

### 4. SEO
- Usa títulos descriptivos en cada página
- Incluye meta descripciones
- Usa etiquetas semánticas HTML

---

## 👀 Recursos de Aprendizaje

- 📖 [Documentación oficial de Astro](https://docs.astro.build)
- 💬 [Comunidad Discord de Astro](https://astro.build/chat)
- 📚 [Guía de inicio de Astro](https://docs.astro.build/en/getting-started/)
- 🎥 [Tutoriales en video](https://www.youtube.com/results?search_query=astro+framework)
- 📦 [Integraciones de Astro](https://astro.build/integrations/)

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para colaborar:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/MiFeature`)
3. Commit tus cambios (`git commit -m 'Add MiFeature'`)
4. Push a la rama (`git push origin feature/MiFeature`)
5. Abre un Pull Request

---

## 👨‍💻 Autor

**Efrael**  
📧 Email: [tu-email@ejemplo.com]  
🔗 GitHub: [@efrael](https://github.com/efrael)  
💼 LinkedIn: [Tu perfil]

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

**Estado del Proyecto:** En Desarrollo ✨  
**Última actualización:** 26 de noviembre de 2025  
**Versión:** 1.0.0