import { NextResponse } from 'next/server'

//Get 요청을 처리하는 라우트 핸들러
export async function GET(request: Request) {
  //클라이언트 요청에서 URLSearchParams를 추출
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name') || 'World'

  //응답 객체를 JSON 형식으로 반환
  return NextResponse.json({
    message: 'Hello, ${name}!',
    timestamp: new Date().toISOString(),
  })
}
