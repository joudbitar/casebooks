import { rand, pick } from '../../../core/rng.js';

export function genNPVGrowth() {
  const cf = rand(1, 10);
  const rate = 10;
  const growth = pick([2, 3, 4, 5]);
  const npv = Math.round(cf / ((rate - growth) / 100));
  return {
    category: 'NPV with Growth',
    question: `Annual cash flow: $${cf}M (growing at ${growth}%/yr forever)\nDiscount rate: ${rate}%\nWhat is the NPV? (in $M)`,
    answer: npv,
    tolerance: npv * 0.05,
    solution: `NPV = CF / (r − g) = ${cf} / (${rate / 100} − ${growth / 100}) = ${cf} / ${(rate - growth) / 100} = <strong>$${npv}M</strong>`,
    hint: 'Growing Perpetuity NPV = Cash Flow ÷ (Discount Rate − Growth Rate)',
  };
}
