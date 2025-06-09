import { questions } from '@/data/questions';
import { Sin, QuizResult, SinScores, SubtypeScores } from '@/types/quiz';

// Priority order for tie-breaking (as specified)
const priority: Sin[] = ["lust", "greed", "pride", "envy", "wrath", "gluttony", "sloth"];

export function calculateQuizResult(answers: number[][]): QuizResult {
  const sinScores: SinScores = {
    lust: 0,
    wrath: 0,
    gluttony: 0,
    envy: 0,
    pride: 0,
    greed: 0,
    sloth: 0,
  };

  const subtypeScores: SubtypeScores = {};

  // Initialize subtype scores for each sin
  Object.keys(sinScores).forEach(sin => {
    subtypeScores[sin as Sin] = {};
  });

  // Process each question's answers
  answers.forEach((answerIndices, questionIndex) => {
    if (questionIndex < questions.length) {
      const question = questions[questionIndex];
      
      answerIndices.forEach(answerIndex => {
        if (answerIndex < question.options.length) {
          const option = question.options[answerIndex];
          
          // Add weighted score to sin
          sinScores[option.sin] += option.weight;
          
          // Add weighted score to subtype
          if (!subtypeScores[option.sin][option.subtype]) {
            subtypeScores[option.sin][option.subtype] = 0;
          }
          subtypeScores[option.sin][option.subtype] += option.weight;
        }
      });
    }
  });

  // Find dominant sin
  const dominantSin = getDominantSin(sinScores);
  
  // Find dominant subtype within that sin
  const dominantSubtype = getDominantSubtype(subtypeScores[dominantSin]);
  
  // Get top 3 sins
  const topThreeSins = getTopThreeSins(sinScores);

  return {
    dominantSin,
    dominantSubtype,
    sinScores,
    subtypeScores,
    topThreeSins
  };
}

export function getDominantSin(scores: SinScores): Sin {
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

export function getDominantSubtype(subtypeScores: { [subtype: string]: number }): string {
  let maxScore = -Infinity;
  let dominantSubtype = '';

  for (const subtype in subtypeScores) {
    if (subtypeScores[subtype] > maxScore) {
      maxScore = subtypeScores[subtype];
      dominantSubtype = subtype;
    }
  }

  return dominantSubtype;
}

export function getTopThreeSins(scores: SinScores): Array<{ sin: Sin; score: number }> {
  const sortedSins = Object.entries(scores)
    .map(([sin, score]) => ({ sin: sin as Sin, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return sortedSins;
}

function breakTie(tiedSins: Sin[]): Sin {
  return priority.find(sin => tiedSins.includes(sin)) || tiedSins[0];
}

// Legacy functions for backwards compatibility
export const calculateScores = (answers: number[]): SinScores => {
  // Convert old single-answer format to new multi-answer format
  const multiAnswers = answers.map(answer => [answer]);
  const result = calculateQuizResult(multiAnswers);
  return result.sinScores;
};

export const calculateSinScores = calculateScores;

export function calculateProgress(currentQuestion: number, totalQuestions: number): number {
  return Math.round((currentQuestion / totalQuestions) * 100);
} 