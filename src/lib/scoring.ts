import {
  AssessmentResult,
  EPIASStage,
  QuestionResponse,
  SAELevel,
} from '../types';
import { QUESTIONS, QUESTIONS_PER_LEVEL } from '../data/framework';

/**
 * Calculate the assessment result from user responses
 *
 * Algorithm:
 * 1. SAE Level: Find the highest level where user answers "Yes" to ≥50% of questions
 * 2. E-P-I-A-S Stage: Based on percentage depth within that level:
 *    - 90%+ = Steward (5)
 *    - 75-89% = Architect (4)
 *    - 60-74% = Integrator (3)
 *    - 50-59% = Practitioner (2)
 *    - <50% = Explorer (1)
 */
export function calculateResult(responses: QuestionResponse[]): AssessmentResult {
  // Build a lookup of responses by question ID
  const responseMap = new Map<number, boolean>();
  for (const r of responses) {
    responseMap.set(r.questionId, r.answer);
  }

  // Calculate scores per level
  const levelScores: Record<SAELevel, { yes: number; total: number }> = {
    0: { yes: 0, total: QUESTIONS_PER_LEVEL[0] },
    1: { yes: 0, total: QUESTIONS_PER_LEVEL[1] },
    2: { yes: 0, total: QUESTIONS_PER_LEVEL[2] },
    3: { yes: 0, total: QUESTIONS_PER_LEVEL[3] },
    4: { yes: 0, total: QUESTIONS_PER_LEVEL[4] },
    5: { yes: 0, total: QUESTIONS_PER_LEVEL[5] },
  };

  // Count "Yes" answers per level, accounting for inverted questions
  for (const question of QUESTIONS) {
    const answer = responseMap.get(question.id);
    if (answer === undefined) continue;

    // For inverted questions, "No" counts as positive
    const effectiveYes = question.inverted ? !answer : answer;
    if (effectiveYes) {
      levelScores[question.saeLevel].yes++;
    }
  }

  // Find highest SAE level with ≥50% "Yes"
  let saeLevel: SAELevel = 0;
  const levels: SAELevel[] = [0, 1, 2, 3, 4, 5];

  for (const level of levels) {
    const score = levelScores[level];
    const percentage = score.total > 0 ? score.yes / score.total : 0;
    if (percentage >= 0.5) {
      saeLevel = level;
    }
  }

  // Calculate E-P-I-A-S stage based on percentage within the determined level
  const currentLevelScore = levelScores[saeLevel];
  const percentage = currentLevelScore.total > 0
    ? currentLevelScore.yes / currentLevelScore.total
    : 0;

  let epiasStage: EPIASStage;
  if (percentage >= 0.9) {
    epiasStage = 5; // Steward
  } else if (percentage >= 0.75) {
    epiasStage = 4; // Architect
  } else if (percentage >= 0.6) {
    epiasStage = 3; // Integrator
  } else if (percentage >= 0.5) {
    epiasStage = 2; // Practitioner
  } else {
    epiasStage = 1; // Explorer
  }

  return {
    saeLevel,
    epiasStage,
    levelScores,
    timestamp: Date.now(),
  };
}

/**
 * Get a summary description of the result
 */
export function getResultSummary(result: AssessmentResult): string {
  const { saeLevel, epiasStage } = result;

  const summaries: Record<SAELevel, Record<EPIASStage, string>> = {
    0: {
      1: 'You\'re just beginning to explore AI in design. Focus on experimenting with basic AI tools.',
      2: 'You\'re gaining comfort with manual processes. Consider trying AI assistance for simple tasks.',
      3: 'You have solid manual skills. Start integrating AI for repetitive work.',
      4: 'Your manual foundation is strong. Build frameworks to guide AI adoption.',
      5: 'You lead with traditional methods. Help others understand when AI can augment manual work.',
    },
    1: {
      1: 'You\'re experimenting with AI assistance. Keep exploring different AI tools.',
      2: 'You regularly use AI for suggestions. Focus on refining your prompting skills.',
      3: 'You\'ve integrated AI suggestions well. Build consistent patterns for AI collaboration.',
      4: 'Your AI-assisted workflow is mature. Design systems to scale your approach.',
      5: 'You\'ve mastered AI assistance. Guide others in effective AI collaboration.',
    },
    2: {
      1: 'You\'re learning to delegate chunks to AI. Experiment with bounded AI tasks.',
      2: 'You regularly delegate work to AI. Standardize your prompts and workflows.',
      3: 'You\'ve built reliable AI workflows. Create quality checks and reusable patterns.',
      4: 'Your delegation systems are robust. Design scalable automation frameworks.',
      5: 'You lead in partial automation. Enable others to adopt your workflows.',
    },
    3: {
      1: 'You\'re exploring guided automation. Learn IDE integrations and context engineering.',
      2: 'You use IDEs and basic context rules. Build multi-step workflows with checkpoints.',
      3: 'Your guided automation is solid. Develop evaluation systems and Skills.',
      4: 'You\'ve architected strong automation. Create reusable frameworks for your team.',
      5: 'You lead in guided automation. Set standards and enable organizational adoption.',
    },
    4: {
      1: 'You\'re entering advanced automation. Explore modular context engineering.',
      2: 'You practice advanced techniques. Build evaluation suites and harden toolchains.',
      3: 'Your automation is highly integrated. Develop reusable Skill libraries.',
      4: 'You\'ve built sophisticated systems. Design for others to operate independently.',
      5: 'You lead in advanced automation. Drive strategy and organizational transformation.',
    },
    5: {
      1: 'You\'re approaching full autonomy. Focus on goal-setting and approval systems.',
      2: 'AI drives most of your workflow. Refine self-check and self-correct mechanisms.',
      3: 'You\'ve achieved high autonomy. Build comprehensive governance systems.',
      4: 'Your autonomous systems are mature. Architect organization-wide frameworks.',
      5: 'You\'ve mastered AI autonomy. Lead the transformation of design practice itself.',
    },
  };

  return summaries[saeLevel][epiasStage];
}
