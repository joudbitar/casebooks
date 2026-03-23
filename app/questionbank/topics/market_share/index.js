import { genMarketShare } from '../../shared/generators/market/market-share.js';

export default {
  rank: 6,
  name: 'Market share',
  difficulty: 'easy',
  difficultyLabel: 'Easy',
  desc: 'Share of market calculations.',
  generators: [genMarketShare],
  target: 20,
};
