# Ignacio Galilea Portfolio

Professional bilingual portfolio for Ignacio Galilea, built with React, TypeScript, and Vite.

The site is designed as a static portfolio that can be published on GitHub Pages from a `username.github.io` repository.

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- GitHub Actions

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

## Lint

```bash
npm run lint
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Where To Edit Information

Most portfolio content is centralized in these files:

- `src/data/profile.ts`: name, role, main stack, contact links, CV path.
- `src/data/projects.ts`: project list, descriptions, roles, features, technologies, categories, screenshot file names.
- `src/data/tech.ts`: capabilities and technology stack.
- `src/i18n/translations.ts`: English and Spanish UI copy, navigation, SEO text, section titles, labels, footer.

## Contact Links

Add your real links in `src/data/profile.ts`.

```ts
export const contactLinks = [
  {
    id: 'email',
    href: 'mailto:your-email@example.com',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/your-profile/',
  },
  {
    id: 'github',
    href: 'https://github.com/your-user',
  },
]
```

If a value is empty, the portfolio does not render that button.

## Project Screenshots

Place real screenshots in:

```text
public/projects/
```

Recommended file names are documented in `public/projects/README.md`.

After adding a screenshot, update the matching project in `src/data/projects.ts`:

```ts
image: {
  src: '/projects/arreglosya.webp',
  fileName: 'arreglosya.webp',
  tone: 'teal',
}
```

If `image.src` is empty, the portfolio shows a designed placeholder instead of a broken image.

## CV

Place the CV here:

```text
public/cv/ignacio-galilea-cv.pdf
```

The portfolio checks for that file and only shows the download button when it exists.

## GitHub Pages

This project is prepared for a repository named:

```text
<your-github-username>.github.io
```

Vite is configured with `base: '/'`, so the site is served from the root domain.

Deployment is automated through:

```text
.github/workflows/deploy.yml
```

On every push to `main`, the workflow:

1. Installs dependencies.
2. Runs lint.
3. Builds the site.
4. Publishes `dist/` to GitHub Pages.

In GitHub, make sure Pages is configured to use GitHub Actions as the deployment source.

## Languages

The site supports English and Spanish from the same React app.

- It detects the browser language on first load.
- It falls back to English.
- It stores the selected language in `localStorage`.
- It updates the document language and metadata at runtime.

## Theme

The site supports light and dark mode from the same interface.

- It detects the browser color scheme on first load.
- It stores the selected theme in `localStorage`.
- It updates the document theme with `data-theme`.
