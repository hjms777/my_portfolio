import { projects } from '@/data/projects';
import Link from 'next/link';
import ProjectImageSlider from '@/components/ProjectImageSlider';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

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
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        <Card className="overflow-hidden border-none shadow-2xl bg-card/50 backdrop-blur-sm">
          <div className="bg-secondary/30 border-b border-border">
            <ProjectImageSlider imageUrls={project.imageUrls} title={project.title} />
          </div>

          <div className="p-8 sm:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground tracking-tight">{project.title}</h1>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-sm py-1 px-3">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 shrink-0"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>

            <div className="space-y-5">
              {project.detailSections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-xl border border-border/60 bg-card/70 p-5 sm:p-6 shadow-sm"
                >
                  <h2 className="text-lg font-semibold text-foreground mb-3">{section.title}</h2>
                  <ul className="space-y-2 ml-5 list-disc text-muted-foreground leading-relaxed">
                    {section.items.map((item, itemIndex) => (
                      <li key={`${section.title}-${itemIndex}`} className="pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
