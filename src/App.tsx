import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { AssessmentFlow } from './components/AssessmentFlow';
import { ResultsView } from './components/ResultsView';
import { Footer } from './components/Footer';
import { GlossaryPage } from './components/GlossaryPage';
import { AboutPage } from './components/AboutPage';
import { useAssessment } from './hooks/useAssessment';
import { Screen } from './types';

function App() {
  const {
    state,
    currentQuestion,
    progress,
    totalQuestions,
    answerQuestion,
    goBack,
    reset,
    canGoBack,
  } = useAssessment();

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  // Determine initial screen based on whether there's a saved result
  const [screen, setScreen] = useState<Screen>(() => {
    return state.result ? 'welcome' : 'welcome';
  });

  // Track previous screen for back navigation from About/Glossary
  const [previousScreen, setPreviousScreen] = useState<Screen>('welcome');

  const handleStart = () => {
    reset(); // Clear any previous state
    setScreen('assessment');
  };

  const handleViewResults = () => {
    setScreen('results');
  };

  const handleRetake = () => {
    reset();
    setScreen('welcome');
  };

  const handleThemeChange = (dark: boolean) => {
    setIsDark(dark);
  };

  const handleLogoClick = () => {
    setScreen('welcome');
  };

  const handleAboutClick = () => {
    setPreviousScreen(screen);
    setScreen('about');
  };

  const handleAboutBack = () => {
    setScreen(previousScreen);
  };

  const handleGlossaryClick = () => {
    setPreviousScreen(screen);
    setScreen('glossary');
  };

  const handleGlossaryBack = () => {
    setScreen(previousScreen);
  };

  // Auto-advance to results when assessment completes
  if (screen === 'assessment' && state.isComplete && state.result) {
    setScreen('results');
  }

  // Determine if footer should be shown
  const showFooter = screen !== 'glossary' && screen !== 'about';

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors ${isDark ? 'bg-grey-950 text-grey-100' : 'bg-grey-50 text-grey-900'}`}
    >
      <Header onThemeChange={handleThemeChange} onLogoClick={handleLogoClick} />

      <div className="flex-1">
        {screen === 'welcome' && (
          <Welcome
            onStart={handleStart}
            hasPreviousResult={state.result !== null}
            onViewResults={state.result ? handleViewResults : undefined}
            isDark={isDark}
          />
        )}

        {screen === 'assessment' && currentQuestion && (
          <AssessmentFlow
            currentQuestion={currentQuestion}
            questionNumber={state.currentQuestionIndex + 1}
            totalQuestions={totalQuestions}
            progress={progress}
            onAnswer={answerQuestion}
            onBack={goBack}
            canGoBack={canGoBack}
            isDark={isDark}
          />
        )}

        {screen === 'results' && state.result && (
          <ResultsView result={state.result} onRetake={handleRetake} isDark={isDark} />
        )}

        {screen === 'glossary' && <GlossaryPage isDark={isDark} onBack={handleGlossaryBack} />}

        {screen === 'about' && <AboutPage isDark={isDark} onBack={handleAboutBack} />}
      </div>

      {showFooter && (
        <Footer
          isDark={isDark}
          onAboutClick={handleAboutClick}
          onGlossaryClick={handleGlossaryClick}
        />
      )}
    </div>
  );
}

export default App;
