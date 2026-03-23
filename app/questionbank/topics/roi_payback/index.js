import { genROI } from '../../shared/generators/finance/roi.js';
import { genPayback } from '../../shared/generators/finance/payback.js';

export default {
  rank: 10,
  name: 'ROI & payback',
  difficulty: 'medium',
  difficultyLabel: 'Medium',
  desc: 'Return on investment, payback period.',
  generators: [genROI, genPayback],
  target: 20,
};
