import { AssessmentResult, SAE_LEVEL_NAMES, EPIAS_STAGE_NAMES } from '../types';

interface ResultBadgeProps {
  result: AssessmentResult;
  isDark?: boolean;
}

export function ResultBadge({ result, isDark = true }: ResultBadgeProps) {
  const levelName = SAE_LEVEL_NAMES[result.saeLevel];
  const stageName = EPIAS_STAGE_NAMES[result.epiasStage];

  return (
    <div className={`w-full max-w-md border p-6 ${isDark ? 'border-grey-700 bg-grey-900' : 'border-grey-200 bg-grey-50'}`}>
      {/* Top label */}
      <p className={`text-xs font-mono tracking-wider uppercase mb-4 ${isDark ? 'text-grey-500' : 'text-grey-500'}`}>
        AI Design Maturity
      </p>

      {/* Main level display - h2 size, semi-bold */}
      <p className={`text-3xl font-semibold tracking-tighter mb-1 ${isDark ? 'text-grey-100' : 'text-grey-900'}`}>
        L{result.saeLevel} {stageName}
      </p>

      {/* Level name */}
      <p className={`text-sm font-mono uppercase tracking-wider mb-4 ${isDark ? 'text-grey-400' : 'text-grey-600'}`}>
        {levelName}
      </p>

      <div className={`h-px mb-3 ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`} />

      {/* Bottom label */}
      <p className={`text-xs font-mono tracking-wider uppercase ${isDark ? 'text-grey-600' : 'text-grey-500'}`}>
        E-P-I-A-S × SAE Framework
      </p>
    </div>
  );
}
