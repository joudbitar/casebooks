import { rand, pick, fmt } from '../../../core/rng.js';

export function genMarketShare() {
  const clientRev = rand(1, 20) * 5;
  const market = clientRev * pick([4, 5, 8, 10, 20]);
  const share = Math.round((clientRev / market) * 100);
  return {
    category: 'Market Share',
    question: `Client revenue: $${fmt(clientRev)}M\nTotal market size: $${fmt(market)}M\nWhat is the client's market share %?`,
    answer: share,
    tolerance: 0,
    solution: `Market share = ${clientRev} / ${market} × 100 = <strong>${share}%</strong>`,
    hint: 'Market Share = Client Revenue ÷ Total Market Size × 100',
  };
}
