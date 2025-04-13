import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Question } from '@/data/examData';

interface QuestionCardProps {
  question: Question;
  userAnswers: number[];
  onAnswerChange: (selectedAnswers: number[]) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  userAnswers,
  onAnswerChange,
}) => {
  const handleSingleAnswerChange = (index: number) => {
    onAnswerChange([index]);
  };

  const handleMultiAnswerChange = (index: number, checked: boolean) => {
    if (checked) {
      onAnswerChange([...userAnswers, index]);
    } else {
      onAnswerChange(userAnswers.filter((i) => i !== index));
    }
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="mb-4">
          <p className="mb-4">{question.text}</p>
        </div>

        {question.isMultipleChoice ? (
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Checkbox
                  id={`option-${question.id}-${index}`}
                  checked={userAnswers.includes(index)}
                  onCheckedChange={(checked) =>
                    handleMultiAnswerChange(index, checked === true)
                  }
                />
                <Label
                  htmlFor={`option-${question.id}-${index}`}
                  className="text-sm font-normal"
                >
                  {option}
                </Label>
              </div>
            ))}
          </div>
        ) : (
          <RadioGroup
            value={userAnswers[0]?.toString()}
            onValueChange={(value) => handleSingleAnswerChange(parseInt(value))}
          >
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <RadioGroupItem
                  value={index.toString()}
                  id={`option-${question.id}-${index}`}
                />
                <Label
                  htmlFor={`option-${question.id}-${index}`}
                  className="text-sm font-normal"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
