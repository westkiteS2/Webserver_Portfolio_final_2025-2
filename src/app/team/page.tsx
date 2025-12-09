import React from 'react'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

interface TeamMember {
  id: number
  name: string
  studentId: string
  imageSrc: string
  portfolioLink: string
  githubLink: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '김가연',
    studentId: '92410665',
    imageSrc: '/images/bora120.jpg',
    portfolioLink: 'https://portfoilo2-2.vercel.app/',
    githubLink: 'https://github.com/bora120',
  },
  {
    id: 2,
    name: '조은수',
    studentId: '92410926',
    imageSrc: '/images/myyonop.jpg',
    portfolioLink: 'https://web-s-portfolio.vercel.app/',
    githubLink: 'https://github.com/myyonop',
  },
  {
    id: 3,
    name: '천서연',
    studentId: '92410940',
    imageSrc: '/images/westkiteS2.jpg',
    portfolioLink: 'https://webserver-portfolio-final-2025-2.vercel.app/',
    githubLink: 'https://github.com/westkiteS2',
  },
  {
    id: 4,
    name: '최수민',
    studentId: '92410952',
    imageSrc: '/images/sumin8838.png',
    portfolioLink: 'https://my-portfolio-five-psi-32.vercel.app/',
    githubLink: 'https://github.com/sumin8838',
  },
]

const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    // 배경색을 짙은 회색으로 변경 (#242424), 슬리데린 그린 테두리 적용 (#1A472A)
    <div className="bg-[#242424] p-4 rounded-lg shadow-xl text-center transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 border-2 border-[#1A472A]">
      <img
        src={member.imageSrc}
        alt={`${member.name} 프로필`}
        className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
      />

      {/* 이름 텍스트 색상을 은색 계열로 변경 (#E0E0E0) */}
      <h3 className="text-xl font-bold text-[#E0E0E0] mb-1">{member.name}</h3>

      {/* 학번 텍스트 색상을 대비를 위해 밝은 회색으로 변경 */}
      <p className="text-sm text-gray-400 mb-3">{member.studentId}</p>

      <div className="flex justify-center space-x-4 mt-3">
        <a
          href={member.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          // 아이콘 색상을 슬리데린 그린으로 변경 (#1A472A), 호버 시 은색 계열 (#E0E0E0)
          className="text-[#1A472A] hover:text-[#E0E0E0] transition"
        >
          <AiFillGithub size={24} />
        </a>

        <a
          href={member.portfolioLink}
          target="_blank"
          rel="noopener noreferrer"
          // 아이콘 색상을 슬리데린 그린으로 변경 (#1A472A), 호버 시 은색 계열 (#E0E0E0)
          className="text-[#1A472A] hover:text-[#E0E0E0] transition"
        >
          <AiOutlineLink size={24} />
        </a>
      </div>
    </div>
  )
}

export default function TeamIntroPage() {
  return (
    // 배경색을 전역 CSS 변수 (슬리데린 다크 테마)로 변경
    <div className="bg-[var(--background)] py-10 px-10 mt-15">
      <div className="max-w-8xl mx-auto text-center">
        {/* 헤더 텍스트 색상을 전역 CSS 변수 (은색 계열)로 변경 */}
        <h1 className="text-3xl font-extrabold text-[var(--foreground)] mb-2">
          Our Team
        </h1>
        <p className="text-gray-400 mb-1">: 공주들</p>
        {/* 링크 색상을 슬리데린 그린으로 변경 (#1A472A) */}
        <a
          href="#"
          className="text-[#1A472A] hover:text-[#AAAAAA] hover:underline mb-3 inline-block"
        >
          Team_Project
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
