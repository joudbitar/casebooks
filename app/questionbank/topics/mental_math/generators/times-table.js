import { rand } from '../../../core/rng.js';
import { QUESTION_DIFFICULTY } from '../../../core/questionDifficulty.js';

export function genTimesTable() {
  const a = rand(2, 20);
  const b = rand(2, 20);
  const product = a * b;
  const questionDifficulty =
    Math.max(a, b) > 15 || product > 200 ? QUESTION_DIFFICULTY.medium : QUESTION_DIFFICULTY.easy;
  return {
    category: 'Times Tables',
    question: `${a.toLocaleString()} × ${b.toLocaleString()} = ?`,
    answer: product,
    tolerance: 0,
    solution: `${a} × ${b} = <strong>${product.toLocaleString()}</strong>`,
    hint: 'Multiply the two factors; sanity-check with a rough estimate if needed.',
    questionDifficulty,
  };
}
