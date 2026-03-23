import { genROI } from '../../shared/generators/finance/roi.js';
import { genPctChange } from '../../shared/generators/margins/pct-change.js';

export default {
  rank: 16,
  name: 'Inventory turns / days',
  difficulty: 'medium',
  difficultyLabel: 'Medium',
  desc: 'Turns and working capital (proxy drills).',
  generators: [genROI, genPctChange],
  target: 20,
};
