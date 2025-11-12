# Heejin Jo - Creative Technologist Portfolio

A modern, interactive portfolio website showcasing AR/VR, AI/ML, and web development projects. Built for the Google Creative Technologist position application.

## 🚀 Features

- **Interactive 3D Hero**: Stunning Three.js animated hero section with particle effects
- **Project Showcase**: Comprehensive portfolio with 7 featured projects
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Performance Optimized**: <3s load time, Lighthouse score 95+
- **Smooth Animations**: Framer Motion for delightful interactions

## 📋 Projects Featured

1. **Vision Pro Mars Trainer** - Immersive AR Training for Mars Operations
2. **KisanAI** - Dual-Platform AR & AI Agricultural Platform 🏆 (NASA Winner)
3. **Coufun AR App** - AR Social Platform 🏆 (National Winner)
4. **Birth2Death** - ADHD Life Management App
5. **GetnShow** - Interactive Story Platform
6. **Skin Burn AI** - Medical AI Classification 🥇 (1st Place)
7. **Niaverse Funding Platform** - Decentralized Web3 Crowdfunding

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with Server Components
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library

### Deployment
- **Vercel** - Hosting and CDN
- **GitHub** - Version control

## 🏃 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navigation & Footer
│   ├── page.tsx           # Homepage with Hero
│   ├── projects/          # Projects showcase
│   ├── about/             # About page with skills
│   └── contact/           # Contact information
├── components/            # React components
│   ├── hero/             # 3D hero components
│   ├── layout/           # Layout components
│   ├── projects/         # Project showcase components
│   └── ui/               # Reusable UI components
├── data/                 # JSON data files
│   ├── projects.json     # Project information
│   └── skills.json       # Skills and expertise
├── lib/                  # Utilities and types
│   ├── types.ts          # TypeScript definitions
│   ├── utils.ts          # Helper functions
│   └── constants.ts      # App constants
└── public/               # Static assets
    └── images/           # Project images
```

## 🎨 Customization

### Adding Images
Add your project images to `/public/images/projects/`:
- Thumbnails: `{project-id}-thumb.jpg` (800x600px)
- Detail images: `{project-id}-1.jpg` (1200x800px)

### Updating Projects
Edit `/data/projects.json` to add/modify projects with:
- Title, description, category
- Tech stack, highlights
- Links (demo, GitHub)
- Metrics and awards

### Modifying Skills
Edit `/data/skills.json` to update your skills across categories:
- AR/VR Development
- AI & Machine Learning
- Web Development
- Mobile Development
- Tools & Technologies

### Changing Theme
Update colors in `tailwind.config.js` and `/lib/constants.ts`

## 📦 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables
No environment variables required for basic setup.

## 🎯 Performance Targets

- **Load Time**: < 3 seconds on 4G
- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 👤 Author

**Heejin Jo**
- Portfolio: [heejinjo.com](https://heejinjo.com)
- GitHub: [@JO-HEEJIN](https://github.com/JO-HEEJIN)
- LinkedIn: [m0i0d](https://linkedin.com/in/m0i0d)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- 3D graphics powered by [Three.js](https://threejs.org)
- Animations by [Framer Motion](https://framer.com/motion)
- Icons from [Heroicons](https://heroicons.com)

---

Built with 💙 for Google Creative Technologist Application
