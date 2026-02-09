import { useState } from 'react';
import { Question, SAE_LEVEL_NAMES } from '../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: boolean) => void;
  onBack?: () => void;
  canGoBack: boolean;
  isDark?: boolean;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onBack,
  canGoBack,
  isDark = true,
}: QuestionCardProps) {
  const levelName = SAE_LEVEL_NAMES[question.saeLevel];
  const [isExplanationExpanded, setIsExplanationExpanded] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Truncate explanation to ~120 characters at word boundary
  const truncateLength = 120;
  const shouldTruncate = question.explanation.length > truncateLength;
  const truncatedExplanation = shouldTruncate
    ? question.explanation.slice(0, truncateLength).replace(/\s+\S*$/, '') + '...'
    : question.explanation;

  return (
    <div className="w-full">
      {/* Level indicator */}
      <div className="mb-6">
        <span
          className={`inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider
                       rounded-full border ${isDark ? 'text-grey-500 border-grey-700' : 'text-grey-500 border-grey-300'}`}
        >
          L{question.saeLevel} — {levelName}
        </span>
      </div>

      {/* Question - h3 size, semi-bold */}
      <h2
        className={`text-2xl font-semibold tracking-tighter mb-8 leading-snug ${isDark ? 'text-grey-100' : 'text-grey-900'}`}
      >
        {question.text}
      </h2>

      {/* Answer buttons */}
      <div className="flex gap-3 mb-6">
        <button onClick={() => onAnswer(true)} className="btn-pill min-w-24">
          Yes
        </button>
        <button onClick={() => onAnswer(false)} className="btn-pill min-w-24">
          No
        </button>
      </div>

      <div className={`h-px mb-6 ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`} />

      {/* Explanation section */}
      <div className="mb-4">
        <p className={`prose text-sm leading-relaxed ${isDark ? 'text-grey-400' : 'text-grey-600'}`}>
          {isExplanationExpanded || !shouldTruncate ? question.explanation : truncatedExplanation}
        </p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExplanationExpanded(!isExplanationExpanded)}
            className={`mt-2 text-sm font-medium transition-colors ${
              isDark ? 'text-grey-300 hover:text-grey-100' : 'text-grey-700 hover:text-grey-900'
            }`}
          >
            {isExplanationExpanded ? 'Show less' : 'Read more'} →
          </button>
        )}
      </div>

      {/* Resources accordion */}
      {question.resources && question.resources.length > 0 && (
        <div className="mb-6">
          <button
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isDark ? 'text-grey-300 hover:text-grey-100' : 'text-grey-700 hover:text-grey-900'
            }`}
          >
            <span
              className={`inline-block transition-transform duration-200 ${isResourcesOpen ? 'rotate-90' : ''}`}
            >
              →
            </span>
            Resources
          </button>
          <div
            className={`accordion-content overflow-hidden transition-all duration-200 ease-out ${
              isResourcesOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="space-y-2">
              {question.resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm transition-colors ${
                      isDark
                        ? 'text-grey-400 hover:text-grey-200'
                        : 'text-grey-600 hover:text-grey-800'
                    }`}
                  >
                    {resource.title} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className={`h-px mb-4 ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`} />

      {/* Progress and back button */}
      <div
        className={`flex items-center justify-between text-xs font-mono uppercase tracking-wider ${isDark ? 'text-grey-500' : 'text-grey-500'}`}
      >
        {canGoBack && onBack ? (
          <button
            onClick={onBack}
            className={`transition-colors ${isDark ? 'hover:text-grey-300' : 'hover:text-grey-700'}`}
          >
            ← Back
          </button>
        ) : (
          <span />
        )}
        <span>
          {questionNumber} / {totalQuestions}
        </span>
      </div>
    </div>
  );
}
