// SAE Levels (columns in the matrix)
export type SAELevel = 0 | 1 | 2 | 3 | 4 | 5;

export const SAE_LEVEL_NAMES: Record<SAELevel, string> = {
  0: 'Manual',
  1: 'AI-Assisted',
  2: 'Partially Automated',
  3: 'Guided Automation',
  4: 'Mostly Automated',
  5: 'Full Autonomy',
};

// E-P-I-A-S Stages (rows in the matrix)
export type EPIASStage = 1 | 2 | 3 | 4 | 5;

export const EPIAS_STAGE_NAMES: Record<EPIASStage, string> = {
  1: 'Explorer',
  2: 'Practitioner',
  3: 'Integrator',
  4: 'Architect',
  5: 'Steward',
};

export const EPIAS_STAGE_DESCRIPTIONS: Record<EPIASStage, string> = {
  1: 'Experimenting with AI capabilities and learning fundamentals',
  2: 'Applying AI tools consistently in daily workflows',
  3: 'Building systematic AI-augmented processes',
  4: 'Designing scalable AI systems and frameworks',
  5: 'Leading AI strategy and enabling others',
};

// Resource link for a question
export interface QuestionResource {
  title: string;
  url: string;
}

// Question data structure
export interface Question {
  id: number;
  text: string;
  checklistText: string; // Original checklist text from the framework document
  saeLevel: SAELevel;
  inverted?: boolean; // If true, "No" counts as a positive answer for this level
  explanation: string; // Full explanation text (from "What this means" + "How to tell if this is you")
  resources?: QuestionResource[]; // Optional resource links
}

// User response to a question
export interface QuestionResponse {
  questionId: number;
  answer: boolean; // true = Yes, false = No
}

// Assessment result
export interface AssessmentResult {
  saeLevel: SAELevel;
  epiasStage: EPIASStage;
  levelScores: Record<SAELevel, { yes: number; total: number }>;
  timestamp: number;
}

// Assessment state
export interface AssessmentState {
  currentQuestionIndex: number;
  responses: QuestionResponse[];
  isComplete: boolean;
  result: AssessmentResult | null;
}

// Screen types for navigation
export type Screen = 'welcome' | 'assessment' | 'results' | 'glossary';
