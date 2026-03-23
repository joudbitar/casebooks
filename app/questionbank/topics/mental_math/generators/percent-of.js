import { rand, pick } from '../../../core/rng.js';
import { QUESTION_DIFFICULTY } from '../../../core/questionDifficulty.js';

export function genPercentOf() {
  const pcts = [5, 10, 15, 20, 25, 33, 50];
  const pct = pick(pcts);
  const base = rand(1, 40) * 10;
  const exact = (base * pct) / 100;
  const ans = Math.round(exact);
  const questionDifficulty =
    pct === 33 || pct === 25 ? QUESTION_DIFFICULTY.medium : QUESTION_DIFFICULTY.easy;
  return {
    category: 'Percentage of Number',
    question: `What is ${pct}% of ${base.toLocaleString()}?`,
    answer: ans,
    exact,
    tolerance: 0,
    solution: `${pct}% of ${base} = ${base} × ${pct}/100 = <strong>${ans.toLocaleString()}</strong>`,
    hint: 'Tip: 15% = 10% + 5%',
    questionDifficulty,
  };
}
