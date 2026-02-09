import { useState } from 'react';
import { AssessmentResult, SAE_LEVEL_NAMES, EPIAS_STAGE_NAMES, SAELevel, EPIASStage } from '../types';
import { MatrixGrid } from './MatrixGrid';
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

  const stageName = EPIAS_STAGE_NAMES[result.epiasStage];
  const summary = getResultSummary(result);

  const saeLevels: SAELevel[] = [0, 1, 2, 3, 4, 5];
  const epiasStages: EPIASStage[] = [1, 2, 3, 4, 5]; // E first in key

  return (
    <div className="pt-24 pb-12 px-5 sm:px-10">
      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left column: Matrix only */}
        <div className="md:w-1/2 flex items-start justify-center md:justify-start">
          <MatrixGrid saeLevel={result.saeLevel} epiasStage={result.epiasStage} isDark={isDark} />
        </div>

        {/* Right column: Your Position + Keys in 2 columns */}
        <div className="md:w-1/2">
          {/* Result label */}
          <h1 className={`text-2xl font-semibold tracking-tighter mb-8 ${isDark ? 'text-grey-100' : 'text-grey-900'}`}>
            L{result.saeLevel} {stageName}
          </h1>

          {/* Summary */}
          <p className={`text-sm leading-relaxed mb-8 max-w-md ${isDark ? 'text-grey-400' : 'text-grey-600'}`}>
            {summary}
          </p>

          {/* Keys in 2 columns */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* SAE Levels Key */}
            <div>
              <h2 className={`text-xs font-mono uppercase tracking-wider mb-4 ${isDark ? 'text-grey-300' : 'text-grey-700'}`}>
                SAE Levels
              </h2>
              <div className="space-y-1.5">
                {saeLevels.map((level) => (
                  <div
                    key={level}
                    className={`text-sm ${
                      level === result.saeLevel
                        ? isDark ? 'text-grey-100 font-medium' : 'text-grey-900 font-medium'
                        : isDark ? 'text-grey-500' : 'text-grey-500'
                    }`}
                  >
                    <span className="font-mono">L{level}</span> {SAE_LEVEL_NAMES[level]}
                  </div>
                ))}
              </div>
            </div>

            {/* E-P-I-A-S Stages Key */}
            <div>
              <h2 className={`text-xs font-mono uppercase tracking-wider mb-4 ${isDark ? 'text-grey-300' : 'text-grey-700'}`}>
                E-P-I-A-S Stages
              </h2>
              <div className="space-y-1.5">
                {epiasStages.map((stage) => (
                  <div
                    key={stage}
                    className={`text-sm ${
                      stage === result.epiasStage
                        ? isDark ? 'text-grey-100 font-medium' : 'text-grey-900 font-medium'
                        : isDark ? 'text-grey-500' : 'text-grey-500'
                    }`}
                  >
                    <span className="font-mono">{EPIAS_STAGE_NAMES[stage].charAt(0)}</span> {EPIAS_STAGE_NAMES[stage]}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mb-4">
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

          <button
            onClick={onRetake}
            className={`text-xs font-mono uppercase tracking-wider transition-colors ${isDark ? 'text-grey-500 hover:text-grey-300' : 'text-grey-500 hover:text-grey-700'}`}
          >
            Retake Assessment
          </button>
        </div>
      </div>

      {/* Score breakdown (below fold) */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className={`h-px mb-6 ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`} />

        <details className="group">
          <summary className={`text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors list-none flex items-center gap-2 ${isDark ? 'text-grey-500 hover:text-grey-300' : 'text-grey-500 hover:text-grey-700'}`}>
            <span className="group-open:rotate-90 transition-transform">→</span>
            Score Breakdown
          </summary>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
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
  );
}
