import { rand, pick } from '../../../core/rng.js';

export function genBreakEven() {
  const fc = rand(1, 20) * 100;
  const cm = pick([10, 15, 20, 25, 40, 50]);
  const beu = (fc * 1000) / cm;
  return {
    category: 'Break-Even Analysis',
    question: `Break-even (units to cover fixed costs)

• Annual fixed costs: $${fc.toLocaleString()}k
• Contribution margin per unit: $${cm} (price minus variable cost per unit)

How many units must the company sell in a year to break even?`,
    answer: beu,
    tolerance: 0,
    solution: `BE units = Fixed costs ÷ Contribution margin per unit<br>= $${(fc * 1000).toLocaleString()} ÷ $${cm} = <strong>${beu.toLocaleString()} units</strong>`,
    hint: `Formula: break-even units = (Fixed costs in $) ÷ (Contribution margin per unit). Here: $${fc.toLocaleString()}k = $${(fc * 1000).toLocaleString()}.`,
  };
}
