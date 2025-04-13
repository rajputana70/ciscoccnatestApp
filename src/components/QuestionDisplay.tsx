import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Question } from '@/data/examData';

interface QuestionDisplayProps {
  question: Question;
  userAnswers: number[];
  onAnswerChange: (selectedAnswers: number[]) => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
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

          {question.exhibitType && (
            <div className="bg-gray-100 p-4 rounded mb-4 font-mono text-sm whitespace-pre-wrap">
              {question.text.split(/\\n\\n/).slice(1).join('\n\n')}
            </div>
          )}
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

export default QuestionDisplay;
