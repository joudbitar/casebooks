import { rand, pick, fmt } from '../../../core/rng.js';

export function genGrossMargin() {
  const rev = rand(2, 20) * 50;
  const marginPct = pick([20, 25, 30, 40, 50, 60]);
  const cogs = Math.round(rev * (1 - marginPct / 100));
  return {
    category: 'Gross Margin %',
    question: `Revenue $${fmt(rev)}M, COGS $${fmt(cogs)}M.\nWhat is the gross margin %?`,
    answer: marginPct,
    tolerance: 0,
    solution: `Gross Profit = ${rev} − ${cogs} = ${rev - cogs}. Margin = ${rev - cogs}/${rev} × 100 = <strong>${marginPct}%</strong>`,
    hint: 'Gross Margin = (Revenue − COGS) / Revenue × 100',
  };
}
