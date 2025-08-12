import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/Section';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { experiences } from '@/data/experiences';
import { projects } from '@/data/projects';

export default function HomePage() {
  return (
    <main className="p-4 sm:p-8">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
      {/* 소개 섹션 */}
      <Section id="intro">
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 relative flex-shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/d/1wJHzpfn6O6QST3CtMel1sE6unLmiknbK" // 프로필 사진 경로
                alt="Profile Picture"
                className="rounded-full"
                fill
                style={{ objectFit: 'cover', objectPosition: '50% 25%' }}
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg">
                안녕하세요, 호기심으로 나아가는 개발자 강민성 입니다. <br />
                IT 전반과 전자기기에 깊은 관심을 갖고, 시스템이 어떻게 동작하는지 끊임없이 궁금해하며 <br />
                반복적이고 복잡한 일을 최소화하고, 현상황에 더 좋은 기술이 있다면 바로 적용해보는 것을 좋아합니다.
                <br />
                현재는 백엔드 영역을 주로 다루며 전문성을 키우고자 노력 중이며, 언젠가는 직접만든 서비스를 통해 <br />
                많은 사람들에게 편의를 제공하고 싶습니다.
                <br />
                끊임없이 물음을 던지며 성정하는 자세가 저의 가장 큰 장점입니다.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills">
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <p className="text-lg">BackEnd: Java, Spring Boot, Nest.js</p>
          <p className="text-lg">FrontEnd: JavaScript, Vue.js</p>
          <p className="text-lg">DataBase: MySQL, PostgreSQL, Oracle</p>
        </div>
      </Section>

      <Section id="projects">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link key={index} href={`/project/${project.id}`}>
                <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white h-full">
                  <div className="w-full h-80 relative">
                    <Image src={project.imageUrls[0]} alt={project.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="p-6 h-52">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section id="experience">
        <div className="flex flex-col justify-center h-full px-32">
          {/*px로 막대수정*/}
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="relative border-l-2 border-indigo-500 pl-16">
            {/*pl로 내용수정*/}
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12">
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 mt-1.5 shadow-lg"></div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                <h3 className="text-xl font-bold mt-1">{exp.position}</h3>
                <h4 className="text-lg font-semibold">{exp.company}</h4>
                <ul className="mt-4 list-disc list-inside">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact">
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="space-y-4">
            <a
              href="mailto:iammins129@gmail.com"
              className="flex items-center text-lg hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              iammins129@gmail.com
            </a>
            <a
              href="https://github.com/hjms777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lg hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              github.com/hjms777
            </a>
            {/* <a
              href="https://naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lg hover:text-teal-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="currentColor"
                viewBox="0 0 459 459"
              >
                <g>
                  <path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
                </g>
              </svg>
              tstory.blog
            </a>*/}
            {/*추후등록*/}
          </div>
        </div>
      </Section>

      <footer className="text-center text-xs text-gray-500 py-8">
        <p>이 페이지는 Gemini CLI와 Claude Code를 사용하여 제작되었습니다.</p>
      </footer>
    </main>
  );
}
