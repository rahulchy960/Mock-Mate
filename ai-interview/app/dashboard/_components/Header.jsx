"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Strikethrough, Sun } from 'lucide-react'

function Header() {
  const path = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    console.log(path)
  }, [])

  return (
    <div className="flex pl-6 pr-6 pt-3 pb-3 items-center justify-between bg-secondary text-black shadow-md dark:bg-zinc-950 dark:text-dark-foreground transition-colors">
      <Image src={'/logo.svg'} width={80} height={50} alt='Logo' />

      <ul className="hidden md:flex gap-6">
        <li>
          <Link
            href="/dashboard"
            className={`${
              path === '/dashboard' ? 'text-primary font-semibold' : ''
            } hover:text-primary transition-colors`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="https://neetcode.io/practice?tab=neetcode250"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            Questions
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/upgrade"
            className={`${
              path === '/dashboard/upgrade' ? 'text-primary font-semibold' : ''
            } hover:text-primary transition-colors hover:line-through`}
          >
          Upgrade 
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/rahulchy960"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            About
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-5">
        {/* 🌗 Dark Mode Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-md hover:text-primary transition-colors"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        <UserButton
          appearance={{
            elements: {
              avatarBox: 'w-10 h-10',
            },
          }}
        />
      </div>
    </div>
  )
}

export default Header
