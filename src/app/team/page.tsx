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
    // 📌 수정 1: 배경색을 더 짙게, 호버 시 그림자 및 크기 변화 효과 강화
    <div
      className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg
                       transition duration-500 ease-in-out
                       hover:shadow-green-900/50 hover:shadow-2xl hover:scale-[1.02]
                       border border-[#1A472A] text-left"
    >
      {/* sm 이상에서 이미지와 텍스트를 가로로 배치 (flex) */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        {/* 프로필 이미지 (왼쪽) */}
        <img
          src={member.imageSrc}
          alt={`${member.name} 프로필`}
          // 📌 수정 2: 이미지 크기 확대 (w-28 h-28) 및 은색 테두리 추가
          className="w-28 h-28 rounded-full object-cover flex-shrink-0 ring-4 ring-[#E0E0E0] p-1"
        />

        {/* 텍스트 및 링크 (오른쪽) */}
        <div className="flex flex-col text-center sm:text-left justify-center h-28">
          {/* 이름 */}
          <h3 className="text-3xl font-bold text-[#E0E0E0] mb-0">
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
              {/* 📌 수정 3: 아이콘 크기 확대 */}
              <AiFillGithub size={28} />
            </a>

            <a
              href={member.portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A472A] hover:text-[#E0E0E0] transition"
            >
              {/* 📌 수정 3: 아이콘 크기 확대 */}
              <AiOutlineLink size={28} />
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
        {/* 📌 수정 4: 타이틀 문구 및 구조 변경 */}
        <h1 className="text-4xl font-extrabold text-[var(--foreground)] mb-2 tracking-wider">
          2025 Webserver Team
        </h1>

        {/* 팀 프로젝트 링크 */}
        <a
          href="https://2025webserver-team.vercel.app/"
          className="text-[#1A472A] hover:text-[#AAAAAA] hover:underline mb-3 inline-block font-medium"
        >
          Team Project Link →
        </a>

        {/* 레이아웃 유지: 4개의 카드를 2열로 배치 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
