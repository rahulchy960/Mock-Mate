"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Header() {
  const path = usePathname();

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
      <UserButton
        appearance={{
          elements: {
            avatarBox: "w-10 h-10",
          },
        }}
      />
    </div>
  )
}

export default Header
