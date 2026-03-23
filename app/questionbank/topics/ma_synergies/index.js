import { genMultiStepProfit } from '../../shared/generators/profitability/multi-step-profit.js';
import { genNPVPerpetuity } from '../../shared/generators/finance/npv-perpetuity.js';
import { genROI } from '../../shared/generators/finance/roi.js';

export default {
  rank: 19,
  name: 'M&A / synergies',
  difficulty: 'hard',
  difficultyLabel: 'Hard',
  desc: 'Valuation-style combos (proxy drills).',
  generators: [genMultiStepProfit, genNPVPerpetuity, genROI],
  target: 20,
};
