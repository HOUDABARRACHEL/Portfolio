# Houda Barrachel — Portfolio

Bilingual (FR/EN) personal portfolio built with React 19, Vite, Tailwind CSS, Framer Motion, React Router and react-i18next.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files are written to `dist/`.

## Project structure

```
src/
├── assets/logos/     # company & school logos
├── components/       # Navbar, Hero, About, Skills, Languages,
│                        Experience, Education, Projects, Contact, Footer, Decorations
├── context/           # ThemeContext (dark/light mode)
├── data/               # skills.js, experience.js, education.js, projects.js
├── locales/           # fr.json, en.json — all site copy lives here
├── pages/Home.jsx     # assembles all sections
├── i18n.js
├── App.jsx
└── main.jsx
```

## Things to finish before launch

- **Profile photo**: the hero currently shows a decorative placeholder frame ("Photo coming soon"). Drop a real photo into `src/assets/img/` and swap it into `src/components/Hero.jsx`.
- **CV file**: the "Download CV" button links to `/Houda_Barrachel_CV.pdf`. Add that PDF to the `public/` folder (or update the `href` in `Hero.jsx`) so the download works.
- **Project cards**: the 6 project cards in `src/data/projects.js` are placeholders (gradient covers, "Coming soon" badges, dummy GitHub/demo links). Replace `github`/`demo` URLs and add real screenshots when ready — swap the gradient `div` in `Projects.jsx` for an `<img>`.
- **Adding a language**: duplicate `src/locales/en.json` as a new file, translate it, and register it in `src/i18n.js`.

## Notes

- Dark/light mode is toggled from the navbar and persisted in `localStorage`.
- Language preference is also persisted (`houda-lang` in `localStorage`).
- All animations respect `prefers-reduced-motion`.
