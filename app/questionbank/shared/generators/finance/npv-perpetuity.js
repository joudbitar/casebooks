import { rand, pick } from '../../../core/rng.js';

export function genNPVPerpetuity() {
  const cf = rand(1, 20);
  const rate = pick([5, 8, 10, 12, 15]);
  const npv = Math.round(cf / (rate / 100));
  return {
    category: 'NPV — Perpetuity',
    question: `Annual cash flow: $${cf}M (forever)\nDiscount rate: ${rate}%\nWhat is the NPV? (in $M)`,
    answer: npv,
    tolerance: npv * 0.02,
    solution: `NPV = Cash Flow / Rate = ${cf} / ${rate / 100} = <strong>$${npv}M</strong>`,
    hint: 'Perpetuity NPV = Annual Cash Flow ÷ Discount Rate',
  };
}
