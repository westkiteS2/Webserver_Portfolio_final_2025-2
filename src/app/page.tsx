export default function HomePage() {
  return (
    // 페이지 중앙에 텍스트를 배치하고, 최소 높이를 설정합니다.
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
      {/* 메인 제목: 'Welcome to my Portfolio Page' */}
      {/* 텍스트 색상은 globals.css에서 설정된 밝은 색을 상속받습니다. */}
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
        Welcome to my Portfolio Page
      </h1>
    </div>
  )
}
