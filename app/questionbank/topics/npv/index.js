import { genNPVPerpetuity } from '../../shared/generators/finance/npv-perpetuity.js';
import { genNPVGrowth } from '../../shared/generators/finance/npv-growth.js';

export default {
  rank: 11,
  name: 'NPV & perpetuity',
  difficulty: 'hard',
  difficultyLabel: 'Medium–Hard',
  desc: 'Discounting, growing perpetuity.',
  generators: [genNPVPerpetuity, genNPVGrowth],
  target: 20,
};
