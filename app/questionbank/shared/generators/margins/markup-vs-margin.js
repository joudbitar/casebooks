import { pick } from '../../../core/rng.js';

export function genMarkupVsMargin() {
  const cost = pick([40, 50, 60, 75, 80]);
  const marginPct = pick([20, 25, 33, 40, 50]);
  const price = Math.round(cost / (1 - marginPct / 100));
  const markup = Math.round(((price - cost) / cost) * 100);
  return {
    category: 'Margin vs. Markup',
    question: `Cost: $${cost}. Price: $${price}.\nWhat is the gross margin %?`,
    answer: marginPct,
    tolerance: 0,
    solution: `Margin = (${price}−${cost})/${price} × 100 = ${price - cost}/${price} × 100 = <strong>${marginPct}%</strong>\n(Markup = ${price - cost}/${cost} × 100 = ${markup}% — different!)`,
    hint: "Margin = profit/revenue. Markup = profit/cost. They're different!",
  };
}
