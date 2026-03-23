/** Catalog UI sections → category ids (order: foundation → deal math) */
export const CATALOG_SECTIONS = [
  {
    title: 'Foundation',
    blurb: 'Mental math underpins every case — treat it as a first-class skill alongside the topics below.',
    categoryIds: ['mental_math'],
  },
  {
    title: 'Core mechanics',
    blurb: 'Profitability frame, revenue & cost, margins, share, and compounding shortcuts.',
    categoryIds: [
      'profitability',
      'revenue_decomposition',
      'cost_decomposition',
      'pct_margins',
      'market_share',
      'rule_of_72',
    ],
  },
  {
    title: 'Classic case math',
    blurb: 'Breakeven, growth rates, and return metrics.',
    categoryIds: ['break_even', 'cagr', 'roi_payback'],
  },
  {
    title: 'Time value of money',
    blurb: 'Discounting and perpetuities.',
    categoryIds: ['npv'],
  },
  {
    title: 'Strategy & operations',
    blurb: 'Sizing, pricing, throughput, subscription economics, and working capital.',
    categoryIds: [
      'market_sizing',
      'pricing',
      'operations',
      'subscription_ltv',
      'inventory_turns',
    ],
  },
  {
    title: 'Sector patterns',
    blurb: 'Industry-shaped sizing and utilization.',
    categoryIds: ['load_factor', 'pharma_sizing'],
  },
  {
    title: 'Advanced / deal math',
    blurb: 'M&A-style combinations, multiples, and sensitivity.',
    categoryIds: ['ma_synergies', 'pe_ebitda', 'sensitivity'],
  },
];

export const DEFAULT_TARGET = 20;
