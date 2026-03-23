import { genMarkupVsMargin } from '../../shared/generators/margins/markup-vs-margin.js';
import { genContributionMargin } from '../../shared/generators/profitability/contribution-margin.js';
import { genProfit } from '../../shared/generators/profitability/profit.js';

export default {
  rank: 13,
  name: 'Pricing',
  difficulty: 'medium',
  difficultyLabel: 'Medium',
  desc: 'Margins, markup, contribution.',
  generators: [genMarkupVsMargin, genContributionMargin, genProfit],
  target: 20,
};
