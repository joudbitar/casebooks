import { genLTV } from '../../shared/generators/finance/ltv.js';

export default {
  rank: 15,
  name: 'Subscription / LTV / CAC',
  difficulty: 'medium',
  difficultyLabel: 'Medium',
  desc: 'LTV, subscription economics.',
  generators: [genLTV],
  target: 20,
};
