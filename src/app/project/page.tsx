'use client'

import { useState } from 'react'

export default function ProjectsSection() {
  const [showProject, setShowProjects] = useState(false)

  const projects = [
    {
      title: 'crud-1',
      desc: 'MongoDB를 추가한 Next.js',
      tech: 'TypeScript',
      date: '2025-11-20',
      link: 'https://github.com/myyonop/crud-1',
    },
    {
      title: 'WebS_Portfolio',
      desc: '2학기 포트폴리오',
      tech: 'TypeScript',
      date: '2025-11-20',
      link: 'https://github.com/myyonop/WebS_Portfolio',
    },
    {
      title: 'test',
      desc: '초기 Next.js 파일',
      tech: 'TypeScript',
      date: '2025-10-20',
      link: 'https://github.com/myyonop/test',
    },
    {
      title: 'clerk-app',
      desc: 'ckerk 추가된 Next.js',
      tech: 'TypeScript',
      date: '2025-10-14',
      link: 'https://github.com/myyonop/clerk-app',
    },
    {
      title: 'Cryptography',
      desc: '암호학 수업 내 사용한 다양한 Python 파일',
      tech: 'Python',
      date: '2025-09-30',
      link: 'https://github.com/myyonop/Cryptography',
    },
  ]

  return (
    <section className="px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mt-15 mb-4">Project</h1>
      <p className="text-xl mb-4">2025년도 2학기 프로젝트 모음</p>

      <button
        onClick={() => setShowProjects(!showProject)}
        className="px-4 py-2 bg-gray-500 text-white rounded mb-6
                   transition-transform duration-200 ease-out
                   hover:-translate-y-1 hover:bg-gray-600"
      >
        Show/Hide Projects
      </button>

      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-gray-800 text-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-out
              ${
                showProject
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-6'
              }
            `}
            style={{ transitionDelay: `${index * 150}ms` }} // 순차 등장
          >
            <h3 className="font-bold text-lg">{project.title}</h3>
            <p className="text-gray-300">{project.desc}</p>
            <div className="flex justify-between text-sm mt-2 text-gray-400">
              <span>🛠 {project.tech}</span>
              <span>{project.date}</span>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2 inline-block"
            >
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
