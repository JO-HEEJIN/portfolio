import { ProjectGrid } from "@/components/projects/ProjectGrid";
import projectsData from "@/data/projects.json";

export default function ProjectsPage() {
  const projects = projectsData.projects;

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of AR/VR experiences, AI-powered applications, and web platforms
          </p>
        </div>

        {/* Projects Grid */}
        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
