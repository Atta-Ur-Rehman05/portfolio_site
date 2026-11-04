# Atta Ur Rehman - Portfolio

Responsive Next.js, React, TypeScript, Tailwind CSS, and Lucide portfolio. Exports to a static website with no backend service.

## Development

Use Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. In PowerShell with restricted script execution, use `npm.cmd` instead of `npm`.

## Build and verify

```sh
npm run lint
npm run build
npm run typecheck
npm run verify
```

The build generates `out/`, the complete deployable website. Verification checks six portfolio routes, internal links, section anchors, semantic structure, metadata, and local fonts.

## Deployment

- Vercel: import the repository with the Next.js preset and build command `npm run build`.
- Netlify, Cloudflare Pages, and other static hosts: build with `npm run build` and publish `out/`. Enable clean URLs so `/projects/intellex` serves `/projects/intellex.html`. Preserve the exported 404 page; do not rewrite every request to the homepage.
- Existing Sites hosting: `.openai/hosting.json` preserves the project identity and publish directory.

Set `NEXT_PUBLIC_SITE_URL` before building for a different production domain; see `.env.example`. It controls canonical URLs, metadata, robots, and sitemap. No secrets are needed.

For manual deployment, upload only the contents of `out/`. `next start` does not serve this static export.

## Structure and editing

- `src/app/`: routes, global styles, metadata, and local fonts with licenses.
- `src/components/`: layout, page sections, project cards, and diagrams.
- `src/data/`: profile, projects, skills, learning content, and site URL.
- `public/`: profile photo and favicon.
- `scripts/verify-export.mjs`: production export validation.
- `.openai/hosting.json`: existing hosting configuration.

Edit `src/data/content.ts` to update content. Adding a project there updates the directory, generated routes, and sitemap. The About photo is `public/atta photo.jpg`.

## Resume and case-study maintenance

No resume PDF is currently included. To enable a real download, add the approved PDF under `public/resume/`, then set `profile.resume` in `src/data/content.ts` to its URL (for example, `/resume/atta-ur-rehman.pdf`). Header, hero, and contact downloads appear only when that value is set. Run the build and verification; local PDF links are checked for an existing file and a PDF header.

The three main case studies include source references pinned to reviewed Git commits, a review date, and implementation limitations. Update those references and claims together when reviewing newer repository revisions. Source presence does not establish that a backend runs successfully or that its tests pass.

The public deployment URL is `https://portfolio-site-lilac-eight-30.vercel.app`. Set `NEXT_PUBLIC_SITE_URL` to that exact origin in Vercel's Production environment and redeploy; an older environment value overrides the source default.

The November 2026 review preserved the dark theme and core sections, clarified project/contact actions and internship scope, added source-linked implementation details, improved readable text and interaction targets, and added reduced-motion-aware entry animation. Full case-study data stays out of the project directory's interactive filtering props.

Validation passed for lint, TypeScript, the production export, six routes, 199 links, and 51 asset references. All ten pinned source files were accessible. The browser review stopped because computer use could not reliably identify the active URL, so responsive visual QA, screen-reader interaction, and Lighthouse scores remain unverified. Check those before publishing.

Keep `package-lock.json` for reproducible installations and preserve bundled font licenses. Generated dependencies, build caches, and exports are ignored by Git. Any archives under `outputs/` are historical backups and are not deployment inputs.
