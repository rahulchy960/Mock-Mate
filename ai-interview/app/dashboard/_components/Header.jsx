"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react' // icons

function Header() {
  const path = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    console.log(path)
  }, [])

  return (
    <div className='flex pl-6 pr-6 pt-2 pb-2 items-center justify-between bg-secondary shadow-md'>
      <Image src={'/logo.svg'} width={80} height={50} alt='Logo' />
      
      <ul className='hidden md:flex gap-6'>
        <li>
          <Link
            href="/dashboard"
            className={`${path === '/dashboard' ? 'text-violet-500 font-bold' : ''} hover:text-violet-500 transition-all`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="https://neetcode.io/practice?tab=neetcode250"
            target="_blank"
            className="hover:text-violet-500 transition-all"
          >
            Questions
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/upgrade"
            className={`${path === '/dashboard/upgrade' ? 'text-violet-500 font-bold' : ''} hover:text-violet-500 transition-all`}
          >
            Upgrade
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/rahulchy960"
            target="_blank"
            className="hover:text-violet-500 transition-all"
          >
            About
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {/* 🌗 Dark Mode Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='p-2 rounded-md hover:bg-muted transition'
          aria-label='Toggle Theme'
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
            },
          }}
        />
      </div>
    </div>
  )
}

export default Header
