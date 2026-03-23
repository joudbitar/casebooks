import { genContributionMargin } from '../../shared/generators/profitability/contribution-margin.js';
import { genProfit } from '../../shared/generators/profitability/profit.js';

export default {
  rank: 4,
  name: 'Cost (fixed + variable)',
  difficulty: 'medium',
  difficultyLabel: 'Easy',
  desc: 'Variable vs fixed, contribution.',
  generators: [genContributionMargin, genProfit],
  target: 20,
};
