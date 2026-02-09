interface FooterProps {
  isDark?: boolean;
  onAboutClick: () => void;
  onGlossaryClick: () => void;
}

export function Footer({ isDark = true, onAboutClick, onGlossaryClick }: FooterProps) {
  return (
    <footer
      className={`w-full py-6 mt-auto border-t ${isDark ? 'border-grey-800' : 'border-grey-200'}`}
    >
      <div className="grid-container">
        <div className="col-span-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={onAboutClick}
              className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                isDark ? 'text-grey-500 hover:text-grey-300' : 'text-grey-500 hover:text-grey-700'
              }`}
            >
              About
            </button>
            <button
              onClick={onGlossaryClick}
              className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                isDark ? 'text-grey-500 hover:text-grey-300' : 'text-grey-500 hover:text-grey-700'
              }`}
            >
              Glossary
            </button>
          </div>
          <span
            className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-grey-600' : 'text-grey-400'}`}
          >
            AX Matrix
          </span>
        </div>
      </div>
    </footer>
  );
}
