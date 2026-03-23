import { rand } from '../../../core/rng.js';

export function genContributionMargin() {
  const price = rand(2, 20) * 5;
  const vc = rand(1, Math.floor((price * 0.8) / 5)) * 5;
  const cm = price - vc;
  return {
    category: 'Contribution Margin',
    question: `Selling price: $${price}. Variable cost per unit: $${vc}.\nWhat is the contribution margin per unit?`,
    answer: cm,
    tolerance: 0,
    solution: `CM = Price − VC = ${price} − ${vc} = <strong>$${cm}</strong>`,
    hint: 'CM = Selling Price − Variable Cost per Unit',
  };
}
