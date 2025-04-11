"use client"

import { db } from '@/utils/db';
import { MockMate } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useState, useEffect } from 'react'
import Questions from './_component/Questions';
import RecordAnswer from './_component/RecordAnswer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({params}) {

    const [interviewData, setInterviewData] = useState();
    const [mockQuestions, setMockQuestions] = useState();
    const [activeQuestion, setActiveQuestion] = useState(0);

    useEffect(()=>{
        getInterviewDetails();
      }, [])
    
    const getInterviewDetails = async ()=>{
        const result = await db.select().from(MockMate)
        .where(eq(MockMate.mockId, params.interviewId));
        const jsonMockResp = JSON.parse(result[0].jsonMockResp);
        setInterviewData(result[0]);
        setMockQuestions(jsonMockResp);
        console.log(jsonMockResp);
    }

    return (
        <div className='flex flex-col items-center justify-center'> 
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                <Questions 
                mockQuestions = {mockQuestions}
                activeQuestion = {activeQuestion} 
                />
                <RecordAnswer
                mockQuestions = {mockQuestions}
                activeQuestion = {activeQuestion}
                interviewData = {interviewData}
                />
            </div>
            <div className='flex justify-end gap-6 mb-6 p-6'>
                {activeQuestion>0 && <Button
                onClick={()=> setActiveQuestion(activeQuestion-1)} >Previous Question</Button>}
                {activeQuestion!=mockQuestions?.length-1 &&<Button
                onClick={()=> setActiveQuestion(activeQuestion+1)} >Next Question</Button>}
                
                {activeQuestion==mockQuestions?.length-1 &&
                 <Link href={'/dashboard/interview/'+ interviewData?.mockId + '/feedback'}>
                    <Button>End Interview</Button>
                 </Link> 
                 }
                
            </div>
        </div>
    )
}

export default StartInterview