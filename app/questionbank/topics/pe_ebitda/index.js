import { genNPVPerpetuity } from '../../shared/generators/finance/npv-perpetuity.js';
import { genROI } from '../../shared/generators/finance/roi.js';
import { genProfit } from '../../shared/generators/profitability/profit.js';

export default {
  rank: 20,
  name: 'PE / EBITDA multiples',
  difficulty: 'hard',
  difficultyLabel: 'Hard',
  desc: 'Multiple-based valuation (proxy drills).',
  generators: [genNPVPerpetuity, genROI, genProfit],
  target: 20,
};
