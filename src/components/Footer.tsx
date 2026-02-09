interface FooterProps {
  isDark?: boolean;
  onGlossaryClick: () => void;
}

export function Footer({ isDark = true, onGlossaryClick }: FooterProps) {
  return (
    <footer
      className={`w-full py-6 mt-auto border-t ${isDark ? 'border-grey-800' : 'border-grey-200'}`}
    >
      <div className="grid-container">
        <div className="col-span-full flex items-center justify-between">
          <button
            onClick={onGlossaryClick}
            className={`text-xs font-mono uppercase tracking-wider transition-colors ${
              isDark ? 'text-grey-500 hover:text-grey-300' : 'text-grey-500 hover:text-grey-700'
            }`}
          >
            Glossary
          </button>
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
