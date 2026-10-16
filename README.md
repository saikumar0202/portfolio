# Sai Kumar Anapuram — Portfolio

Personal portfolio site. React 19 + TypeScript + Vite, plain CSS, no UI framework.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Where to change things

| What | Where |
| --- | --- |
| All text — intro, experience, projects, skills, links | `src/data/profile.ts` |
| Accent colour (re-themes the whole site) | `--accent` in `src/styles.css` |
| Your photo | Put `photo.jpg` in `public/`, then set `photo: '/photo.jpg'` in `profile.ts` |
| Résumé PDF | Replace `public/Sai_Kumar_Anapuram_Resume.pdf` (keep the name, or update `resume` in `profile.ts`) |
| Page title / SEO / social preview | `index.html` |

## Structure

```
src/
  data/profile.ts        content (single source of truth)
  components/            Header, Hero, Section, Experience, Projects, Contact, Tags, Icons
  hooks/                 useSpotlight (cursor glow), useActiveSection (nav), useReveal (scroll fade-in)
  styles.css             tokens + all styles
public/                  favicon, résumé PDF
```

## Notes

- The cursor glow updates CSS variables inside `requestAnimationFrame`, so it never re-renders React.
- Respects `prefers-reduced-motion`; all motion turns off for users who ask for it.
- Keyboard accessible: skip link, visible focus rings, mobile menu with `aria-expanded`.

## Deploy (Vercel)

`vercel.json` already sets the framework (Vite), build command, output folder,
long-term caching for hashed assets, and basic security headers.

- **From the CLI:** `npx vercel` for a preview, `npx vercel --prod` for production.
- **From GitHub:** push this folder to a repo, then *Add New → Project* on vercel.com and import it; every push redeploys.

The site is set up for **https://saikumar-anapuram.vercel.app**. If you deploy under a
different address or add a custom domain, update that URL in `index.html`
(canonical, Open Graph, Twitter, JSON-LD), `public/robots.txt` and `public/sitemap.xml`.

`public/og.jpg` is the 1200×630 preview image shown when the link is shared on
LinkedIn, WhatsApp, Slack or X.
