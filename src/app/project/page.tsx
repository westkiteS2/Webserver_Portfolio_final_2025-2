import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

// 1. GitHub API 응답을 위한 최소한의 타입 정의
interface GitHubRepo {
  name: string
  description: string | null
  language: string | null
  html_url: string
  pushed_at: string
  fork: boolean // 타입 오류 해결을 위해 필수적으로 포함
}

// 2. 메인 페이지 컴포넌트를 비동기(async) 서버 컴포넌트로 선언
export default async function ProjectsPage() {
  const GITHUB_USERNAME = 'westkiteS2'

  let repos: GitHubRepo[] = []

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&direction=desc`,
      {
        // 3시간마다 캐시를 갱신하여 새 프로젝트를 자동으로 반영합니다.
        next: { revalidate: 60 * 60 * 3 },
      }
    )

    if (!response.ok) {
      // API 호출 실패 시 에러를 던지지 않고 빈 배열로 처리
      console.error(
        `GitHub API 호출 실패: ${response.status} ${response.statusText}`
      )
      return (
        <section className="px-6 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mt-15 mb-4">Project</h1>
          <p className="text-xl mb-4 text-red-500">
            프로젝트 목록을 불러올 수 없습니다. GitHub API 상태를 확인하세요.
          </p>
        </section>
      )
    }

    const data: GitHubRepo[] = await response.json()

    // 포크된 저장소는 제외하고, 필요한 데이터만 가공
    repos = data
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        ...repo, // 모든 필드를 복사
        language: repo.language || 'Others',
        pushed_at: repo.pushed_at.substring(0, 10), // 날짜 형식 YYYY-MM-DD
      }))
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생:', error)
    return (
      <section className="px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mt-15 mb-4">Project</h1>
        <p className="text-xl mb-4 text-red-500">
          데이터 로드 중 심각한 오류가 발생했습니다.
        </p>
      </section>
    )
  }

  return (
    <section className="px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mt-15 mb-4">Project</h1>
      <p className="text-xl mb-4">
        {GITHUB_USERNAME} 님의 GitHub 공개 저장소 목록 ({repos.length}개)
      </p>

      {/* 프로젝트 목록 표시 (이전의 Tailwind Grid 스타일 유지) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {repos.map((repo) => (
          <div
            key={repo.html_url}
            className="bg-[#242424] text-[#E0E0E0] p-6 rounded-lg shadow-xl
                       border-b-2 border-[#1A472A] transition duration-300 ease-in-out
                       hover:shadow-2xl hover:border-4 hover:border-[#1A472A] hover:-translate-y-1"
          >
            <h3 className="font-bold text-lg">{repo.name}</h3>
            <p className="text-gray-400 min-h-[40px]">
              {repo.description || 'GitHub 저장소 설명 없음'}
            </p>
            <div className="flex justify-between text-sm mt-2 text-gray-500">
              <span>🛠 {repo.language}</span>
              <span>{repo.pushed_at}</span>
            </div>
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A472A] hover:text-[#38764B] hover:underline mt-2 inline-block font-bold"
            >
              GitHub →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
