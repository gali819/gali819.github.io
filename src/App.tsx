import { useEffect, useState, type CSSProperties } from 'react'
import './App.css'
import { contactLinks, cvConfig, navigationItems, personalInfo } from './data/profile'
import { projects } from './data/projects'
import { stackGroups } from './data/tech'
import { locales, type ContactLinkId, type Locale, type Project } from './data/types'
import { translations } from './i18n/translations'

const languageStorageKey = 'ignacio-portfolio-language'
const themeStorageKey = 'ignacio-portfolio-theme'
const themes = ['light', 'dark'] as const

type Theme = (typeof themes)[number]
type ProjectLabels = (typeof translations)[Locale]['projects']
type ProjectEntryStyle = CSSProperties & {
  '--project-image'?: string
}

function isLocale(value: string | null): value is Locale {
  return locales.includes(value as Locale)
}

function isTheme(value: string | null): value is Theme {
  return themes.includes(value as Theme)
}

function getInitialLanguage(): Locale {
  const storedLanguage = window.localStorage.getItem(languageStorageKey)

  if (isLocale(storedLanguage)) {
    return storedLanguage
  }

  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

function getInitialTheme(): Theme {
  const storedTheme = window.localStorage.getItem(themeStorageKey)

  if (isTheme(storedTheme)) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function publicPath(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

function getProjectImagePath(project: Project): string {
  if (project.image.src) {
    return project.image.src
  }

  return project.image.fileName ? `/projects/${project.image.fileName}` : ''
}

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function useAssetExists(path: string): boolean {
  const [exists, setExists] = useState(false)

  useEffect(() => {
    let isActive = true

    if (!path) {
      return () => {
        isActive = false
      }
    }

    fetch(publicPath(path), {
      method: 'HEAD',
      cache: 'no-store',
    })
      .then((response) => {
        const contentType = response.headers.get('content-type')?.toLowerCase() ?? ''

        if (isActive) {
          setExists(response.ok && !contentType.includes('text/html'))
        }
      })
      .catch(() => {
        if (isActive) {
          setExists(false)
        }
      })

    return () => {
      isActive = false
    }
  }, [path])

  return exists
}

function getProjectFromHash(): string | null {
  const projectPrefix = '#project-'

  if (!window.location.hash.startsWith(projectPrefix)) {
    return null
  }

  return window.location.hash.slice(projectPrefix.length)
}

function ProjectEntry({
  project,
  language,
  labels,
  isExpanded,
  onToggle,
}: {
  project: Project
  language: Locale
  labels: ProjectLabels
  isExpanded: boolean
  onToggle: (project: Project) => void
}) {
  const imagePath = getProjectImagePath(project)
  const imageExists = useAssetExists(imagePath)
  const liveUrl = project.liveUrl?.trim()
  const stackSummary = project.technologies.join(' · ')
  const actionLabel = liveUrl
    ? labels.viewLiveProject
    : isExpanded
      ? labels.hideCaseStudy
      : imageExists
        ? labels.viewCaptures
        : labels.viewCaseStudy
  const projectStyle: ProjectEntryStyle | undefined = imageExists
    ? { '--project-image': `url("${publicPath(imagePath)}")` }
    : undefined
  const projectClassName = [
    'project-entry',
    isExpanded ? 'is-open' : '',
    imageExists ? 'has-image' : '',
    liveUrl ? 'has-live-url' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article id={`project-${project.id}`} className={projectClassName} style={projectStyle}>
      <div className="project-entry-main">
        <div className="project-entry-meta">
          <span>{project.category[language]}</span>
          {stackSummary ? <span>{stackSummary}</span> : null}
        </div>

        <h3>{project.title[language]}</h3>
        <p>{project.summary[language]}</p>

        <div className="project-entry-actions">
          <span>{liveUrl ? labels.publicPage : labels.privateProject}</span>
          {liveUrl ? (
            <a className="project-action" href={liveUrl} target="_blank" rel="noreferrer">
              {actionLabel}
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <button
              className="project-action"
              type="button"
              aria-expanded={isExpanded}
              aria-controls={`case-${project.id}`}
              onClick={() => onToggle(project)}
            >
              {actionLabel}
              <span aria-hidden="true">→</span>
            </button>
          )}
        </div>
      </div>

      {isExpanded ? (
        <div id={`case-${project.id}`} className="case-study">
          <section>
            <h4>{labels.problem}</h4>
            <p>{project.problem[language]}</p>
          </section>
          <section>
            <h4>{labels.technicalDecisions}</h4>
            <p>{project.solution[language]}</p>
          </section>
          <section>
            <h4>{labels.role}</h4>
            <p>{project.role[language]}</p>
          </section>
          <section>
            <h4>{labels.scope}</h4>
            <ul>
              {project.features[language].map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        </div>
      ) : null}
    </article>
  )
}

function App() {
  const [language, setLanguage] = useState<Locale>(getInitialLanguage)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(getProjectFromHash)

  const t = translations[language]
  const availableContacts = contactLinks.filter((link) => link.href.trim().length > 0)
  const cvExists = useAssetExists(cvConfig.path)
  const hasContactContent = availableContacts.length > 0 || cvExists
  const visibleNavigation = hasContactContent
    ? navigationItems
    : navigationItems.filter((item) => item.id !== 'contact')

  const contactLabels: Record<ContactLinkId, string> = {
    email: t.contact.email,
    linkedin: t.contact.linkedin,
    github: t.contact.github,
  }

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language)
    document.documentElement.lang = language
    document.title = t.seo.title

    upsertMeta('meta[name="description"]', 'name', 'description', t.seo.description)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', t.seo.title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', t.seo.description)
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', t.seo.ogLocale)
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', t.seo.title)
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', t.seo.description)
  }, [language, t])

  useEffect(() => {
    window.localStorage.setItem(themeStorageKey, theme)
    document.documentElement.dataset.theme = theme
    upsertMeta('meta[name="theme-color"]', 'name', 'theme-color', theme === 'dark' ? '#10131A' : '#F1EEE6')
  }, [theme])

  useEffect(() => {
    const syncProjectFromHash = () => {
      setExpandedProjectId(getProjectFromHash())
    }

    window.addEventListener('hashchange', syncProjectFromHash)
    return () => window.removeEventListener('hashchange', syncProjectFromHash)
  }, [])

  useEffect(() => {
    if (!expandedProjectId) {
      return
    }

    const animationFrameId = window.requestAnimationFrame(() => {
      document.getElementById(`project-${expandedProjectId}`)?.scrollIntoView({ block: 'start' })
    })

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [expandedProjectId])

  function changeLanguage(nextLanguage: Locale) {
    setLanguage(nextLanguage)
    setIsMenuOpen(false)
  }

  function toggleProject(project: Project) {
    const nextProjectId = expandedProjectId === project.id ? null : project.id
    setExpandedProjectId(nextProjectId)

    if (nextProjectId) {
      window.history.pushState(null, '', `#project-${project.id}`)
      return
    }

    if (window.location.hash.startsWith('#project-')) {
      window.history.pushState(null, '', `${window.location.pathname}${window.location.search}`)
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="brand-mark" href="#home" aria-label="Ignacio Galilea">
          IG
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <nav id="site-navigation" className={isMenuOpen ? 'site-nav is-open' : 'site-nav'}>
          <div className="nav-links">
            {visibleNavigation.map((item) => (
              <a key={item.id} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {t.nav[item.id]}
              </a>
            ))}
          </div>

          <div className="text-toggle" aria-label={t.language.label}>
            {locales.map((locale) => (
              <button
                key={locale}
                type="button"
                className={language === locale ? 'is-active' : ''}
                aria-pressed={language === locale}
                aria-label={t.language[locale]}
                onClick={() => changeLanguage(locale)}
              >
                {locale.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="text-toggle theme-toggle" aria-label={t.theme.label}>
            {themes.map((themeOption) => (
              <button
                key={themeOption}
                type="button"
                className={theme === themeOption ? 'is-active' : ''}
                aria-pressed={theme === themeOption}
                aria-label={t.theme[themeOption]}
                onClick={() => setTheme(themeOption)}
              >
                {t.theme[themeOption]}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section section-shell">
          <div className="hero-copy">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{personalInfo.name}</h1>
            <p className="hero-title">{t.hero.title}</p>
            <p className="hero-description">{t.hero.description}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {t.hero.viewProjects}
              </a>
              {hasContactContent ? (
                <a className="text-link" href="#contact">
                  {t.hero.contactMe}
                  <span aria-hidden="true">→</span>
                </a>
              ) : null}
            </div>
          </div>

          <div className="signature-diagram" aria-hidden="true">
            <span className="node node-a">users</span>
            <span className="node node-b">services</span>
            <span className="node node-c">orders</span>
            <span className="node node-d">status</span>
          </div>
        </section>

        <section id="about" className="about-section section-shell">
          <div className="section-heading">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
          </div>
          <div className="about-content">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section section-shell">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <h2>{t.projects.title}</h2>
            <p>{t.projects.description}</p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <ProjectEntry
                key={project.id}
                project={project}
                language={language}
                labels={t.projects}
                isExpanded={expandedProjectId === project.id}
                onToggle={toggleProject}
              />
            ))}
          </div>
        </section>

        <section id="skills" className="stack-section section-shell">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">{t.tech.eyebrow}</p>
            <h2>{t.tech.title}</h2>
            <p>{t.tech.description}</p>
          </div>

          <div className="stack-grid" aria-label={t.hero.stackLabel}>
            {stackGroups.map((group) => (
              <section key={group.id} className="stack-group">
                <h3>{group.title[language]}</h3>
                <p>{group.items.join(' · ')}</p>
              </section>
            ))}
          </div>
        </section>

        {hasContactContent ? (
          <section id="contact" className="contact-section section-shell">
            <div className="contact-panel">
              <div>
                <p className="eyebrow">{t.contact.eyebrow}</p>
                <h2>{t.contact.title}</h2>
                <p>{t.contact.description}</p>
              </div>

              <div className="contact-actions">
                {availableContacts.map((link) => (
                  <a
                    key={link.id}
                    className="text-link"
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {contactLabels[link.id]}
                    <span aria-hidden="true">→</span>
                  </a>
                ))}

                {cvExists ? (
                  <a className="button button-primary" href={publicPath(cvConfig.path)} download>
                    {t.contact.cv}
                  </a>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <footer className="site-footer">
        <p>{t.footer.note}</p>
        <p>{t.footer.copyright}</p>
      </footer>
    </>
  )
}

export default App
