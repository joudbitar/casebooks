import { genNPVGrowth } from '../../shared/generators/finance/npv-growth.js';
import { genNPVPerpetuity } from '../../shared/generators/finance/npv-perpetuity.js';

export default {
  rank: 21,
  name: 'Sensitivity analysis',
  difficulty: 'hard',
  difficultyLabel: 'Hard',
  desc: 'NPV sensitivity to growth / rate.',
  generators: [genNPVGrowth, genNPVPerpetuity],
  target: 20,
};
