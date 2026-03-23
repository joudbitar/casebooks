import { pick } from '../../../core/rng.js';

export function genMarketSizing() {
  const scenarios = [
    {
      q: 'US population: 330M. Average household size: 2.5 people.\nHow many households are there? (in millions)',
      a: 132,
      tol: 2,
      sol: '330M / 2.5 = <strong>132M households</strong>',
    },
    {
      q: 'US has 330M people. ~25% are under 18.\nHow many US adults are there? (in millions)',
      a: 248,
      tol: 5,
      sol: '330M × 75% = <strong>248M adults</strong> (roughly)',
    },
    {
      q: '330M US population, 80-year life expectancy.\nApprox. how many people are born each year? (in millions)',
      a: 4,
      tol: 0.5,
      sol: '330M / 80 ≈ <strong>4M per year</strong> per age cohort',
    },
    {
      q: 'US has 132M households. 60% own a car.\nHow many car-owning households? (in millions)',
      a: 79,
      tol: 3,
      sol: '132M × 60% = <strong>~79M car-owning households</strong>',
    },
  ];
  const s = pick(scenarios);
  return {
    category: 'Market Sizing',
    question: s.q,
    answer: s.a,
    tolerance: s.tol,
    solution: s.sol,
    hint: 'Use round numbers — precision is less important than structure',
  };
}
