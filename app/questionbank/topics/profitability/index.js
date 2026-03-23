import { genProfit } from '../../shared/generators/profitability/profit.js';
import { genMultiStepProfit } from '../../shared/generators/profitability/multi-step-profit.js';
import { genGrossMargin } from '../../shared/generators/profitability/gross-margin.js';
import { genContributionMargin } from '../../shared/generators/profitability/contribution-margin.js';

export default {
  rank: 2,
  name: 'Profitability',
  difficulty: 'mixed',
  difficultyLabel: 'Easy–Hard',
  desc: 'Revenue − cost, segments, contribution.',
  generators: [genProfit, genMultiStepProfit, genGrossMargin, genContributionMargin],
  target: 20,
};
