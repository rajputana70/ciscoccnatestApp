import React from 'react';
import { examInfo } from '@/data/examData';
import { Card, CardContent } from '@/components/ui/card';

interface ExamHeaderProps {
  timeRemaining: number;
  currentQuestion: number;
  totalQuestions: number;
}

const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const ExamHeader: React.FC<ExamHeaderProps> = ({
  timeRemaining,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <div className="mb-6 p-4 border-b">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 36"
            width="64"
            height="36"
            fill="#049fd9"
            className="cisco-logo-color mr-4"
          >
            <path d="M32.285 5.442c4.35 0 7.873 3.523 7.873 7.868 0 4.344-3.523 7.864-7.873 7.864-4.346 0-7.87-3.52-7.87-7.864 0-4.345 3.524-7.868 7.87-7.868zm18.611 0c4.349 0 7.871 3.523 7.871 7.868 0 4.344-3.522 7.864-7.871 7.864-4.349 0-7.873-3.52-7.873-7.864 0-4.345 3.524-7.868 7.873-7.868zm-37.221 0c4.346 0 7.869 3.523 7.869 7.868 0 4.344-3.523 7.864-7.869 7.864-4.35 0-7.874-3.52-7.874-7.864 0-4.345 3.524-7.868 7.874-7.868zm-13.676 0c2.446 0 4.43 1.982 4.43 4.427 0 2.443-1.984 4.428-4.43 4.428s-4.431-1.985-4.431-4.428c0-2.445 1.985-4.427 4.431-4.427zm51.333 4.427c0-2.444 1.984-4.427 4.428-4.427 2.446 0 4.43 1.983 4.43 4.427 0 2.443-1.984 4.428-4.43 4.428-2.444 0-4.428-1.985-4.428-4.428z" />
          </svg>
          <div>
            <h1 className="text-xl font-bold">{examInfo.title}</h1>
            <p className="text-sm text-gray-600">{examInfo.description}</p>
          </div>
        </div>
        <Card className="border-primary">
          <CardContent className="p-3 flex items-center">
            <div className="mr-4">
              <p className="text-sm font-medium">Time Remaining</p>
              <p className="timer text-xl">{formatTime(timeRemaining)}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Question</p>
              <p className="text-xl">
                <span className="question-number">{currentQuestion}</span> of {totalQuestions}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-primary rounded-full"
          style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ExamHeader;
