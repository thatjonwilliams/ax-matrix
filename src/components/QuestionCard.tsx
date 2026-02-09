import { useState, useEffect } from 'react';
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

  // Check if we're on desktop (768px+)
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // On desktop, start expanded; on mobile, start collapsed
  const [isExplanationExpanded, setIsExplanationExpanded] = useState(isDesktop);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Update expansion state when screen size changes
  useEffect(() => {
    setIsExplanationExpanded(isDesktop);
  }, [isDesktop]);

  // Truncate explanation to ~120 characters at word boundary
  const truncateLength = 120;
  const shouldTruncate = question.explanation.length > truncateLength;
  const truncatedExplanation = shouldTruncate
    ? question.explanation.slice(0, truncateLength).replace(/\s+\S*$/, '') + '...'
    : question.explanation;

  return (
    <div className="w-full">
      {/* Top row: Back, Level indicator, and question count */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {canGoBack && onBack ? (
            <button
              onClick={onBack}
              className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                isDark ? 'text-grey-500 hover:text-grey-300' : 'text-grey-500 hover:text-grey-700'
              }`}
            >
              ← Back
            </button>
          ) : (
            <span className="text-xs font-mono uppercase tracking-wider invisible">← Back</span>
          )}
          <span
            className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-grey-500' : 'text-grey-500'}`}
          >
            L{question.saeLevel} — {levelName}
          </span>
        </div>
        <span
          className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-grey-500' : 'text-grey-500'}`}
        >
          {questionNumber} / {totalQuestions}
        </span>
      </div>

      {/* Question - h3 size, semi-bold */}
      <h2
        className={`text-2xl font-semibold tracking-tighter mb-8 leading-snug ${isDark ? 'text-grey-100' : 'text-grey-900'}`}
      >
        {question.text}
      </h2>

      {/* Answer buttons - No on left, Yes on right */}
      <div className="flex gap-3 mb-6">
        <button onClick={() => onAnswer(false)} className="btn-pill min-w-24">
          No
        </button>
        <button onClick={() => onAnswer(true)} className="btn-pill min-w-24">
          Yes
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
            {isExplanationExpanded ? 'Show less' : 'Read more'}
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

    </div>
  );
}
