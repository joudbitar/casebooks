import { rand, pick } from '../../../core/rng.js';

export function genProfit() {
  const rev = rand(5, 30) * 2;
  const fc = rand(1, 5);
  const vcRatio = pick([0.3, 0.4, 0.5, 0.6]);
  const vc = Math.round(rev * vcRatio);
  const profit = rev - fc - vc;
  return {
    category: 'Profit Calculation',
    question: `Revenue: $${rev}M\nFixed costs: $${fc}M\nVariable costs: $${vc}M\nWhat is the profit? (in $M)`,
    answer: profit,
    tolerance: 0,
    solution: `Profit = Revenue − Fixed − Variable = ${rev} − ${fc} − ${vc} = <strong>$${profit}M</strong>`,
    hint: 'Profit = Revenue − Fixed Costs − Variable Costs',
  };
}
