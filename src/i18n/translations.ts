import type { Locale } from '../data/types'

export const translations = {
  en: {
    seo: {
      title: 'Ignacio Galilea - Full-Stack Developer',
      description:
        'Portfolio of Ignacio Galilea, a full-stack developer focused on Laravel, PHP, React, TypeScript, MySQL, and custom web systems.',
      ogLocale: 'en_US',
    },
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Stack',
      contact: 'Contact',
      openMenu: 'Open navigation',
      closeMenu: 'Close navigation',
    },
    language: {
      label: 'Select language',
      en: 'English',
      es: 'Spanish',
    },
    theme: {
      label: 'Select theme',
      light: 'Light',
      dark: 'Dark',
    },
    hero: {
      eyebrow: 'Full-stack developer',
      title: 'I build clear web systems for real workflows.',
      description:
        'Laravel and PHP on the backend. React and TypeScript on the frontend. MySQL for modeling the data.',
      viewProjects: 'View projects',
      contactMe: 'Write me',
      stackLabel: 'Technical stack grouped by role',
    },
    about: {
      eyebrow: 'About',
      title: 'I work best when the problem is concrete.',
      paragraphs: [
        'Full-stack developer and Computer Engineering student.',
        'I build systems for marketplaces, bookings, stock management, geolocation, and e-commerce with Laravel and React.',
        'I prioritize solid backend logic, clear data structures, and interfaces that serve the workflow instead of competing with it.',
      ],
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Projects with a concrete job to do.',
      description:
        'Private and commercial work across operations, marketplaces, bookings, event platforms, civic tech, and e-commerce.',
      viewCaseStudy: 'Read case study',
      viewCaptures: 'View captures',
      viewLiveProject: 'Visit site',
      hideCaseStudy: 'Close case study',
      privateProject: 'Private project',
      publicPage: 'Public site',
      problem: 'Problem',
      technicalDecisions: 'Technical decisions',
      role: 'My role',
      scope: 'Scope',
    },
    tech: {
      eyebrow: 'Technical stack',
      title: 'One stack, organized by role.',
      description: 'The tools I use grouped by the part of the system they support.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's work together",
      description: 'Open to full-stack roles and projects where product judgment and practical engineering matter.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'Download CV',
    },
    footer: {
      note: 'Designed and built in React.',
      copyright: 'Ignacio Galilea. All rights reserved.',
    },
  },
  es: {
    seo: {
      title: 'Ignacio Galilea - Desarrollador Full-Stack',
      description:
        'Portfolio de Ignacio Galilea, desarrollador full-stack enfocado en Laravel, PHP, React, TypeScript, MySQL y sistemas web a medida.',
      ogLocale: 'es_AR',
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Stack',
      contact: 'Contacto',
      openMenu: 'Abrir navegación',
      closeMenu: 'Cerrar navegación',
    },
    language: {
      label: 'Seleccionar idioma',
      en: 'Inglés',
      es: 'Español',
    },
    theme: {
      label: 'Seleccionar tema',
      light: 'Claro',
      dark: 'Oscuro',
    },
    hero: {
      eyebrow: 'Desarrollador full-stack',
      title: 'Construyo sistemas web claros para procesos reales.',
      description:
        'Laravel y PHP en el backend. React y TypeScript en el frontend. MySQL para modelar los datos.',
      viewProjects: 'Ver proyectos',
      contactMe: 'Escribime',
      stackLabel: 'Stack técnico agrupado por rol',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Trabajo mejor cuando el problema es concreto.',
      paragraphs: [
        'Desarrollador full-stack y estudiante de Ingeniería Informática.',
        'Construyo sistemas para marketplaces, reservas, gestión de stock, geolocalización y e-commerce con Laravel y React.',
        'Priorizo lógica de backend sólida, estructuras de datos claras e interfaces que acompañen el flujo en vez de competir con él.',
      ],
    },
    projects: {
      eyebrow: 'Proyectos seleccionados',
      title: 'Proyectos con una tarea concreta.',
      description:
        'Trabajo privado y comercial en operaciones, marketplaces, reservas, plataformas de eventos, civic tech y e-commerce.',
      viewCaseStudy: 'Ver caso',
      viewCaptures: 'Ver capturas',
      viewLiveProject: 'Ver página',
      hideCaseStudy: 'Cerrar caso',
      privateProject: 'Proyecto privado',
      publicPage: 'Página pública',
      problem: 'Problema',
      technicalDecisions: 'Decisiones técnicas',
      role: 'Mi rol',
      scope: 'Alcance',
    },
    tech: {
      eyebrow: 'Stack técnico',
      title: 'Un stack, organizado por rol.',
      description: 'Las herramientas que uso agrupadas por la parte del sistema que sostienen.',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Trabajemos juntos',
      description:
        'Abierto a roles y proyectos full-stack donde importen el criterio de producto y la ingeniería práctica.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'Descargar CV',
    },
    footer: {
      note: 'Diseñado y desarrollado en React.',
      copyright: 'Ignacio Galilea. Todos los derechos reservados.',
    },
  },
} satisfies Record<Locale, Record<string, unknown>>
