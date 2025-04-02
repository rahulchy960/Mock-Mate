"use client"

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockMate } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import Webcam from 'react-webcam';
import Link from "next/link";


function Interview({params}) {

  const [interviewData, setInterviewData] = useState();
  const [webcamEnabled, setWebcamEnabled] = useState(false);

  useEffect(()=>{
    console.log(params.interviewId);
    getInterviewDetails();
  }, [])

  const getInterviewDetails = async ()=>{
    const result = await db.select().from(MockMate)
    .where(eq(MockMate.mockId, params.interviewId));
    setInterviewData(result[0]);
  }

  return (
    
    <div className=''>

      <div className='grid grid-cols-1 md:grid-cols-2 my-10'>
        <div className='flex justify-center flex-col items-center'>
            {webcamEnabled? <Webcam 
            onUserMedia={()=>setWebcamEnabled(true)}
            onUserMediaError={()=>setWebcamEnabled(false)}
            mirrored = {true}
            style={{
                height:300,
                width:300
            }}/> :
            <>
            <WebcamIcon className="h-72 w-72 p-20 my-6 bg-secondary rounded-lg border" />
            <Button variant="ghost" onClick={()=>setWebcamEnabled(true)} >Enable Webcam And Microphone</Button>
            </>
            }
        </div>

      <div className='flex flex-col mt-4 gap-4 ml-4'>

        <div className='flex flex-col p-4 gap-4 rounded-lg border border-yellow-300 bg-yellow-100'>
            <h2 className='font-bold text-2xl'>Let's Get Started...</h2>
            <h2 className='text-lg'> <strong>Job Position : </strong> {interviewData?.jobPosition} </h2>
            <h2 className='text-lg'> <strong>Job Decription : </strong> {interviewData?.jobDesc} </h2> 
        </div>
        
        <div className='p-4 border rounded-lg border-red-300 bg-red-100'>
            <h2 className='flex gap-2 items-center text-red-500'> <Lightbulb/> <strong>Information</strong> </h2>
            <h2 className='mt-2'> {process.env.NEXT_PUBLIC_INFORMATION} </h2>    
        </div>

      </div>

      </div>
      
      <div className='flex justify-end items-end mb-5'>
        <Link href={`/dashboard/interview/${params.interviewId}/start/`}>
            <Button> Start Interviewing</Button>
        </Link>
        
      </div>
      
    </div>
  )
}

export default Interview