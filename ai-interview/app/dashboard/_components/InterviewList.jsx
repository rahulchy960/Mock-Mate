"use client"

import { db } from '@/utils/db'
import { MockMate } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard'

function InterviewList() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [interviewList, setInterviewList] = useState([])

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      getList()
    }
  }, [isLoaded, isSignedIn, user])

  const getList = async () => {
    const result = await db
      .select()
      .from(MockMate)
      .where(eq(MockMate.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(MockMate.id))

    console.log(result)
    setInterviewList(result)
  }

  return (
    <div>
      <h2 className="font-medium text-gray-600 dark:text-gray-300 mb-2">
        Previous Mock Interviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {interviewList?.map((interview, index) => (
          <InterviewItemCard interview={interview} key={index} />
        ))}
      </div>
    </div>
  )
}

export default InterviewList
