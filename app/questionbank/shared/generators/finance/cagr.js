import { rand, pick } from '../../../core/rng.js';

export function genCAGR() {
  const start = rand(2, 15) * 10;
  const years = pick([3, 4, 5]);
  const growthRate = pick([10, 15, 20, 25]);
  const end = Math.round(start * Math.pow(1 + growthRate / 100, years));
  const approxCAGR = Math.round(growthRate);
  return {
    category: 'CAGR',
    question: `Revenue grew from $${start}M to $${end}M over ${years} years.\nEstimate the CAGR % (within 1%)`,
    answer: approxCAGR,
    tolerance: 1.5,
    solution: `CAGR = (${end}/${start})^(1/${years}) − 1 ≈ <strong>${growthRate}%</strong><br>Quick check: ${start} × ${growthRate}% × ${years}yrs ≈ ${Math.round(start * (1 + (growthRate / 100) * years))} (rough); compound is ${end}`,
    hint: 'Try: does doubling fit? Rule of 72. Then narrow down.',
  };
}
