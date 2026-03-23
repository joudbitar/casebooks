import { genMarketSizing } from '../../shared/generators/market/market-sizing.js';
import { genMarketShare } from '../../shared/generators/market/market-share.js';

export default {
  rank: 17,
  name: 'Load factor (airlines)',
  difficulty: 'easy',
  difficultyLabel: 'Easy',
  desc: 'Utilization-style estimates (proxy drills).',
  generators: [genMarketSizing, genMarketShare],
  target: 20,
};
