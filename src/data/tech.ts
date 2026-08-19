import type { Capability } from './types'

export const capabilities: Capability[] = [
  {
    id: 'backend',
    title: {
      en: 'Backend Development',
      es: 'Desarrollo Backend',
    },
    description: {
      en: 'I build Laravel and PHP applications with authentication, relational data, validations, admin workflows, and maintainable application structure.',
      es: 'Desarrollo aplicaciones con Laravel y PHP, incluyendo autenticación, datos relacionales, validaciones, flujos administrativos y estructura mantenible.',
    },
    technologies: ['Laravel', 'PHP', 'REST APIs', 'Authentication'],
  },
  {
    id: 'frontend',
    title: {
      en: 'Frontend Development',
      es: 'Desarrollo Frontend',
    },
    description: {
      en: 'I create responsive interfaces with React, TypeScript, JavaScript, Inertia.js, and Vite, focusing on clarity and real user workflows.',
      es: 'Creo interfaces responsive con React, TypeScript, JavaScript, Inertia.js y Vite, priorizando claridad y flujos reales de usuario.',
    },
    technologies: ['React', 'TypeScript', 'JavaScript', 'Inertia.js', 'Vite'],
  },
  {
    id: 'database',
    title: {
      en: 'Database Design',
      es: 'Diseño de Bases de Datos',
    },
    description: {
      en: 'I work with MySQL schemas, relationships, migrations, seeders, and data modeling for business and service platforms.',
      es: 'Trabajo con esquemas MySQL, relaciones, migraciones, seeders y modelado de datos para sistemas comerciales y plataformas de servicios.',
    },
    technologies: ['MySQL', 'Migrations', 'Relationships', 'Data modeling'],
  },
  {
    id: 'ecommerce',
    title: {
      en: 'E-commerce Interfaces',
      es: 'E-commerce',
    },
    description: {
      en: 'I work on catalog and cart experiences, product presentation, responsive improvements, content updates, and brand consistency.',
      es: 'Trabajo sobre experiencias de catálogo y carrito, presentación de productos, mejoras responsive, actualización de contenido y coherencia de marca.',
    },
    technologies: ['Catalogs', 'Cart flows', 'Product pages', 'Responsive design'],
  },
]

export const techStack = [
  'PHP',
  'Laravel',
  'MySQL',
  'React',
  'TypeScript',
  'JavaScript',
  'Inertia.js',
  'Vite',
  'Tailwind CSS',
  'Git',
  'GitHub',
]
