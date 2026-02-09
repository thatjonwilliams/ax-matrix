import { AssessmentResult, SAE_LEVEL_NAMES, EPIAS_STAGE_NAMES } from '../types';

/**
 * Generate SVG badge content - Swiss brutalist greyscale design
 */
export function generateBadgeSVG(result: AssessmentResult, darkMode: boolean): string {
  const levelName = SAE_LEVEL_NAMES[result.saeLevel];
  const stageName = EPIAS_STAGE_NAMES[result.epiasStage];

  // Greyscale palette
  const bgColor = darkMode ? '#171717' : '#fafafa';
  const borderColor = darkMode ? '#404040' : '#d4d4d4';
  const textColor = darkMode ? '#f5f5f5' : '#171717';
  const subtextColor = darkMode ? '#737373' : '#737373';
  const mutedColor = darkMode ? '#525252' : '#a3a3a3';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180" viewBox="0 0 320 180">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&amp;display=swap');
      .title { font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; }
      .mono { font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace; font-weight: 400; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="320" height="180" fill="${bgColor}" stroke="${borderColor}" stroke-width="1"/>

  <!-- Top label -->
  <text x="24" y="36" class="mono" fill="${mutedColor}" font-size="9" letter-spacing="0.1em">
    AI DESIGN MATURITY
  </text>

  <!-- Divider -->
  <line x1="24" y1="52" x2="296" y2="52" stroke="${borderColor}" stroke-width="1"/>

  <!-- Main level display -->
  <text x="24" y="100" class="title" fill="${textColor}" font-size="32" letter-spacing="-0.02em">
    L${result.saeLevel} ${stageName}
  </text>

  <!-- Level name -->
  <text x="24" y="124" class="mono" fill="${subtextColor}" font-size="11" letter-spacing="0.05em">
    ${levelName.toUpperCase()}
  </text>

  <!-- Divider -->
  <line x1="24" y1="148" x2="296" y2="148" stroke="${borderColor}" stroke-width="1"/>

  <!-- Bottom label -->
  <text x="24" y="168" class="mono" fill="${mutedColor}" font-size="9" letter-spacing="0.1em">
    E-P-I-A-S × SAE FRAMEWORK
  </text>
</svg>`;
}

/**
 * Download SVG as a file
 */
export function downloadSVG(result: AssessmentResult, darkMode: boolean): void {
  const svgContent = generateBadgeSVG(result, darkMode);
  const blob = new Blob([svgContent], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);

  const stageName = EPIAS_STAGE_NAMES[result.epiasStage].toLowerCase();
  const filename = `ax-matrix-L${result.saeLevel}-${stageName}.svg`;

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Download as PNG (using canvas conversion)
 */
export async function downloadPNG(result: AssessmentResult, darkMode: boolean): Promise<void> {
  const svgContent = generateBadgeSVG(result, darkMode);

  // Create an image from the SVG
  const img = new Image();
  const svgBlob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);

  return new Promise((resolve, reject) => {
    img.onload = () => {
      // Create canvas and draw image
      const canvas = document.createElement('canvas');
      const scale = 2; // 2x for retina
      canvas.width = 320 * scale;
      canvas.height = 180 * scale;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0);

      // Convert to PNG and download
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Could not create blob'));
          return;
        }

        const stageName = EPIAS_STAGE_NAMES[result.epiasStage].toLowerCase();
        const filename = `ax-matrix-L${result.saeLevel}-${stageName}.png`;

        const pngUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(pngUrl);
        URL.revokeObjectURL(url);
        resolve();
      }, 'image/png');
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Could not load SVG'));
    };

    img.src = url;
  });
}
