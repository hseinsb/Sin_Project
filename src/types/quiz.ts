export type Sin = 'pride' | 'envy' | 'wrath' | 'sloth' | 'greed' | 'lust' | 'gluttony';

export interface QuizAnswer {
  text: string;
  tags: Sin[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizAnswer[];
}

export interface SinScores {
  pride: number;
  envy: number;
  wrath: number;
  sloth: number;
  greed: number;
  lust: number;
  gluttony: number;
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
  consent: boolean;
  answers: number[];
  result?: Sin;
} 