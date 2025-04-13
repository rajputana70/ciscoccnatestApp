import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { examInfo, domains } from '@/data/examData';

interface WelcomeScreenProps {
  onStartExam: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartExam }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="mb-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 36"
          width="120"
          height="60"
          fill="#049fd9"
          className="mx-auto mb-4"
        >
          <path d="M32.285 5.442c4.35 0 7.873 3.523 7.873 7.868 0 4.344-3.523 7.864-7.873 7.864-4.346 0-7.87-3.52-7.87-7.864 0-4.345 3.524-7.868 7.87-7.868zm18.611 0c4.349 0 7.871 3.523 7.871 7.868 0 4.344-3.522 7.864-7.871 7.864-4.349 0-7.873-3.52-7.873-7.864 0-4.345 3.524-7.868 7.873-7.868zm-37.221 0c4.346 0 7.869 3.523 7.869 7.868 0 4.344-3.523 7.864-7.869 7.864-4.35 0-7.874-3.52-7.874-7.864 0-4.345 3.524-7.868 7.874-7.868zm-13.676 0c2.446 0 4.43 1.982 4.43 4.427 0 2.443-1.984 4.428-4.43 4.428s-4.431-1.985-4.431-4.428c0-2.445 1.985-4.427 4.431-4.427zm51.333 4.427c0-2.444 1.984-4.427 4.428-4.427 2.446 0 4.43 1.983 4.43 4.427 0 2.443-1.984 4.428-4.43 4.428-2.444 0-4.428-1.985-4.428-4.428z" />
        </svg>
        <h1 className="text-3xl font-bold">{examInfo.title}</h1>
        <p className="text-gray-600">{examInfo.description}</p>
      </div>

      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader>
          <CardTitle>Exam Information</CardTitle>
          <CardDescription>
            Please review the exam details before starting
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-sm text-gray-500">Duration</h3>
                <p className="font-semibold">{examInfo.duration} minutes</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-500">Questions</h3>
                <p className="font-semibold">{examInfo.totalQuestions}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-500">Passing Score</h3>
                <p className="font-semibold">{examInfo.passingScore}%</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm text-gray-500 mb-2">Exam Domains</h3>
              <div className="space-y-2">
                {domains.map((domain) => (
                  <div key={domain.id} className="flex justify-between items-center">
                    <span>{domain.name}</span>
                    <span className="font-medium">{domain.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm text-gray-500 mb-2">Exam Guidelines</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Once you start the exam, the timer cannot be paused</li>
                <li>You can navigate between questions using the sidebar</li>
                <li>Mark questions for review if you want to return to them later</li>
                <li>Use the Review & Submit button when you're ready to finish</li>
                <li>Multiple-choice questions may have more than one correct answer</li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button size="lg" onClick={onStartExam}>
            Start Exam
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WelcomeScreen;
