"use client";

import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDownIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (params?.interviewId) {
      getFeedback();
    }
  }, [params?.interviewId]);

  const getFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockId, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  };

  return (
    <div className="p-8 m-4">
      {feedbackList?.length === 0 ? (
        <h2 className="text-xl font-bold text-gray-600">
          No Interview Feedback Record Found
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500 my-5">
            🎉 Congratulations!
          </h2>
          <h2 className="font-bold text-2xl">Here is your Interview Feedback</h2>
          <h2 className="text-primary text-lg my-3">
            Your Overall interview rating: <strong className="font-bold">?/10</strong>
          </h2>

          {feedbackList.map((item, index) => (
            <Collapsible key={index} className="my-7">
              <CollapsibleTrigger className="p-2 bg-gray-200 rounded-sm my-2 text-left flex justify-between font-bold w-full">
                {index + 1}. {item.Question}
                <ChevronsUpDownIcon className="text-blue-800" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col gap-2">
                  <h2 className="p-2 border rounded-lg bg-yellow-50 font-mono text-red-500">
                    <strong>Rating:</strong> {item.rating}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-red-50 font-mono text-sm text-red-900">
                    <strong>Your Answer:</strong> {item.userAns}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-green-50 font-mono text-sm text-green-700">
                    <strong>Correct Answer:</strong> {item.correctAns}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-indigo-50 font-mono text-sm text-indigo-600">
                    <strong>Feedback:</strong> {item.feedback}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>
      )}

      <Button className="mt-6" onClick={() => router.replace('/dashboard')}>
        Go Home
      </Button>
    </div>
  );
}

export default Feedback;
