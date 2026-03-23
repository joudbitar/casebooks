import { genBreakEven } from '../../shared/generators/finance/break-even.js';
import { genPayback } from '../../shared/generators/finance/payback.js';
import { genROI } from '../../shared/generators/finance/roi.js';

export default {
  rank: 14,
  name: 'Operations & throughput',
  difficulty: 'medium',
  difficultyLabel: 'Medium',
  desc: 'Capacity, payback, break-even style.',
  generators: [genBreakEven, genPayback, genROI],
  target: 20,
};
