import { pick } from '../../../core/rng.js';

export function genLTV() {
  const arpu = pick([120, 180, 240, 300, 360]);
  const marginPct = pick([60, 70, 75, 80]);
  const churn = pick([10, 15, 20, 25]);
  const ltv = Math.round((arpu * (marginPct / 100)) / (churn / 100));
  return {
    category: 'Customer LTV',
    question: `ARPU: $${arpu}/year\nGross margin: ${marginPct}%\nAnnual churn: ${churn}%\nWhat is the Customer LTV? ($)`,
    answer: ltv,
    tolerance: ltv * 0.05,
    solution: `LTV = ARPU × Margin / Churn = ${arpu} × ${marginPct / 100} / ${churn / 100} = ${arpu * (marginPct / 100)} / ${churn / 100} = <strong>$${ltv}</strong>`,
    hint: 'LTV = (ARPU × Gross Margin %) ÷ Churn Rate',
  };
}
