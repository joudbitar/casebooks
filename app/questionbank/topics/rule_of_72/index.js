import { genRule72 } from '../../shared/generators/finance/rule-72.js';

export default {
  rank: 7,
  name: 'Rule of 72',
  difficulty: 'easy',
  difficultyLabel: 'Easy',
  desc: 'Doubling time and implied return.',
  generators: [genRule72],
  target: 20,
};
