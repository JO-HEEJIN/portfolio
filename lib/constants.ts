import projectsData from "@/data/projects.json";

export const SITE_CONFIG = {
  name: "Heejin Jo",
  title: "Applied AI Engineer & Founder",
  description: "I build AI systems that hold up in production.",
  url: "https://heejinjo.me",
  author: {
    name: "Heejin Jo",
    email: "info@birth2death.com",
    github: "https://github.com/JO-HEEJIN",
    linkedin: "https://linkedin.com/in/m0i0d",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Selected Work", href: "/#products" },
  { label: "Approach", href: "/#approach" },
  { label: "Research", href: "/#deep-dives" },
  { label: "Experience", href: "/#journey" },
  { label: "All Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
] as const;

export const FEATURED_PROJECTS = projectsData.projects.filter(
  (project) => "featured" in project && project.featured
);

export const CAPABILITIES = [
  { title: "Agent workflows", detail: "LangGraph state and routing, MCP tools, LangSmith tracing, explicit action boundaries." },
  { title: "Retrieval systems", detail: "RAG, graph context, embeddings, Qdrant, Chroma, semantic caching, and source attribution." },
  { title: "Evaluation", detail: "Repeated trials, human judgment, model-based graders, grader validation, and regression checks." },
  { title: "Backend & data", detail: "Python, Go, TypeScript, FastAPI, PostgreSQL / PostGIS, Redis, and custom ETL." },
  { title: "Production operations", detail: "Streaming, model routing, layered fallbacks, access control, Sentry, Docker, and CI/CD." },
  { title: "Medical & vision systems", detail: "DICOM, OpenCV, 3D Slicer, DEIM-based detection, FHIR, and on-premise NLP systems." },
] as const;

export const AWARDS = [
  { title: "NASA International Space Apps Challenge", place: "Local Impact Award", year: 2025 },
  { title: "AI Skin Burn Diagnosis Challenge", place: "1st Place", year: 2022 },
  { title: "ICT AI Service Planning Program", place: "2nd Place", year: 2022 },
  { title: "Metaverse Programmer Contest", place: "3rd Place", year: 2021 },
] as const;

export const JOURNEY = [
  { period: "2026–Present", title: "InterviewMate", subtitle: "Founder & AI Engineer", description: "Own real-time inference, evaluation, deployment, and production debugging. Turned a production failure into a reproducible model-behavior research program." },
  { period: "Oct 2022–Present", title: "Birth2Death LLC", subtitle: "Founder & AI Engineer", description: "Build products across AI, data infrastructure, and learning, including b2d_geo, TaskFlow AI, and Socratic Kernel. Own architecture through deployment." },
  { period: "Apr–Oct 2023", title: "Lime Friends", subtitle: "Python Developer / AI Engineer", description: "Built privacy-sensitive AI and NLP systems, including an on-premise healthcare chatbot architecture. Translated requirements with more than 10 demand-side organizations." },
  { period: "Dec 2021–Apr 2023", title: "SKIA", subtitle: "XR Specialist · Medical Imaging", description: "Developed DICOM CT and computer-vision workflows with Python, OpenCV, 3D Slicer, and Unity. Worked directly with physicians and hospital stakeholders." },
] as const;

export const RESEARCH = [
  {
    id: "2607.16451",
    title: "Committed Before Reasoning",
    subtitle: "Behavioral reproduction and preliminary activation-level evidence of answer pre-commitment in an open-weight LLM.",
    detail: "Reproduced the failure on Qwen3-8B across 210 rollouts and five prompt conditions. Used a pretrained, training-free Activation Oracle to inspect pre-emission hidden states; the activation evidence remains preliminary.",
    scope: "210 rollouts · 5 prompt conditions",
  },
  {
    id: "2602.21814",
    title: "Prompt Architecture Determines Reasoning Quality",
    subtitle: "A variable isolation study on the Car Wash Problem.",
    detail: "A six-condition, 120-trial study isolating structured reasoning, retrieved profile context, and RAG context to measure their contribution to implicit-constraint reasoning.",
    scope: "120 trials · 6 conditions",
  },
  {
    id: "2603.13351",
    title: "Prompt Complexity Dilutes Structured Reasoning",
    subtitle: "A follow-up study on the Car Wash Problem.",
    detail: "Tested how competing production-prompt instructions can collapse an effective reasoning scaffold, and examined reason-then-conclude ordering as a prompt design variable.",
    scope: "Production-prompt ablations",
  },
] as const;
