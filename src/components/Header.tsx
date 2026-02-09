import { useEffect, useState } from 'react';

interface HeaderProps {
  onThemeChange?: (isDark: boolean) => void;
  onLogoClick?: () => void;
}

export function Header({ onThemeChange, onLogoClick }: HeaderProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }

    onThemeChange?.(newIsDark);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${isDark ? 'bg-grey-950' : 'bg-grey-50'}`}>
      <div className="grid-container h-16 items-center" style={{ display: 'flex', maxWidth: 'none' }}>
        {/* Logo */}
        <button
          onClick={onLogoClick}
          className={`font-mono text-sm tracking-wider transition-colors ${isDark ? 'text-grey-100 hover:text-grey-300' : 'text-grey-900 hover:text-grey-600'}`}
        >
          AX MATRIX
        </button>

        <div className="flex-1" />

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-pill border transition-colors
                   text-xs font-mono uppercase tracking-wider
                   ${isDark
                     ? 'border-grey-700 text-grey-400 hover:text-grey-100 hover:border-grey-500'
                     : 'border-grey-300 text-grey-600 hover:text-grey-900 hover:border-grey-400'
                   }`}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? (
            <>
              <SunIcon />
              <span className="hidden sm:inline">Light</span>
            </>
          ) : (
            <>
              <MoonIcon />
              <span className="hidden sm:inline">Dark</span>
            </>
          )}
        </button>
      </div>
      <div className={`h-px ${isDark ? 'bg-grey-800' : 'bg-grey-200'}`} />
    </header>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
