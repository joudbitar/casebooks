import { genBreakEven } from '../../shared/generators/finance/break-even.js';

export default {
  rank: 8,
  name: 'Break-even',
  difficulty: 'medium',
  difficultyLabel: 'Medium',
  desc: 'Units to cover fixed costs.',
  generators: [genBreakEven],
  target: 20,
};
