'use client'

import React, { useState, useEffect } from 'react'
// ⚠️ Clerk에서 import 하는 실제 컴포넌트
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from '@clerk/nextjs'

// === A. 타이핑 애니메이션 컴포넌트 ===
interface TypingProps {
  targetText: string
  onTypingComplete: () => void
}

const TypingAnimation: React.FC<TypingProps> = ({
  targetText,
  onTypingComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const TypingSpeed = 70 // 타이핑 속도 (ms)

  useEffect(() => {
    if (displayedText.length < targetText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(targetText.slice(0, displayedText.length + 1))
      }, TypingSpeed)
      return () => clearTimeout(timeout)
    } else {
      setIsTypingComplete(true)
      onTypingComplete()
    }
  }, [displayedText, targetText, onTypingComplete])

  return (
    // 텍스트 색상을 전역 변수 --foreground (은색)로 변경
    <h1
      className={`
        text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] mb-8
        whitespace-nowrap overflow-hidden
        border-r-4
        ${
          isTypingComplete
            ? 'border-r-transparent animate-cursor-blink'
            : 'border-r-black'
        }
      `}
    >
      {displayedText}
    </h1>
  )
}

// === B. SignedOut 상태에서 보여줄 콘텐츠 ===
const SignedOutView: React.FC = () => {
  const [showContent, setShowContent] = useState(false)
  const targetText = 'Slytherin Portfolio' // 슬리데린 테마에 맞춰 텍스트 변경 (선택 사항)

  const handleTypingComplete = () => {
    setTimeout(() => setShowContent(true), 500)
  }

  return (
    <>
      <TypingAnimation
        targetText={targetText}
        onTypingComplete={handleTypingComplete}
        key="signed-out-typing"
      />

      <div
        className={`
          transition-opacity duration-1000 ease-in-out transform
          ${
            showContent
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }
        `}
      >
        {/* 텍스트 색상을 전역 변수 --foreground (은색)로 변경 */}
        <p className="text-xl text-[var(--foreground)] mb-10">
          더 많은 정보를 보려면 **로그인을 해주세요.**
        </p>

        <div className="space-x-4">
          {/* 로그인 버튼: 슬리데린 그린 바탕, 은색 텍스트 */}
          <button className="bg-[#1A472A] hover:bg-green-700 text-[#E0E0E0] font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 border-2 border-[#E0E0E0]">
            <SignInButton />
          </button>
          {/* 회원가입 버튼: 은색 테두리, 배경 투명, 텍스트 은색 */}
          <button className="bg-transparent border-2 border-[#E0E0E0] hover:bg-[#1A472A]/20 text-[#E0E0E0] font-bold py-3 px-8 rounded-lg transition duration-300">
            <SignUpButton />
          </button>
        </div>

        <div className="mt-16">
          {/* 텍스트 색상을 전역 변수 --foreground (은색)로 변경 */}
          <p className="text-sm text-[var(--foreground)] mb-4">
            🔒 로그인 후 전체 프로젝트를 열람하세요.
          </p>
        </div>
      </div>
    </>
  )
}

// === C. SignedIn 상태에서 보여줄 콘텐츠 ===
const SignedInView: React.FC = () => {
  const [showContent, setShowContent] = useState(false)
  const targetText = 'Welcome, Slytherin Success' // 슬리데린 테마에 맞춰 텍스트 변경 (선택 사항)

  const handleTypingComplete = () => {
    setTimeout(() => setShowContent(true), 500)
  }

  return (
    <>
      <TypingAnimation
        targetText={targetText}
        onTypingComplete={handleTypingComplete}
        key="signed-in-typing"
      />

      <div
        className={`
          transition-opacity duration-1000 ease-in-out transform
          ${
            showContent
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }
        `}
      >
        {/* 텍스트 색상을 전역 변수 --foreground (은색)로 변경 */}
        <p className="text-xl text-[var(--foreground)] mb-10">
          환영합니다! myyonop님의 모든 프로젝트를 둘러보세요.
        </p>

        <div className="space-x-4">
          {/* 로그아웃 버튼: 슬리데린 그린 바탕, 은색 텍스트 */}
          <button className="bg-[#1A472A] border-2 border-[#E0E0E0] hover:bg-green-700 text-[#E0E0E0] font-bold py-3 px-8 rounded-lg transition duration-300">
            <SignOutButton />
          </button>
        </div>
      </div>
    </>
  )
}

// === D. Clerk 컴포넌트를 사용하는 메인 래퍼 ===
export function AuthViews() {
  return (
    <div className="text-center max-w-5xl mx-auto px-4">
      <SignedOut>
        <SignedOutView />
      </SignedOut>

      <SignedIn>
        <SignedInView />
      </SignedIn>
    </div>
  )
}
