import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface NavSidebarProps {
  totalQuestions: number;
  currentQuestion: number;
  answeredQuestions: Set<number>;
  onQuestionSelect: (questionIndex: number) => void;
  onReview: () => void;
}

const NavSidebar: React.FC<NavSidebarProps> = ({
  totalQuestions,
  currentQuestion,
  answeredQuestions,
  onQuestionSelect,
  onReview,
}) => {
  return (
    <div className="w-64 border-r border-gray-200 p-4 flex flex-col h-full">
      <h2 className="font-bold text-lg mb-4">Exam Navigation</h2>

      <Tabs defaultValue="questions" className="mb-4">
        <TabsList className="w-full">
          <TabsTrigger className="flex-1" value="questions">Questions</TabsTrigger>
          <TabsTrigger className="flex-1" value="info">Exam Info</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-5 gap-2 overflow-y-auto max-h-70">
        {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((num) => (
          <Button
            key={num}
            variant={num === currentQuestion ? "default" : answeredQuestions.has(num) ? "outline" : "ghost"}
            className={`h-8 w-8 p-0 ${
              answeredQuestions.has(num) && num !== currentQuestion
                ? "border-primary text-primary"
                : ""
            }`}
            onClick={() => onQuestionSelect(num)}
          >
            {num}
          </Button>
        ))}
      </div>

      <div className="mt-auto pt-4">
        <Button onClick={onReview} className="w-full">
          Review & Submit
        </Button>
      </div>
    </div>
  );
};

export default NavSidebar;
