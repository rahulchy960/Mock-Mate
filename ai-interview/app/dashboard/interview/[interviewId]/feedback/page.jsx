"use client"

import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown, ChevronDownIcon, ChevronsUpDown, ChevronsUpDownIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


function Feedback({params}) {

  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();

  useEffect(()=>{
    getFeedback();
  },[])

  const getFeedback = async ()=>{
    const result = await db.select()
    .from(UserAnswer)
    .where(eq(UserAnswer.mockId, params.interviewId))
    .orderBy(UserAnswer.id)
    console.log(result);
    setFeedbackList(result);
  }

  return (
    <div className='p-8 m-4'>
      <h2 className='text-3xl font-bold text-green-500 my-5'> Congratulations! </h2>
      <h2 className='font-bold text-2xl'>Here is your Interview Feedback</h2>
      <h2 className='text-primary text-lg my-3'>Your OverAll interview rating: <strong className='text-bold'>?/10</strong></h2>
      {feedbackList && feedbackList.map((item, index) => {
        return (
          <Collapsible key={index} className='my-7'>
            <CollapsibleTrigger className='p-2 bg-gray-200 rounded-sm my-2 text-left flex justify-between font-bold w-full'>
              {index+1}. {item.Question} 
              <ChevronsUpDownIcon className='text-blue-800'/>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className='flex flex-col gap-2'>
                <h2 className='p-2 border rounded-lg bg-yellow-50 font-mono text-red-500 '> 
                  <strong>Rating: </strong> {item.rating} 
                </h2>
                <h2 className='p-2 border rounded-lg bg-secondary font-mono bg-red-50 text-sm text-red-900'> 
                  <strong>Your Answer: </strong> {item.userAns} 
                </h2>
                <h2 className='p-2 border rounded-lg bg-secondary font-mono bg-green-50 text-sm text-green-700'> 
                  <strong>Correct Answer: </strong> {item.correctAns} 
                </h2>
                <h2 className='p-2 border rounded-lg bg-secondary font-mono bg-indigo-50 text-sm text-indigo-600'> 
                  <strong>Feedback: </strong> {item.feedback} 
                </h2>
              </div>
            </CollapsibleContent>
          </Collapsible>
        )
      })}

    <Button onClick={()=>{router.replace('/dashboard')}}>Go Home</Button>  

    </div>
  )
}

export default Feedback