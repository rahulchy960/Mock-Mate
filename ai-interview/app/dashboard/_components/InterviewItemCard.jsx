"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({ interview }) {
  const router = useRouter();

  const onStart = () => {
    router.push(`/dashboard/interview/${interview?.mockId}`);
  }

  const onFeedback = () => {
    router.push(`/dashboard/interview/${interview?.mockId}/feedback`);
  }

  return (
    <div className='border border-border rounded-lg shadow-md p-4 bg-white dark:bg-muted hover:scale-105 transition-transform'>
      <h2 className='font-semibold text-primary'>{interview?.jobPosition && interview?.jobPosition.toUpperCase()}
      </h2>
      <h2 className='text-sm text-muted-foreground'>
        {interview?.jobExperience} Years of Experience
      </h2>
      <h2 className='text-xs text-muted-foreground my-1'>
        {interview?.createdTime}
      </h2>

      <div className='flex justify-between gap-4 mt-4'>
        <Button
          size="sm"
          variant="outline"
          onClick={onFeedback}
          className='w-full hover:bg-primary hover:text-white transition'
        >
          Feedback
        </Button>

        <Button
          size="sm"
          className='w-full'
          onClick={onStart}
        >
          Start
        </Button>
      </div>
    </div>
  )
}

export default InterviewItemCard
