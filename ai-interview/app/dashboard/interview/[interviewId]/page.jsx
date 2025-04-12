"use client"

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockMate } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import Webcam from 'react-webcam';
import Link from "next/link";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webcamEnabled, setWebcamEnabled] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
    getInterviewDetails();
  }, [])

  const getInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockMate)
      .where(eq(MockMate.mockId, params.interviewId));
    setInterviewData(result[0]);
  }

  return (
    <div className="bg-background text-foreground min-h-screen px-4 md:px-10 py-8 transition-colors">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div className="flex justify-center items-center flex-col">
          {webcamEnabled ? (
            <Webcam
              onUserMedia={() => setWebcamEnabled(true)}
              onUserMediaError={() => setWebcamEnabled(false)}
              mirrored={true}
              style={{
                height: 300,
                width: 300,
                borderRadius: 12,
              }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-72 p-20 mb-6 bg-secondary text-secondary-foreground rounded-lg border border-border" />
              <Button className='border border-gray-400 shadow-sm  hover:border-none'
              variant="ghost" onClick={() => setWebcamEnabled(true)}>
                Enable Webcam And Microphone
              </Button>
            </>
          )}
        </div>

        <div className="flex flex-col gap-5">

          {/* Interview Details */}
          <div className="flex flex-col gap-4 p-5 rounded-lg border border-border bg-muted text-muted-foreground shadow-sm">
            <h2 className="font-bold text-xl text-foreground">Let's Get Started...</h2>
            <h2 className="text-base">
              <span className="font-medium text-foreground">Job Position:</span> {interviewData?.jobPosition}
            </h2>
            <h2 className="text-base">
              <span className="font-medium text-foreground">Job Description:</span> {interviewData?.jobDesc}
            </h2>
          </div>


          {/* Info Box */}
          <div className="p-5 border rounded-lg border-destructive bg-destructive/10 text-destructive shadow-sm">
            <h2 className="flex gap-2 items-center font-semibold text-destructive">
              <Lightbulb /> Information
            </h2>
            <h2 className="mt-2 text-sm text-muted-foreground">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-end">
        <Link href={`/dashboard/interview/${params.interviewId}/start`}>
          <Button className=''>Start Interviewing</Button>
        </Link>
      </div>
    </div>
  )
}

export default Interview;
