import { pick, rand } from '../../../core/rng.js';
import { QUESTION_DIFFICULTY } from '../../../core/questionDifficulty.js';

/** One-step K ↔ M style scaling (clean numbers) */
export function genMagnitudeScale() {
  const kind = pick(['mulM', 'divM', 'kToM']);

  if (kind === 'mulM') {
    const a = rand(12, 44) / 10;
    const b = rand(2, 5);
    const ans = Math.round(a * b * 10) / 10;
    return {
      category: 'Magnitude (K / M)',
      question: `${a}M × ${b} = ? (answer in M)`,
      answer: ans,
      tolerance: 0.05,
      solution: `<strong>${ans}M</strong>`,
      hint: 'Multiply the numbers; M stays M.',
      questionDifficulty: b >= 4 ? QUESTION_DIFFICULTY.medium : QUESTION_DIFFICULTY.easy,
    };
  }

  if (kind === 'divM') {
    const a = rand(12, 48);
    const b = rand(3, 6);
    const ans = Math.round((a / b) * 100) / 100;
    return {
      category: 'Magnitude (K / M)',
      question: `${a}M ÷ ${b} = ? (answer in M)`,
      answer: ans,
      tolerance: 0.05,
      solution: `<strong>${ans}M</strong>`,
      hint: 'Chunk the division into friendly steps.',
      questionDifficulty: QUESTION_DIFFICULTY.medium,
    };
  }

  const kThousands = rand(2, 9) * 1000;
  const ans = kThousands / 1000;
  return {
    category: 'Magnitude (K / M)',
    question: `${kThousands.toLocaleString()}K = ? M`,
    answer: ans,
    tolerance: 0,
    solution: `K ÷ 1,000 = M → <strong>${ans}M</strong>`,
    hint: '1M = 1,000K',
    questionDifficulty: QUESTION_DIFFICULTY.easy,
  };
}
