import { SAELevel, EPIASStage, SAE_LEVEL_NAMES, EPIAS_STAGE_NAMES } from '../types';

interface MatrixGridProps {
  saeLevel: SAELevel;
  epiasStage: EPIASStage;
  isDark?: boolean;
}

export function MatrixGrid({ saeLevel, epiasStage, isDark = true }: MatrixGridProps) {
  const saeLevels: SAELevel[] = [0, 1, 2, 3, 4, 5];
  const epiasStages: EPIASStage[] = [5, 4, 3, 2, 1]; // Top to bottom (Steward at top)

  return (
    <div className="w-full">
      {/* Column headers (SAE levels) */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        <div /> {/* Empty corner cell */}
        {saeLevels.map((level) => (
          <div
            key={level}
            className={`text-center text-[10px] font-mono py-1 uppercase tracking-wider ${isDark ? 'text-grey-500' : 'text-grey-500'}`}
          >
            L{level}
          </div>
        ))}
      </div>

      {/* Grid rows */}
      {epiasStages.map((stage) => (
        <div key={stage} className="grid grid-cols-7 gap-1 mb-1">
          {/* Row label (E-P-I-A-S stage) */}
          <div className="flex items-center justify-end pr-2">
            <span className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-grey-500' : 'text-grey-500'}`}>
              {EPIAS_STAGE_NAMES[stage].charAt(0)}
            </span>
          </div>

          {/* Grid cells */}
          {saeLevels.map((level) => {
            const isSelected = level === saeLevel && stage === epiasStage;

            return (
              <div
                key={`${stage}-${level}`}
                className={`aspect-square border transition-all ${
                  isSelected
                    ? isDark ? 'bg-grey-100 border-grey-100' : 'bg-grey-900 border-grey-900'
                    : isDark ? 'bg-transparent border-grey-700 hover:border-grey-600' : 'bg-transparent border-grey-300 hover:border-grey-400'
                }`}
                title={`L${level} ${SAE_LEVEL_NAMES[level]} × ${EPIAS_STAGE_NAMES[stage]}`}
              />
            );
          })}
        </div>
      ))}

      <div className={`h-px my-6 ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`} />

      {/* Legend */}
      <div className={`flex justify-between text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-grey-500' : 'text-grey-500'}`}>
        <div className="space-y-1">
          <div className={`mb-2 ${isDark ? 'text-grey-300' : 'text-grey-700'}`}>E-P-I-A-S</div>
          {epiasStages.map((stage) => (
            <div key={stage}>
              {EPIAS_STAGE_NAMES[stage].charAt(0)} = {EPIAS_STAGE_NAMES[stage]}
            </div>
          ))}
        </div>
        <div className="text-right">
          <div className={`mb-2 ${isDark ? 'text-grey-300' : 'text-grey-700'}`}>SAE Levels</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {saeLevels.map((level) => (
              <div key={level} className="text-left">
                L{level} = {SAE_LEVEL_NAMES[level]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
