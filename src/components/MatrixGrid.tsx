import { SAELevel, EPIASStage, SAE_LEVEL_NAMES, EPIAS_STAGE_NAMES } from '../types';

interface MatrixGridProps {
  saeLevel: SAELevel;
  epiasStage: EPIASStage;
  isDark?: boolean;
  compact?: boolean;
}

export function MatrixGrid({ saeLevel, epiasStage, isDark = true, compact = false }: MatrixGridProps) {
  const saeLevels: SAELevel[] = [0, 1, 2, 3, 4, 5];
  const epiasStages: EPIASStage[] = [5, 4, 3, 2, 1]; // Top to bottom (Steward at top)

  const borderColor = isDark ? 'border-grey-700' : 'border-grey-300';
  const cellSize = compact ? 'w-6 h-6' : 'w-8 h-8';

  return (
    <div className="inline-block">
      {/* Matrix table with rules */}
      <div className={`border ${borderColor}`}>
        {/* Column headers (SAE levels) */}
        <div className={`flex border-b ${borderColor}`}>
          {/* Empty corner cell */}
          <div className={`${cellSize} flex-shrink-0`} />
          {saeLevels.map((level, idx) => (
            <div
              key={level}
              className={`${cellSize} flex-shrink-0 flex items-center justify-center text-[9px] font-mono uppercase tracking-wider ${
                idx > 0 ? `border-l ${borderColor}` : ''
              } ${isDark ? 'text-grey-500' : 'text-grey-500'}`}
            >
              L{level}
            </div>
          ))}
        </div>

        {/* Grid rows */}
        {epiasStages.map((stage, rowIdx) => (
          <div
            key={stage}
            className={`flex ${rowIdx > 0 ? `border-t ${borderColor}` : ''}`}
          >
            {/* Row label (E-P-I-A-S stage) */}
            <div
              className={`${cellSize} flex-shrink-0 flex items-center justify-center text-[9px] font-mono uppercase tracking-wider ${isDark ? 'text-grey-500' : 'text-grey-500'}`}
            >
              {EPIAS_STAGE_NAMES[stage].charAt(0)}
            </div>

            {/* Grid cells */}
            {saeLevels.map((level, colIdx) => {
              const isSelected = level === saeLevel && stage === epiasStage;

              return (
                <div
                  key={`${stage}-${level}`}
                  className={`${cellSize} flex-shrink-0 ${colIdx > 0 ? `border-l ${borderColor}` : ''} ${
                    isSelected
                      ? isDark ? 'bg-grey-100' : 'bg-grey-900'
                      : ''
                  }`}
                  title={`L${level} ${SAE_LEVEL_NAMES[level]} × ${EPIAS_STAGE_NAMES[stage]}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
