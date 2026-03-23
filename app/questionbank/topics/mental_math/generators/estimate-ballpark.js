import { pick, rand } from '../../../core/rng.js';
import { QUESTION_DIFFICULTY } from '../../../core/questionDifficulty.js';

/** Round to nearest 100 or 10 for a product */
export function genEstimateBallpark() {
  const kind = pick(['nearest100', 'nearest10']);

  if (kind === 'nearest100') {
    const a = rand(38, 52);
    const b = rand(38, 52);
    const exact = a * b;
    const rounded = Math.round(exact / 100) * 100;
    return {
      category: 'Estimation',
      question: `${a} × ${b} ≈ ?\n(round to nearest 100)`,
      answer: rounded,
      tolerance: 0,
      solution: `Exact: ${exact.toLocaleString()} → nearest 100: <strong>${rounded.toLocaleString()}</strong>`,
      hint: 'Round each factor first, or multiply then round.',
      questionDifficulty: QUESTION_DIFFICULTY.medium,
    };
  }

  const a = rand(18, 24);
  const b = rand(18, 24);
  const exact = a * b;
  const rounded = Math.round(exact / 10) * 10;
  return {
    category: 'Estimation',
    question: `${a} × ${b} ≈ ?\n(round to nearest 10)`,
    answer: rounded,
    tolerance: 0,
    solution: `Exact: ${exact} → nearest 10: <strong>${rounded}</strong>`,
    hint: 'Multiply, then round.',
    questionDifficulty: QUESTION_DIFFICULTY.easy,
  };
}
