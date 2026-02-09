import { SAELevel, EPIASStage, EPIAS_STAGE_NAMES } from '../types';

interface MatrixGridProps {
  saeLevel: SAELevel;
  epiasStage: EPIASStage;
  isDark?: boolean;
  compact?: boolean;
}

export function MatrixGrid({ saeLevel, epiasStage, isDark = true, compact = false }: MatrixGridProps) {
  const saeLevels: SAELevel[] = [0, 1, 2, 3, 4, 5];
  const epiasStages: EPIASStage[] = [5, 4, 3, 2, 1]; // Top to bottom (Steward at top)

  const borderColor = isDark ? 'border-grey-600' : 'border-grey-400';
  const tickColor = isDark ? 'bg-grey-600' : 'bg-grey-400';
  const labelColor = isDark ? 'text-grey-500' : 'text-grey-500';
  const cellSize = compact ? 40 : 56; // pixels - larger cells
  const tickLength = 6;
  const tickWidth = 1;
  const tickGap = 2; // gap between tick and grid
  const labelGap = 14;

  const gridWidth = cellSize * 6;
  const gridHeight = cellSize * 5;

  return (
    <div className="inline-block">
      {/* Container with space for labels */}
      <div className="relative" style={{ paddingLeft: labelGap + 16, paddingBottom: labelGap + 16 }}>
        {/* Row labels (E-P-I-A-S) - outside left */}
        <div
          className="absolute left-0 flex flex-col justify-around"
          style={{ top: 0, height: gridHeight }}
        >
          {epiasStages.map((stage) => (
            <div
              key={stage}
              className={`text-[10px] font-mono uppercase tracking-wider ${labelColor} flex items-center justify-end`}
              style={{ height: cellSize, paddingRight: labelGap }}
            >
              {EPIAS_STAGE_NAMES[stage].charAt(0)}
            </div>
          ))}
        </div>

        {/* Column labels (SAE levels) - outside bottom */}
        <div
          className="absolute flex justify-around"
          style={{ left: labelGap + 16, bottom: 0, width: gridWidth }}
        >
          {saeLevels.map((level) => (
            <div
              key={level}
              className={`text-[10px] font-mono uppercase tracking-wider ${labelColor} flex items-start justify-center`}
              style={{ width: cellSize, paddingTop: labelGap }}
            >
              L{level}
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className={`border ${borderColor} relative`} style={{ width: gridWidth, height: gridHeight }}>
          {/* Vertical grid lines */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={`v-${i}`}
              className={`absolute top-0 ${borderColor}`}
              style={{
                left: cellSize * i,
                width: 1,
                height: gridHeight,
                borderLeftWidth: 1,
                borderLeftStyle: 'solid'
              }}
            />
          ))}

          {/* Horizontal grid lines */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={`h-${i}`}
              className={`absolute left-0 ${borderColor}`}
              style={{
                top: cellSize * i,
                height: 1,
                width: gridWidth,
                borderTopWidth: 1,
                borderTopStyle: 'solid'
              }}
            />
          ))}

          {/* Tick marks - left side (at horizontal grid lines) */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={`tick-l-${i}`}
              className={`absolute ${tickColor}`}
              style={{
                left: -(tickLength + tickGap),
                top: cellSize * i,
                width: tickLength,
                height: tickWidth
              }}
            />
          ))}

          {/* Tick marks - bottom side (at vertical grid lines) */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={`tick-b-${i}`}
              className={`absolute ${tickColor}`}
              style={{
                left: cellSize * i,
                bottom: -(tickLength + tickGap),
                width: tickWidth,
                height: tickLength
              }}
            />
          ))}

          {/* Selected cell marker */}
          {(() => {
            const colIndex = saeLevel;
            const rowIndex = 5 - epiasStage; // Convert stage to row (5=top row 0, 1=bottom row 4)
            return (
              <div
                className={`absolute ${isDark ? 'bg-grey-100' : 'bg-grey-900'}`}
                style={{
                  left: colIndex * cellSize + 1,
                  top: rowIndex * cellSize + 1,
                  width: cellSize - 2,
                  height: cellSize - 2,
                }}
              />
            );
          })()}
        </div>
      </div>
    </div>
  );
}
