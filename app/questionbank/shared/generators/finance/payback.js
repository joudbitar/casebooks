import { rand, pick } from '../../../core/rng.js';

export function genPayback() {
  const invest = rand(1, 20);
  const savings = pick([1, 2, 4, 5]);
  const payback = invest / savings;
  return {
    category: 'Payback Period',
    question: `Investment: $${invest}M\nAnnual savings: $${savings}M\nPayback period? (in years)`,
    answer: payback,
    tolerance: 0.1,
    solution: `Payback = Investment / Annual Savings = ${invest} / ${savings} = <strong>${payback} years</strong>`,
    hint: 'Payback Period = Initial Investment ÷ Annual Net Cash Flow',
  };
}
