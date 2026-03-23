import { rand } from '../../../core/rng.js';

export function genROI() {
  const cost = rand(1, 10);
  const gain = rand(cost + 1, cost * 4);
  const roi = Math.round(((gain - cost) / cost) * 100);
  return {
    category: 'ROI',
    question: `You invest $${cost}M and earn $${gain}M total.\nWhat is the ROI %?`,
    answer: roi,
    tolerance: 0,
    solution: `ROI = (Gains − Cost) / Cost × 100 = (${gain}−${cost})/${cost} × 100 = <strong>${roi}%</strong>`,
    hint: 'ROI = (Profit − Investment) ÷ Investment × 100',
  };
}
