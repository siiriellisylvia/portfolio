import ProjectsList from "./project-list";
import type { ProjectType } from "~/db/models/Project";

interface ProjectsSectionProps {
  projects: ProjectType[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="bg-light-pink relative z-6 flex min-h-screen w-full flex-col px-[var(--spacing-page-mobile)] md:px-[var(--spacing-page)] 2xl:px-[var(--spacing-page-xl)]">
      <div className="py-10">
        <h2>My most recent work</h2>
        <ProjectsList projects={projects} />
      </div>
    </section>
  );
}
