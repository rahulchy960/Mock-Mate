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

    setFeedbackList(result);
  };

  return (
    <div className="p-8 m-4 bg-background text-foreground">
      {feedbackList?.length === 0 ? (
        <h2 className="text-xl font-bold text-muted-foreground">
          No Interview Feedback Record Found
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500 my-5">
            🎉 Congratulations!
          </h2>
          <h2 className="font-bold text-2xl">Here is your Interview Feedback</h2>
          <h2 className="text-primary text-lg my-3">
            Your Overall Interview Rating: <strong className="font-bold">?/10</strong>
          </h2>

          {feedbackList.map((item, index) => (
            <Collapsible key={index} className="my-6">
              <CollapsibleTrigger className="p-3 rounded-lg bg-muted text-foreground hover:bg-muted/80 flex justify-between items-center font-medium w-full transition-colors">
                {index + 1}. {item.Question}
                <ChevronsUpDownIcon className="text-primary" />
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="flex flex-col gap-3 mt-3">
                  <div className="p-3 border rounded-lg bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 font-mono">
                    <strong>Rating:</strong> {item.rating}
                  </div>
                  <div className="p-3 border rounded-lg bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 font-mono text-sm">
                    <strong>Your Answer:</strong> {item.userAns}
                  </div>
                  <div className="p-3 border rounded-lg bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 font-mono text-sm">
                    <strong>Correct Answer:</strong> {item.correctAns}
                  </div>
                  <div className="p-3 border rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 font-mono text-sm">
                    <strong>Feedback:</strong> {item.feedback}
                  </div>
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
