import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { contactLinks, cvConfig, navigationItems, personalInfo } from './data/profile'
import { projects } from './data/projects'
import { capabilities, techStack } from './data/tech'
import { locales, type ContactLinkId, type Locale, type Project } from './data/types'
import { translations } from './i18n/translations'

const languageStorageKey = 'ignacio-portfolio-language'
const themeStorageKey = 'ignacio-portfolio-theme'
const themes = ['light', 'dark'] as const

type Theme = (typeof themes)[number]

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

  const browserLanguage = window.navigator.language.toLowerCase()
  return browserLanguage.startsWith('es') ? 'es' : 'en'
}

function getInitialTheme(): Theme {
  const storedTheme = window.localStorage.getItem(themeStorageKey)

  if (isTheme(storedTheme)) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function publicPath(path: string): string {
  const normalizedPath = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${normalizedPath}`
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

function App() {
  const [language, setLanguage] = useState<Locale>(getInitialLanguage)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(getProjectFromHash)

  const t = translations[language]
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null
  const contactLabels: Record<ContactLinkId, string> = {
    email: t.contact.email,
    linkedin: t.contact.linkedin,
    github: t.contact.github,
  }
  const availableContacts = contactLinks.filter((link) => link.href.trim().length > 0)
  const cvExists = useAssetExists(cvConfig.path)

  const heroStack = useMemo(() => personalInfo.headlineStack.join(' · '), [])

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
    upsertMeta('meta[name="theme-color"]', 'name', 'theme-color', theme === 'dark' ? '#090c0b' : '#f5f3ee')
  }, [theme])

  useEffect(() => {
    const syncProjectFromHash = () => {
      setSelectedProjectId(getProjectFromHash())
    }

    window.addEventListener('hashchange', syncProjectFromHash)
    return () => window.removeEventListener('hashchange', syncProjectFromHash)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-dialog-open', selectedProject !== null)

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeProject()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('is-dialog-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedProject])

  function changeLanguage(nextLanguage: Locale) {
    setLanguage(nextLanguage)
    setIsMenuOpen(false)
  }

  function openProject(project: Project) {
    setSelectedProjectId(project.id)
    window.history.pushState(null, '', `#project-${project.id}`)
  }

  function closeProject() {
    setSelectedProjectId(null)

    if (window.location.hash.startsWith('#project-')) {
      window.history.pushState(null, '', `${window.location.pathname}${window.location.search}`)
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="brand-mark" href="#home" aria-label="Ignacio Galilea">
          <span>IG</span>
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
            {navigationItems.map((item) => (
              <a key={item.id} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {t.nav[item.id]}
              </a>
            ))}
          </div>

          <div className="language-switcher" aria-label={t.language.label}>
            {locales.map((locale) => (
              <button
                key={locale}
                type="button"
                className={language === locale ? 'is-active' : ''}
                aria-pressed={language === locale}
                aria-label={translations[language].language[locale]}
                onClick={() => changeLanguage(locale)}
              >
                {locale.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="theme-switcher" aria-label={t.theme.label}>
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
            <p className="hero-role">{personalInfo.role[language]}</p>
            <p className="hero-title">{t.hero.title}</p>
            <p className="hero-description">{t.hero.description}</p>

            <div className="hero-stack" aria-label={t.hero.stackLabel}>
              {heroStack}
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {t.hero.viewProjects}
              </a>
              <a className="button button-secondary" href="#contact">
                {t.hero.contactMe}
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label={t.hero.availability} role="img">
            <div className="hero-panel hero-panel-main">
              <div className="panel-kicker">Full-Stack</div>
              <div className="panel-title">Laravel / React</div>
              <div className="panel-line is-wide"></div>
              <div className="panel-line"></div>
              <div className="panel-grid">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="hero-panel hero-panel-secondary">
              <span>PHP</span>
              <span>MySQL</span>
              <span>TypeScript</span>
            </div>
            <div className="hero-signal">
              <span></span>
              <span></span>
              <span></span>
            </div>
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

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                key={project.id}
                className={`project-card project-card-${project.prominence}`}
              >
                <ProjectVisual project={project} label={t.projects.imagePlaceholder} language={language} />
                <div className="project-card-body">
                  <div className="project-meta">
                    <span>{project.category[language]}</span>
                    {project.prominence === 'featured' ? <strong>{t.projects.featured}</strong> : null}
                  </div>
                  <h3>{project.title[language]}</h3>
                  <p>{project.summary[language]}</p>
                  <div className="project-tech-list">
                    {project.technologies.length > 0 ? (
                      project.technologies.slice(0, 5).map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))
                    ) : (
                      <span>{t.projects.stackPending}</span>
                    )}
                  </div>
                  <div className="project-card-footer">
                    <span className="private-label">{t.projects.privateProject}</span>
                    <button type="button" onClick={() => openProject(project)}>
                      {t.projects.viewDetails}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="capabilities-section section-shell">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">{t.capabilities.eyebrow}</p>
            <h2>{t.capabilities.title}</h2>
            <p>{t.capabilities.description}</p>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((capability) => (
              <article key={capability.id} className="capability-card">
                <h3>{capability.title[language]}</h3>
                <p>{capability.description[language]}</p>
                <div>
                  {capability.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="tech-section section-shell" aria-labelledby="tech-stack-title">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">{t.tech.eyebrow}</p>
            <h2 id="tech-stack-title">{t.tech.title}</h2>
            <p>{t.tech.description}</p>
          </div>

          <div className="tech-cloud">
            {techStack.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>

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
                  className="button button-secondary"
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {contactLabels[link.id]}
                </a>
              ))}

              {cvExists ? (
                <a className="button button-primary" href={publicPath(cvConfig.path)} download>
                  {t.contact.cv}
                </a>
              ) : null}

              {availableContacts.length === 0 && !cvExists ? (
                <p className="contact-empty">{t.contact.empty}</p>
              ) : null}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{t.footer.note}</p>
        <p>{t.footer.copyright}</p>
      </footer>

      {selectedProject ? (
        <ProjectDialog
          language={language}
          project={selectedProject}
          translations={t.projects}
          onClose={closeProject}
        />
      ) : null}
    </>
  )
}

function ProjectVisual({
  project,
  label,
  language,
}: {
  project: Project
  label: string
  language: Locale
}) {
  if (project.image.src) {
    return (
      <img
        className="project-image"
        src={publicPath(project.image.src)}
        alt={`${project.title[language]} preview`}
        loading="lazy"
      />
    )
  }

  return (
    <div
      className="project-visual"
      data-tone={project.image.tone}
      role="img"
      aria-label={`${project.title[language]} - ${label}`}
    >
      <span className="visual-index">{project.category[language]}</span>
      <strong>{project.title[language]}</strong>
      <span className="visual-rule"></span>
    </div>
  )
}

function ProjectDialog({
  language,
  project,
  translations: projectTranslations,
  onClose,
}: {
  language: Locale
  project: Project
  translations: (typeof translations.en)['projects']
  onClose: () => void
}) {
  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="dialog-close" type="button" onClick={onClose} autoFocus>
          {projectTranslations.closeDetails}
        </button>

        <ProjectVisual project={project} label={projectTranslations.imagePlaceholder} language={language} />

        <div className="dialog-content">
          <div className="project-meta">
            <span>{project.category[language]}</span>
            <strong>{projectTranslations.privateProject}</strong>
          </div>
          <h2 id="project-dialog-title">{project.title[language]}</h2>
          <p className="dialog-summary">{project.summary[language]}</p>

          <div className="dialog-columns">
            <DetailBlock title={projectTranslations.problem} content={project.problem[language]} />
            <DetailBlock title={projectTranslations.solution} content={project.solution[language]} />
            <DetailBlock title={projectTranslations.role} content={project.role[language]} />
          </div>

          <div className="dialog-lists">
            <div>
              <h3>{projectTranslations.features}</h3>
              <ul>
                {project.features[language].map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>{projectTranslations.technologies}</h3>
              <div className="project-tech-list">
                {project.technologies.length > 0 ? (
                  project.technologies.map((technology) => <span key={technology}>{technology}</span>)
                ) : (
                  <span>{projectTranslations.stackPending}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

function DetailBlock({ title, content }: { title: string; content: string }) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{content}</p>
    </section>
  )
}

export default App
