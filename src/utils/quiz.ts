import { questions } from '@/data/questions';
import { Sin } from '@/types/quiz';

// Priority order for tie-breaking (as specified)
const priority: Sin[] = ["lust", "greed", "pride", "envy", "wrath", "gluttony", "sloth"];

export function calculateScores(answers: number[]): Record<Sin, number> {
  let sinScores: Record<Sin, number> = {
    pride: 0,
    envy: 0,
    wrath: 0,
    sloth: 0,
    greed: 0,
    lust: 0,
    gluttony: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    if (questionIndex < questions.length && answerIndex < questions[questionIndex].options.length) {
      const option = questions[questionIndex].options[answerIndex];
      option.tags.forEach((sin: string) => {
        sinScores[sin as Sin] += 1;
      });
    }
  });

  return sinScores;
}

export function getDominantSin(scores: Record<Sin, number>): Sin {
  let maxScore = -Infinity;
  let tiedSins: Sin[] = [];

  // Find the maximum score and all sins that have it
  for (const sin in scores) {
    const sinKey = sin as Sin;
    if (scores[sinKey] > maxScore) {
      maxScore = scores[sinKey];
      tiedSins = [sinKey];
    } else if (scores[sinKey] === maxScore) {
      tiedSins.push(sinKey);
    }
  }

  // If there's only one winner, return it
  if (tiedSins.length === 1) {
    return tiedSins[0];
  }

  // If there's a tie, use priority to break it
  return breakTie(tiedSins);
}

function breakTie(tiedSins: Sin[]): Sin {
  return priority.find(sin => tiedSins.includes(sin)) || tiedSins[0];
}

// Legacy function for backwards compatibility
export const calculateSinScores = calculateScores;

export function calculateProgress(currentQuestion: number, totalQuestions: number): number {
  return Math.round((currentQuestion / totalQuestions) * 100);
} 