import { genPctChange } from '../../shared/generators/margins/pct-change.js';
import { genMarkupVsMargin } from '../../shared/generators/margins/markup-vs-margin.js';

export default {
  rank: 5,
  name: 'Percentage change & margins',
  difficulty: 'easy',
  difficultyLabel: 'Easy',
  desc: '% change, markup vs margin.',
  generators: [genPctChange, genMarkupVsMargin],
  target: 20,
};
