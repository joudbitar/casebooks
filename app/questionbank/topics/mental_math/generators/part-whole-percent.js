import { pick } from '../../../core/rng.js';
import { QUESTION_DIFFICULTY } from '../../../core/questionDifficulty.js';

/** Part / whole → percent (integer %) */
export function genPartWholePercent() {
  const scenarios = [
    { part: 3, whole: 20, pct: 15 },
    { part: 1, whole: 4, pct: 25 },
    { part: 1, whole: 5, pct: 20 },
    { part: 1, whole: 10, pct: 10 },
    { part: 3, whole: 10, pct: 30 },
    { part: 2, whole: 5, pct: 40 },
    { part: 5, whole: 25, pct: 20 },
    { part: 7, whole: 20, pct: 35 },
    { part: 9, whole: 25, pct: 36 },
    { part: 12, whole: 40, pct: 30 },
    { part: 15, whole: 60, pct: 25 },
  ];
  const s = pick(scenarios);
  return {
    category: 'Part → whole %',
    question: `${s.part} out of ${s.whole} is what percent?`,
    answer: s.pct,
    tolerance: 0,
    solution: `${s.part} / ${s.whole} × 100 = <strong>${s.pct}%</strong>`,
    hint: 'Part ÷ Whole × 100',
    questionDifficulty: s.whole >= 40 ? QUESTION_DIFFICULTY.medium : QUESTION_DIFFICULTY.easy,
  };
}
