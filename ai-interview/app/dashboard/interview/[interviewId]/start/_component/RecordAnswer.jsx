"use client"

import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import Image from 'next/image';
import webcamIcon from '@/app/webcam.png'; 
import { Button } from '@/components/ui/button';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react';

function RecordAnswer() {

  const [userAnswer, setUserAnswer] = useState("");
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

  return (

    <div className='flex flex-col justify-center items-center'>

      <div className='flex flex-col justify-center items-center  rounded-lg p-5 mt-10'>
        <Image src={webcamIcon} width={200} height={200} className='absolute' />
        <Webcam style={{height:300, width:'100%', zIndex:10}} mirrored={true} />
      </div>

      <Button
        onClick={isRecording ? stopSpeechToText : startSpeechToText} 
        variant="outline"
        className="my-5"
      >
      {isRecording ? (
        <h2 className="flex items-center gap-2 text-red-600">
          <Mic /> Stop Recording
        </h2>
      ) : (
        <h2 className="flex items-center gap-2 text-green-500">
          <Mic /> Record Answer 
        </h2>
      )}
      </Button>

      <Button onClick={()=>console.log(userAnswer)}> Show User Answer </Button>


      
    </div>

  );
}

export default RecordAnswer;
