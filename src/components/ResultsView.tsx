import { useState } from 'react';
import { AssessmentResult, SAE_LEVEL_NAMES, EPIAS_STAGE_NAMES } from '../types';
import { MatrixGrid } from './MatrixGrid';
import { ResultBadge } from './ResultBadge';
import { downloadSVG, downloadPNG } from '../lib/download';
import { getResultSummary } from '../lib/scoring';

interface ResultsViewProps {
  result: AssessmentResult;
  onRetake: () => void;
  isDark?: boolean;
}

export function ResultsView({ result, onRetake, isDark = true }: ResultsViewProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadSVG = () => {
    downloadSVG(result, isDark);
  };

  const handleDownloadPNG = async () => {
    setDownloading(true);
    try {
      await downloadPNG(result, isDark);
    } catch (error) {
      console.error('Failed to download PNG:', error);
    } finally {
      setDownloading(false);
    }
  };

  const levelName = SAE_LEVEL_NAMES[result.saeLevel];
  const stageName = EPIAS_STAGE_NAMES[result.epiasStage];
  const summary = getResultSummary(result);

  return (
    <div className="min-h-screen pt-16 pb-12">
      <div className="grid-container">
        <div className="col-span-18 col-start-4 sm:col-span-full sm:col-start-1 md:col-span-full md:col-start-1">
          {/* Header */}
          <div className="mb-6">
            <p className={`text-xs font-mono tracking-wider uppercase mb-2 ${isDark ? 'text-grey-500' : 'text-grey-500'}`}>
              Assessment Complete
            </p>
            <h1 className={`text-3xl font-semibold tracking-tighter ${isDark ? 'text-grey-100' : 'text-grey-900'}`}>
              Your AI Design Maturity
            </h1>
          </div>

          <div className={`h-px mb-6 ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`} />

          {/* Badge */}
          <div className="mb-6">
            <ResultBadge result={result} isDark={isDark} />
          </div>

          <div className={`h-px mb-6 ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`} />

          {/* Level details */}
          <div className="mb-6">
            <h2 className={`text-xl font-semibold tracking-tighter mb-2 ${isDark ? 'text-grey-100' : 'text-grey-900'}`}>
              {levelName} × {stageName}
            </h2>
            <p className={`leading-relaxed ${isDark ? 'text-grey-400' : 'text-grey-600'}`}>
              {summary}
            </p>
          </div>

          <div className={`h-px mb-6 ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`} />

          {/* Matrix visualization */}
          <div className="mb-6">
            <p className={`text-xs font-mono tracking-wider uppercase mb-4 ${isDark ? 'text-grey-500' : 'text-grey-500'}`}>
              Position on Matrix
            </p>
            <MatrixGrid saeLevel={result.saeLevel} epiasStage={result.epiasStage} isDark={isDark} />
          </div>

          <div className={`h-px mb-6 ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`} />

          {/* Download buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button onClick={handleDownloadSVG} className="btn-pill-filled">
              Download SVG
            </button>
            <button
              onClick={handleDownloadPNG}
              disabled={downloading}
              className="btn-pill disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {downloading ? 'Exporting...' : 'Download PNG'}
            </button>
          </div>

          {/* Retake button */}
          <div className="mb-6">
            <button
              onClick={onRetake}
              className={`text-xs font-mono uppercase tracking-wider transition-colors ${isDark ? 'text-grey-500 hover:text-grey-300' : 'text-grey-500 hover:text-grey-700'}`}
            >
              Retake Assessment
            </button>
          </div>

          <div className={`h-px mb-4 ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`} />

          {/* Score breakdown (collapsible) */}
          <details className="group">
            <summary className={`text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors list-none flex items-center gap-2 ${isDark ? 'text-grey-500 hover:text-grey-300' : 'text-grey-500 hover:text-grey-700'}`}>
              <span className="group-open:rotate-90 transition-transform">→</span>
              Score Breakdown
            </summary>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {([0, 1, 2, 3, 4, 5] as const).map((level) => {
                const score = result.levelScores[level];
                const percentage = score.total > 0
                  ? Math.round((score.yes / score.total) * 100)
                  : 0;
                const isActiveLevel = level === result.saeLevel;

                return (
                  <div
                    key={level}
                    className={`p-3 border ${
                      isActiveLevel
                        ? isDark ? 'border-grey-100 bg-grey-800' : 'border-grey-900 bg-grey-100'
                        : isDark ? 'border-grey-700' : 'border-grey-300'
                    }`}
                  >
                    <div className={`text-xs font-mono uppercase tracking-wider mb-1 ${isDark ? 'text-grey-500' : 'text-grey-500'}`}>
                      L{level}
                    </div>
                    <div className={`font-mono text-sm ${
                      isActiveLevel
                        ? isDark ? 'text-grey-100' : 'text-grey-900'
                        : isDark ? 'text-grey-400' : 'text-grey-600'
                    }`}>
                      {score.yes}/{score.total} ({percentage}%)
                    </div>
                  </div>
                );
              })}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
