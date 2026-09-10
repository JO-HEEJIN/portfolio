# Heejin Jo — AI Engineer Portfolio

Personal portfolio at [heejinjo.me](https://heejinjo.me), built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The hero uses a small native WebGL aurora sphere with an immediate CSS fallback. Hosted on Vercel.

The portfolio presents production AI systems, agent workflows, retrieval, evaluation, and research. Selected work includes b2d_geo, the independent Welda RAG prototype, InterviewMate, TaskFlow AI, and Socratic Kernel.

## Development

Use a current Node.js version compatible with the dependencies (Node 24.4 or newer).

```bash
npm ci
npm run dev
```

```bash
npm run lint
npm run build
```

## Content

- `data/projects.json`: shared project descriptions, status, links, and supporting details for the homepage and project archive.
- `lib/constants.ts`: navigation, capabilities, experience, awards, and research.
- `components/sections`: homepage presentation.
- `app/projects/page.tsx`: full project archive and image galleries.
- `app/layout.tsx`: search and social metadata.

Content is grounded in the supplied resume and project implementation reviewed in September 2026. Project status distinguishes deployed work from independent prototypes. Documented data scale is approximate, research is labeled as arXiv preprints, and preliminary findings retain their limitations.

## Deployment

Keep the existing Vercel project and domain configuration. Deploy the reviewed source through the repository's established Vercel integration. No hosting migration is required.
