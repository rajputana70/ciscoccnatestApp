'use client';

import { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import ExamContainer from '@/components/ExamContainer';

export default function Home() {
  const [examStarted, setExamStarted] = useState(false);

  const handleStartExam = () => {
    setExamStarted(true);
  };

  return (
    <div className="min-h-screen">
      {!examStarted ? (
        <WelcomeScreen onStartExam={handleStartExam} />
      ) : (
        <ExamContainer />
      )}
    </div>
  );
}
