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
    <div className="bg-white p-4 rounded-lg shadow-lg text-center transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <img
        src={member.imageSrc}
        alt={`${member.name} 프로필`}
        className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
      />

      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>

      <p className="text-sm text-gray-500 mb-3">{member.studentId}</p>

      <div className="flex justify-center space-x-4 mt-3">
        <a
          href={member.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition"
        >
          <AiFillGithub size={24} />
        </a>

        <a
          href={member.portfolioLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition"
        >
          <AiOutlineLink size={24} />
        </a>
      </div>
    </div>
  )
}

export default function TeamIntroPage() {
  return (
    <div className="bg-gray-50 py-10 px-10 mt-15">
      <div className="max-w-8xl mx-auto text-center">
        {/* 헤더 부분 */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Our Team</h1>
        <p className="text-gray-600 mb-1">: 공주들</p>
        <a href="#" className="text-blue-600 hover:underline mb-3 inline-block">
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
