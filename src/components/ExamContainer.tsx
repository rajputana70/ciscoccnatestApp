import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import ExamHeader from './ExamHeader';
import NavSidebar from './NavSidebar';
import QuestionCard from './QuestionCard';
import { questions, examInfo } from '@/data/examData';

const ExamContainer: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number[] }>({});
  const [timeRemaining, setTimeRemaining] = useState(examInfo.duration * 60);
  const [examMode, setExamMode] = useState<'exam' | 'review' | 'results'>('exam');
  const [score, setScore] = useState(0);

  // Keep track of answered questions
  const answeredQuestions = new Set(Object.keys(userAnswers).map(Number));

  const submitExam = useCallback(() => {
    let correctCount = 0;

    // Calculate score
    questions.forEach((question) => {
      const userAnswerForQuestion = userAnswers[question.id] || [];

      // For single answer questions
      if (!question.isMultipleChoice && userAnswerForQuestion[0] === question.correctAnswers[0]) {
        correctCount++;
      }
      // For multiple choice questions - all correct options must be selected and no incorrect ones
      else if (question.isMultipleChoice) {
        const isCorrect =
          question.correctAnswers.every(answer => userAnswerForQuestion.includes(answer)) &&
          userAnswerForQuestion.every(answer => question.correctAnswers.includes(answer));

        if (isCorrect) correctCount++;
      }
    });

    const scorePercentage = Math.round((correctCount / questions.length) * 100);
    setScore(scorePercentage);
    setExamMode('results');
  }, [userAnswers]);

  // Timer effect
  useEffect(() => {
    if (examMode !== 'exam') return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examMode, submitExam]);

  const handleAnswerChange = (questionId: number, selectedAnswers: number[]) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: selectedAnswers,
    }));
  };

  const navigateToQuestion = (questionNum: number) => {
    setCurrentQuestion(questionNum);
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleReview = () => {
    setExamMode('review');
  };

  const currentQuestionData = questions[currentQuestion - 1];

  return (
    <div className="flex h-screen flex-col">
      <ExamHeader
        timeRemaining={timeRemaining}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
      />

      <div className="flex flex-1 overflow-hidden">
        <NavSidebar
          totalQuestions={questions.length}
          currentQuestion={currentQuestion}
          answeredQuestions={answeredQuestions}
          onQuestionSelect={navigateToQuestion}
          onReview={handleReview}
        />

        <main className="flex-1 overflow-y-auto p-4">
          {examMode === 'exam' && (
            <>
              <QuestionCard
                question={currentQuestionData}
                userAnswers={userAnswers[currentQuestionData.id] || []}
                onAnswerChange={(answers) => handleAnswerChange(currentQuestionData.id, answers)}
              />

              <div className="flex justify-between mt-4">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 1}
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentQuestion === questions.length}
                >
                  Next
                </Button>
              </div>
            </>
          )}

          {examMode === 'review' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Review Your Answers</h2>
              <p className="mb-4">
                You have answered {answeredQuestions.size} out of {questions.length} questions.
              </p>
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={() => setExamMode('exam')}
                >
                  Return to Exam
                </Button>
                <Button
                  onClick={submitExam}
                >
                  Submit Exam
                </Button>
              </div>
            </div>
          )}

          {examMode === 'results' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Exam Results</h2>
              <p className="text-xl mb-4">
                Your score: <span className="font-bold">{score}%</span>
              </p>
              <p className="mb-6">
                {score >= examInfo.passingScore
                  ? "Congratulations! You passed the exam."
                  : "You did not meet the passing score. Please try again."}
              </p>
              <Button onClick={() => window.location.reload()}>
                Start New Exam
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ExamContainer;
