import { GLOSSARY } from '../data/glossary';

interface GlossaryPageProps {
  isDark?: boolean;
  onBack: () => void;
}

export function GlossaryPage({ isDark = true, onBack }: GlossaryPageProps) {
  return (
    <main className="min-h-[calc(100vh-64px)] pt-24 pb-12">
      <div className="grid-container">
        <div className="col-span-20 col-start-3 md:col-span-full md:col-start-1 sm:col-span-full sm:col-start-1">
          {/* Back link */}
          <button
            onClick={onBack}
            className={`mb-8 text-xs font-mono uppercase tracking-wider transition-colors ${
              isDark ? 'text-grey-500 hover:text-grey-300' : 'text-grey-500 hover:text-grey-700'
            }`}
          >
            ← Back
          </button>

          {/* Header */}
          <h1
            className={`text-3xl font-semibold tracking-tighter mb-2 ${isDark ? 'text-grey-100' : 'text-grey-900'}`}
          >
            Glossary
          </h1>
          <p className={`text-sm mb-10 ${isDark ? 'text-grey-400' : 'text-grey-600'}`}>
            Key terms from the E-P-I-A-S × SAE Framework
          </p>

          {/* Glossary terms */}
          <dl className="space-y-6">
            {GLOSSARY.map((item, index) => (
              <div
                key={index}
                className={`pb-6 border-b ${isDark ? 'border-grey-800' : 'border-grey-200'}`}
              >
                <dt
                  className={`text-base font-semibold mb-2 ${isDark ? 'text-grey-100' : 'text-grey-900'}`}
                >
                  {item.term}
                </dt>
                <dd className={`prose text-sm leading-relaxed ${isDark ? 'text-grey-400' : 'text-grey-600'}`}>
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
