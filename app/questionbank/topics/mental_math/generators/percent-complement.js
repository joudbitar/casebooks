import { rand } from '../../../core/rng.js';
import { QUESTION_DIFFICULTY } from '../../../core/questionDifficulty.js';

/** 100% − x (complement) */
export function genPercentComplement() {
  const x = rand(8, 92);
  const ans = 100 - x;
  return {
    category: 'Percent — complement',
    question: `One part of a whole is ${x}%.\nWhat is the remainder (in %)?`,
    answer: ans,
    tolerance: 0,
    solution: `100% − ${x}% = <strong>${ans}%</strong>`,
    hint: 'Complements add to 100%.',
    questionDifficulty: QUESTION_DIFFICULTY.easy,
  };
}
