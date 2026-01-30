export const SITE_CONFIG = {
  name: "Heejin Jo",
  title: "Technical Founder | Production LLM Engineer | Healthcare AI",
  description: "I build AI products that ship.",
  url: "https://heejinjo.me",
  author: {
    name: "Heejin Jo",
    email: "midmost44@gmail.com",
    github: "https://github.com/JO-HEEJIN",
    linkedin: "https://linkedin.com/in/m0i0d",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "#products" },
  { label: "Deep Dives", href: "#deep-dives" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const;

export const LIVE_PRODUCTS = [
  {
    id: "taskflow-ai",
    title: "TaskFlow AI",
    status: "LIVE",
    oneLiner: "AI task management with Triple-Tier model routing",
    tech: ["Next.js", "TypeScript", "Azure OpenAI", "Cosmos DB"],
    achievement: "Microsoft Imagine Cup 2026 Approved",
    liveUrl: "https://taskflow-frontend.bravesky-cb93d4eb.eastus.azurecontainerapps.io/",
    githubUrl: "https://github.com/JO-HEEJIN/taskflow-ai",
    metrics: {
      label: "API Cost Reduction",
      value: "92.6%",
    },
  },
  {
    id: "interviewmate",
    title: "InterviewMate",
    status: "LIVE",
    oneLiner: "RAG-based AI interview preparation platform",
    tech: ["FastAPI", "React", "Qdrant", "Deepgram", "WebSocket"],
    achievement: null,
    liveUrl: "https://interviewmate.tech",
    githubUrl: "https://github.com/JO-HEEJIN/interviewmate",
    metrics: {
      label: "Search Performance",
      value: "10x",
    },
  },
] as const;

export const METRICS = [
  { value: "92.6%", label: "API cost reduction through model routing" },
  { value: "10x", label: "RAG search performance improvement" },
  { value: "68%", label: "Query time reduction with async optimization" },
  { value: "30%", label: "Semantic cache hit rate" },
  { value: "500+", label: "Clinical scans processed in healthcare AI" },
  { value: "2", label: "Live products serving real users today" },
] as const;

export const AWARDS = [
  { title: "AI Skin Burn Diagnosis Challenge", place: "1st Place", year: 2022 },
  { title: "Tide University Medical Academy", place: "2nd Place", year: 2022 },
  { title: "ICT AI Service Planning Program", place: "2nd Place", year: 2022 },
  { title: "Metaverse Developer Competition", place: "3rd Place", year: 2021 },
  { title: "NASA Space Apps Challenge 2025", place: "Local Award", year: 2025 },
  { title: "Microsoft Imagine Cup 2026", place: "Approved", year: 2026 },
] as const;

export const JOURNEY = [
  {
    period: "2018-2020",
    title: "Seoul Institute of the Arts",
    subtitle: "Digital Art",
    description: "Where I learned to think creatively",
  },
  {
    period: "2022-2024",
    title: "San Francisco Bay University",
    subtitle: "Computer Science, Full Scholarship",
    description: "Where I learned to build",
  },
  {
    period: "2024",
    title: "St. George's Medical School",
    subtitle: "Accepted",
    description: "Where I learned to care about human impact",
  },
  {
    period: "2024-Present",
    title: "University of the People",
    subtitle: "Health Science",
    description: "Where I bridge tech and healthcare",
  },
  {
    period: "2024-Present",
    title: "Birth2Death",
    subtitle: "Founded",
    description: "Where it all came together",
  },
] as const;

export const DEEP_DIVES = [
  {
    id: "model-routing",
    title: "Model Routing Architecture",
    subtitle: "How I achieved 92.6% API cost reduction while maintaining quality",
    icon: "route",
  },
  {
    id: "rag-optimization",
    title: "RAG Pipeline Optimization",
    subtitle: "From pgvector to Qdrant: 10x search performance journey",
    icon: "search",
  },
  {
    id: "healthcare-safety",
    title: "Healthcare AI Safety",
    subtitle: "Building PHI-compliant AI with safety guardrails",
    icon: "shield",
  },
] as const;
