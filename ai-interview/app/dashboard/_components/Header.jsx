"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';


function Header() {

  const path = usePathname();
  useEffect(()=>{
    console.log(path)
  },[])

  return (
    <div className='flex pl-6 pr-6 pt-2 pb-2 items-center justify-between bg-secondary shadow-md'>
        <Image src={'/logo.svg'} width={80} height={50} alt='Logo'></Image>
        <ul className='hidden md:flex gap-6'>
          <li className={`${path === '/dashboard' ? 'text-primary font-bold' : ''}
           hover:text-primary hover:font-bold transition-all cursor-pointer`}>Dashboard</li>
          <li className={`${path === '/dashboard/questions' ? 'text-primary font-bold' : ''}
           hover:text-primary hover:font-bold transition-all cursor-pointer`}>Questions</li>
          <li className={`${path === '/dashboard/upgrade' ? 'text-primary font-bold' : ''}
           hover:text-primary hover:font-bold transition-all cursor-pointer`}>Upgrade</li>
          <li className={`${path === '/dashboard/how' ? 'text-primary font-bold' : ''}
           hover:text-primary hover:font-bold transition-all cursor-pointer`}>About</li>
        </ul>
        <UserButton 
          appearance={{
            elements: {
              avatarBox: "w-10 h-10", // Change width and height
            },
          }}
        />
    </div>
  )
}

export default Header