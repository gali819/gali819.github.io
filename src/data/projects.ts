import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'digital-invitations-platform',
    title: {
      en: 'Digital Invitations Platform',
      es: 'Plataforma de Invitaciones Digitales',
    },
    category: {
      en: 'Event Platform',
      es: 'Plataforma de eventos',
    },
    summary: {
      en: 'A web platform for creating and managing digital invitations for weddings, birthdays, quinceaneras, and other events.',
      es: 'Plataforma web para crear y gestionar invitaciones digitales para bodas, fiestas de 15, cumpleaños y otros eventos.',
    },
    problem: {
      en: 'The platform needs to support event-specific workflows, public invitation links, guests, RSVP, permissions, and administration without turning each event into a manual process.',
      es: 'La plataforma necesita sostener flujos propios de eventos, links públicos, invitados, RSVP, permisos y administración sin convertir cada evento en un proceso manual.',
    },
    solution: {
      en: 'I support and develop different areas of the system, improving event, invitation, guest, permission, RSVP, and administrative functionality across the product.',
      es: 'Realizo soporte y desarrollo en distintas áreas del sistema, mejorando funcionalidades de eventos, invitaciones, invitados, permisos, RSVP y administración.',
    },
    role: {
      en: 'Support and development across several parts of the platform.',
      es: 'Soporte y desarrollo en distintas partes de la plataforma.',
    },
    features: {
      en: [
        'Users, events, invitations, and guests',
        'Permissions and administrative workflows',
        'RSVP and public invitation links',
        'Feature work across different event use cases',
      ],
      es: [
        'Usuarios, eventos, invitaciones e invitados',
        'Permisos y flujos administrativos',
        'RSVP y links públicos de invitación',
        'Desarrollo de funcionalidades para distintos tipos de eventos',
      ],
    },
    technologies: ['Laravel', 'PHP', 'MySQL', 'React', 'TypeScript', 'Inertia.js', 'Vite'],
    repository: 'private',
    prominence: 'featured',
    image: {
      src: '',
      fileName: 'digital-invitations-platform.webp',
      tone: 'coral',
    },
  },
  {
    id: 'arreglosya',
    title: {
      en: 'ArreglosYa',
      es: 'ArreglosYa',
    },
    category: {
      en: 'Service Marketplace',
      es: 'Marketplace de servicios',
    },
    summary: {
      en: 'A full-stack service marketplace that connects people who need home repairs with professionals.',
      es: 'Marketplace full-stack de servicios que conecta personas con problemas del hogar con profesionales.',
    },
    problem: {
      en: 'Customers need a reliable way to find service professionals for plumbing, locksmithing, electrical work, and home repairs.',
      es: 'Los clientes necesitan una forma confiable de encontrar profesionales para plomería, cerrajería, electricidad y reparaciones del hogar.',
    },
    solution: {
      en: 'The application organizes users, roles, account states, service categories, services, validation rules, and database relationships around a service marketplace flow.',
      es: 'La aplicación organiza usuarios, roles, estados de cuenta, categorías, servicios, validaciones y relaciones de base de datos alrededor de un flujo de marketplace de servicios.',
    },
    role: {
      en: 'Full-stack development and application architecture.',
      es: 'Desarrollo full-stack y arquitectura de la aplicación.',
    },
    features: {
      en: [
        'Email/password authentication and Google OAuth',
        'Password recovery, roles, authorization, and account states',
        'Service categories, services, middleware, and validations',
        'Migrations, seeders, relational design, and tests',
      ],
      es: [
        'Autenticación email/password y Google OAuth',
        'Recuperación de contraseña, roles, autorización y estados de cuenta',
        'Categorías, servicios, middleware y validaciones',
        'Migraciones, seeders, diseño relacional y tests',
      ],
    },
    technologies: ['Laravel', 'PHP', 'MySQL', 'React', 'TypeScript', 'Inertia.js', 'Vite'],
    repository: 'private',
    prominence: 'featured',
    image: {
      src: '',
      fileName: 'arreglosya.webp',
      tone: 'teal',
    },
  },
  {
    id: 'stock-management-system',
    title: {
      en: 'Stock Management System',
      es: 'Sistema de Gestión de Stock',
    },
    category: {
      en: 'Business Management System',
      es: 'Sistema de gestión empresarial',
    },
    summary: {
      en: 'A stock management system developed for a company in the motorcycle-related business sector.',
      es: 'Sistema de gestión de stock desarrollado para una empresa relacionada con el rubro de motos.',
    },
    problem: {
      en: 'The business needed a more organized way to manage products, stock, and operational information.',
      es: 'La empresa necesitaba una forma más organizada de administrar productos, stock e información operativa.',
    },
    solution: {
      en: 'I built a relational web system for product management, inventory movements, search, filtering, authentication, and administration.',
      es: 'Desarrollé un sistema web relacional para gestionar productos, movimientos de inventario, búsquedas, filtros, autenticación y administración.',
    },
    role: {
      en: 'Full-stack development.',
      es: 'Desarrollo full-stack.',
    },
    features: {
      en: [
        'Product management',
        'Stock control and inventory movements',
        'Authentication and administration',
        'Search, filters, and relational database structure',
      ],
      es: [
        'Gestión de productos',
        'Control de stock y movimientos de inventario',
        'Autenticación y administración',
        'Búsquedas, filtros y estructura de base de datos relacional',
      ],
    },
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    repository: 'private',
    prominence: 'featured',
    image: {
      src: '',
      fileName: 'stock-management-system.webp',
      tone: 'steel',
    },
  },
  {
    id: 'blackpaddel',
    title: {
      en: 'BlackPaddel',
      es: 'BlackPaddel',
    },
    category: {
      en: 'Booking Platform',
      es: 'Plataforma de reservas',
    },
    summary: {
      en: 'A web system for managing padel court bookings and availability for a club.',
      es: 'Sistema web para gestionar turnos, reservas y disponibilidad de canchas de pádel para un club.',
    },
    problem: {
      en: 'The club needed a clearer way to coordinate court availability, users, bookings, and administration.',
      es: 'El club necesitaba una forma más clara de coordinar disponibilidad de canchas, usuarios, reservas y administración.',
    },
    solution: {
      en: 'I built a booking workflow centered on schedules, availability, reservations, users, and administrative control.',
      es: 'Desarrollé un flujo de reservas centrado en calendario, disponibilidad, turnos, usuarios y administración.',
    },
    role: {
      en: 'Full-stack development.',
      es: 'Desarrollo full-stack.',
    },
    features: {
      en: ['Calendar and booking slots', 'Availability management', 'Reservations', 'Users and administration'],
      es: ['Calendario y turnos', 'Gestión de disponibilidad', 'Reservas', 'Usuarios y administración'],
    },
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    repository: 'private',
    prominence: 'standard',
    image: {
      src: '',
      fileName: 'blackpaddel.webp',
      tone: 'green',
    },
  },
  {
    id: 'permutrueque',
    title: {
      en: 'Permutrueque',
      es: 'Permutrueque',
    },
    category: {
      en: 'Marketplace',
      es: 'Marketplace',
    },
    summary: {
      en: 'A user-based marketplace where people can publish objects and exchange them with other users.',
      es: 'Marketplace basado en usuarios donde las personas pueden publicar objetos e intercambiarlos con otros usuarios.',
    },
    problem: {
      en: 'The product needed to go beyond basic CRUD by supporting users, listings, objects, search, and relationships between marketplace entities.',
      es: 'El producto necesitaba ir más allá de un CRUD básico, incorporando usuarios, publicaciones, objetos, búsqueda y relaciones entre entidades del marketplace.',
    },
    solution: {
      en: 'I structured the application around people, listings, exchange intent, publication management, and relational data.',
      es: 'Estructuré la aplicación alrededor de personas, publicaciones, intención de intercambio, gestión de publicaciones y datos relacionales.',
    },
    role: {
      en: 'Full-stack development.',
      es: 'Desarrollo full-stack.',
    },
    features: {
      en: ['Users and listings', 'Objects and search', 'Exchange between people', 'Publication management and entity relationships'],
      es: ['Usuarios y publicaciones', 'Objetos y búsqueda', 'Intercambio entre personas', 'Gestión de publicaciones y relaciones entre entidades'],
    },
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    repository: 'private',
    prominence: 'standard',
    image: {
      src: '',
      fileName: 'permutrueque.webp',
      tone: 'amber',
    },
  },
  {
    id: 'ojobache',
    title: {
      en: 'OjoBache',
      es: 'OjoBache',
    },
    category: {
      en: 'Geolocation / Civic Tech',
      es: 'Geolocalización / Civic Tech',
    },
    summary: {
      en: 'A civic tech system for registering and visualizing city pothole alerts.',
      es: 'Sistema civic tech para registrar y visualizar alertas relacionadas con pozos y baches en la ciudad.',
    },
    problem: {
      en: 'City incidents need to be registered with location context so they can be visualized as citizen reports and alerts.',
      es: 'Las incidencias urbanas necesitan registrarse con contexto de ubicación para visualizarse como reportes ciudadanos y alertas.',
    },
    solution: {
      en: 'The project focuses on geolocation, citizen reports, map-based visualization, incident locations, and alert visibility.',
      es: 'El proyecto se centra en geolocalización, reportes ciudadanos, visualización en mapa, ubicación de incidencias y visibilidad de alertas.',
    },
    role: {
      en: 'Project development.',
      es: 'Desarrollo del proyecto.',
    },
    features: {
      en: ['Geolocation-oriented reports', 'City incident locations', 'Map visualization', 'Alert records'],
      es: ['Reportes orientados a geolocalización', 'Ubicación de incidencias urbanas', 'Visualización en mapa', 'Registros de alertas'],
    },
    technologies: [],
    repository: 'private',
    prominence: 'standard',
    image: {
      src: '',
      fileName: 'ojobache.webp',
      tone: 'blue',
    },
  },
  {
    id: 'guitarg',
    title: {
      en: 'GuitArg',
      es: 'GuitArg',
    },
    category: {
      en: 'E-commerce',
      es: 'E-commerce',
    },
    summary: {
      en: 'An e-commerce project related to guitars, accessories, apparel, and music products, with catalog and cart functionality.',
      es: 'Proyecto e-commerce relacionado con guitarras, accesorios, indumentaria y productos del mundo de la música, con catálogo y carrito.',
    },
    problem: {
      en: 'The online store needs clear product presentation, a usable catalog, cart flow, consistent navigation, and alignment with the brand presence on social channels.',
      es: 'La tienda online necesita una presentación clara de productos, un catálogo usable, flujo de carrito, navegación consistente y coherencia con la presencia de marca en redes sociales.',
    },
    solution: {
      en: 'I worked on the store page experience, catalog presentation, cart-oriented flow, product presentation, content updates, campaigns, and digital brand consistency.',
      es: 'Trabajé sobre la experiencia de la página, presentación del catálogo, flujo orientado al carrito, presentación de productos, actualización de contenido, campañas y coherencia digital de marca.',
    },
    role: {
      en: 'E-commerce page development, catalog/cart experience, and digital presentation work.',
      es: 'Desarrollo de página e-commerce, experiencia de catálogo/carrito y trabajo de presentación digital.',
    },
    features: {
      en: ['Product catalog', 'Cart flow', 'Responsive shopping experience', 'Content updates, campaigns, and visual identity'],
      es: ['Catálogo de productos', 'Flujo de carrito', 'Experiencia de compra responsive', 'Actualización de contenido, campañas e identidad visual'],
    },
    technologies: ['Catalog', 'Cart', 'Responsive design'],
    repository: 'private',
    prominence: 'standard',
    image: {
      src: '',
      fileName: 'guitarg.webp',
      tone: 'neutral',
    },
  },
]
