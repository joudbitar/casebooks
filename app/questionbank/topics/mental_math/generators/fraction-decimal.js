import { pick } from '../../../core/rng.js';
import { QUESTION_DIFFICULTY } from '../../../core/questionDifficulty.js';

export function genFractionDecimal() {
  const fracs = [
    { num: 1, den: 6, ans: 0.167, str: '0.167' },
    { num: 1, den: 7, ans: 0.143, str: '0.143' },
    { num: 1, den: 8, ans: 0.125, str: '0.125' },
    { num: 1, den: 9, ans: 0.111, str: '0.111' },
    { num: 1, den: 11, ans: 0.091, str: '0.091' },
    { num: 1, den: 12, ans: 0.083, str: '0.083' },
    { num: 1, den: 3, ans: 0.333, str: '0.333' },
    { num: 2, den: 3, ans: 0.667, str: '0.667' },
    { num: 3, den: 8, ans: 0.375, str: '0.375' },
    { num: 5, den: 8, ans: 0.625, str: '0.625' },
  ];
  const f = pick(fracs);
  const hardDenoms = [7, 9, 11, 12];
  return {
    category: 'Fraction → Decimal',
    question: `What is ${f.num}/${f.den} as a decimal?\n(round to 3 decimal places)`,
    answer: f.ans,
    tolerance: 0.002,
    solution: `${f.num} ÷ ${f.den} = <strong>${f.str}</strong>`,
    hint: 'Memorize these — they come up constantly in cases',
    questionDifficulty: hardDenoms.includes(f.den) ? QUESTION_DIFFICULTY.hard : QUESTION_DIFFICULTY.medium,
  };
}
