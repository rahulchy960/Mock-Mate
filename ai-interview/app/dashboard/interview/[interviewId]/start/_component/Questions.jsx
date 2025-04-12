import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react';

function Questions({ mockQuestions, activeQuestion }) {

  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, your browser does not support text to speech!');
    }
  };

  return mockQuestions && (
    <div className="m-2 p-5 border rounded-lg bg-background text-foreground shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {mockQuestions.map((question, index) => (
          <h2
            key={index}
            className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer transition-all
              ${
                activeQuestion === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
          >
            Question {index + 1}
          </h2>
        ))}
      </div>

      <h2 className="my-5 p-2 text-md md:text-lg font-bold flex items-center gap-2">
        {mockQuestions[activeQuestion]?.question}
        <Volume2
          className="cursor-pointer text-primary hover:text-primary/80"
          onClick={() => textToSpeech(mockQuestions[activeQuestion]?.question)}
        />
      </h2>

      <div className="border rounded-lg p-4 bg-muted text-muted-foreground">
        <h2 className="flex gap-2 items-center font-medium text-foreground">
          <Lightbulb />
          <strong>Note:</strong>
        </h2>
        <p className="text-sm mt-2">
          {process.env.NEXT_PUBLIC_QUESTION_NOTE}
        </p>
        <p className="text-sm mt-1">Best of luck! Do your best.</p>
      </div>
    </div>
  );
}

export default Questions;
