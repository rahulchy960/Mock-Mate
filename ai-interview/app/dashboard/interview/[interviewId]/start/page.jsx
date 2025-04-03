"use client"

import { db } from '@/utils/db';
import { MockMate } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useState, useEffect } from 'react'
import Questions from './_component/Questions';
import RecordAnswer from './_component/RecordAnswer';

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
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                <Questions 
                mockQuestions = {mockQuestions}
                activeQuestion = {activeQuestion} 
                />
                <RecordAnswer/>
            </div>
        </div>
    )
}

export default StartInterview