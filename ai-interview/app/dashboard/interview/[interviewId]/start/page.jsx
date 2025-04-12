"use client";

import { db } from '@/utils/db';
import { MockMate } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useState, useEffect } from 'react';
import Questions from './_component/Questions';
import RecordAnswer from './_component/RecordAnswer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState(null);
  const [mockQuestions, setMockQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);

  useEffect(() => {
    getInterviewDetails();
  }, []);

  const getInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockMate)
      .where(eq(MockMate.mockId, params.interviewId));

    const data = result[0];
    const jsonMockResp = JSON.parse(data.jsonMockResp);

    setInterviewData(data);
    setMockQuestions(jsonMockResp);
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Main Q/A Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Questions
            mockQuestions={mockQuestions}
            activeQuestion={activeQuestion}
          />
          <RecordAnswer
            mockQuestions={mockQuestions}
            activeQuestion={activeQuestion}
            interviewData={interviewData}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4">
          {activeQuestion > 0 && (
            <Button
              onClick={() => setActiveQuestion(activeQuestion - 1)}
            >
              Previous Question
            </Button>
          )}

          {activeQuestion < mockQuestions?.length - 1 && (
            <Button onClick={() => setActiveQuestion(activeQuestion + 1)}>
              Next Question
            </Button>
          )}

          {activeQuestion === mockQuestions?.length - 1 && interviewData && (
            <Link href={`/dashboard/interview/${interviewData.mockId}/feedback`}>
              <Button>End Interview</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default StartInterview;
