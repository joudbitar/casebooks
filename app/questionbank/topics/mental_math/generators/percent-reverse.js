import { pick } from '../../../core/rng.js';
import { QUESTION_DIFFICULTY } from '../../../core/questionDifficulty.js';

/** What % is A of B? — clean integer answers */
export function genPercentReverse() {
  const scenarios = [
    { whole: 40, part: 10, pct: 25 },
    { whole: 50, part: 15, pct: 30 },
    { whole: 60, part: 12, pct: 20 },
    { whole: 80, part: 24, pct: 30 },
    { whole: 100, part: 35, pct: 35 },
    { whole: 120, part: 30, pct: 25 },
    { whole: 200, part: 50, pct: 25 },
    { whole: 250, part: 50, pct: 20 },
    { whole: 400, part: 100, pct: 25 },
  ];
  const s = pick(scenarios);
  return {
    category: 'Percent — reverse',
    question: `What percent is ${s.part} of ${s.whole}?`,
    answer: s.pct,
    tolerance: 0,
    solution: `${s.part} / ${s.whole} × 100 = <strong>${s.pct}%</strong>`,
    hint: 'Part ÷ Whole × 100',
    questionDifficulty: s.whole >= 200 ? QUESTION_DIFFICULTY.medium : QUESTION_DIFFICULTY.easy,
  };
}
