import { projects } from '@/data/projects';
import Link from 'next/link';
import ProjectImageSlider from '@/components/ProjectImageSlider';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 hover:underline mb-8 inline-block transition-colors">
        &larr; Back to Projects
      </Link>
      <div className="bg-white/95 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-xl border border-indigo-100/60 dark:border-gray-600/50 overflow-hidden">
        <ProjectImageSlider imageUrls={project.imageUrls} title={project.title} />
        <div className="p-6 sm:p-10 h-80">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-xs font-semibold mr-2 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
            {project.detailedDescription}
          </p>
          {/* <div className="mt-8 flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                GitHub
              </a>
            )}
          </div>*/}
        </div>
      </div>
    </div>
  );
}
