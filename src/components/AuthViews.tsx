// components/AuthViews.tsx
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
    <h1
      className={`
        text-3xl sm:text-5xl font-extrabold text-gray-900 mb-8
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
  const targetText = "myyonop's Portfolio"

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
        <p className="text-xl text-gray-700 mb-10">
          더 많은 정보를 보려면 **로그인을 해주세요.**
        </p>

        <div className="space-x-4">
          {/* Clerk의 <SignInButton /> 또는 커스텀 로그인 버튼 사용 */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
            <SignInButton />
          </button>
          <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg transition duration-300">
            <SignUpButton />
          </button>
        </div>

        <div className="mt-16">
          <p className="text-sm text-gray-500 mb-4">
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
  const targetText = "Welcome, myyonop's Portfolio"

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
        <p className="text-xl text-gray-700 mb-10">
          환영합니다! myyonop님의 모든 프로젝트를 둘러보세요.
        </p>

        <div className="space-x-4">
          <button className="bg-blue-600 border border-gray-300 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
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
