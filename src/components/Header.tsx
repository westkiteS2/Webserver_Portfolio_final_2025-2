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
    <div>
      <nav className="bg-gray-700 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <div className="text-lg text-white">seoyeon portfolio</div>
              </div>
            </Link>
          </div>
          <div className="flex items-center font-bold">
            <SignedOut>
              <div className="text-gray-300 hover:text-white mr-4">
                <SignInButton />
              </div>
              <div className="text-gray-300 hover:text-white mr-4">
                <SignUpButton />
              </div>
            </SignedOut>

            <SignedIn>
              <Link
                href="/project"
                className="text-gray-300 hover:text-white mr-4"
              >
                Project
              </Link>
              <Link
                href="/team"
                className="text-gray-300 hover:text-white mr-4"
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white mr-4"
              >
                Contact
              </Link>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: 'ring-2 ring-white mr-4',
                  },
                }}
              />
              <div className="text-gray-300 hover:text-white">
                <SignOutButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  )
}
