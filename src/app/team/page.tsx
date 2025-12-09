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
    imageSrc: '/images/bora.jpg',
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
    imageSrc: '/images/westkite.jpg',
    portfolioLink: 'https://webserver-portfolio-final-2025-2.vercel.app/',
    githubLink: 'https://github.com/westkiteS2',
  },
  {
    id: 4,
    name: '최수민',
    studentId: '92410952',
    imageSrc: '/images/sumin.png',
    portfolioLink: 'https://my-portfolio-five-psi-32.vercel.app/',
    githubLink: 'https://github.com/sumin8838',
  },
]

const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="bg-[#242424] p-6 rounded-lg shadow-xl transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 border-2 border-[#1A472A] text-left">
      {/* sm 이상에서 이미지와 텍스트를 가로로 배치 (flex) */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        {/* 프로필 이미지 (왼쪽) */}
        <img
          src={member.imageSrc}
          alt={`${member.name} 프로필`}
          className="w-24 h-24 rounded-full object-cover flex-shrink-0"
        />

        {/* 텍스트 및 링크 (오른쪽) */}
        <div className="flex flex-col text-center sm:text-left justify-center h-24">
          {/* 이름 */}
          <h3 className="text-2xl font-bold text-[#E0E0E0] mb-0">
            {member.name}
          </h3>

          {/* 학번 */}
          <p className="text-base text-gray-400 mb-2">{member.studentId}</p>

          {/* 링크 아이콘들 */}
          <div className="flex justify-center sm:justify-start space-x-4 mt-3">
            <a
              href={member.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A472A] hover:text-[#E0E0E0] transition"
            >
              <AiFillGithub size={24} />
            </a>

            <a
              href={member.portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A472A] hover:text-[#E0E0E0] transition"
            >
              <AiOutlineLink size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TeamIntroPage() {
  return (
    <div className="bg-[var(--background)] py-10 px-10 mt-15">
      <div className="max-w-8xl mx-auto text-center">
        <h1 className="text-3xl font-extrabold text-[var(--foreground)] mb-2">
          Our Team
        </h1>
        <p className="text-gray-400 mb-1">: 공주들</p>
        {/* 링크 색상을 슬리데린 그린으로 변경 (#1A472A) */}
        <a
          href="https://2025webserver-team.vercel.app/"
          className="text-[#1A472A] hover:text-[#AAAAAA] hover:underline mb-3 inline-block"
        >
          Team_Project
        </a>

        {/* 📌 레이아웃 수정: 4개의 카드를 2열로 배치하여 넓게 보이도록 함 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
