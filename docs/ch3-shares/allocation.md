---
id: allocation
title: "5. Multiple companies"
sidebar_label: "5. Multiple companies"
---


# Choose the equation from the condition

For company A, let $k_A=d_A/M_A$: annual income per rupee invested. If x rupees are invested, the income is $xk_A$. This decimal rate is yield divided by 100, so a 12% yield means k = .12.

Make a table before forming an equation:

| Company | F | M | r | d = Fr/100 | k = d/M |
|---|---:|---:|---:|---:|---:|
| A | Given | Decode quotation | Given | Calculate | Calculate |
| B | Given | Decode quotation | Given or unknown | Calculate | Calculate |

## Recognition map

| Condition | Unknown | Equation |
|---|---|---|
| Equal capital, equal income | Dividend rate in one company | Income A = income B |
| Equal investments; combined income known | Capital in each | $x(k_A+k_B)=D$ |
| Equal investments; income difference known | Capital in each | $x\lvert k_A-k_B\rvert=\Delta D$ |
| Fixed total T; equal incomes | Split of total | $xk_A=(T-x)k_B$ |
| Two capitals and total income known across three firms | Third capital | Subtract known incomes, then divide by $k_C$ |

**Equal investments, equal share counts, and equal dividends are three different conditions.** Never substitute one for another.

## Worked example W13 — equal income, unknown dividend rate (pp. 31–32)

Ashok and Sandeep invest ₹18,000 each.

- Ashok: 7.5% ₹100 shares at 20% discount. M = ₹80; n = 225; d = ₹7.50; income = **₹1,687.50**.
- Sandeep: ₹50 shares at 20% premium. M = ₹60; n = 300.
- Equal income means Sandeep’s 300 shares also earn ₹1,687.50.
- His dividend rate = 1687.50/(300 × 50) × 100 = **11.25%**.

Different share counts are compatible with equal capital. Independent practice: **B15**.

## Worked example W14 — equal capital, sum of incomes (pp. 32–33)

A pays 8% on ₹100 shares at ₹120; B pays 7% on ₹100 shares at ₹90. Combined annual income is ₹936.

Let **x be the capital in each company**:

$$\frac{8x}{120}+\frac{7x}{90}=936$$

$$\frac{13x}{90}=936\quad\Rightarrow\quad x=6480$$

The requested total is **2x = ₹12,960**. Independent transfer: **P04**. If the condition were “difference,” the plus sign would have to change; **T08** tests that transformation.

## Original worked example — fixed total, equal income

Split ₹30,000 between two investments yielding 10% and 15% with equal annual incomes.

Let first capital be x; second capital is **30000 − x**.

$$.10x=.15(30000-x)\quad\Rightarrow\quad .25x=4500$$

Thus first capital = **₹18,000**, second = **₹12,000**. Check: both earn ₹1,800.

The lower-yield option needs **more capital** to generate the same income. **T11** adds face/market-value decoding to this algebra.

## Original worked example — unknown third investment

A known holding earns ₹600, another earns ₹900. Total annual income is ₹2,100. A third company pays ₹3 per share and shares cost ₹50.

Third income = 2100 − 600 − 900 = ₹600; shares = 600/3 = 200; third capital = 200 × 50 = **₹10,000**.

To find overall yield, also obtain capital invested in the first two holdings. Use total income divided by **total capital**. Do not average individual yields unless equal investment weights justify it. **T18** tests the full chain and asks for yield before the third capital; solve in dependency order, then label the requested parts correctly.

## Case-study interpretation

The source case at p. 36 compares X and Y. Extract F, M and r separately for each company. For each ₹15,000 scenario, compute share count and annual income. The same amount is being compared in each alternative; the question does not ask you to split ₹15,000 between them.

Different face values make comparison by declared dividend rate misleading. Record the computed yields before choosing.

## Independent checkpoint

Solve **B15, P04, T08, T11, T18 and CASE** in [Core](./practice.md). For **T18**, write the third income and capital explicitly even though the source asks overall yield first. If you need support, work through **W13/W14** and then retry.

Next: [Mixed recognition](./recognition.md) and [Exam](./exam.md).
