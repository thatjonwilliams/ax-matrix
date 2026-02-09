interface WelcomeProps {
  onStart: () => void;
  hasPreviousResult?: boolean;
  onViewResults?: () => void;
  isDark?: boolean;
}

export function Welcome({ onStart, hasPreviousResult, onViewResults, isDark = true }: WelcomeProps) {
  return (
    <div className="min-h-screen pt-16 flex items-center">
      <div className="grid-container w-full">
        <div className="col-span-16 col-start-5 sm:col-span-full sm:col-start-1 md:col-span-full md:col-start-1">
          {/* Title - Geist h2 size, semi-bold */}
          <h1 className={`text-3xl font-semibold tracking-tighter mb-6 ${isDark ? 'text-grey-100' : 'text-grey-900'}`}>
            AI Design Maturity Assessment
          </h1>

          <div className={`h-px mb-6 ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`} />

          {/* Description */}
          <p className={`mb-8 leading-relaxed ${isDark ? 'text-grey-400' : 'text-grey-600'}`}>
            Discover where you are on the AI design maturity spectrum using the
            E-P-I-A-S × SAE framework. Answer 19 questions to receive your
            assessment and downloadable badge.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <button onClick={onStart} className="btn-pill-filled">
              {hasPreviousResult ? 'Retake Assessment' : 'Start Assessment'}
            </button>

            {hasPreviousResult && onViewResults && (
              <button onClick={onViewResults} className="btn-pill">
                View Previous Results
              </button>
            )}
          </div>

          <div className={`h-px mt-8 mb-4 ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`} />

          {/* Footer note */}
          <p className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-grey-600' : 'text-grey-500'}`}>
            19 Questions · 2 Min
          </p>
        </div>
      </div>
    </div>
  );
}
