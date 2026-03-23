import { genTimesTable } from './generators/times-table.js';
import { genLargeMultiply } from './generators/large-multiply.js';
import { genFractionDecimal } from './generators/fraction-decimal.js';
import { genPercentOf } from './generators/percent-of.js';
import { genPercentComplement } from './generators/percent-complement.js';
import { genPercentReverse } from './generators/percent-reverse.js';
import { genDivisionShortcuts } from './generators/division-shortcuts.js';
import { genMagnitudeScale } from './generators/magnitude-scale.js';
import { genPartWholePercent } from './generators/part-whole-percent.js';
import { genEstimateBallpark } from './generators/estimate-ballpark.js';

/** @see generators/ — per-file drills; each may set questionDifficulty for the UI chip */
export default {
  rank: 1,
  name: 'Mental math',
  difficulty: 'easy',
  difficultyLabel: 'Easy',
  desc: 'Foundation: multiply, %, fractions — use with every topic.',
  generators: [
    genTimesTable,
    genLargeMultiply,
    genFractionDecimal,
    genPercentOf,
    genPercentComplement,
    genPercentReverse,
    genDivisionShortcuts,
    genMagnitudeScale,
    genPartWholePercent,
    genEstimateBallpark,
  ],
  target: 20,
};
