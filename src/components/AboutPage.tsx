interface AboutPageProps {
  isDark?: boolean;
  onBack: () => void;
}

export function AboutPage({ isDark = true, onBack }: AboutPageProps) {
  const textColor = isDark ? 'text-grey-300' : 'text-grey-700';
  const headingColor = isDark ? 'text-grey-100' : 'text-grey-900';
  const mutedColor = isDark ? 'text-grey-500' : 'text-grey-500';
  const linkColor = isDark ? 'text-grey-200 hover:text-grey-100' : 'text-grey-700 hover:text-grey-900';
  const borderColor = isDark ? 'border-grey-800' : 'border-grey-200';
  const tableHeaderBg = isDark ? 'bg-grey-900' : 'bg-grey-100';

  return (
    <div className="pt-24 pb-12 px-5 sm:px-10">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <button
          onClick={onBack}
          className={`text-xs font-mono uppercase tracking-wider mb-8 transition-colors ${
            isDark ? 'text-grey-500 hover:text-grey-300' : 'text-grey-500 hover:text-grey-700'
          }`}
        >
          ← Back
        </button>

        {/* Title */}
        <h1 className={`text-3xl font-semibold tracking-tighter mb-3 ${headingColor}`}>
          AI Upskilling for Product Designers: The E-P-I-A-S × SAE Framework
        </h1>

        {/* Byline */}
        <p className={`text-sm mb-8 ${mutedColor}`}>
          <a
            href="https://www.linkedin.com/in/johnmaeda/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${linkColor}`}
          >
            John Maeda
          </a>
          {' · February 9, 2026'}
        </p>

        {/* Intro */}
        <div className={`prose prose-sm leading-relaxed space-y-4 mb-8 ${textColor}`}>
          <p>
            I made this system after being asked for one. And I know that by the time I publish it, it's not going to be perfectly correct. That said, something is better than nothing right now — so here it is.
          </p>
          <p>
            I'm presenting this as part of the{' '}
            <a
              href="https://schedule.sxsw.com/2026/events/PP1148536"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline transition-colors ${linkColor}`}
            >
              Design in Tech Report 2026: From UX to AX
            </a>{' '}
            at SXSW, but I wanted to open source it sooner rather than later. If you're a product designer trying to figure out where you stand with AI — or a design leader trying to upskill your team — I hope this gives you a useful frame.
          </p>
          <p className={mutedColor}>
            This will be subject to more than a few changes this year. I know that for sure ;-). —JM
          </p>
        </div>

        <hr className={`${borderColor} my-10`} />

        {/* How to Use This */}
        <h2 className={`text-xl font-semibold tracking-tight mb-4 ${headingColor}`}>
          How to Use This
        </h2>
        <div className={`prose prose-sm leading-relaxed space-y-4 mb-6 ${textColor}`}>
          <p>
            This framework has two axes. The first is "E-P-I-A-S" which is a maturity progression that describes how deeply you've internalized a skill, from Explorer (trying things out) to Steward (setting standards for others). The second is the SAE Level which is adapted from the automotive industry's levels of driving automation — which describes how much of your design workflow AI is responsible for.
          </p>
          <p>Together they form a matrix. Here's how to navigate it:</p>
        </div>

        <ol className={`list-decimal list-outside ml-6 space-y-4 mb-6 ${textColor}`}>
          <li className="prose prose-sm leading-relaxed">
            <strong className={headingColor}>Start by finding your SAE Level.</strong> Use the self-assessment checklist to identify where your current AI usage falls — from L0 (fully manual) to L4 (mostly automated). Be honest. Most product designers in early 2026 are somewhere between L1 and L2.
          </li>
          <li className="prose prose-sm leading-relaxed">
            <strong className={headingColor}>Then find your E-P-I-A-S maturity within that level.</strong> Are you just experimenting (Explorer)? Running consistent workflows (Practitioner)? Building systems others rely on (Architect)? Your maturity at your current level matters more than which level you're at.
          </li>
          <li className="prose prose-sm leading-relaxed">
            <strong className={headingColor}>Use the matrix to plan your growth.</strong> You can grow in two directions — deeper (E→S within your current SAE level) or wider (moving up an SAE level). Both are valuable. Going deeper at L1 before jumping to L3 is often the smarter path, because the judgment and habits you build carry forward.
          </li>
        </ol>

        <div className={`prose prose-sm leading-relaxed space-y-4 mb-8 ${textColor}`}>
          <p>
            <strong className={headingColor}>BONUS:</strong> If you're a design leader, use this to map your team. You'll likely find people spread across multiple SAE levels and maturity stages. That's normal and healthy. The framework helps you have concrete conversations about where people are and where they want to go — without it becoming a race to the highest SAE number.
          </p>
          <p>
            One important thing to internalize: an S-Steward at SAE L1 (someone who's built organizational standards for ChatGPT usage) is more mature and more valuable than an E-Explorer at SAE L4 (someone fumbling with advanced toolchains). <strong className={headingColor}>Depth of judgment beats breadth of tooling every time.</strong>
          </p>
        </div>

        <hr className={`${borderColor} my-10`} />

        {/* Step 1 */}
        <h2 className={`text-2xl font-semibold tracking-tight mb-6 ${headingColor}`}>
          Step 1: Find your SAE level
        </h2>

        <h3 className={`text-lg font-semibold tracking-tight mb-4 ${headingColor}`}>
          SAE Levels of Driving Automation
        </h3>
        <p className={`prose prose-sm leading-relaxed mb-6 ${textColor}`}>
          Let's take learnings for how AI's progression is being tracked best: the automotive industry. The official SAE (Society of Automotive Engineers) levels of driving automation describe who is responsible for driving — the human or the vehicle — across perception, decision-making, and control.
        </p>

        {/* SAE Table */}
        <div className="overflow-x-auto mb-6">
          <table className={`w-full text-sm border ${borderColor}`}>
            <thead className={tableHeaderBg}>
              <tr>
                <th className={`p-3 text-left font-mono text-xs uppercase tracking-wider border-b ${borderColor} ${mutedColor}`}>Level</th>
                <th className={`p-3 text-left font-mono text-xs uppercase tracking-wider border-b ${borderColor} ${mutedColor}`}>Name</th>
                <th className={`p-3 text-left font-mono text-xs uppercase tracking-wider border-b ${borderColor} ${mutedColor}`}>Who Drives</th>
                <th className={`p-3 text-left font-mono text-xs uppercase tracking-wider border-b ${borderColor} ${mutedColor}`}>Explanation</th>
              </tr>
            </thead>
            <tbody className={textColor}>
              <tr className={`border-b ${borderColor}`}>
                <td className="p-3 font-mono">L0</td>
                <td className="p-3">No Automation</td>
                <td className="p-3">Human does everything</td>
                <td className="p-3">No driving automation; the system may warn but never controls the car</td>
              </tr>
              <tr className={`border-b ${borderColor}`}>
                <td className="p-3 font-mono">L1</td>
                <td className="p-3">Driver Assistance</td>
                <td className="p-3">Human drives; system assists one function</td>
                <td className="p-3">The car can help <em>either</em> steering <em>or</em> speed, but not both at once</td>
              </tr>
              <tr className={`border-b ${borderColor}`}>
                <td className="p-3 font-mono">L2</td>
                <td className="p-3">Partial Automation</td>
                <td className="p-3">Human supervises; system controls steering <em>and</em> speed</td>
                <td className="p-3">The car can steer and control speed together, but <em>you must watch and intervene</em></td>
              </tr>
              <tr className={`border-b ${borderColor}`}>
                <td className="p-3 font-mono">L3</td>
                <td className="p-3">Conditional Automation</td>
                <td className="p-3">System drives <em>within conditions</em>; human is fallback</td>
                <td className="p-3">The car drives itself <em>sometimes</em>, but may ask you to take over</td>
              </tr>
              <tr className={`border-b ${borderColor}`}>
                <td className="p-3 font-mono">L4</td>
                <td className="p-3">High Automation</td>
                <td className="p-3">System drives; no human needed <em>within defined areas</em></td>
                <td className="p-3">The car drives itself in specific places or conditions; no driver attention required</td>
              </tr>
              <tr>
                <td className="p-3 font-mono">L5</td>
                <td className="p-3">Full Automation</td>
                <td className="p-3">System drives everywhere</td>
                <td className="p-3">No steering wheel required; the car can drive anywhere a human can</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`prose prose-sm leading-relaxed mb-8 ${textColor}`}>
          <p className={`font-medium ${headingColor}`}>Key clarifications (why confusion happens):</p>
          <ul className="list-disc list-outside ml-6 space-y-1 mt-2">
            <li>L2 ≠ self-driving — the <em>human</em> is still legally responsible.</li>
            <li>The big legal shift happens between L2 and L3 (who must pay attention).</li>
            <li>L4 works today, but only in constrained environments.</li>
            <li>L5 is theoretical — it does not currently exist in production.</li>
          </ul>
        </div>

        <hr className={`${borderColor} my-10`} />

        {/* Step 2 */}
        <h2 className={`text-2xl font-semibold tracking-tight mb-6 ${headingColor}`}>
          Step 2: Find Your E-P-I-A-S Maturity Stage
        </h2>

        <p className={`prose prose-sm leading-relaxed mb-6 ${textColor}`}>
          We start with a generic maturity progression for a learner. HT Monty Hammontree for his advice on this instrument that I changed a teense to create the catchy acronym E-P-I-A-S.
        </p>

        <h3 className={`text-lg font-semibold tracking-tight mb-4 ${headingColor}`}>
          Learner Maturity Stages As E-P-I-A-S
        </h3>

        {/* EPIAS Table */}
        <div className="overflow-x-auto mb-6">
          <table className={`w-full text-sm border ${borderColor}`}>
            <thead className={tableHeaderBg}>
              <tr>
                <th className={`p-3 text-left font-mono text-xs uppercase tracking-wider border-b ${borderColor} ${mutedColor}`}>E: Explorer</th>
                <th className={`p-3 text-left font-mono text-xs uppercase tracking-wider border-b ${borderColor} ${mutedColor}`}>P: Practitioner</th>
                <th className={`p-3 text-left font-mono text-xs uppercase tracking-wider border-b ${borderColor} ${mutedColor}`}>I: Integrator</th>
                <th className={`p-3 text-left font-mono text-xs uppercase tracking-wider border-b ${borderColor} ${mutedColor}`}>A: Architect</th>
                <th className={`p-3 text-left font-mono text-xs uppercase tracking-wider border-b ${borderColor} ${mutedColor}`}>S: Steward</th>
              </tr>
            </thead>
            <tbody className={textColor}>
              <tr>
                <td className="p-3">Trying things; learning basics</td>
                <td className="p-3">Building consistent habits</td>
                <td className="p-3">Making it part of workflow</td>
                <td className="p-3">Building systems others use</td>
                <td className="p-3">Setting standards; teaching others</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={`prose prose-sm leading-relaxed mb-6 ${textColor}`}>
          You naturally progress E → P → I → A → S. This bears a parallel to the career progression "ladder" in product design today: Junior Designer → Designer → Senior Designer → Staff/Principal → Director/Design Lead.
        </p>

        <p className={`prose prose-sm leading-relaxed mb-8 ${textColor}`}>
          Keep in mind that a director or lead can still behave like an "Explorer" by having a beginner's mind. Right? They truly need to have that right now in the age of AI.
        </p>

        <hr className={`${borderColor} my-10`} />

        {/* Step 3 */}
        <h2 className={`text-2xl font-semibold tracking-tight mb-6 ${headingColor}`}>
          Step 3: Plot A Path To The Next Stage
        </h2>

        <p className={`prose prose-sm leading-relaxed mb-6 ${textColor}`}>
          The goal of AI as embedded in product design work mirrors the evolution of the automotive industry and its levels of automation. SAE L0 is simply "manual" mode for product designers. The goal isn't necessarily to move up automation levels as it depends upon the kind of work you're tasked to do. That said, I think it's always useful to see what kind of work is done at "higher" levels up the food chain.
        </p>

        <hr className={`${borderColor} my-10`} />

        {/* Note on Reading */}
        <h2 className={`text-xl font-semibold tracking-tight mb-4 ${headingColor}`}>
          A Note on Reading This Matrix
        </h2>

        <p className={`prose prose-sm leading-relaxed mb-8 ${textColor}`}>
          You can progress E→P→I→A→S at <em>any</em> SAE level. An S-Steward at L1 (organizational ChatGPT governance) is more mature than an E-Explorer at L4 (fumbling with advanced toolchains). Maturity isn't about racing up the SAE ladder — it's about deepening judgment, reliability, and organizational impact wherever you operate.
        </p>

        <hr className={`${borderColor} my-10`} />

        {/* Footer note */}
        <p className={`prose prose-sm italic ${mutedColor}`}>
          This framework is part of the{' '}
          <a
            href="https://schedule.sxsw.com/2026/events/PP1148536"
            target="_blank"
            rel="noopener noreferrer"
            className={`underline transition-colors ${linkColor}`}
          >
            Design in Tech Report 2026
          </a>
          . It will be presented at SXSW 2026. Feedback and contributions welcome.
        </p>
      </div>
    </div>
  );
}
