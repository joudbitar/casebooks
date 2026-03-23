import { pick } from '../../../core/rng.js';

export function genRule72() {
  const rates = [4, 6, 8, 9, 10, 12];
  const rate = pick(rates);
  const years = Math.round(72 / rate);
  return {
    category: 'Rule of 72',
    question: `An investment grows at ${rate}% per year.\nHow many years until it doubles?`,
    answer: years,
    tolerance: 0,
    solution: `Rule of 72: Years = 72 / ${rate} = <strong>${years} years</strong>`,
    hint: 'Years to double = 72 ÷ Annual Growth Rate %',
  };
}
