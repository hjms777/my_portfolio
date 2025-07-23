import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

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
      <Link href="/" className="text-teal-500 hover:underline mb-8 inline-block">
        &larr; Back to Projects
      </Link>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-64 sm:h-96 relative">
          <Image src={project.imageUrl} alt={project.title} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
            {project.detailedDescription}
          </p>
          <div className="mt-8 flex gap-4">
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
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
