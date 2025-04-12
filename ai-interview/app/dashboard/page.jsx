'use client'

import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard() {
  return (
    <div className='p-8 bg-background text-foreground transition-colors'>
      <h2 className='font-bold text-2xl my-5'>Dashboard</h2>
      <h2 className='text-gray-600 dark:text-gray-300'>
        Create and Start your AI Mockup Interview
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 my-4'>
        <AddNewInterview />
      </div>

      <InterviewList />
    </div>
  )
}

export default Dashboard
