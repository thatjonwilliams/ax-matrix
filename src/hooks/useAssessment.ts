import { useState, useCallback } from 'react';
import { AssessmentState, QuestionResponse, AssessmentResult } from '../types';
import { QUESTIONS } from '../data/framework';
import { calculateResult } from '../lib/scoring';

const STORAGE_KEY = 'ax-matrix-result';

/**
 * Load saved result from localStorage
 */
function loadSavedResult(): AssessmentResult | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved) as AssessmentResult;
    }
  } catch {
    // Ignore parse errors
  }
  return null;
}

/**
 * Save result to localStorage
 */
function saveResult(result: AssessmentResult): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
  } catch {
    // Ignore storage errors
  }
}

/**
 * Custom hook for managing assessment state
 */
export function useAssessment() {
  const [state, setState] = useState<AssessmentState>(() => {
    // Check for a saved result on initial load
    const savedResult = loadSavedResult();
    return {
      currentQuestionIndex: 0,
      responses: [],
      isComplete: savedResult !== null,
      result: savedResult,
    };
  });

  // Answer the current question
  const answerQuestion = useCallback((answer: boolean) => {
    setState((prev) => {
      const currentQuestion = QUESTIONS[prev.currentQuestionIndex];
      const newResponses: QuestionResponse[] = [
        ...prev.responses,
        { questionId: currentQuestion.id, answer },
      ];

      const isLastQuestion = prev.currentQuestionIndex >= QUESTIONS.length - 1;

      if (isLastQuestion) {
        // Calculate result when done
        const result = calculateResult(newResponses);
        saveResult(result);

        return {
          ...prev,
          responses: newResponses,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
          isComplete: true,
          result,
        };
      }

      return {
        ...prev,
        responses: newResponses,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      };
    });
  }, []);

  // Go back to previous question
  const goBack = useCallback(() => {
    setState((prev) => {
      if (prev.currentQuestionIndex <= 0) return prev;

      // Remove the last response
      const newResponses = prev.responses.slice(0, -1);

      return {
        ...prev,
        responses: newResponses,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
        isComplete: false,
        result: null,
      };
    });
  }, []);

  // Reset the assessment
  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setState({
      currentQuestionIndex: 0,
      responses: [],
      isComplete: false,
      result: null,
    });
  }, []);

  // Get current question
  const currentQuestion = QUESTIONS[state.currentQuestionIndex] || null;

  // Progress percentage
  const progress = (state.currentQuestionIndex / QUESTIONS.length) * 100;

  return {
    state,
    currentQuestion,
    progress,
    totalQuestions: QUESTIONS.length,
    answerQuestion,
    goBack,
    reset,
    canGoBack: state.currentQuestionIndex > 0 && !state.isComplete,
  };
}
