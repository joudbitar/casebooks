import { pick, rand } from '../../../core/rng.js';
import { QUESTION_DIFFICULTY } from '../../../core/questionDifficulty.js';

/** Divide by 5 or 25 quickly */
export function genDivisionShortcuts() {
  const divisor = pick([5, 25]);
  let dividend;
  if (divisor === 5) {
    dividend = rand(2, 40) * 5 * rand(1, 4);
  } else {
    dividend = rand(2, 16) * 25 * pick([1, 2, 4]);
  }
  const ans = dividend / divisor;
  return {
    category: 'Division shortcuts',
    question: `${dividend.toLocaleString()} ÷ ${divisor} = ?`,
    answer: ans,
    tolerance: 0,
    solution:
      divisor === 25
        ? `×4 then ÷100: ${dividend} ÷ 25 = <strong>${ans.toLocaleString()}</strong>`
        : `Halve twice (÷2 twice): ${dividend} ÷ 5 = <strong>${ans.toLocaleString()}</strong>`,
    hint: divisor === 25 ? 'Divide by 100, multiply by 4' : 'Or: double divide by 10 twice mentally',
    questionDifficulty: divisor === 25 ? QUESTION_DIFFICULTY.medium : QUESTION_DIFFICULTY.easy,
  };
}
