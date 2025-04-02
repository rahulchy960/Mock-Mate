"use client"

import { db } from '@/utils/db';
import { MockMate } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useState, useEffect } from 'react'

function StartInterview({params}) {

    const [interviewData, setInterviewData] = useState();
    const [mockQuestions, setMockQuestions] = useState();

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
            <div className='grid grid-cols-1 md:grid-cols-2'>

            </div>
        </div>
    )
}

export default StartInterview