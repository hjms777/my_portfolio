import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/Section';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { experiences } from '@/data/experiences';
import { projects } from '@/data/projects';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="fixed top-6 right-6 z-50">
        <ThemeSwitcher />
      </div>

      {/* Hero Section */}
      <Section id="intro">
        <div className="flex flex-col justify-center items-center min-h-[80vh] py-20">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/d/1wJHzpfn6O6QST3CtMel1sE6unLmiknbK"
                  alt="Profile Picture"
                  fill
                  style={{ objectFit: 'cover', objectPosition: '50% 25%' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>

            <div className="text-center md:text-left max-w-xl space-y-6">
              <div>
                <h2 className="text-sm font-semibold text-primary tracking-wider uppercase mb-2">Developer Portfolio</h2>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Kang Minsung
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  호기심으로 나아가는 개발자, 강민성입니다.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                IT 전반과 전자기기에 깊은 관심을 갖고, 시스템의 동작 원리를 탐구합니다.
                반복적이고 복잡한 일을 자동화하고, 새로운 기술을 적극적으로 도입하여
                더 나은 가치를 만들어내는 것을 즐깁니다.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
                <Link href="#contact" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  Connect
                </Link>
                <Link href="#projects" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="py-20 max-w-5xl mx-auto">
          <SectionHeading>Technical Skills</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold mb-4 text-primary">BackEnd</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring Boot', 'Nest.js'].map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold mb-4 text-primary">FrontEnd</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Next.js'].map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold mb-4 text-primary">Database & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL', 'Oracle', 'Git', 'Docker'].map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="py-20 max-w-6xl mx-auto">
          <SectionHeading>Featured Projects</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/project/${project.id}`} className="block h-full">
                <Card className="h-full group hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <div className="w-full h-64 relative overflow-hidden border-b border-border">
                    <Image
                      src={project.imageUrls[0]}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={`${project.id}-${tag}`} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">+{project.tags.length - 3}</Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <div className="py-20 max-w-4xl mx-auto px-4">
          <SectionHeading>Work Experience</SectionHeading>

          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 space-y-12">
            {experiences.map((exp) => (
              <div key={`${exp.company}-${exp.period}`} className="relative pl-8 md:pl-12 group">
                <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1.5 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_0_4px_rgba(var(--primary),0.1)]"></div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                  <span className="text-sm font-medium text-primary/80 bg-primary/5 px-3 py-1 rounded-full mt-1 sm:mt-0 w-fit">
                    {exp.period}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-muted-foreground mb-4">{exp.company}</h4>

                <Card className="p-6 bg-secondary/30 border-none">
                  <ul className="space-y-2">
                    {exp.tasks.map((task) => (
                      <li key={`${exp.company}-${exp.period}-${task}`} className="flex items-start text-muted-foreground">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="py-20 max-w-3xl mx-auto text-center">
          <SectionHeading>Connect</SectionHeading>

          <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:iammins129@gmail.com"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-2 bg-background rounded-full group-hover:scale-110 transition-transform shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium text-lg">Email</span>
            </a>

            <a
              href="https://github.com/hjms777"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-2 bg-background rounded-full group-hover:scale-110 transition-transform shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </div>
              <span className="font-medium text-lg">GitHub</span>
            </a>
          </div>
        </div>
      </Section>

      <footer className="text-center text-xs text-muted-foreground py-8 border-t border-border">
        <p>이 프로젝트는 Codex를 중심으로 제작했으며, Claude Code와 Gemini on Antigravity도 함께 활용해봤습니다.</p>
      </footer>
    </div>
  );
}
