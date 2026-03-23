import { genMarketSizing } from '../../shared/generators/market/market-sizing.js';

export default {
  rank: 12,
  name: 'Market sizing',
  difficulty: 'medium',
  difficultyLabel: 'Medium',
  desc: 'Top-down / bottom-up estimates.',
  generators: [genMarketSizing],
  target: 20,
};
