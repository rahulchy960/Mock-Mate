"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {

  const router = useRouter();
  const onStart = ()=>{
    router.push(`/dashboard/interview/${interview?.mockId}`);
  }
  const onFeedback = ()=>{
    router.push(`/dashboard/interview/${interview?.mockId}/feedback`);
  }

  return (
    <div className='border rounded-lg shadow-md p-3 bg-slate-50 hover:scale-105 hover:transition-all'>
        <h2 className='font-bold text-primary'> {interview?.jobPosition} </h2>
        <h2 className='text-sm text-gray-600'> {interview?.jobExperience} Years of Experience </h2>
        <h2 className='text-xs text-gray-500 my-1'> {interview?.createdTime} </h2>
        <div className='flex justify-between gap-5 mt-2'>
            <Button size="sm" variant="outline" onClick={onFeedback}
            className='w-full hover:bg-sky-400 hover:text-white'>FeedBack</Button>
            <Button size="sm" className='w-full' onClick={onStart}>Start</Button>
        </div>
    </div>
  )
}

export default InterviewItemCard