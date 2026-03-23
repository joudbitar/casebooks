import { rand, pick } from '../../../core/rng.js';

export function genMultiStepProfit() {
  const price = rand(4, 20) * 5;
  const vc = rand(2, Math.floor((price * 0.7) / 5)) * 5;
  const vol = rand(1, 10) * 10000;
  const fc = rand(1, 5) * 1000000;
  const cm = price - vc;
  const contribution = cm * vol;
  const profit = contribution - fc;
  const profitM = profit / 1000000;
  return {
    category: 'Multi-Step Profitability',
    question: `Price: $${price} | Variable cost: $${vc}\nVolume: ${vol.toLocaleString()} units | Fixed costs: $${(fc / 1000000).toFixed(1)}M\nWhat is the profit? (in $M)`,
    answer: profitM,
    tolerance: Math.abs(profitM) * 0.02 + 0.1,
    solution: `CM per unit = ${price}−${vc} = $${cm}<br>Total contribution = ${cm} × ${vol.toLocaleString()} = $${contribution.toLocaleString()}<br>Profit = $${contribution.toLocaleString()} − $${fc.toLocaleString()} = <strong>$${profitM.toFixed(1)}M</strong>`,
    hint: 'Step 1: CM = Price − VC. Step 2: Contribution = CM × Volume. Step 3: Profit = Contribution − Fixed Costs',
  };
}
