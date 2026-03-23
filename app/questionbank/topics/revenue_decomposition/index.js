import { genProfit } from '../../shared/generators/profitability/profit.js';
import { genMultiStepProfit } from '../../shared/generators/profitability/multi-step-profit.js';
import { genGrossMargin } from '../../shared/generators/profitability/gross-margin.js';

export default {
  rank: 3,
  name: 'Revenue (P × Q)',
  difficulty: 'medium',
  difficultyLabel: 'Easy',
  desc: 'Price × volume across lines.',
  generators: [genProfit, genMultiStepProfit, genGrossMargin],
  target: 20,
};
