import type { Route } from "./+types/home";
import HeroSection from "~/components/hero";
import AboutSection from "~/components/about";
import ProjectsSection from "~/components/projects";
import ContactSection from "~/components/contact";
import Project, { type ProjectType } from "~/db/models/Project";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Siiri Lietu portfolio" },
    { name: "description", content: "Welcome to my frontend portfolio. Explore my recent projects and get to know me!" },
  ];
}

export async function loader() {
  const projects = await Project.find().lean();
  if (!projects) {
    throw new Response("Not Found", { status: 404 });
  }
  return Response.json({ projects });
}

export default function Home({
  loaderData,
}: {
  loaderData: {
    projects: ProjectType[];
  };
}) {
  const { projects } = loaderData;

  return (
    <div className="snap-y snap-normal overflow-y-auto scroll-smooth">
      <section className="md:min-h-screen md:snap-start">
        <HeroSection />
      </section>
      <section className="md:min-h-screen md:snap-start">
        <AboutSection />
      </section>
      <section className="min-h-screen overflow-visible md:snap-start">
        <ProjectsSection projects={projects} />
      </section>
      <section className="md:h-screen md:snap-start">
        <ContactSection />
      </section>
    </div>
  );
}
