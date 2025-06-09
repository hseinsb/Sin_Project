export type Sin = 'lust' | 'wrath' | 'gluttony' | 'envy' | 'pride' | 'greed' | 'sloth';

export interface QuizAnswer {
  text: string;
  sin: Sin;
  subtype: string;
  weight: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizAnswer[];
  maxSelections: number; // 1 for single-select, 2 for multi-select
}

export interface SinScores {
  lust: number;
  wrath: number;
  gluttony: number;
  envy: number;
  pride: number;
  greed: number;
  sloth: number;
}

export interface SubtypeScores {
  [sin: string]: {
    [subtype: string]: number;
  };
}

export interface QuizResult {
  dominantSin: Sin;
  dominantSubtype: string;
  sinScores: SinScores;
  subtypeScores: SubtypeScores;
  topThreeSins: Array<{ sin: Sin; score: number }>;
}

export interface SubtypeDetails {
  sin: Sin;
  subtype: string;
  title: string;
  poeticSummary: string;
  coreWound: string;
  dailyProblems: string[];
  howToFix: string[];
  reflectionPrompts: string[];
  tipToday: string;
  plainEnglishGuidance: string;
}

export interface SinProfile {
  sin: Sin;
  title: string;
  archetype: string;
  desire: string;
  shadow: string;
  path: string;
}

export interface UserData {
  name: string;
  email: string;
  gender?: string;
  age?: number;
  consent: boolean;
  answers: number[][]; // Array of arrays for multi-select
  result?: QuizResult;
  timestamp?: string;
} 