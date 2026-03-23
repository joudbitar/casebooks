import { rand, pick } from '../../../core/rng.js';
import { QUESTION_DIFFICULTY } from '../../../core/questionDifficulty.js';

export function genLargeMultiply() {
  const combos = [
    [3, 4],
    [4, 4],
    [3, 5],
    [4, 5],
    [5, 5],
    [3, 6],
    [4, 6],
    [3, 7],
  ];
  const [za, zb] = pick(combos);
  const a = rand(2, 9) * Math.pow(10, za);
  const b = rand(2, 9) * Math.pow(10, zb);
  const ans = a * b;
  return {
    category: 'Large Number Multiply',
    question: `${a.toLocaleString()} × ${b.toLocaleString()} = ?`,
    answer: ans,
    tolerance: 0,
    solution: `Strip zeros: ${a / Math.pow(10, za)} × ${b / Math.pow(10, zb)} = ${(a / Math.pow(10, za)) * (b / Math.pow(10, zb))}, then add ${za + zb} zeros → <strong>${ans.toLocaleString()}</strong>`,
    hint: 'Tip: strip the zeros, multiply the digits, add zeros back',
    questionDifficulty: za + zb >= 11 ? QUESTION_DIFFICULTY.hard : QUESTION_DIFFICULTY.medium,
  };
}
