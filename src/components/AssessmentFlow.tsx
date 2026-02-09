import { QuestionCard } from './QuestionCard';
import { Question } from '../types';

interface AssessmentFlowProps {
  currentQuestion: Question;
  questionNumber: number;
  totalQuestions: number;
  progress: number;
  onAnswer: (answer: boolean) => void;
  onBack: () => void;
  canGoBack: boolean;
  isDark?: boolean;
}

export function AssessmentFlow({
  currentQuestion,
  questionNumber,
  totalQuestions,
  progress,
  onAnswer,
  onBack,
  canGoBack,
  isDark = true,
}: AssessmentFlowProps) {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Progress bar */}
      <div className={`w-full h-px relative ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`}>
        <div
          className={`absolute top-0 left-0 h-px transition-all duration-300 ease-out ${isDark ? 'bg-grey-100' : 'bg-grey-900'}`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question area */}
      <div className="pt-10">
        <div className="grid-container w-full">
          <div className="col-span-18 col-start-4 sm:col-span-full sm:col-start-1 md:col-span-full md:col-start-1">
            <QuestionCard
              question={currentQuestion}
              questionNumber={questionNumber}
              totalQuestions={totalQuestions}
              onAnswer={onAnswer}
              onBack={onBack}
              canGoBack={canGoBack}
              isDark={isDark}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
