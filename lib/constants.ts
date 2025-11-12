export const SITE_CONFIG = {
  name: "Heejin Jo",
  title: "Creative Technologist",
  description: "Full-stack developer specializing in AR/VR, AI/ML, and immersive web experiences",
  url: "https://heejinjo.com", // Update with actual domain
  author: {
    name: "Heejin Jo",
    email: "info@birth2death.com", // Update with actual email
    github: "https://github.com/JO-HEEJIN", // Update
    linkedin: "https://linkedin.com/in/m0i0d", // Update
  },
} as const;

export const CATEGORY_LABELS: Record<string, string> = {
  AR_VR: "AR/VR",
  AI_ML: "AI/ML",
  WEB: "Web",
  HEALTHCARE: "Healthcare",
  BLOCKCHAIN: "Blockchain",
} as const;

export const CATEGORY_COLORS: Record<string, string> = {
  AR_VR: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  AI_ML: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  WEB: "bg-green-500/10 text-green-500 border-green-500/20",
  HEALTHCARE: "bg-red-500/10 text-red-500 border-red-500/20",
  BLOCKCHAIN: "bg-orange-500/10 text-orange-500 border-orange-500/20",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
