export const locales = ['en', 'es'] as const

export type Locale = (typeof locales)[number]

export type LocalizedString = Record<Locale, string>

export type LocalizedList = Record<Locale, string[]>

export type ContactLinkId = 'email' | 'linkedin' | 'github'

export type ContactLink = {
  id: ContactLinkId
  href: string
}

export type ProjectTone =
  | 'teal'
  | 'amber'
  | 'blue'
  | 'green'
  | 'steel'
  | 'coral'
  | 'neutral'

export type Project = {
  id: string
  title: LocalizedString
  category: LocalizedString
  summary: LocalizedString
  problem: LocalizedString
  solution: LocalizedString
  role: LocalizedString
  features: LocalizedList
  technologies: string[]
  repository: 'private'
  prominence: 'featured' | 'standard'
  liveUrl?: string
  image: {
    src: string
    fileName: string
    tone: ProjectTone
  }
}

export type Capability = {
  id: string
  title: LocalizedString
  description: LocalizedString
  technologies: string[]
}
