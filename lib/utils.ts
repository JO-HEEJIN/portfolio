import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Project, ProjectCategory } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProjectsByCategory(
  projects: Project[],
  category: ProjectCategory
): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getFeaturedProjects(projects: Project[]): Project[] {
  // Return the first 3-6 projects as featured
  return projects.slice(0, 6);
}

export function getProjectById(projects: Project[], id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function formatDate(date: Date | null): string {
  if (!date) return "Present";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
  }).format(date);
}

export function getDuration(startDate: Date, endDate: Date | null): string {
  const end = endDate || new Date();
  const months = Math.floor(
    (end.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30)
  );
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${months} month${months > 1 ? "s" : ""}`;
  }
  if (remainingMonths === 0) {
    return `${years} year${years > 1 ? "s" : ""}`;
  }
  return `${years} year${years > 1 ? "s" : ""}, ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
}
