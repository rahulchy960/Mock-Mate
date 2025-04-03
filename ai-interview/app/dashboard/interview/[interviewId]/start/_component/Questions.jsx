import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react';

function Questions({ mockQuestions, activeQuestion }) {
  
  const textToSpeech = (text)=>{
    if('speechSynthesis' in window){
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    }
    else{
        alert('Sorry, Your browser doesnot support text to speech!')
    }
  }

  return mockQuestions && (
    <div className='m-2 p-5 border rounded-lg my-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {mockQuestions && mockQuestions.map((question, index) => (
            <h2
            className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer 
            ${activeQuestion === index ? 'bg-green-500 text-white' : 'bg-secondary'}`}
            key={index}
            >
            Question {index + 1}
            </h2>  
          ))}
      </div>

      {/* <h2 className='my-5 text-md md:text-lg font-bold text-blue-700'> {mockQuestions[activeQuestion]?.question} </h2>
      <Volume2 className='cursor-pointer' onClick={()=>{textToSpeech(mockQuestions[activeQuestion]?.question)}} /> */}

      <h2 className='my-5 p-2 text-md md:text-lg font-bold text-blue-700 flex items-center gap-2'>
        {mockQuestions[activeQuestion]?.question}
        <Volume2 
          className='cursor-pointer text-green-500 hover:text-green-400' 
          onClick={() => textToSpeech(mockQuestions[activeQuestion]?.question)} 
        />
      </h2>

      <div className='border rounded-lg p-5 bg-blue-100 mt-15'>
        <h2 className='flex gap-2 items-center text-blue-700'>
            <Lightbulb/>
            <strong>NOTE: </strong>
        </h2>
        <h2 className='text-sm text-blue-700 my-2'> {process.env.NEXT_PUBLIC_QUESTION_NOTE} </h2>
        <h2 className='text-sm text-blue-700 my-2'> Best of Luck! and Do Your Best. </h2>
      </div>
    </div>
  );
}

export default Questions;
