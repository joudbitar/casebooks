import { rand, pick, fmt } from '../../../core/rng.js';

export function genPctChange() {
  const start = rand(2, 20) * 5;
  const pct = pick([5, 10, 15, 20, 25, 30, 40, 50, -5, -10, -20]);
  const end = Math.round(start * (1 + pct / 100));
  const realPct = Math.round(((end - start) / start) * 100);
  return {
    category: 'Percentage Change',
    question: `Revenue went from $${fmt(start)}M to $${fmt(end)}M.\nWhat is the % change?`,
    answer: realPct,
    tolerance: 0,
    solution: `(${end} − ${start}) / ${start} × 100 = ${end - start}/${start} × 100 = <strong>${realPct}%</strong>`,
    hint: '(End − Start) / Start × 100',
  };
}
