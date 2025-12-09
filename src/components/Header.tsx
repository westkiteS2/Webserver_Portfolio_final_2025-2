'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="shadow-lg">
      <nav className="bg-[#1A472A] py-4 px-8 border-b-2 border-[#1A472A]">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <div className="text-xl text-[#E0E0E0] hover:text-[#1A472A] transition duration-300">
                  seoyeon Portfolio
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center font-bold">
            <SignedOut>
              <div className="text-gray-300 hover:text-[#1A472A] mr-4 transition duration-300">
                <SignInButton />
              </div>
              <div className="text-gray-300 hover:text-[#1A472A] mr-4 transition duration-300">
                <SignUpButton />
              </div>
            </SignedOut>

            <SignedIn>
              <Link
                href="/project"
                className="text-gray-300 hover:text-[#1A472A] mr-4 transition duration-300"
              >
                Project
              </Link>
              <Link
                href="/team"
                className="text-gray-300 hover:text-[#1A472A] mr-4 transition duration-300"
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-[#1A472A] mr-4 transition duration-300"
              >
                Contact
              </Link>
              {/* UserButton 링 색상 변경 */}
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: 'ring-2 ring-[#1A472A] mr-4',
                  },
                }}
              />
              <div className="text-gray-300 hover:text-[#1A472A]">
                <SignOutButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  )
}
