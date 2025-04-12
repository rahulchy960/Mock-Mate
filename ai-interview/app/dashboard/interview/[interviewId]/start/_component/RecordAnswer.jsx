"use client"

import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import Image from 'next/image';
import webcamIcon from '@/app/webcam.png'; 
import { Button } from '@/components/ui/button';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/Gemini';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';


function RecordAnswer({ mockQuestions, activeQuestion, interviewData }) {

  const [userAnswer, setUserAnswer] = useState("");
  const {user} = useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(()=>{
    results.map((result)=>{
      setUserAnswer(prevAns => prevAns + result?.transcript)
    })
  },[results])

  useEffect(()=>{
    if(!isRecording && userAnswer.length>10){
      updateUserAns();
    }
  },[isRecording])

  const startStopRecording = async ()=>{
    if(isRecording){
      stopSpeechToText();
    } else{
      startSpeechToText();
    }
  }

  const updateUserAns = async ()=>{
    console.log(userAnswer);
    setLoading(true);
      const feedbackPromt = `Question : ${mockQuestions[activeQuestion]?.question} , User Answer : ${userAnswer}
                            . Depends on question and user answer for given interview question, please give us 
                            rating (0 to 5 like 2/5) and feedback as area of improvement if any in just 3 to 5 lines . The output 
                            should be in JSON format with rating field and feedback field nothing else `;

      const result = await chatSession.sendMessage(feedbackPromt);
      const feedbackResponse = (result.response.text()).replace("```json","").replace("```","");
      console.log(feedbackResponse);
      const JSONfeedback = JSON.parse(feedbackResponse);

      const resp = await db.insert(UserAnswer).values({
        mockId: interviewData?.mockId ,
        Question: mockQuestions[activeQuestion]?.question,
        correctAns: mockQuestions[activeQuestion]?.answer,
        userAns: userAnswer,
        feedback: JSONfeedback?.feedback,
        rating: JSONfeedback?.rating,
        createdBy: user?.primaryEmailAddress.emailAddress,
        createdTime: moment().format('DD-MM-yyyy')
      });
      if(resp){
        toast("User Answer Recorded Successfully");
      }
      setUserAnswer('');
      setLoading(false);

  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center rounded-lg p-5 mt-10 bg-background border shadow-sm relative">
        <Image
          src={webcamIcon}
          width={200}
          height={200}
          className="absolute "
          alt="WebCam"
        />
        <Webcam
          style={{ height: 300, width: '100%', zIndex: 10 }}
          mirrored={true}
        />
      </div>

      <Button
        disabled={loading}
        onClick={startStopRecording}
        variant="outline"
        className="my-5 border border-gray-300 hover:border-none"
      >
        {isRecording ? (
          <span className="flex items-center gap-2 text-destructive hover:text-white">
            <Mic /> Stop Recording
          </span>
        ) : (
          <span className="flex items-center gap-2 text-green-500 hover:text-white">
            <Mic /> Record Answer
          </span>
        )}
      </Button>
    </div>
  );
}
export default RecordAnswer;
