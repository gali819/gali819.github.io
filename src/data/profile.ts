import type { ContactLink, LocalizedString } from './types'

export const personalInfo = {
  name: 'Ignacio Galilea',
  role: {
    en: 'Full-Stack Developer',
    es: 'Desarrollador Full-Stack',
  } satisfies LocalizedString,
  education: {
    en: 'Computer Engineering student',
    es: 'Estudiante de Ingeniería Informática',
  } satisfies LocalizedString,
  headlineStack: ['Laravel', 'PHP', 'React', 'TypeScript', 'MySQL'],
}

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    href: '',
  },
  {
    id: 'linkedin',
    href: '',
  },
  {
    id: 'github',
    href: '',
  },
]

export const cvConfig = {
  path: '/cv/ignacio-galilea-cv.pdf',
}

export const navigationItems = [
  {
    id: 'home',
    href: '#home',
  },
  {
    id: 'about',
    href: '#about',
  },
  {
    id: 'projects',
    href: '#projects',
  },
  {
    id: 'skills',
    href: '#skills',
  },
  {
    id: 'contact',
    href: '#contact',
  },
] as const
