# Atta Ur Rehman — Obsidian Signal portfolio

A responsive Next.js App Router portfolio implemented from the supplied Google Stitch screenshots and HTML exports. Uses React, TypeScript, Tailwind CSS 4, Lucide SVG icons, and local Geist / Inter / JetBrains Mono variable fonts. No database, server API, analytics, or contact-form service is required.

## Run locally

Use Node.js 22.13+ (tested with Node 24).

```sh
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell with restricted script execution, use `npm.cmd` in place of `npm`.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
npm run verify
```

`verify` inspects the actual static export for routes, internal links, fragment targets, page headings, metadata, sitemap, robots, local fonts, and Intellex status. It does not replace browser, screen-reader, or Lighthouse testing.

## Routes and components

- `/`: homepage with About, Experience, Featured Projects, Skills, Learning, Education, Contact.
- `/projects`: filterable directory with counts derived from typed project categories.
- `/projects/[slug]`: one reusable detail template for Intellex and the three learning repositories.
- The shared header supports a mobile toggle, Escape to close, visible focus, and appropriate navigation labels. A skip link and reduced-motion styles are included.
- Most content renders as server components. Only the interactive header and directory filter require client components.
- Diagrams use small inline SVGs rather than screenshot images or canvas dependencies. The original screenshot images stay in the reference folder and are not shipped as page backgrounds.

## Edit content

`portfolio-content.md` records the approved factual baseline and handling of conflicts in the design exports. Edit `src/data/content.ts` to update profile information, internship text, education, project detail content, skills, and learning interests. All project cards and detail pages use the same typed objects.

To add a project, add a `Project` object with a unique slug. The directory, static route generation, related links, and sitemap use the project list automatically. Keep descriptions and progress grounded in supplied or reviewed evidence. All diagrams are conceptual illustrations, not implemented feature certifications.

To activate a resume, put a real PDF under `public/resume/` and set `profile.resume` to its absolute URL path, such as `/resume/atta-ur-rehman.pdf`. No fake resume or disabled download is shown.

## Design reference

All seven supplied files were copied unchanged to `stitch-reference/`: homepage, project directory, and Intellex case-study screenshot/HTML pairs, plus `obsidian_signal/DESIGN.md`. No separate mobile exports were supplied; mobile layouts adapt the approved desktop design. Shared styling and responsive breakpoints live in `src/app/globals.css`.

## Deploy

The project uses `output: 'export'`. `npm run build` writes all deployable files to `out/`.

- **Vercel:** import the repository, select Next.js, use the build script. The static export is generated automatically.
- **Cloudflare Pages / Netlify / other static hosts:** build with `npm run build` and publish `out/`. Enable clean URL handling so `/projects/intellex` resolves to `/projects/intellex.html`. Do not rewrite every request to the homepage.
- **Sites:** `.openai/hosting.json` declares the private Site and `out/` as the static directory. Use the existing project ID for future updates.

`next start` does not serve an exported site. Use the development command locally or a static file server configured for clean URLs when previewing `out/`.

Set `NEXT_PUBLIC_SITE_URL` **before building** when deploying to another domain. It controls the metadata base, canonical URLs, and sitemap. The default is the actual registered Sites origin, not an invented domain. No other environment configuration or secret is required. Preserve font licenses in `src/app/fonts/`.

## Remaining review

- Supply a real resume if desired.
- Add authentic project screenshots or demo links only when available.
- Browser visual comparison, real mobile interaction, console inspection, screen-reader testing, and Lighthouse measurements require an available browser automation session. They are not claimed by the static checks.
- The user-facing code is deployable without a backend; do not add a database merely to list it in the stack.
