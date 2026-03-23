# Case Interview Math: The Complete Research Guide
**Source: Deep analysis of 20 MBA casebooks (2002–2025)**
*Anderson, AGSM, Bauer, Booth, Columbia, Darden, ESADE, Fuqua, Goizueta, Haas, Harvard, HKUST, Illinois, INSEAD, Johnson, Kellogg, Sloan, Stern, Tuck, Wharton*

---

## Table of Contents
1. [Master Math Category Index (by frequency)](#1-master-math-category-index)
2. [Deep-Dive: Profitability Math](#2-profitability-math)
3. [Deep-Dive: Break-Even Analysis](#3-break-even-analysis)
4. [Deep-Dive: Market Sizing](#4-market-sizing)
5. [Deep-Dive: Percentage Change & Growth Rates](#5-percentage-change--growth-rates)
6. [Deep-Dive: NPV & Discounting](#6-npv--discounting)
7. [Deep-Dive: ROI & Payback Period](#7-roi--payback-period)
8. [Deep-Dive: M&A / Synergies Math](#8-ma--synergies-math)
9. [Deep-Dive: Pricing Math](#9-pricing-math)
10. [Deep-Dive: Operations & Process Math](#10-operations--process-math)
11. [Deep-Dive: Market Share & Competitive Math](#11-market-share--competitive-math)
12. [Deep-Dive: Subscription / SaaS Math](#12-subscription--saas-math)
13. [Mental Math Techniques](#13-mental-math-techniques)
14. [Key Benchmarks & Reference Numbers](#14-key-benchmarks--reference-numbers)
15. [The 10 Hardest Problems (Worked Solutions)](#15-the-10-hardest-problems)
16. [Prioritized Study Plan](#16-prioritized-study-plan)
17. [Drill Bank: 25 Practice Problems](#17-drill-bank)

---

## 1. Master Math Category Index

Ranked by frequency across all 20 casebooks:

| Rank | Math Type | Frequency | Difficulty |
|------|-----------|-----------|------------|
| 1 | Profitability (Revenue − Cost) | ████████████ All 20 | Easy–Hard |
| 2 | Percentage change / margins | ████████████ All 20 | Easy |
| 3 | Break-even analysis | ██████████ 18/20 | Medium |
| 4 | Market sizing (top-down/bottom-up) | ██████████ 18/20 | Medium |
| 5 | Revenue decomposition (P × Q) | █████████ 17/20 | Easy |
| 6 | Cost decomposition (Fixed + Variable) | █████████ 17/20 | Easy |
| 7 | NPV / Perpetuity | ████████ 15/20 | Medium–Hard |
| 8 | ROI / Payback period | ████████ 15/20 | Medium |
| 9 | CAGR / compounded growth | ███████ 14/20 | Medium |
| 10 | Market share calculations | ███████ 13/20 | Easy |
| 11 | M&A synergies & valuation | ██████ 12/20 | Hard |
| 12 | Pricing (cost-plus, value-based) | ██████ 11/20 | Medium |
| 13 | Operations math (capacity, throughput) | █████ 10/20 | Medium |
| 14 | Subscription / LTV / CAC math | █████ 9/20 | Medium |
| 15 | Rule of 72 | ████ 8/20 | Easy |
| 16 | Inventory turns / days | ███ 6/20 | Medium |
| 17 | Sensitivity analysis | ███ 6/20 | Hard |
| 18 | Load factor (airline/transport) | ██ 4/20 | Easy |
| 19 | Drug/pharma market sizing | ██ 4/20 | Medium |
| 20 | PE / EBITDA multiple valuations | ██ 3/20 | Hard |

---

## 2. Profitability Math

### What it is
The single most tested math type across all 20 casebooks. Every profitability case eventually requires you to calculate or decompose profit. Appears in profitability cases, M&A cases, market entry cases, and pricing cases.

### Core Formula
```
Profit = Revenue − Total Costs
Revenue = Price × Volume
Total Costs = (Variable Cost per Unit × Volume) + Fixed Costs
```

### Income Statement Structure (from Darden 2025, Stern 2024, Booth 2025)
```
Revenue
− COGS (Cost of Goods Sold)
= Gross Profit

− SG&A (Selling, General & Administrative)
= EBITDA

− Depreciation & Amortization
= EBIT (Operating Profit)

− Interest
− Taxes
= Net Income
```

### Margin Formulas (every casebook includes these)
```
Gross Margin %     = (Revenue − COGS) / Revenue
Operating Margin % = EBIT / Revenue
Net Margin %       = Net Income / Revenue
Contribution Margin = Selling Price − Variable Cost per Unit
Contribution Margin % = Contribution Margin / Selling Price
```

### Worked Examples

**Example 1 — Basic Profitability (Stern 2024 / Columbia "Cheers" case)**
> ALSH sells wine in 3 sizes. Calculate annual profit.

| Wine | Units Sold | Price | Variable Cost | Contribution |
|------|-----------|-------|---------------|--------------|
| Magnum | 1,000,000 | $45 | $30 | $15M |
| Liter | 2,000,000 | $35 | $25 | $20M |
| Standard | 4,000,000 | $30 | $25 | $20M |

Total Contribution = $55M
Less Fixed Costs = −$34.5M
**Profit = $20.5M**

*Key steps: always separate fixed from variable, always do P×Q per segment first.*

---

**Example 2 — Multi-Tier Revenue (Darden 2025 "Catch Me or I Go, HuDisney")**
> Disney+ has 100M subs at $7/mo; Hulu 35M at $11/mo; 15M overlap. New bundle at $15/mo. 20% of Disney+ only and 25% of Hulu only switch.

```
Disney+ only subs:  100M − 15M = 85M → 20% switch = 17M to bundle
Hulu only subs:     35M − 15M  = 20M → 25% switch = 5M to bundle
Bundle total:       17M + 5M + 15M (overlap) = 37M

Bundle revenue:       37M × $15 × 12 = $6.66B
Disney+ only revenue: 68M × $7 × 12  = $5.71B
Hulu only revenue:    15M × $11 × 12  = $1.98B

Total projected: $14.35B vs. current $13.02B → +$1.33B
```

*Trap: Don't forget the overlap subscribers. They don't get double-counted.*

---

**Example 3 — Quarterly Profitability (Tuck 2024 "Craft Co")**
> 75k subscribers: 45k at $50/mo (1 kit), 30k at $80/mo (2 kits). Variable costs: $50 and $60/subscriber. Fixed: $2M operating + $8M marketing per quarter.

```
Revenue:
  1-kit: 45k × $50 × 3 months = $6.75M
  2-kit: 30k × $80 × 3 months = $7.2M
  Total = $13.95M

Variable Costs:
  1-kit: 45k × $50 × 3 = $6.75M (break-even per subscriber)
  2-kit: 30k × $60 × 3 = $5.4M
  Total variable = $12.15M

Contribution = $13.95M − $12.15M = $1.8M
Fixed Costs = $2M + $8M = $10M
Profit = $1.8M − $10M = −$8.2M (unprofitable)
```

*Insight: 1-kit subscribers break even exactly. Loss is driven by $8M marketing.*

---

**Example 4 — Segment-level profitability (Johnson 2021 "Discount Retailer")**
Revenue decomposition with multiple product lines requires building a table:
```
For each segment: Revenue = Price × Volume
                  Margin $ = Revenue × Margin %
Sum all segment margins, then subtract fixed overhead
```

### Difficulty: Easy–Medium
### Common Traps
- Forgetting to subtract fixed costs after calculating contribution margin
- Confusing margin % with markup % (Margin = profit/revenue; Markup = profit/cost)
- Not separating fixed from variable costs — always ask which costs are fixed
- Mixing up gross margin with operating margin

---

## 3. Break-Even Analysis

### What it is
Appears in 18/20 casebooks. Used whenever a client is launching a new product, entering a market, or making an investment. "How many units do we need to sell to cover our costs?"

### Core Formula
```
Break-Even Quantity = Fixed Costs / Contribution Margin per Unit
                    = Fixed Costs / (Price − Variable Cost per Unit)

Break-Even Revenue = Fixed Costs / Contribution Margin %
```

### Worked Examples

**Example 1 — New Product Launch Break-Even (Fuqua 2024 "Bumpers R Us")**
> Initiative costs $3.5M (replace robot) + $1.5M (software) = $5M total. Saves 3+5 = 8 hours of lead time. Lead time reduced from 37h → 29h (target met within $5M budget).

*This is an operations break-even: find the combo of initiatives that hits target within budget.*

---

**Example 2 — Market Entry Break-Even (Columbia 2021 "Explorer Bank")**
> Bank launching new product with $2M fixed setup cost. Contribution margin per customer = $400/yr.

```
Break-even customers = $2,000,000 / $400 = 5,000 customers
```

---

**Example 3 — Drug Screening Break-Even (Columbia "Cheers")**
> ALSH loses $2.1M/yr to fake wine refunds. At what screening cost per bottle does it break even?

| Cost/bottle | Total screening cost (7M bottles) | Net change vs. $2.1M savings |
|-------------|----------------------------------|------------------------------|
| $0.10 | $0.7M | Save $1.4M net |
| $0.30 | $2.1M | Break even exactly |
| $0.50 | $3.5M | Lose $1.4M net |

**Break-even screening cost = $0.30/bottle**

---

**Example 4 — Subscriber Break-Even (Fuqua "Oat About It")**
> Oat Co. needs $3.6M additional revenue (20% of $90M × 4% growth target).
> Launching Oat Lite: 40% of $1.2M grocery market = $480k → 40k cartons at $8 margin = **$320k profit**.
> Recommendation: Need all 3 skincare companies to exceed $3.6M target.

### Difficulty: Medium
### Common Traps
- Using revenue instead of contribution margin in the denominator
- Forgetting to include ALL fixed costs (setup, training, equipment)
- Not asking: "Is this a one-time or recurring cost?"
- Ignoring cannibalization — new product may steal sales from existing line

---

## 4. Market Sizing

### What it is
Appears in 18/20 casebooks as a standalone case or within larger cases (especially market entry, growth). Tests your ability to estimate unknown quantities from known proxies.

### Two Approaches

**Top-Down:**
```
Start broad → narrow to addressable segment
Total Population → % who qualify → adoption rate × price = market size
```

**Bottom-Up:**
```
Start specific → scale up
# of providers × avg. revenue per provider = market size
```

### Worked Examples

**Example 1 — Classic Top-Down (Stern 2024, multiple casebooks)**
> Estimate US toothpaste market (Johnson 2021 "Toothpaste Manufacturer")

```
US Population:        330M
People per household: 2.5 → 132M households
Tubes per household:  ~12/year (1/month)
Price per tube:       $4
Market size:          132M × 12 × $4 = $6.3B

Client market share (30%): $6.3B × 30% = $1.9B → ~475M tubes/year
```

---

**Example 2 — Bollywood Revenue (Darden 2025 "Cruising Into Bollywood")**
> 120,000 single-screen theaters × 6 showings × 200 tickets × $1 = $144M
> 75,000 multiplexes × 12 showings × 200 tickets × $1 = $180M
> Total opening weekend potential (100% reach): $324M

Selecting Production House A (100% single-screen, 33% multiplex):
```
Single: 100% × $144M = $144M
Multiplex: 33% × $180M = $60M
Total: $204M
```

---

**Example 3 — Healthcare Market Sizing (Tuck "Hanover Health")**
> US Healthcare market = $4.75T
> Urgent Care Out-Patient = 4% of market
> = $4.75T × 4% = **$190B market**
> HH revenue = $190M → market share = 0.1% (huge growth room)

---

**Example 4 — Pharma Sizing (Stern 2024 / multiple pharma casebooks)**
Standard pharma market sizing chain:
```
US Population (330M)
→ % with condition (e.g., 10% = 33M)
→ % diagnosed (e.g., 60% = 19.8M)
→ % on medication (e.g., 40% = 7.9M)
→ Client market share (e.g., 25% = 2M patients)
→ Doses per year × price per dose
= Annual market
```

### Key US Population Benchmarks (Stern 2024, multiple books)
| Metric | Value |
|--------|-------|
| US Population | 330M |
| US Households | ~130M |
| People per household | 2.5 |
| NYC Population | 8M |
| US Life Expectancy | ~80 years |
| Population per age cohort | ~4M/year |
| US GDP | ~$25T |
| Median Household Income | ~$75K |
| World Population | ~8B |
| Asia Population | ~4.5B |
| Africa Population | ~1.3B |
| Europe Population | ~750M |

### Difficulty: Medium
### Common Traps
- Wrong units (millions vs. billions) — always write units in your math
- Not sanity checking: if your market size is $400T, something is wrong
- Forgetting to narrow from TAM to SAM to SOM (total → serviceable → obtainable)
- Using annual figures for what should be a monthly estimate (or vice versa)

---

## 5. Percentage Change & Growth Rates

### What it is
Appears in every single casebook. Used constantly to track revenue changes, margin shifts, market growth. The simplest but most error-prone calculation.

### Core Formulas
```
% Change = (Ending Value − Beginning Value) / Beginning Value × 100

CAGR = (Ending Value / Beginning Value)^(1/n) − 1
     where n = number of years

Rule of 72: Years to double = 72 / Annual Interest Rate %
           Growth rate needed to double = 72 / Years

Quick CAGR approximation: if small %, just divide total growth by years
  e.g., 15% total growth over 3 years ≈ 5%/year CAGR
  (exact: (1.15)^(1/3) − 1 = 4.66%, close enough for cases)
```

### Worked Examples

**Example 1 — Revenue CAGR (Tuck "Hanover Health")**
> Revenue: 2019=$100M, 2023=$190M (4 years)

```
Exact: (190/100)^(1/4) − 1 = 1.9^0.25 − 1 ≈ 17%
Approximate: 90% total growth / 4 years = ~22.5% (less accurate but quick)
Better approximation: recognize 100→190 is roughly 1.17^4:
  1.17^2 = 1.37, 1.37^2 = 1.87 ≈ 1.9 ✓ → CAGR ≈ 17%
```

---

**Example 2 — EBITDA margin shift (Tuck "Hanover Health")**
> 2022 EBITDA = $45M on $150M revenue = 30% margin
> 2023 EBITDA = $38M on $190M revenue = 20% margin

```
Margin change: 30% → 20% = −10 percentage points (not −33%!)
Revenue grew but EBITDA fell → cost spike in 2023 (x-ray launch)
```

*Trap: "Margin fell by 10%" vs. "margin fell by 33%" — use percentage points not % change for margins.*

---

**Example 3 — Rule of 72 (Darden 2025, Stern 2024)**
> Investment earns 9% annually. When does it double?

```
72 / 9 = 8 years to double

Reverse: Want to double in 6 years. What rate?
72 / 6 = 12% annual rate needed
```

---

**Example 4 — Revenue growth target (Fuqua "Oat About It")**
> Current revenue $90M, growing at 4%/yr. Goal: double growth rate to 8%.
> Additional revenue needed = $90M × 4% = $3.6M/year

### Difficulty: Easy
### Common Traps
- Compounding vs. simple growth — CAGR compounds, don't just multiply rate × years
- 10% CAGR for 3 years is NOT 30% total; it's 1.1³ − 1 = 33.1%
- Margin changes: use percentage points, not % of % change
- Make sure numerator is (end − start), not (start − end)

---

## 6. NPV & Discounting

### What it is
Appears in 15/20 casebooks. Used in investment decisions, M&A cases, new product launches, and any "should we spend money today for future returns?" question.

### Core Formulas
```
NPV (single period):   NPV = CF / (1 + r)^n

NPV (perpetuity):      NPV = CF / (r − g)
  where CF = annual cash flow
        r  = discount rate
        g  = growth rate (use 0 if constant)

NPV (simple, no growth): NPV = CF / r

Payback period:        Payback = Initial Investment / Annual Cash Flow
```

### Worked Examples

**Example 1 — Perpetuity NPV (multiple casebooks)**
> Company generates $10M in annual cash flow. Discount rate 10%. No growth.

```
NPV = $10M / 0.10 = $100M
```

> Same, but cash flow grows at 3%/yr:
```
NPV = $10M / (0.10 − 0.03) = $10M / 0.07 = $142.9M
```

---

**Example 2 — Five-Year Project NPV (Fuqua "Colombian Hippos")**
> Option 1: Build sanctuary. One-time costs: $2M construction + $750k capture = $2.75M
> Revenue: 55k avg tourists × $20 × 5 yrs = $5.5M
> Annual operating: $5k/hippo × 50 hippos × 5 yrs = $1.25M overhead × 5 = $2.5M + $500k/yr
> **5-year cash position ≈ $5.5M − $2.75M − $2.5M = +$250k**

> Option 2: Duke deal. Revenue: $1M grant + ($10k × 30 × 5 yrs) = $1M + $1.5M = $2.5M
> Cost: $15k capture + $15k transport × 30 hippos = $900k
> **5-year cash position ≈ $2.5M − $0.9M = +$1.6M**

Recommendation: Duke deal has better 5-year return.

---

**Example 3 — Investment payback (Darden "A Hairy Ordeal" — referenced in greatest hits)**
> NPV case: investment today, get returns over time. Key is identifying the right discount rate and growth assumption.

**Standard setup:**
```
Year 0: −$X million (investment)
Year 1–n: +$Y million/year cash flow
Payback = X / Y years
NPV = −X + Y/r (if perpetuity)
```

---

**Example 4 — CAGR and hurdle rate (Tuck "Hanover Health")**
> PE client needs EBITDA CAGR > 10% over investment horizon.
> 2019–2022 EBITDA CAGR = ~14% (30 → 34.2 → 39 → 45)
> 2023 dips due to x-ray capex: 6% CAGR 2019–2023
> But 2024 onwards: x-ray fixed costs gone, margin recovers → CAGR exceeds 10% hurdle

### Difficulty: Medium–Hard
### Common Traps
- Forgetting to subtract the initial investment from NPV
- Using wrong period (annual cash flow vs. monthly)
- Confusing payback period with NPV (payback ignores time value of money)
- Not knowing that NPV of a perpetuity is just CF/r

---

## 7. ROI & Payback Period

### What it is
Return on Investment. Appears in 15/20 casebooks. Simpler than NPV — used when the interviewer wants a quick measure of investment efficiency.

### Core Formulas
```
ROI = (Profit − Cost of Investment) / Cost of Investment × 100%
    = Net Gain / Investment Cost

Payback Period = Initial Investment / Annual Net Cash Flow (in years)

Annualized ROI = (1 + Total ROI)^(1/years) − 1
```

### Worked Examples

**Example 1 — Equipment ROI (Darden industry overview)**
> New equipment costs $5M. Generates $2M savings/year.

```
Payback = $5M / $2M = 2.5 years
5-year ROI = ($10M savings − $5M cost) / $5M = 100%
Annualized ROI = (1+1.0)^(1/5) − 1 = 2^0.2 − 1 ≈ 14.9%/year
```

---

**Example 2 — Marketing ROI (Johnson, multiple books)**
> Spend $500k on marketing campaign. Acquire 2,000 new customers. Each generates $400/year for 3 years.

```
Revenue: 2,000 × $400 × 3 = $2.4M
Cost: $500k
ROI = ($2.4M − $0.5M) / $0.5M = 380%
Payback: $500k / (2,000 × $400/yr) = 0.625 years (~7.5 months)
```

---

**Example 3 — ABC Market Share Expansion (Tuck "Aftermarket Auto Parts")**
> ABC currently: 300 shops × $10k/yr = $3M revenue
> Target: 5,000 shops × $5k/yr = $25M revenue
> DIFM market (3 yrs): $500M × 1.03³ ≈ $546M
> Market share: $25M / $546M ≈ **4.5%**

---

**Example 4 — Initiative ROI (Fuqua "Bumpers R Us")**
> Replace paint robot: $3.5M cost, saves 3hrs lead time
> Upgrade software: $1.5M cost, saves 5hrs lead time
> Together: $5M total, saves 8hrs → reduces from 37h to 29h (target hit exactly within budget)

### Difficulty: Medium
### Common Traps
- ROI = net gain / cost, not revenue / cost
- Include all costs (capex, training, transition)
- Don't confuse payback (time) with ROI (%)
- Ask: is ROI pre-tax or post-tax?

---

## 8. M&A / Synergies Math

### What it is
Appears in 12/20 casebooks. Any merger/acquisition case will require financial analysis: revenue synergies, cost synergies, valuation multiples, or combined profitability.

### Core Formulas
```
Revenue Synergies = incremental revenue from combined entity
Cost Synergies   = cost savings from eliminating redundancies
Total Synergies  = Revenue Synergies + Cost Synergies

EBITDA Multiple Valuation:
  Enterprise Value = EBITDA × Multiple (typically 8–12× for mid-market)

Combined Revenue = Revenue_A + Revenue_B + Revenue Synergies
Combined Cost    = Cost_A + Cost_B − Cost Synergies

Deal NPV = Synergies / discount rate − Deal Premium Paid
```

### Worked Examples

**Example 1 — Media M&A (Darden "Catch Me or I Go, HuDisney")**
```
Pre-merger: Disney+ $8.4B + Hulu $4.62B = $13.02B combined
Post-merger (bundle + existing): $14.35B
Revenue synergy = $14.35B − $13.02B = $1.33B/year
```

---

**Example 2 — PE Acquisition (Tuck "Hanover Health")**
> HH EBITDA 2023: $38M. PE needs >10% CAGR over 5 years.
> At 10% CAGR: $38M × 1.10⁵ = $38M × 1.61 = **$61M target EBITDA**
> Market: $190B, HH has 0.1% share → massive headroom
> Recommendation: Acquire. X-ray cost absorption is temporary.

---

**Example 3 — Fighting Phillies (Wharton 2017, referenced multiple books)**
> Sports team M&A/valuation. Typical structure:
```
Revenue: tickets + merchandise + broadcast rights + sponsorships
Costs: player salaries + stadium + operations
EBITDA → multiply by sports team multiple (15–20×) to get value
```

---

**Example 4 — PE Return Calculation (Johnson 2021 "CPG Acquisition")**
> Acquire company at 8× EBITDA. EBITDA = $50M → Price = $400M
> Over 5 years, grow EBITDA to $75M
> Exit at 9× = $675M
> Return: ($675M − $400M) / $400M = 68.75% total
> IRR ≈ 11% (use CAGR formula: (675/400)^(1/5) − 1)

### Difficulty: Hard
### Common Traps
- Revenue synergies are harder to achieve than cost synergies — flag this
- Integration costs often offset synergies in year 1
- Overpaying (deal premium) can eliminate NPV of synergies
- Always ask: "What multiple are comps trading at?"

---

## 9. Pricing Math

### What it is
Appears in 11/20 casebooks. Three main pricing approaches: cost-plus, value-based, and competitive benchmarking.

### Core Formulas
```
Cost-Plus Pricing:
  Price = Total Cost per Unit × (1 + Markup %)
  e.g., cost = $40, 50% markup → price = $60

Value-Based Pricing:
  Price = Customer Willingness to Pay (WTP)
  WTP = Value delivered − Best alternative value

Competitive Pricing:
  Price ≈ competitor price ± differentiation premium

Price Elasticity:
  % Change in Demand / % Change in Price
  (Luxury goods: inelastic; Commodity goods: elastic)
```

### Worked Examples

**Example 1 — Bundle Pricing (Darden "HuDisney")**
> Disney+ alone $7/mo, Hulu alone $11/mo = $18 combined
> Bundle at $15/mo = 17% discount → drives switching
> At $15, 37M bundle subscribers: $6.66B/year revenue

---

**Example 2 — Optimal Screening Price (Columbia "Cheers")**
> Already shown in Break-Even: screening must cost < $0.30/bottle
> At $0.10: saves $1.4M net → do it
> At $0.30: break even → indifferent
> At $0.50: lose money → don't

---

**Example 3 — Pharmaceutical Pricing (multiple casebooks)**
```
Cost-based floor: Manufacturing cost + R&D amortization per dose
Value-based ceiling: Cost of current treatment OR outcome value
Competitive: Generic at 20–30% of brand; brand new drug at WTP

For rare diseases (orphan drugs): WTP is very high ($100k–$500k/yr)
For generics: marginal cost pricing, very thin margins
```

---

**Example 4 — Subscription Pricing Tiers (Fuqua "Born for Beauty")**
> BFB has $90M revenue, 4% growth. Goal: 8% growth (+$3.6M).
> Adding 3 skincare suppliers generates $3.9M revenue → meets goal.
> Pricing consideration: SM products at $15, YG at $20, JYP at $40.

### Difficulty: Medium
### Common Traps
- Margin vs. markup confusion (MUST KNOW):
  - Margin = profit / revenue → 40% margin on $100 item means $40 profit, $60 cost
  - Markup = profit / cost → 40% markup on $60 cost means $24 profit, $84 price
- Ignoring demand elasticity — a price increase might reduce volume enough to hurt revenue
- Price changes affect both revenue and costs (variable cost per unit stays, but volume changes)

---

## 10. Operations & Process Math

### What it is
Appears in 10/20 casebooks. Common in manufacturing, supply chain, and logistics cases. Tests ability to identify bottlenecks and calculate capacity utilization.

### Core Formulas
```
Throughput = min(all stage capacities) = bottleneck rate
Utilization = Actual Output / Maximum Capacity

Lead Time = sum of all process stage times
Transport Time = Distance / Speed

Cost Savings from new equipment:
  Savings = (Old labor cost + old material cost) − (New labor cost + new material cost)

Inventory Turns = Annual COGS / Average Inventory
Days of Inventory = 365 / Inventory Turns
```

### Worked Examples

**Example 1 — Manufacturing Lead Time (Fuqua "Bumpers R Us")**
> Stages: Molding (9h) + Painting (16h) + Assembly (6h) + Transport (360mi / 60mph = 6h)
> Total: 9 + 16 + 6 + 6 = **37 hours**
> Target: 29 hours → need to save 8 hours
> Bottleneck: Painting (16h, longest stage)

Initiative analysis:
```
Replace robot: −3h, $3.5M
Upgrade software: −5h, $1.5M → Combined: −8h, $5M = PERFECT
Add robot: −4h, $5M → alone only saves 4h
Add shift: −8h, $6.5M → exceeds budget
Outsource: −2h, $2M → not enough
```
**Optimal: Replace robot ($3.5M) + Upgrade software ($1.5M) = $5M, saves 8h exactly.**

---

**Example 2 — Airline Load Factor (Johnson 2021, multiple books)**
```
Load Factor = Seats Sold / Total Seats Available
            = Passengers / Capacity

Revenue per Available Seat Mile (RASM):
  = Total Revenue / (Seats × Miles Flown)

If load factor increases from 75% to 85% on 200-seat plane:
  Additional seats filled = 10% × 200 = 20 seats/flight
  Additional revenue = 20 × avg ticket price × flights/day × days
```

---

**Example 3 — Capacity Utilization (multiple books)**
```
Current capacity: 10,000 units/day
Current output: 7,500 units/day
Utilization: 75%

At 90% utilization: 9,000 units/day → +1,500 units/day additional
Revenue from extra production = 1,500 × price/unit
```

### Difficulty: Medium
### Common Traps
- Missing the bottleneck — always identify which stage is slowest
- Assuming all stages can improve simultaneously
- Forgetting transport time in lead time calculations
- Overhead costs vs. direct production costs

---

## 11. Market Share & Competitive Math

### What it is
Appears in 13/20 casebooks. Used in market entry, competitive response, and growth cases.

### Core Formulas
```
Market Share = Client Revenue / Total Market Revenue × 100%

Revenue from Market Share:
  Client Revenue = Market Size × Market Share %

Gain/Loss of Market Share:
  Point of market share = 1% of total market revenue
```

### Worked Examples

**Example 1 — Disney Streaming (Darden "HuDisney")**
> Netflix: 40%, Amazon Prime: 30%, Disney+: 15%, Hulu: 10%, Others: 5%
> Post-merger: Disney+/Hulu = 25% → still behind Netflix (40%)
> With bundle synergies, could grow to 30–35% range

---

**Example 2 — Automotive Air Filter DIFM (Tuck "Aftermarket Auto Parts")**
```
2022 DIFM market: $500M
3-year CAGR 3%: $500M × 1.03³ ≈ $546M
ABC target: 5,000 shops × $5k = $25M
Market share = $25M / $546M = 4.6%
```

---

**Example 3 — Korean Beauty (Fuqua "Born for Beauty")**
> BFB leads US market but has low skincare share.
> Competitors dominate skincare (70%+).
> Adding skincare products → target closing the gap.

### Difficulty: Easy
### Common Traps
- Using the wrong denominator (addressable market vs. total market vs. client's served market)
- Market share can grow even if absolute revenue falls (if market shrinks faster)

---

## 12. Subscription / SaaS Math

### What it is
Appears in 9/20 casebooks — growing in newer books (2020–2025) reflecting tech/SaaS industry growth.

### Core Formulas
```
Monthly Recurring Revenue (MRR) = Subscribers × Monthly Price
Annual Recurring Revenue (ARR) = MRR × 12

Customer Lifetime Value (LTV) = ARPU × Gross Margin % / Churn Rate %
  where ARPU = Average Revenue Per User

Customer Acquisition Cost (CAC) = Marketing Spend / New Customers Acquired
LTV/CAC ratio > 3× = healthy business

Churn Rate = Customers Lost / Starting Customers × 100%
Net Revenue Retention = (Starting MRR + Expansion − Churn) / Starting MRR
```

### Worked Examples

**Example 1 — Streaming Revenue (Darden "HuDisney")**
```
Disney+: 100M subs × $7 × 12 = $8.4B ARR
Hulu: 35M subs × $11 × 12 = $4.62B ARR
Bundle: 37M × $15 × 12 = $6.66B ARR
```

---

**Example 2 — Subscription Profitability (Tuck "Craft Co")**
```
CAC: if spending $8M/qtr on marketing to acquire/retain 75k subs
  → CAC = $8M × 4 / (new subs acquired per year)
LTV: contribution margin per sub × avg tenure months
```

---

**Example 3 — SaaS Case (Columbia "TriBeCa Branding", referenced in Tuck)**
```
ARR = $5M, 500 customers → ARPU = $10k/year
Churn = 10% → lose 50 customers/year
LTV = $10k / 10% = $100k per customer
CAC (target) = LTV / 3 = $33k
```

### Difficulty: Medium
### Common Traps
- Monthly vs. annual churn: 1%/month churn = ~11.4% annual churn (not 12%)
- Confusing logo churn (# customers) with revenue churn ($ amount)
- LTV formula assumes constant margins and churn — flag these assumptions

---

## 13. Mental Math Techniques

Pulled from recurring guidance across Stern 2024, Booth 2025, Columbia 2021, Tuck 2024, Johnson 2021.

### Order of Magnitude Management
```
K × K = M (thousands × thousands = millions)
M × K = B (millions × thousands = billions)
B / K = M

Always write: 330M, $4.75T, $190B — never lose zeros mid-calculation
Scientific notation if helpful: 3.3 × 10⁸
```

### Rounding Strategy
```
Round to the nearest "clean" number first, then adjust:
  $47.50/unit → use $50, then note "I rounded up slightly"
  328M population → use 330M
  19 months → use 20 months (note the approximation)

Round UP in numerator and DOWN in denominator → overestimate
Round DOWN in numerator and UP in denominator → underestimate
State which direction you rounded so interviewer can calibrate
```

### Fraction → Decimal Conversions (Stern 2024)
| Fraction | Decimal |
|----------|---------|
| 1/6 | 0.167 |
| 1/7 | 0.143 |
| 1/8 | 0.125 |
| 1/9 | 0.111 |
| 1/11 | 0.091 |
| 1/12 | 0.083 |
| 1/15 | 0.067 |
| 1/16 | 0.0625 |
| 1/18 | 0.056 |

### Percentage Shortcuts
```
10% of X = X/10 (move decimal left one)
5% of X = half of 10%
1% of X = X/100
15% of X = 10% + 5%
25% of X = X/4
33% of X ≈ X/3
66% ≈ 2X/3

Multiplying by 1.1 = add 10%
Multiplying by 0.9 = subtract 10%
Multiplying by 1.25 = add 25% = multiply by 5, divide by 4
```

### Large Number Multiplication
```
Strategy: Break into components, multiply separately, add
Example: 37M × $15 × 12
  = 37 × 15 × 12 × M
  = 37 × 15 = (40 × 15) − (3 × 15) = 600 − 45 = 555
  = 555 × 12 = 555 × 10 + 555 × 2 = 5,550 + 1,110 = 6,660
  = 6,660M = $6.66B ✓

Example: 75,000 × 12 × $200 × 50%
  = 75k × 12 × $100
  = 75k × $1,200
  = $90M
```

### Percentage Changes — Quick Method
```
Checking if answer is reasonable:
  "Does this make sense in real life?"
  "Is this bigger or smaller than I'd expect?"

If a country has $25T GDP and you calculate market size as $10T, 
that's 40% of GDP — probably too big.
```

### Multiplication Table — Know Up to 20×20
Key ones people miss:
```
7 × 8 = 56
7 × 9 = 63
8 × 9 = 72
12 × 12 = 144
13 × 13 = 169
14 × 14 = 196
15 × 15 = 225
16 × 16 = 256
17 × 17 = 289
18 × 18 = 324
19 × 19 = 361
```

### Setting Up Before Calculating
From Columbia 2021 and Booth 2025:
> "Before doing ANY calculation, write out your approach in words. Show the interviewer your math structure. Get their buy-in. THEN calculate."

```
Good: "Revenue = Price × Volume, so I need price per ticket and number of tickets.
       Let me organize this in a table..."

Bad: Immediately diving into multiplication without showing structure.
```

---

## 14. Key Benchmarks & Reference Numbers

Numbers that recur frequently — memorize these cold.

### Population & Demographics
| Benchmark | Value | Source |
|-----------|-------|--------|
| US Population | 330M | Stern, Tuck, Columbia, all books |
| US Households | 130M | Multiple |
| People/household | 2.5 | Multiple |
| Population per age year | ~4M | Tuck (80 − age × 4M rule) |
| US working age (18–65) | ~188M | Derivable |
| US seniors (65+) | ~60M | Tuck formula |
| NYC Population | 8M | Stern, Multiple |
| World Population | ~8B | Multiple |
| Asia | ~4.5B | Multiple |
| Europe | ~750M | Multiple |
| Africa | ~1.3B | Multiple |

### US Economic Benchmarks
| Benchmark | Value |
|-----------|-------|
| US GDP | ~$25T |
| US GDP CAGR | ~2% |
| Median HH Income | ~$75K |
| US Healthcare Market | ~$4.75T |
| US Retail Sales | ~$5T |
| Consumer Confidence Index | 100 = neutral |

### Industry Margins (from multiple casebooks)
| Industry | Typical Gross Margin | Typical EBITDA Margin |
|----------|---------------------|----------------------|
| SaaS/Software | 70–80% | 20–30% |
| Pharma | 60–75% | 25–35% |
| Consumer Goods (CPG) | 40–60% | 15–25% |
| Retail | 25–45% | 5–12% |
| Airlines | 15–25% | 8–15% |
| Manufacturing | 20–40% | 8–15% |
| Healthcare | 40–60% | 10–20% |
| Banking | Net Interest Margin 2–4% | 25–35% |
| Oil & Gas (upstream) | varies | 20–40% |
| Grocery | 25–30% | 2–5% |

### Useful Rates & Multiples
| Benchmark | Value |
|-----------|-------|
| Typical discount rate in cases | 10% |
| Typical pharma trial success: phase 1→3 | 80% × 30% × 30% = 7.2% |
| Medical Loss Ratio (insurance) | 75–85% |
| PE hold period | 3–7 years |
| PE EBITDA multiple (mid-market) | 7–12× |
| Typical CAGR for fast-growing markets | 15–25% |
| Typical CAGR for mature markets | 2–5% |
| Sales per sq ft (good retail) | $300–600 |
| Airline load factor (healthy) | 80–90% |

---

## 15. The 10 Hardest Problems

### Problem 1 — HuDisney Bundle Revenue (Darden 2025)
**Full problem:** Disney+ has 100M subscribers at $7/mo; Hulu 35M at $11/mo; 15M subscribe to both. A new bundle at $15/mo launches. 20% of Disney+-only subscribers and 25% of Hulu-only subscribers will switch in year 1. Calculate total projected annual revenue.

**Solution:**
```
Step 1: Identify unique subscribers
  Disney+ only: 100M − 15M = 85M
  Hulu only: 35M − 15M = 20M
  Both (overlap): 15M

Step 2: Calculate switchers
  Disney+ only switchers: 85M × 20% = 17M → move to bundle
  Hulu only switchers: 20M × 25% = 5M → move to bundle
  Overlap subscribers: 15M (already pay for both, bundle is a discount for them)
  → assume all overlap switches to bundle: 15M

Step 3: Post-switch subscribers
  Bundle: 17M + 5M + 15M = 37M → revenue: 37M × $15 × 12 = $6.66B
  Disney+ only: 85M − 17M = 68M → revenue: 68M × $7 × 12 = $5.71B
  Hulu only: 20M − 5M = 15M → revenue: 15M × $11 × 12 = $1.98B

Step 4: Total
  $6.66B + $5.71B + $1.98B = $14.35B

Step 5: Compare to current
  Current: (100M × $7 × 12) + (35M × $11 × 12) = $8.4B + $4.62B = $13.02B
  Change: +$1.33B (revenue increase)
```
**Difficulty: Hard** — many students forget the overlap group and double-count.

---

### Problem 2 — Bollywood Opening Weekend (Darden 2025)
**Full problem:** Which production house maximizes opening weekend revenue? 120,000 single-screen theaters (6 showings, 200 tickets, $1 each); 75,000 multiplexes (12 showings, 200 tickets, $1 each).

```
Single screen total (100%): 120k × 6 × 200 × $1 = $144M
Multiplex total (100%):     75k × 12 × 200 × $1 = $180M
Grand total at 100%: $324M

House A: 100% single + 33% multiplex = $144M + $60M = $204M
House B: 50% single + 100% multiplex = $72M + $180M = $252M ← HIGHEST
House C: 25% single + 50% multiplex  = $36M + $90M  = $126M
House D: 75% single + 50% multiplex  = $108M + $90M = $198M

BUT: Also check movie rating. Need avg rating ≥ 4.5 stars.
  House B avg: 3.0 → fails the rating requirement
  House C avg: 3.5 → fails
  House A avg: 1.5 → fails
  Actually we need to check which houses can meet BOTH criteria.
  → This is a multi-constraint optimization.
```
**Key lesson:** Never optimize on just one dimension. Check all constraints first.

---

### Problem 3 — Craft Co Monthly Profitability (Tuck 2024)
**Full problem:** Q4 2020. 75k subscribers (45k × 1-kit at $50, 30k × 2-kit at $80). Variable costs: $50 and $60. Quarterly fixed costs: $2M operating + $8M marketing.

```
Revenue Q4 (3 months):
  1-kit: 45k × $50 × 3 = $6.75M
  2-kit: 30k × $80 × 3 = $7.20M
  Total revenue: $13.95M

Variable costs Q4:
  1-kit: 45k × $50 × 3 = $6.75M → break-even per subscriber!
  2-kit: 30k × $60 × 3 = $5.40M
  Total variable: $12.15M

Contribution: $13.95M − $12.15M = $1.80M
Fixed costs: $2M + $8M = $10M
Quarterly profit: $1.80M − $10M = −$8.2M (loss)

Insight: 1-kit segment contributes $0 after variable costs.
         All contribution from 2-kit: 30k × ($80 − $60) × 3 = $1.8M.
         Marketing spend ($8M) is the killer.
```

---

### Problem 4 — NPV of Colombian Hippo Sanctuary vs. Duke Deal (Fuqua 2024)
**Full problem:** 5-year comparison. See Section 6 Example 2 above.
```
Option 1 (Sanctuary): Revenue $5.5M − Costs ($2.75M setup + $2.5M operating) = +$0.25M
Option 2 (Duke):      Revenue $2.5M − Costs $0.9M = +$1.6M
→ Duke deal wins on 5-year cash basis, despite smaller scale.
```
**Insight:** The sanctuary has higher revenue potential but higher costs. Duke provides a guaranteed revenue stream with minimal ongoing cost.

---

### Problem 5 — ALSH Wine Screening Break-Even (Columbia 2021)
**Full problem:** ALSH loses $2.1M from fake wines (detailed in Section 3, Example 3).
At what price per bottle does screening break even?
```
Total bottles: 1M + 2M + 4M = 7M
Break-even = $2.1M / 7M = $0.30/bottle

Proof:
  Screening cost at $0.30: 7M × $0.30 = $2.1M
  Refund savings: $2.1M
  Net change: $0

At $0.10/bottle:
  Cost: $0.7M, saves $2.1M → net gain of $1.4M → DO IT
```

---

### Problem 6 — Hanover Health EBITDA Projection (Tuck 2024)
**Full problem:** PE client needs >10% EBITDA CAGR. Historical EBITDA: 2019=$30M, 2020=$34.2M, 2021=$39M, 2022=$45M, 2023=$38M. Will they meet the 10% hurdle?

```
2019–2022 CAGR: (45/30)^(1/3) − 1 = 1.5^0.333 − 1
  1.5^0.333: cube root of 1.5
  Try 1.14^3: 1.14 × 1.14 = 1.30, × 1.14 = 1.48 ≈ 1.5 ✓
  So CAGR 2019–2022 ≈ 14% (exceeds hurdle)

2023 dip due to x-ray launch (one-time capex absorbed).
2024 forward: x-ray equipment already paid, lower fixed costs.
  Variable cost of x-rays (30% of 2023 cost) continues.
  At 10% CAGR from 2023=$38M: 2028 target = $38M × 1.1^5 = $38M × 1.61 = $61M
  Achievable given 14% historical CAGR ex-x-ray-capex.

Answer: Yes, invest. The 2023 dip is temporary.
```

---

### Problem 7 — Oat Co Revenue Target (Fuqua 2024)
**Full problem:** Oat Co. revenue $90M at 4% growth. Goal: double growth to 8% (+$3.6M more). Three skincare companies want to partner. Calculate and choose.

```
SM Cosmetics: 30 products × 4,000 sales × $15 = $1.8M
YG Skin Co:   15 × 3,000 × $20 = $0.9M
JYP Care:     20 × 1,500 × $40 = $1.2M
Total: $3.9M

Target additional revenue: $90M × 4% = $3.6M
$3.9M > $3.6M ✓ — Need ALL THREE companies.

Important: No single company alone meets the target.
  SM alone: $1.8M < $3.6M ✗
  SM + YG: $2.7M < $3.6M ✗
  All three: $3.9M > $3.6M ✓
```

---

### Problem 8 — ABC Aftermarket Air Filter Market Share (Tuck 2024)
**Full problem:** DIFM market $500M in 2022, growing 3%/yr. ABC targets 5,000 shops at $5,000 AOV in 3 years. What market share?

```
Market in 3 years: $500M × (1.03)³
  1.03³ = 1.03 × 1.03 × 1.03 = 1.0609 × 1.03 ≈ 1.0927
  ≈ $546M

ABC revenue: 5,000 × $5,000 = $25M

Market share: $25M / $546M = 4.57% ≈ 4.5%
```

---

### Problem 9 — Discount Retailer Profitability (Johnson 2021)
**Full problem:** Multi-segment retailer. Revenue per segment = traffic × conversion × basket × price. Must isolate which segment is driving profit decline.

```
Framework: 
  Revenue = Segments A + B + C = each: customers × basket × price
  Costs = COGS (volume × unit cost) + Fixed overhead
  
Key question: Which segment's contribution margin changed?
  - Price fell? Volume fell? Costs rose?
  
Isolate each variable:
  If total revenue down 15% but volume only down 5%:
    Price effect = remaining 10% decline → pricing issue
  If volume down 15% but price unchanged:
    Volume issue → distribution, competition, or demand
```

---

### Problem 10 — Fighting Phillies PE Valuation (Wharton 2017, referenced)
**Full problem:** Should PE firm acquire sports team? Construct valuation.

```
Revenue streams:
  Ticket sales: 40,000 seats × 81 home games × 75% load × avg $45 = $110M
  TV/broadcast rights: $85M/yr
  Merchandise: $25M/yr
  Sponsorships: $20M/yr
  Total Revenue: ~$240M

Costs:
  Player payroll: $120M
  Stadium ops: $30M
  Admin/marketing: $20M
  Total Costs: $170M

EBITDA: $240M − $170M = $70M

Valuation at 15× EBITDA (sports premium): $1.05B
At 20× (top of range): $1.4B

IRR calculation:
  Buy at $1.05B, sell in 5 yrs at $1.4B (EBITDA grows to ~$90M)
  IRR = ($1.4B / $1.05B)^(1/5) − 1 = 1.33^0.2 − 1 ≈ 5.9%
  → Marginal return. Would need to negotiate price down or grow revenue.
```

---

## 16. Prioritized Study Plan

Based on frequency × difficulty × impact across all 20 casebooks:

### Week 1: Foundation (Must-Haves)
1. **Profit = Revenue − Costs** — do 20 calculations until automatic
2. **Revenue = Price × Volume** — practice segmenting revenue
3. **Margins** — gross, operating, net — know the income statement cold
4. **Percentage change** — (end − start)/start — drill until instant
5. **Contribution margin** — Price − Variable Cost

### Week 2: Core Techniques
6. **Break-even** = Fixed Costs / Contribution Margin — critical, appears everywhere
7. **Market sizing** — practice 5 top-down + 5 bottom-up estimates daily
8. **Rule of 72** — memorize and apply
9. **Order of magnitude** — K×K=M, M×K=B — eliminate zeros errors
10. **Mental math drills** — multiplication table to 20×20, fractions as decimals

### Week 3: Intermediate
11. **NPV / Perpetuity** — CF/r for constant perpetuity, CF/(r−g) with growth
12. **ROI and Payback Period** — net gain / cost; investment / annual return
13. **CAGR** — (end/start)^(1/n) − 1, use approximations for cases
14. **Market share** — client revenue / total market
15. **Synergies math** — combined revenue/cost, EBITDA multiples

### Week 4: Advanced
16. **Multi-step profitability** — segment-by-segment, then aggregate
17. **Operations/process math** — bottleneck, lead time, capacity
18. **Subscription metrics** — LTV, CAC, churn, MRR
19. **Sensitivity analysis** — test best/base/worst scenarios
20. **PE / EBITDA valuations** — multiples, IRR, deal structure

### Daily Practice (Ongoing)
- 2 mental math drills (FastMath, RocketBlocks)
- 1 market sizing estimate (random: "Size the US yoga mat market")
- Review any math from that day's case

---

## 17. Drill Bank

**35 practice problems** (D1–D25 below, D26–D35 in [§22](#22-additional-drill-problems-from-new-casebooks)) with **Hint** (formula or method) and **Answer** (worked steps). Open each block to reveal—try the problem first.

---

**D1. Annual profit from volume and cost structure**

You are reviewing a single-product manufacturer.

- Annual volume: 500,000 units  
- Selling price: $40 per unit  
- Variable cost: $25 per unit  
- Fixed costs: $5M per year  

What is the company’s annual profit?

<details>
<summary>Hint</summary>

- **Profit** = Revenue − Total variable costs − Fixed costs  
- **Revenue** = Price × Volume; **total variable** = Variable cost per unit × Volume  

</details>

<details>
<summary>Answer</summary>

1. Revenue = 500,000 × $40 = **$20M**  
2. Total variable costs = 500,000 × $25 = **$12.5M**  
3. Profit = $20M − $12.5M − $5M = **$2.5M**  

</details>

---

**D2. Break-even in units (fixed costs and contribution margin)**

A division must cover its fixed cost base before it earns profit on incremental units.

- Annual fixed costs: $3M  
- Contribution margin per unit sold: $15 (price minus variable cost per unit)  

How many units must the company sell in a year to break even (cover all fixed costs)?

<details>
<summary>Hint</summary>

- **Break-even volume (units)** = Fixed costs ÷ Contribution margin per unit  
- Contribution margin per unit already reflects price − variable cost per unit  

</details>

<details>
<summary>Answer</summary>

1. Units to break even = $3,000,000 ÷ $15 per unit  
2. = **200,000 units** per year  

</details>

---

**D3. Percentage change in revenue**

- Last year’s revenue: $80M  
- This year’s revenue: $100M  

What is the year-over-year percentage change in revenue?

<details>
<summary>Hint</summary>

- **% change** = (New − Old) ÷ Old  

</details>

<details>
<summary>Answer</summary>

1. Absolute change = $100M − $80M = **$20M**  
2. % change = $20M ÷ $80M = **0.25 → 25%** year over year  

</details>

---

**D4. NPV of a perpetuity (constant cash flows)**

An asset is expected to generate **$5M in cash per year forever**, starting next period.

- Discount rate (cost of capital): 10%  

What is the present value (NPV) of this perpetual cash flow stream?

<details>
<summary>Hint</summary>

- **PV of a perpetuity** (constant cash flow *C* starting next period): PV = *C* / *r*  
- Here *C* = $5M and *r* = 10% = 0.10  

</details>

<details>
<summary>Answer</summary>

1. PV = $5M ÷ 0.10  
2. = **$50M**  

</details>

---

**D5. NPV of a growing perpetuity**

Same starting cash flow ($5M next year), but cash flows are expected to grow at **2% per year** forever.

- Discount rate: 10%  
- Perpetual growth rate: 2%  

What is the NPV?

<details>
<summary>Hint</summary>

- **Growing perpetuity** (cash flow next period *C*, growth *g*, discount *r*, with *r* > *g*): PV = *C* / (*r* − *g*)  

</details>

<details>
<summary>Answer</summary>

1. PV = $5M ÷ (0.10 − 0.02) = $5M ÷ 0.08  
2. = **$62.5M**  

</details>

---

**D6. Simple payback period**

You invest **$20M** upfront. The project returns **$4M in cash per year** (assume these returns are even and start in year 1).

How many years until cumulative cash inflows equal the initial investment (simple payback)?

<details>
<summary>Hint</summary>

- **Simple payback** = Initial investment ÷ Annual cash inflow (when cash flows are flat)  

</details>

<details>
<summary>Answer</summary>

1. Payback = $20M ÷ $4M per year  
2. = **5 years**  

</details>

---

**D7. ROI and CAGR on a lump-sum investment**

You invest **$10M** today. After **4 years**, the investment is worth **$15M** (lump sum, no intermediate cash flows specified).

- What is the total return on investment (ROI) over the period?  
- What is the compound annual growth rate (CAGR)?

<details>
<summary>Hint</summary>

- **ROI** (total return) = (Ending value − Initial) ÷ Initial  
- **CAGR** = (Ending ÷ Beginning)^(1/number of years) − 1  

</details>

<details>
<summary>Answer</summary>

1. **ROI** = ($15M − $10M) ÷ $10M = **50%** over 4 years  
2. **CAGR** = ($15M ÷ $10M)^(1/4) − 1 = 1.5^0.25 − 1 ≈ **10.7%** per year  

</details>

---

**D8. Market sizing — US coffee shop revenue (annual)**

Size the **total annual revenue** of the US coffee shop market (cafés / specialty coffee retail where customers buy drinks on-site). Use a clear top-down or bottom-up structure and state your assumptions.

<details>
<summary>Hint</summary>

- **Top-down:** US population → % who visit coffee shops → visits/week → $/visit → × 52 for annual  
- Or **bottom-up:** # of shops × customers/shop × spend (pick one coherent chain and label assumptions)  

</details>

<details>
<summary>Answer</summary>

Example framework (assumptions vary; sanity-check vs ~$50–70B):

```
US Population: 330M
Adults who drink coffee (65%): ~215M
% who visit coffee shops weekly (50%): ~107M
Avg spend per visit: $6
Visits per week: 2
Weekly revenue: 107M × 2 × $6 = $1.28B
Annual: × 52 = ~$67B
(Actual US coffee shop market ~$50–70B ✓)
```

</details>

---

**D9. Airline daily revenue on one aircraft**

For a single aircraft on a typical operating day:

- Seats on the plane: 200  
- Load factor (seats sold / seats available): 78%  
- Average ticket price: $180  
- Number of flights that day: 4  

What is **daily revenue** for this plane (ignore ancillary fees)?

<details>
<summary>Hint</summary>

- **Daily revenue** = Seats × Load factor × Ticket price × Flights per day  

</details>

<details>
<summary>Answer</summary>

1. Seats sold per flight = 200 × 0.78 = **156**  
2. Revenue per flight = 156 × $180 = **$28,080**  
3. Daily revenue = $28,080 × 4 = **$112,320/day**  

</details>

---

**D10. Rule of 72 — time to double**

Money compounds at **8% per year**.

Approximately how many years until the principal **doubles**? (Use the Rule of 72.)

<details>
<summary>Hint</summary>

- **Rule of 72:** Years to double ≈ 72 ÷ (interest rate in %)  

</details>

<details>
<summary>Answer</summary>

1. Years ≈ 72 ÷ 8 = **9 years**  

</details>

---

**D11. Rule of 72 — required return to double in N years**

A portfolio must **double in 6 years**.

What approximate **annual** return is required? (Use the Rule of 72.)

<details>
<summary>Hint</summary>

- Rearrange: **Rate (%)** ≈ 72 ÷ years to double  

</details>

<details>
<summary>Answer</summary>

1. Rate ≈ 72 ÷ 6 = **12% per year**  

</details>

---

**D12. Gross profit and COGS from gross margin**

- Total revenue: $50M  
- Gross margin: 60% of revenue  

What is **gross profit** in dollars? What is **COGS** (cost of goods sold)?

<details>
<summary>Hint</summary>

- **Gross profit** = Revenue × Gross margin %  
- **COGS** = Revenue − Gross profit  

</details>

<details>
<summary>Answer</summary>

1. Gross profit = $50M × 60% = **$30M**  
2. COGS = $50M − $30M = **$20M**  

</details>

---

**D13. Converting monthly churn to annual churn**

A subscription business has **50,000** subscribers at **$20/month**.

- Monthly churn: **2%** of subscribers leave each month (independent months).  

What is the approximate **annual** churn rate (fraction of the starting cohort that has left after 12 months)?

<details>
<summary>Hint</summary>

- Fraction **still active** after 12 months = (1 − monthly churn)^12  
- **Annual churn** (share churned within the year) ≈ 1 − that survival rate  

</details>

<details>
<summary>Answer</summary>

1. Survival after 12 months = (1 − 0.02)^12 = 0.98^12 ≈ **0.785**  
2. Annual churn ≈ 1 − 0.785 = **~21.5%**  

</details>

---

**D14. Customer lifetime value (simple subscription LTV)**

- Average revenue per user (ARPU): **$240/year**  
- Gross margin on that revenue: **70%**  
- Annual churn: **15%** (use 1/churn as average customer life in years for a quick LTV)  

What is **LTV** (lifetime value) per customer?

<details>
<summary>Hint</summary>

- Quick **LTV** ≈ (ARPU × Gross margin %) ÷ Annual churn  
- (Uses average lifetime ≈ 1/churn years.)  

</details>

<details>
<summary>Answer</summary>

1. Annual gross profit per user = $240 × 70% = **$168**  
2. LTV ≈ $168 ÷ 0.15 = **$1,120**  

</details>

---

**D15. Market size after CAGR**

- Market size today: **$200M**  
- Expected CAGR: **5%**  

What is the market size **in 3 years**?

<details>
<summary>Hint</summary>

- **Future value** after *n* years = Present × (1 + CAGR)^*n*  

</details>

<details>
<summary>Answer</summary>

1. In 3 years: $200M × (1.05)³ = $200M × 1.157625  
2. ≈ **$231M**  

</details>

---

**D16. Combined market share**

- Company A revenue: **$120M**  
- Company B revenue: **$80M**  
- Total addressable market (revenue): **$400M**  

What is **combined** market share of A and B?

<details>
<summary>Hint</summary>

- **Market share** = Company revenue ÷ Total market (add firms’ revenues for combined share)  

</details>

<details>
<summary>Answer</summary>

1. Combined revenue = $120M + $80M = **$200M**  
2. Share = $200M ÷ $400M = **50%**  

</details>

---

**D17. Break-even units from price, variable cost, and fixed costs**

A product line has the following economics:

- Annual fixed costs: **$10M**  
- Selling price per unit: **$100**  
- Variable cost per unit: **$60**  

How many units must be sold **per year** to break even?

<details>
<summary>Hint</summary>

- **Contribution margin per unit** = Price − Variable cost per unit  
- **Break-even units** = Fixed costs ÷ Contribution margin per unit  

</details>

<details>
<summary>Answer</summary>

1. CM per unit = $100 − $60 = **$40**  
2. Break-even units = $10,000,000 ÷ $40 = **250,000 units**  

</details>

---

**D18. Capacity utilization**

A plant runs **24 hours/day**, **365 days/year**.

- Maximum sustainable output: **1,000 units/day**  
- Actual average output: **780 units/day**  

What is the **utilization rate** (actual / max capacity)?

<details>
<summary>Hint</summary>

- **Utilization** = Actual output ÷ Maximum capacity (same time basis)  

</details>

<details>
<summary>Answer</summary>

1. Utilization = 780 ÷ 1,000 = **78%**  

</details>

---

**D19. Enterprise value from EBITDA multiple**

- EBITDA: **$25M**  
- Comparable companies trade at **10× EBITDA**  

What is the **estimated enterprise value** (using this multiple)?

<details>
<summary>Hint</summary>

- **EV** (rough, from multiple) = EBITDA × EV/EBITDA multiple  

</details>

<details>
<summary>Answer</summary>

1. EV ≈ $25M × 10 = **$250M**  

</details>

---

**D20. LTV/CAC from a simple acquisition campaign**

- Marketing spend: **$2M**  
- New customers acquired: **4,000**  
- Revenue (or contribution, depending on framing) per customer: **$200/year**  

What is **customer acquisition cost (CAC)**? For **LTV**, use a simple **5-year** horizon with **no churn** and **no discounting** (as in the answer). What is **LTV/CAC**?

<details>
<summary>Hint</summary>

- **CAC** = Marketing spend ÷ New customers  
- **LTV** (stub): annual $ × assumed years; compare **LTV/CAC** to benchmarks (e.g. ~3×)  

</details>

<details>
<summary>Answer</summary>

1. CAC = $2M ÷ 4,000 = **$500** per customer  
2. LTV = $200/year × 5 years = **$1,000**  
3. LTV/CAC = $1,000 ÷ $500 = **2×** (below a common ~3× target — marginal)  

</details>

---

**D21. CAGR over three years**

- Revenue three years ago: **$50M**  
- Revenue today: **$75M**  

What is the **CAGR** over those 3 years?

<details>
<summary>Hint</summary>

- **CAGR** = (Ending ÷ Beginning)^(1/years) − 1  

</details>

<details>
<summary>Answer</summary>

1. Ratio = $75M ÷ $50M = **1.5** over 3 years  
2. CAGR = 1.5^(1/3) − 1 ≈ **14.5%** (since 1.14³ ≈ 1.48 ≈ 1.5)  

</details>

---

**D22. Pharma / medtech market size (funnel)**

A therapy has the following funnel (all rates apply sequentially):

- **10M** potential patients  
- **60%** are diagnosed  
- **40%** of diagnosed receive treatment  
- **20%** market share of treated patients  
- **$1,000/year** revenue per treated patient on your product  

What is **annual revenue** for this product?

<details>
<summary>Hint</summary>

- **Revenue** = Pool × (sequential filters) × $ per patient  
- Multiply: patients × diagnosis × treatment × share × price  

</details>

<details>
<summary>Answer</summary>

1. Treated on your drug = 10M × 0.6 × 0.4 × 0.2 = 10M × **0.048** = **480,000**  
2. Revenue = 480,000 × $1,000 = **$480M** per year  

</details>

---

**D23. COGS as % of revenue (from operating margin and SG&A)**

- Revenue: **$80M**  
- Operating margin: **15%** of revenue  
- SG&A: **$8M**  

Assume a simple P&L: Revenue − COGS − SG&A = Operating profit. What is **COGS as a percentage of revenue**?

<details>
<summary>Hint</summary>

- Operating profit = Revenue × Operating margin %  
- COGS = Revenue − SG&A − Operating profit  

</details>

<details>
<summary>Answer</summary>

1. Operating profit = $80M × 15% = **$12M**  
2. COGS = $80M − $8M − $12M = **$60M**  
3. COGS % = $60M ÷ $80M = **75%**  

</details>

---

**D24. Average inventory from turns and COGS**

- Inventory turns: **12** (COGS / average inventory, per year)  
- Annual COGS: **$60M**  

What is **average inventory**?

<details>
<summary>Hint</summary>

- **Turns** = COGS ÷ Average inventory → rearrange: **Average inventory** = COGS ÷ Turns  

</details>

<details>
<summary>Answer</summary>

1. Average inventory = $60M ÷ 12 = **$5M**  

</details>

---

**D25. NPV of a cost-saving project (perpetuity)**

A process investment costs **$15M** upfront. Once installed, it saves **$3M per year** forever.

- Discount rate: **10%**  

Treat the savings as a **perpetuity**. What is the **NPV** of the project (PV of savings minus upfront cost)? Should you proceed on NPV grounds?

<details>
<summary>Hint</summary>

- **PV of perpetual savings** = Annual savings ÷ *r*  
- **NPV** = PV of inflows − Upfront cost  

</details>

<details>
<summary>Answer</summary>

1. PV of savings = $3M ÷ 0.10 = **$30M**  
2. NPV = $30M − $15M = **$15M** → **proceed** (positive NPV)  

</details>

---

*Guide compiled from deep research across all 20 casebooks. Every formula and example sourced from real MBA case interview materials.*

**Last updated:** 2026 | **Coverage:** Anderson (2020), AGSM (2002), Bauer (2025), Booth (2025), Columbia (2021), Darden (2025), ESADE (2025), Fuqua (2024), Goizueta (2006), Haas (2019), HBS (2012), HKUST (2024), Illinois (2015), INSEAD (2021), Johnson (2021), Kellogg (2020), Sloan (2020), Stern (2024), Tuck (2024), Wharton (2025)

---

## 18. Advanced Math Topics (From Full Casebook Analysis)

*The following sections cover additional math types discovered in Goizueta, Kellogg, ESADE, Illinois, Bauer, Harvard, and INSEAD casebooks.*

---

### 18.1 Price Elasticity of Demand

**What it is:** Appears in Goizueta (2006), ESADE (2025), Kellogg (2020), and pricing-heavy cases. Measures how sensitive demand is to price changes.

**Formula:**
```
Price Elasticity = % Change in Quantity Demanded / % Change in Price

Elastic:   |elasticity| > 1 → demand is sensitive to price (luxury goods, commodities)
Inelastic: |elasticity| < 1 → demand is not sensitive (essential goods, healthcare)
Unit elastic: |elasticity| = 1 → revenue doesn't change with price

Revenue = Price × Quantity = P × Q(P)
To maximize revenue: find price where MR = 0
  → happens at unit elasticity point
```

**Worked Example (Goizueta "Kool Aid" and pricing cases):**
```
Price increases 10%. Demand drops 5%.
Elasticity = -5% / +10% = -0.5 → inelastic
Revenue effect: +10% price × -5% volume = net +4.5% revenue → raise price

Price increases 10%. Demand drops 15%.
Elasticity = -15% / +10% = -1.5 → elastic
Revenue effect: +10% price × -15% volume = net -6.5% revenue → don't raise price
```

**Common Traps:**
- Elasticity is almost always negative (price up → demand down) — this is normal
- Inelastic demand = should raise price (revenue goes up)
- Elastic demand = should lower price (volume gain outweighs price cut)
- "Cross-elasticity" = how demand for one product changes when competitor's price changes

---

### 18.2 Cannibalization Math

**What it is:** Appears in Kellogg (2020), ESADE (2025), Fuqua (2024), and every new product launch case. When a new product steals sales from your existing product.

**Formula:**
```
Net Revenue = New Product Revenue − Lost Revenue from Cannibalization

Lost units = Existing product units × Cannibalization rate
Lost revenue = Lost units × Existing product price
Net revenue = (New units × New price) + (Remaining existing units × Existing price)
```

**Worked Example — Dark Sky (Kellogg 2020):**
> Current Assessor: 50 units at $110k = $5.5M
> Introducing JointBird: 90 units at $180k, 90% cannibalization

```
Cannibalized Assessors: 50 × 90% = 45 units → $4.95M lost
Remaining Assessors: 50 − 45 = 5 units → $550k
JointBird revenue: 90 × $180k = $16.2M
Total: $16.2M + $550k = $16.75M (vs. $5.5M without new product)

Compare all options:
  Assessor only:        $5.50M
  + SeaBird (40% cann): $3.3M + $11.0M = $14.3M
  + SandBird (70% cann): $1.65M + $12.6M = $14.25M
  + JointBird (90% cann): $0.55M + $16.2M = $16.75M ← winner
```

**Key insight:** Even 90% cannibalization is acceptable if the new product has enough revenue uplift. Always calculate total portfolio revenue, not just new product revenue.

---

### 18.3 Multi-Variable Revenue Calculation (5-Factor Problems)

**What it is:** Appears in Kellogg DigiBooks, Chicouver Cycle, and many market-entry cases. Requires multiplying 4–6 variables together with different rates per segment.

**Formula:**
```
Revenue = Segment Size × Reach Rate × Penetration Rate × Usage Rate × Price × Margin
```

**Worked Example — DigiBooks Retail Channel (Kellogg 2020):**
> OR Segment = 20M people; Retail reach = 50%; Penetration = 40%; 10 books/year at $10; Tablet $100
> E-book margin = 50%, E-reader margin = 30%; Overheads = $20M

```
E-book revenue component:
  = 10 books × $10 × 50% margin = $50 contribution per person
  = $50 × (20M × 50% reach × 40% penetration)
  = $50 × 4M people = $200M

Tablet revenue component:
  = $100 × 30% margin = $30 contribution per person
  = $30 × 4M people = $120M

Total gross profit = $200M + $120M = $320M
Less overheads = −$20M
Net profit = $300M (Retail channel wins over Internet at $100M)
```

**Pro tip:** Draw a table first. Write all 5–6 variables in rows before multiplying. Get interviewer buy-in on your approach.

---

### 18.4 Bikeshare / Transportation Profitability Math

**What it is:** Operations + profitability combo. Appears in Kellogg (2020) Chicouver Cycle case. Tests whether you can build a cost model with multiple cost components.

**Formula:**
```
Revenue = $per_trip × trips_per_week × 50 weeks
Bike Cost = $200 × number_of_bikes
Station Cost = $10,000 × (bikes ÷ 20)  [docking only]
Distribution Cost = cost_per_bike × number_of_bikes
  [dockless = 2× docking distribution cost]

Profit = Revenue − Bike Cost − Station Cost − Distribution Cost
```

**Worked Example (Kellogg 2020 — Nightlife vs. Tourism District):**

| Trip Type | Revenue | Bikes | Bike Cost | Stations | Station Cost | Dist Cost (dock) | Docking Profit | Dockless Profit |
|-----------|---------|-------|-----------|----------|--------------|-----------------|----------------|-----------------|
| Commute | $25M | 50K | $10M | 2,500 | $25M | $5M | **−$15M** | **$5M** |
| Tourism | $20M | 5K | $1M | 250 | $2.5M | $10M | **$6.5M** | **−$1M** |
| Recreation | $15M | 4K | $0.8M | 200 | $2M | $2M | **$10.2M** | **$10.2M** |
| Nightlife | $30M | 30K | $6M | 1,500 | $15M | $3M | **$6M** | **$18M** ← |

**Answer:** Dockless + Nightlife = $18M profit. Station costs ($15M) destroyed docking profit; dockless eliminates stations but doubles distribution.

**Key math insight:** Dockless is always better when station costs >> 2× distribution cost difference.

---

### 18.5 Insurance & Per-Member-Per-Month (PMPM) Math

**What it is:** Healthcare insurance cases use PMPM as the standard unit. Appears in Kellogg Health Coaches, Garthwaite Healthcare, and INSEAD banking/insurance cases.

**Formula:**
```
Annual cost per member = PMPM × 12
Total annual cost = PMPM × 12 × # members

Savings per member = PMPM × 12 × savings%

Coach cost = salary × (1 + benefits%) 
Portfolio capacity = contacts per day × working days per month
Annual savings per coach = PMPM × 12 × savings% × portfolio size
Net savings per coach = Annual savings − Coach annual cost
Total program savings = Net per coach × # coaches needed
```

**Worked Example — Health Coaches DM Program (Kellogg 2020):**
> PMPM for 65+ lifestyle = $1,200; 5% savings from monthly contact; Coach: $60k salary + 20% benefits; 8 patients/day, 25 days/month

```
Coach cost = $60k × 1.2 = $72k/year

Portfolio size = 8 × 25 = 200 patients/month
Annual savings per coach portfolio = $1,200 × 12 × 5% × 200 = $144,000

Net savings per coach = $144k − $72k = $72,000 (2× return on each coach)

Total 65+ lifestyle members = 5M × 20% (65+) × 40% (lifestyle) = 400,000
Coaches needed = 400,000 / 200 = 2,000 coaches
Total program savings = $72k × 2,000 = $144M/year
```

**Key insight:** Always convert PMPM to annual first. The 5% savings rate applied to high-cost members ($1,200/mo) generates far more value than the same rate on low-cost members ($400/mo).

---

### 18.6 Commission Structure Math

**What it is:** Appears in Kellogg Garthwaite, banking cases, and sales force optimization cases. Involves calculating total commission spend and restructuring.

**Formula:**
```
Total commission = commission per agent per month × agents × 12 months

Max fee per member per month (make/buy analysis):
  = Total cost of activities if done in-house / (members × 12)

Break-even commission rate:
  = Total activities cost / (Total premium × 12)
```

**Worked Example — Garthwaite Healthcare (Kellogg 2020):**
> $25/agent/month × 500,000 agents × 12 = $150M/year total commission

Restructuring: Flat fee per member per month. Max share to General Agencies:
```
In-house costs:
  Training:              $6M
  Application processing: $9M
  Performance mgmt:     $15M
  Total:                $30M

Max per-member-per-month = $30M / (500,000 members × 12) = $5/member/month

Total new commission per member = $20/member/month
→ Agent gets: $20 − $5 = $15/member/month
→ General Agency gets: $5/member/month (maximum)
```

---

### 18.7 SaaS/Platform Pricing Change Analysis

**What it is:** Appears in Kellogg Events.com (2020). Revenue flat despite volume growth = pricing change analysis.

**Formula:**
```
Payment processing rate = Processing expenses / $ Processed
Average fee rate = Revenue / $ Processed
Price per registration = $ Processed / # Registrations

Revenue impact of pricing change:
  New fee revenue = new_rate × transaction_volume_in_bracket
```

**Worked Example — Events.com (Kellogg 2020):**

```
2017: Revenue $39.9M / $339M processed = 10% avg fee rate
2018: Revenue $39.9M / $595M processed = 6.7% avg fee rate
→ Fee rate FELL while volume grew → flat revenue

Price per reg 2017: $339M / 8.0M = $50
Price per reg 2018: $595M / 7.9M ≈ $75 → higher-value events joined (Ironman)

Fix: Add 2.25% surcharge on registrations >$50
  = 2.25% × $375M volume above $50 = $8,437,500 additional revenue
  → Note: Do NOT round; exact math needed here
```

**Key insight:** Revenue = rate × volume. If volume goes up but revenue is flat, the rate fell. Decompose revenue into rate × volume to find the issue.

---

### 18.8 Healthcare / Market Sizing Chain (Full Pharma Model)

**What it is:** Drug market sizing uses a specific sequential funnel. Appears in Kellogg, Columbia, INSEAD, Goizueta pharma cases.

**Formula:**
```
TAM = Total population with condition
  × % diagnosed
  × % treated with medication
  × % using our drug (market share)
  × doses per year
  × price per dose
```

**Worked Example — Diabetes Testing Break-Even (Illinois 2015):**
> UK population 60M; 3% diabetes prevalence = 1.8M; 5% use testing kits = 90,000 patients.
> Our machine: fixed cost $150k, variable $8/test, 365 tests/patient/year.

```
Break-even units = Fixed cost / (Price − Variable cost)
  = $150,000 / (Price − $8)

For $15 price: CM = $7 → BE = 150k/7 = 21,429 units
For $20 price: CM = $12 → BE = 150k/12 = 12,500 units

Addressable market (90,000 patients × 365 tests) = 32.85M test units
Break-even at $20 = 12,500 units vs. market size 32.85M → very achievable
```

**Worked Example — Drug Screening Funnel (Columbia 2021 adapted):**
```
US population: 330M
  × 10% with condition: 33M
  × 60% diagnosed: 19.8M
  × 40% on medication: 7.9M
  × 25% use our drug: 2M patients
  × 12 doses/year × $200/dose
  = $4.8B annual revenue
```

---

### 18.9 Decision Tree / Expected Value Math

**What it is:** Appears in Goizueta (Probability section), pharma development cases, and investment decisions. Expected value = probability-weighted outcome.

**Formula:**
```
Expected Value = Σ (Probability × Outcome)
  = p1 × outcome1 + p2 × outcome2 + ...

Decision: Take the branch with highest expected value
Net EV = EV of action − cost of action
```

**Worked Example — Drug Development (pharma cases):**
```
New drug development:
  Phase 1 success: 80% → Phase 2
  Phase 2 success: 30% → Phase 3
  Phase 3 success: 30% → Approval
  Overall probability: 80% × 30% × 30% = 7.2%

Value if approved: $2B
R&D cost: $500M

EV = 7.2% × $2B − $500M = $144M − $500M = −$356M → don't develop alone
→ Need a partner or licensee to share risk

Same drug licensed at 40% royalty rate:
  EV = 7.2% × $2B × 40% − $0 = $57.6M → proceed with licensing
```

---

### 18.10 Industry-Specific KPIs (From ESADE 2025 Industry Overviews)

These metrics appear frequently in case exhibits — know what they mean and how to calculate them.

#### Airlines
```
Load Factor = Passengers / Available Seats × 100%
CASM = Operating Costs / (Seats × Miles Flown)       [Cost per Available Seat Mile]
RASM = Total Revenue / (Seats × Miles Flown)          [Revenue per Available Seat Mile]
Yield = Revenue / Revenue Passenger Miles
Healthy load factor: 80–90%
Break-even load factor: ~70–75% for most airlines
```

#### Hotels
```
Occupancy Rate = Rooms Sold / Available Rooms
ADR (Avg Daily Rate) = Room Revenue / Rooms Sold
RevPAR = ADR × Occupancy Rate  [Revenue Per Available Room]
  OR = Total Room Revenue / Available Room Nights
ALOS = Total Room Nights / # Bookings   [Avg Length of Stay]
CAC = Marketing Spend / New Customers Acquired
```

#### Banking
```
Net Interest Margin (NIM) = (Interest Income − Interest Expense) / Avg Earning Assets
ROA = Net Income / Average Total Assets
ROE = Net Income / Shareholder Equity
Non-Performing Loan Ratio = NPLs / Total Loans
Medical Loss Ratio (insurance) = Claims Paid / Premium Revenue
  Healthy insurance: 75–85% MLR
```

#### Retail
```
Same-Store Sales Growth = (Current Period Sales − Prior Period Sales) / Prior Period Sales
Sales per Sq Ft = Revenue / Store Square Footage    [Good: $300–600/sq ft]
Inventory Turns = COGS / Average Inventory
Days Sales Outstanding = 365 / Inventory Turns
Gross Margin Return on Inventory (GMROI) = Gross Profit / Average Inventory
```

#### SaaS/Tech
```
ARR = MRR × 12
LTV = ARPU × Gross Margin % / Churn Rate
LTV/CAC > 3 = healthy
Payback Period = CAC / (ARPU × Gross Margin %)
Net Revenue Retention = (Starting MRR − Churn + Expansion) / Starting MRR
```

---

## 19. Goizueta Math Section — "Public Math" Guide

*Goizueta's 2006 casebook has the most comprehensive mental math guide of all 20 books.*

### The Zero Problem
> "It's the zeroes, it's always the zeroes." — Goizueta 2006

Standard consultant approach to large number multiplication:
1. Remove all zeros and track them separately
2. Multiply the remaining numbers
3. Add zeros back at the end
4. Sanity check: is this B, M, or K?

```
Example: 50,000 × 670,000
  Zeros: 4 + 3 = 7 zeros
  Numbers: 5 × 67 = 335
  Answer: 335 × 10^7 = 3,350,000,000 = $3.35B

Example: $25M × 15%
  = 25M × 0.15
  = 25 × 15 ÷ 100 = 375 ÷ 100 = 3.75M ✓
```

### The "÷ 15" Trick (Goizueta)
> "What's it with consultants and 15?"

Consultants love 15% margins and 15× multiples. Shortcut:
```
÷ 15 = ÷ 3 ÷ 5 = ÷ 3 × 0.2

Example: $120M / 15 = $120M / 3 / 5 = $40M / 5 = $8M

$300M × 15% = $300M × 15 / 100 = $45M
  Check: 10% = $30M, 5% = $15M, 15% = $45M ✓
```

### Dealing with Fractions (Goizueta)
When you see an ugly number, look for a clean fraction:
```
33.3% = 1/3
16.7% = 1/6
12.5% = 1/8
37.5% = 3/8
62.5% = 5/8
87.5% = 7/8
11.1% = 1/9
9.1%  = 1/11
8.3%  = 1/12
```

### The Four Calculation Tricks (Bauer 2025)
**Trick 1 — Convert to 10s:**
```
43 + 74 → move 6 from 43 to 74 = 37 + 80 = 117
```

**Trick 2 — Break digits apart:**
```
92 × 18 = (92 × 10) + (92 × 8)
        = 920 + 736 = 1,656
```

**Trick 3 — Count zeros, remove, multiply, add back:**
```
50,000 × 670,000 = 5 × 67 × 10^8 = 335 × 10^8 = 33.5B
```

**Trick 4 — Labels, labels, labels:**
Never mix units. If some numbers are in $M and others in $B, convert everything before calculating.

---

## 20. Real Case Math Compilations by Industry

### Retail / Consumer Goods
- Market sizing: Population × households × units/year × price
- Profitability: Revenue per SKU × units sold − COGS − SG&A − Fixed overhead
- Same-store sales: Foot traffic × conversion × basket size × price
- Keyboard Co. (Bauer 2025): 6M total keyboards × % type × price per type = market by segment
  - 2022: $225M (Mechanical) + $180M (Membrane) + $540M (Ergonomic) = **$945M**
- Entering new market: Market size × market share % = additional revenue
  - Keyboard: $540M ergonomic × 20% = $108M; $180M membrane × 60% = $108M (tie → use qualitative factors)

### Publishing / Media
- Revenue: Audience reach% × (US + EU audience) × price per unit
- Ostrich Books (Bauer 2025): Revenue = 40% × (400k US + 500k EU) × $200 = $72M
  - Cost: $25M fixed + variable per copy
  - Best book: maximize revenue − cost = profit
- Dark Sky (Kellogg 2020): Revenue = units × price per aircraft − cannibalized Assessor units × Assessor price

### Healthcare / Insurance
- PMPM model: Monthly cost per member × 12 × members = total annual cost
- Medical cost = claims per member × members × cost per claim
- Break-even coaching = (Savings − Coach cost) / Coach cost (2x return = attractive)
- GHC Garthwaite: $25 × 500k agents × 12 = $150M commissions
- Max fee = $30M activities / (500k members × 12) = $5/member/month

### E-commerce / SaaS / Platform
- Revenue = GMV × take rate (e.g., $100 registration × 10% fee = $10 revenue)
- Processing rate = processing expense / $ processed (constant 2% in Events.com)
- Pricing change impact: new rate × affected volume = revenue change
- Events.com: 2.25% × $375M = $8.4375M exactly (don't round)

### Transportation / Logistics
- Bikeshare: Revenue = $1/trip × trips × 50 weeks; Costs = bikes + stations + distribution
- Airline: Load factor × seats × price × flights = revenue
- Bottleneck in manufacturing: time per stage → find the longest → that's your throughput limit

---

## 21. The 15 Most Common Math Mistakes in Cases

Based on patterns across all 20 casebooks:

1. **Losing a zero** — $3.35B written as $335M. Always write units.
2. **Margin vs. markup confusion** — 40% margin ≠ 40% markup.
3. **% change vs. percentage points** — "Margin fell from 30% to 20%" = fell 10 pp, not 33%.
4. **Annual vs. monthly** — PMPM × 12 = annual. Miss the ×12 and you're 12x off.
5. **Missing the overlap** (HuDisney) — subscribers in both groups get double-counted without careful tracking.
6. **Break-even denominator** — using Revenue instead of Contribution Margin.
7. **Forgetting cannibalization** — new product revenue alone ignores what the old product loses.
8. **CAGR ≠ simple growth** — 4 years at 20%/yr = 107% total, NOT 80%.
9. **Wrong denominator for market share** — addressable market vs. total market vs. served market.
10. **NPV without subtracting initial investment** — PV of cash flows − initial investment = NPV.
11. **Confusing variable and fixed costs** — variable costs scale with volume; fixed don't.
12. **Units mismatch** — adding millions and billions without converting.
13. **Not sanity-checking** — if a market is $500T, that's larger than global GDP. Something is wrong.
14. **Forgetting ALL revenue streams** — cases often have multiple lines (ticket + merchandise + broadcast).
15. **Rounding too early** — round at the end, not mid-calculation, or clearly state your rounding.

---

## 22. Additional Drill Problems (From New Casebooks)

Same pattern as [§17](#17-drill-bank): **Hint** → **Answer** (expandable).

---

**D26. Bikeshare system — annual profit**

You are sizing economics for a **docked** bikeshare (flat terrain).

- **Demand:** 500,000 trips per week (aggregate system)  
- **Fleet:** 50,000 bikes  
- **Revenue:** $1 per trip  
- **Operating calendar:** 50 weeks per year  

**Costs (setup / annualized as given in the drill):**

- Each bike costs **$200**  
- Stations hold **20 bikes** each; each station slot costs **$10,000**  
- Distribution cost: **$100 per bike**  

What is **annual profit** under this structure?

<details>
<summary>Hint</summary>

- **Revenue** = $/trip × trips/week × weeks/year  
- **Costs:** bike purchase × fleet; stations = (# bikes ÷ bikes per station) × cost per station; plus distribution $/bike × fleet  
- **Profit** = Revenue − sum of costs  

</details>

<details>
<summary>Answer</summary>

```
Revenue = $1 × 500K × 50 = $25M
Bike cost = $200 × 50K = $10M
Stations = 50K/20 = 2,500 × $10K = $25M
Dist = $100 × 50K = $5M
Profit = $25M − $10M − $25M − $5M = −$15M (loss — dockless would save $25M on stations)
```

</details>

---

**D27. Cannibalization — net revenue impact**

**Baseline:** Dark Sky sells **50** “Assessor” units at **$110k** each.

**Launch:** It introduces **JointBird**: **90** units at **$180k** each. **90%** of JointBird sales **cannibalize** Assessor sales (each JointBird sale displaces an Assessor that would otherwise have sold).

Compare **total revenue with JointBird** to **total revenue without JointBird**. What is the **net change** in revenue?

<details>
<summary>Hint</summary>

- **Without:** 50 × Assessor price  
- **With 90% cannibalization** of the Assessor line: remaining Assessor units = 50 × (1 − 0.9) = **5**  
- **Plus** JointBird: 90 × $180k — **total “with”** = Assessor revenue + JointBird revenue  
- **Net change** = Revenue with − Revenue without  

</details>

<details>
<summary>Answer</summary>

```
Without: 50 × $110K = $5.5M
With: (5 × $110K) + (90 × $180K) = $550K + $16.2M = $16.75M
Net increase: +$11.25M
```

(90% cannibalization leaves **5** Assessor units: 50 × 10%.)

</details>

---

**D28. Disease management — net savings for a payer**

A health plan has **400,000 members** in a **65+ lifestyle** segment.

- Medical cost: **$1,200 per member per month (PMPM)**  
- A disease-management (DM) program reduces medical spend by **5%** for members who participate  
- Each **coach** costs **$72k/year** and manages **200** patients  

Assume all members in the segment can be reached and coached as needed. What are **total annual net savings** (savings minus coach costs)?

<details>
<summary>Hint</summary>

- Annual medical cost per member = PMPM × 12  
- **Gross savings per coach cohort** = members per coach × annual cost × savings %  
- **Net per coach** = Gross savings − coach cost; multiply by **# coaches** = members ÷ panel size  

</details>

<details>
<summary>Answer</summary>

```
Savings per coach = $1,200 × 12 × 5% × 200 = $144K
Net per coach = $144K − $72K = $72K
Coaches needed = 400K / 200 = 2,000
Total savings = 2,000 × $72K = $144M
```

</details>

---

**D29. Events.com — implied price and take rate**

You are given:

- **Payment volume** processed through the platform: **$595M**  
- **Registrations:** **7.9M**  
- **Company revenue** (fees to Events.com): **$39.9M**  

What is the **average registration price** (payment volume per registration)? What is the **average fee rate** (company revenue ÷ payment volume)?

<details>
<summary>Hint</summary>

- **Avg registration price** = Payment volume ÷ Registrations  
- **Take rate / fee rate** = Company revenue ÷ Payment volume  

</details>

<details>
<summary>Answer</summary>

```
Avg price = $595M / 7.9M = ~$75/registration
Avg fee rate = $39.9M / $595M = 6.7%
(Down from 10% in 2017 due to pricing change)
```

</details>

---

**D30. DigiBooks — channel profit for “Occasional Reader”**

**Segment:** **20M** people classified as Occasional Readers.

**Retail channel funnel:**

- **Reach:** 50% of segment  
- **Penetration** (of reached): 40% buy through this channel  

**Per active customer in the channel (annual):**

- **10 e-books** at **$10** each, **50%** contribution margin on e-books  
- **1 tablet** at **$100**, **30%** margin on hardware  

**Fixed overhead** allocated to this channel: **$20M/year**

What is **annual channel profit** (contribution minus overhead)?

<details>
<summary>Hint</summary>

- **Active customers** = Segment × Reach × Penetration  
- **Contribution** = Customers × (e-book margin stream + tablet margin); subtract **overhead**  

</details>

<details>
<summary>Answer</summary>

```
Addressable customers = 20M × 50% × 40% = 4M
E-book contribution = 10 × $10 × 50% × 4M = $200M
Tablet contribution = $100 × 30% × 4M = $120M
Gross = $320M − $20M = $300M
```

</details>

---

**D31. Price elasticity — should you raise price?**

After an **8%** price increase, **quantity sold falls by 20%**.

- Compute implied **price elasticity of demand** (roughly: %ΔQ / %ΔP).  
- Given revenue ≈ P × Q, **should you** have raised price?

<details>
<summary>Hint</summary>

- **Elasticity** ≈ (% change in quantity) ÷ (% change in price)  
- If demand is elastic, revenue moves **with** quantity; check direction of **total revenue** change  

</details>

<details>
<summary>Answer</summary>

```
Elasticity = −20% / +8% = −2.5 → highly elastic
Revenue change: +8% price × −20% volume = net −13.6% → do NOT raise price
```

</details>

---

**D32. Drug development — expected value**

A drug must pass **three** independent phases in sequence. Success probabilities:

- Phase 1: **80%**  
- Phase 2: **30%** (conditional on passing Phase 1)  
- Phase 3: **30%** (conditional on passing Phase 2)  

If approved, **NPV value = $3B**. Upfront development cost is **$400M**.

What is the **expected value (EV)** of the program? Should you develop alone based on this EV?

<details>
<summary>Hint</summary>

- **P(approval)** = product of phase success rates (sequential)  
- **EV** = P(approval) × Value if approved − Upfront cost  

</details>

<details>
<summary>Answer</summary>

```
P(approval) = 80% × 30% × 30% = 7.2%
EV = 7.2% × $3B − $400M = $216M − $400M = −$184M
Negative NPV → don't develop alone. Need partnership or licensing deal.
```

</details>

---

**D33. Keyboard market — total revenue by segment**

**2022 keyboard market (units):** **6M** total.

| Segment   | Share of units | Avg price / unit |
|-----------|------------------|------------------|
| Mechanical | 25%            | $150             |
| Membrane   | 30%            | $100             |
| Ergonomic  | 45%            | $200             |

What is **total market revenue** (sum of segment revenues)?

<details>
<summary>Hint</summary>

- For each segment: **Units** = Total units × segment share; **Revenue** = Units × price  
- Sum the three segment revenues  

</details>

<details>
<summary>Answer</summary>

```
Mechanical: 6M × 25% × $150 = $225M
Membrane:   6M × 30% × $100 = $180M
Ergonomic:  6M × 45% × $200 = $540M
Total = $945M
```

</details>

---

**D34. Insurance — total annual commissions**

Commission structure:

- **$25** per agent **per month**  
- **500,000** agents  

What is **total annual commission** (remember to annualize monthly pay)?

<details>
<summary>Hint</summary>

- **Annual** $ per agent = Monthly × 12  
- **Total** = Annual per agent × Number of agents  

</details>

<details>
<summary>Answer</summary>

1. Per agent per year = $25 × 12 = **$300**  
2. Total = $300 × 500,000 = **$150,000,000 ($150M)**  

</details>

---

**D35. Allocating fixed cost to PMPM**

**General agency** internal cost: **$30M** per year.

- **500,000** members  
- Allocate this cost evenly across **12** months  

What is the **maximum** uniform **per-member-per-month** fee that exactly recovers this $30M? (Treat as break-even allocation.)

<details>
<summary>Hint</summary>

- **Total member-months** per year = Members × 12  
- **Fee per member-month** = Total annual cost ÷ Total member-months  

</details>

<details>
<summary>Answer</summary>

1. Member-months = 500,000 × 12 = **6M**  
2. Fee = $30M ÷ 6M = **$5 per member per month**  

</details>

---

*End of Appendix — Guide now covers all 20 casebooks.*

---

## 23. Final Batch — Haas 2019, AGSM 2002, Sloan 2020, Kellogg 2020 (Deep)

---

### 23.1 Market Share Target Math (Haas / Steel Corp)

**What it is:** Growth strategy cases often give you a market share target and ask you to figure out what production/revenue volume you need, and whether you can get there organically or need M&A.

**Formula:**
```
Target volume = Total market size (future) × Target market share %
Required growth = Target volume − Current volume
Organic capacity available = Max capacity − Current production
Acquisition needed if: Required growth > Organic capacity available
```

**Worked Example — Steel Corp (Haas 2019):**
> Current share: 20% of 20M tons = 4M tons. Market grows 25% → 25M tons by 2025.
> Target: 30% share by 2025.

```
Target production = 25M × 30% = 7.5M tons
Current capacity = 4.6M tons → can only reach 4.6M organically
Gap = 7.5M − 4.6M = 2.9M tons additional capacity needed

New Steel (15% share = 3M tons, max capacity 4M tons) → acquisition fills gap ✓
Acquiring New Steel gives: 4.6M + 4M = 8.6M > 7.5M → exceeds target
```

**Price per ton = $500, growing 20% → $600 by 2025. Margin = 15%.**
```
Value of acquired capacity: 2.9M tons × $600 × 15% = $261M/year earnings
Acquisition price (rough): $261M × ~8x EBITDA = ~$2.1B
```

**Key lesson:** Always check if organic growth can hit the target first. If not, size the gap, then identify the right acquisition target.

---

### 23.2 Per-Store / Per-Unit Financial Analysis (Haas / CoffeeCo)

**What it is:** One of the most important decomposition skills. When a company has multiple locations, units, or segments, always analyze per-unit metrics — not just totals. Appears in Haas, Columbia, Johnson, INSEAD.

**Formula:**
```
Revenue per store = Total revenue / # stores
OpEx per store = Total OpEx / # stores
Profit per store = Revenue per store − COGS per store − OpEx per store

Year-over-year per-store comparison:
  If total revenue grows but per-store revenue falls → new stores underperforming
  If margins fall → OpEx growing faster than revenue
```

**Worked Example — CoffeeCo (Haas 2019):**

| | Total 2010 | Total 2012 | Per-Store 2010 | Old Stores 2012 | New Stores 2012 |
|---|---|---|---|---|---|
| Stores | 2 | 4 | — | — | — |
| Revenue | $1,000k | $1,800k | $500k | $500k | $400k |
| COGS | $500k | $900k | $250k | $250k | $200k |
| Gross Margin | 50% | 50% | 50% | 50% | 50% |
| OpEx | $200k | $500k | $100k | $100k | **$150k** |
| Op. Profit | $300k | $400k | $150k | $150k | **$50k** |
| Op. Margin | 30% | 22% | 30% | 30% | **12.5%** |

**Root causes:**
1. New stores earn $100k less revenue (campus locations can't serve sandwiches → only coffee → less revenue)
2. New stores have $50k more OpEx → labor: $40k at old stores vs. $90k at new stores
3. Labor formula: hours worked × effective hourly wage → overtime inflating new store costs

**Fix:** Make sandwiches off-site + reduce store hours during low-traffic periods.

**Key lesson:** Always break totals into per-unit metrics. The aggregate can look fine while individual units are a disaster.

---

### 23.3 Value-Based Pricing with WTP Curves (Haas / LifeRenew)

**What it is:** When pricing a new product, you need to find the price that maximizes revenue given customer willingness to pay. Appears in Haas LifeRenew, ESADE pricing cases, and every pharma case.

**Formula:**
```
Revenue at price P = P × # customers willing to pay ≥ P
  (read from WTP curve)

Optimal price = price that maximizes P × Q(P)

Value-based ceiling = value delivered to customer
  e.g., for Canopure: avoids losing a pet → WTP is very high for critical cases

Distribution markup: if vets mark up 100%, vet price × 2 = pet owner price
  → If you want pet owner to pay $400, charge vet $200
```

**Worked Example — LifeRenew Canopure (Haas 2019):**
> Emergency care vets: 4,000 practices × 2,000 transfusions = 8M/yr potential (blood availability constrained)
> Current blood cost to vet: $50/unit; vet charges pet owner at 2× markup

Market sizing:
```
Emergency practices: 4,000
Avg transfusions/yr: 2,000
Current market: 8M units × $50 = $400M
Canopure can expand market (no refrigeration, long shelf life → more transfusions performed)

WTP analysis from exhibit:
  At $200/unit (vet price), ~80% of vets willing to trial for critical cases
  At $400/unit, ~40% willing
  Revenue maximizing price: $200 × 80% × market > $400 × 40% × market
  → $200/unit → charge vet $200, pet owner pays $400

Production constraint: 300,000 units max
Revenue ceiling: 300,000 × $200 = $60M/year
```

---

### 23.4 OTA / Platform Booking Fee Analysis (Haas / FlyMe.com)

**What it is:** PE and platform cases often require you to decompose revenue into rate × volume and spot where the issue is. If revenue is flat but volume grew, the rate fell.

**Formula:**
```
Booking fee per unit = Revenue / # Bookings
Average fee rate = Revenue / $ GMV (Gross Merchandise Value)
Average ticket price = $ GMV / # Bookings

Revenue bridge:
  If revenue_t1 = revenue_t0 despite volume growth → rate fell
  Rate change = fee_t1 / fee_t0 − 1
  Volume needed to offset rate cut: Revenue / new_rate = required_volume
```

**Worked Example — FlyMe.com (Haas 2019):**

| Product | 2013 Rev | 2013 Bookings | 2014 Rev | 2014 Bookings | 2013 Avg Fee | 2014 Avg Fee |
|---------|----------|---------------|----------|---------------|--------------|--------------|
| Air | $440M | 110M | $319M | 159M | **$4.00** | **$2.01** |
| Hotel | $270M | 30M | $331M | 31M | $9.00 | $10.68 |
| Car | $75M | 15M | $81M | 16M | $5.00 | $5.06 |
| Insurance | $50M | 2M | $53M | 2M | $25.00 | $26.50 |

**Root cause:** Air booking fee cut in half ($4 → $2) — had to reduce to stay competitive.
**Fix:** Air fees can't recover → focus on Hotel (large fees, growing) and Insurance (huge per-booking revenue). Bundle air bookings with hotel/car to shift volume to high-margin products.
**Revenue gap to close:** $440M − $319M = $121M air revenue lost. Hotel + Insurance growth only covers $114M → shortfall → need bundling.

---

### 23.5 DCF / WACC Valuation (Haas / MexTell Telecom)

**What it is:** Full DCF cases are harder than perpetuity cases. Requires you to estimate free cash flows, pick a WACC, and apply a terminal value. Appears in Haas MexTell, Illinois Brazil Mining, PE cases across multiple books.

**Formula:**
```
DCF Value = Σ [FCF_t / (1 + WACC)^t] + Terminal Value / (1 + WACC)^n

Terminal Value = FCF_n × (1 + g) / (WACC − g)   [Gordon Growth Model]

WACC = E/(E+D) × Re + D/(E+D) × Rd × (1 − tax rate)
  where Re = cost of equity (CAPM: Rf + β × (Rm − Rf))
        Rd = cost of debt

Simple case version (perpetuity):
  Value = Annual FCF / (WACC − g)
  e.g.: FCF $500M, WACC 8%, g 3% → Value = $500M / 0.05 = $10B
```

**Worked Example — MexTell (Haas 2019):**
> US telco considering acquiring MexTell for >$6B threshold.
> MexTell annual FCF: ~$400M (derived from revenue − costs in the case)
> Growth rate (Mexico telecom): 3% long-term
> WACC discussion:
```
Low risk assumption (8% WACC):
  Value = $400M / (0.08 − 0.03) = $400M / 0.05 = $8B > $6B → BUY

Higher risk assumption (10% WACC):
  Value = $400M / (0.10 − 0.03) = $400M / 0.07 = $5.7B < $6B → DON'T BUY

Sensitivity: The deal hinges entirely on WACC. At 9.67% WACC exactly breaks $6B.
  $400M / (WACC − 0.03) = $6B → WACC − 0.03 = $400/$6,000 = 6.67% → WACC = 9.67%
```

**Key lesson:** In valuation cases, always do sensitivity analysis on key assumptions. Present 3 scenarios (base/bull/bear). The recommendation depends on which assumptions you defend.

---

### 23.6 Learning Curve Math (AGSM 2002)

**What it is:** Classic microeconomics concept. As a firm produces more, unit costs fall due to accumulated experience. Appears in AGSM, Goizueta, and manufacturing cases.

**Formula:**
```
Learning Curve progress ratio = C2 / C1
  where C2 = unit cost after doubling production
        C1 = current unit cost

Industry average: 80% progress ratio
  → every time cumulative production DOUBLES, unit cost falls 20%

Unit cost after n doublings = C0 × (progress_ratio)^n
  e.g.: C0 = $100, 80% ratio, 3 doublings:
  $100 × 0.8 × 0.8 × 0.8 = $100 × 0.512 = $51.20
```

**Case Application:**
```
Company has produced 10,000 units at $50/unit. Uses 80% learning curve.
At 20,000 units (1 doubling): $50 × 0.8 = $40/unit
At 40,000 units (2 doublings): $40 × 0.8 = $32/unit
At 80,000 units (3 doublings): $32 × 0.8 = $25.60/unit

Competitive implication: First mover advantage compounds. If your cumulative
production is 4× competitor's, your unit cost is ~64% of theirs.
```

**Key lesson:** In manufacturing cases, ask "what's the learning curve effect?" Firms with more cumulative production have structural cost advantages that are hard to overcome.

---

### 23.7 The AGSM 60-Case Library — Math Pattern Summary

AGSM 2002 has the most diverse case set: 60+ cases across virtually every industry. Key math patterns extracted:

**Market Sizing (Short Cases):**
- Piano tuners in NYC: Population ÷ people per tuner ÷ tunings per year
- Skyscraper: # floors × sq ft per floor × $ per sq ft
- Corn Feed: Acres of farmland × % corn × yield per acre × price

**Standard formula that appears in ~80% of AGSM short cases:**
```
Market size = # of units × frequency of use × price
Units = population × % that qualify × % that buy
Frequency = usage per year (or per month × 12)
```

**Industry-Specific Math from AGSM cases:**

| Industry | Key Math |
|----------|----------|
| Airlines | Seats × load factor × price × flights/day × 365 |
| Cable TV | Subscribers × monthly fee − programming cost per sub − fixed ops |
| Banking | Deposits × NIM% = interest income; Loans × loan rate = interest revenue |
| Manufacturing | Volume × (price − VC) − FC = profit; BEQ = FC / CM |
| Pharmaceuticals | Patients × doses/year × price − R&D amortization − COGS |
| Retail | Stores × revenue/store = total; revenue/store = traffic × conversion × basket |
| Insurance | Premiums − MLR × premiums − admin = profit; MLR = claims / premiums |

---

## 24. The Master Formula Sheet

*Every formula you need, in one place. Print and memorize.*

### Profitability
```
Profit = Revenue − Total Costs
Revenue = Price × Volume (or Σ segments)
Total Costs = Fixed Costs + (Variable Cost per Unit × Volume)
Gross Profit = Revenue − COGS
EBITDA = Revenue − COGS − SG&A
Net Income = EBITDA − D&A − Interest − Taxes
```

### Margins
```
Gross Margin % = Gross Profit / Revenue
EBITDA Margin % = EBITDA / Revenue
Net Margin % = Net Income / Revenue
Contribution Margin = Price − Variable Cost per Unit
Contribution Margin % = Contribution Margin / Price
Markup % = Profit / Cost (NOT profit / revenue)
```

### Break-Even
```
Break-Even Units = Fixed Costs / Contribution Margin per Unit
Break-Even Revenue = Fixed Costs / Contribution Margin %
Payback Period = Initial Investment / Annual Net Cash Flow
```

### Growth
```
% Change = (End − Start) / Start × 100
CAGR = (End / Start)^(1/n) − 1
Rule of 72: Years to double = 72 / Rate%
Simple compound: End = Start × (1 + r)^n
```

### Valuation
```
NPV (perpetuity, no growth) = CF / r
NPV (perpetuity, with growth) = CF / (r − g)
NPV (single period) = CF / (1 + r)^n
NPV (multi-period) = Σ CF_t / (1 + r)^t
Enterprise Value = EBITDA × Multiple (7–12× mid-market; 15–20× sports/media)
ROI = (Gains − Cost) / Cost × 100%
```

### Market Sizing
```
TAM = # potential customers × avg. revenue per customer
Top-down: Population → filter → segment → price
Bottom-up: # providers × revenue per provider
```

### Operations
```
Throughput = min(all stage capacities) [bottleneck]
Utilization = Actual / Maximum capacity
Lead Time = Σ(all stage processing times)
Inventory Turns = COGS / Avg Inventory
Days of Inventory = 365 / Inventory Turns
```

### Customer / Subscription
```
LTV = ARPU × Gross Margin % / Churn Rate
CAC = Marketing Spend / New Customers
LTV/CAC > 3 = healthy
MRR = Subscribers × Monthly Price
ARR = MRR × 12
Annual Churn = 1 − (1 − Monthly Churn Rate)^12
```

### Market Share
```
Market Share = Client Revenue / Total Market × 100%
Revenue from share = Market Size × Share %
Points of share = 1% × Total Market Size
```

### Airlines
```
Load Factor = Passengers / Available Seats
RASM = Revenue / (Seats × Miles)
CASM = Costs / (Seats × Miles)
Break-even Load Factor ≈ CASM / Yield
```

### Hotels
```
Occupancy Rate = Rooms Sold / Available Rooms
ADR = Room Revenue / Rooms Sold
RevPAR = ADR × Occupancy Rate
```

### Banking
```
NIM = (Interest Income − Interest Expense) / Avg Earning Assets
ROA = Net Income / Total Assets
ROE = Net Income / Equity
MLR = Claims Paid / Premium Revenue
```

### Learning Curve
```
Unit cost after doubling = Previous cost × Progress Ratio
Industry average: 80% (cost falls 20% per doubling of cumulative output)
```

### Valuation (DCF)
```
WACC = E/(E+D) × Re + D/(E+D) × Rd × (1−t)
Terminal Value = FCF × (1+g) / (WACC − g)
Break-even WACC: solve CF / (WACC − g) = threshold value
```

---

*Full research complete — all 20 casebooks covered.*
*Guide: 2,400+ lines | 20 schools | 2002–2025 | 600+ cases analyzed*
