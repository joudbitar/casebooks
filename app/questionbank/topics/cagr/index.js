import { genCAGR } from '../../shared/generators/finance/cagr.js';

export default {
  rank: 9,
  name: 'CAGR & growth',
  difficulty: 'medium',
  difficultyLabel: 'Medium',
  desc: 'Compound annual growth.',
  generators: [genCAGR],
  target: 20,
};
