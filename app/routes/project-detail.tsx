import { Calendar, Hourglass, Swords, UserRound } from "lucide-react";
import Project, { type ProjectType } from "~/db/models/Project";
import Button from "~/components/button";
// Import your icons here

export async function loader({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = await Project.findOne({ slug }).lean();
  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }

  return Response.json({ project });
}

export default function ProjectDetail({
  loaderData,
}: {
  loaderData: { project: ProjectType };
}) {
  const { project } = loaderData;

  return (
    <main className="flex min-h-screen w-full flex-col">
      <section className="flex h-auto min-w-1/2 flex-col items-center px-[var(--spacing-page-mobile)] pt-20 pb-5 md:flex-row md:items-center md:justify-between md:px-[var(--spacing-page)] 2xl:px-[var(--spacing-page-xl)]">
        <div className="flex flex-col gap-4">
          <h2>{project.title}</h2>
          <h3 className="text-green-dark">{project.subtitle}</h3>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex flex-row gap-2">
              <Calendar />
              <p>{project.date}</p>
            </div>
            <div className="flex flex-row gap-2">
              <Hourglass />
              <p>{project.duration}</p>
            </div>
            <div className="flex flex-row gap-2">
              <UserRound />
              <p> {project.type}</p>
            </div>
            <div className="flex flex-row gap-2">
              <Swords />
              <p>{project.tech}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-row gap-4">
            {project.liveLink && (
              <div className="mt-6">
                <Button
                  label="Live demo"
                  link={project.liveLink}
                  isExternal={true}
                  className="bg-primary-green text-primary-pink"
                />
              </div>
            )}
            {project.githubLink && (
              <div className="mt-6">
                <Button
                  label="Github"
                  link={project.githubLink}
                  isExternal={true}
                  className="bg-primary-green text-primary-pink"
                />
              </div>
            )}
          </div>
        </div>

        {project.video ? (
          <video
            className="w-full mt-6 md:mt-0 md:w-1/2 md:h-[50vh]"
            autoPlay
            loop
            muted
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title || "Project image"}
            className="w-full mt-6 rounded-lg object-contain md:mt-0 md:w-1/2 md:h-full"
          />
        ) : (
          <div className="flex w-full h-48 mt-6 items-center justify-center rounded-lg bg-gray-200 md:mt-0 md:h-full md:w-4/5">
            <p className="text-gray-500">No media available</p>
          </div>
        )}
      </section>
      <section className="bg-light-pink flex-grow px-[var(--spacing-page-mobile)] py-5 md:px-[var(--spacing-page)] 2xl:px-[var(--spacing-page-xl)]">
        {project.overview && (
          <>
            <h3 className="text-primary-green mt-6">Overview</h3>
            <p className="text-primary-green mt-4 text-lg">
              {project.overview}
            </p>
          </>
        )}
        {project.features && project.features.length > 0 && (
          <>
            <h3 className="mt-6">Features</h3>
            <ul className="mt-4 list-disc pl-5">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}
        {project.improvements && (
          <>
            <h3 className="mt-6">Improvements</h3>
            <p className="mt-4">
              {project.improvements}
            </p>
          </>
        )}
        {/* Conditionally render YouTube video if link exists */}
        {project.youtubeLink && (
          <>
            <h3 className="mt-6">Video presentation</h3>
            <div>
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={project.youtubeLink}
                  title="YouTube video player for project"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </>
        )}
        {/* Conditionally render custom embed (Canva) if it exists */}
        {project.customEmbed && project.customEmbed.html && (
          <>
            {project.customEmbed.title && (
              <h3 className="mt-6">
                {project.customEmbed.title}
              </h3>
            )}
            <div
              dangerouslySetInnerHTML={{
                __html: project.customEmbed.html,
              }}
            />
          </>
        )}
      </section>
    </main>
  );
}
