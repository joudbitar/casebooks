import { genMarketSizing } from '../../shared/generators/market/market-sizing.js';

export default {
  rank: 18,
  name: 'Pharma / funnel sizing',
  difficulty: 'medium',
  difficultyLabel: 'Medium',
  desc: 'Population funnel to revenue.',
  generators: [genMarketSizing],
  target: 20,
};
