---
id: formulae
title: "Formulae: derive, select and check"
---

# Learn four relationships before their rearrangements

Memorising many disconnected formulas makes reverse questions harder. Start with the meaning of **one share**, then build the total.

| Symbol | Meaning | Unit |
|---|---|---|
| F | Face value of one share | ₹ per share |
| M | Market price of one share | ₹ per share |
| n | Share count | Shares |
| I | Money invested | ₹ |
| r | Numerical dividend percentage: use 8 for 8% | Percentage number |
| d | Annual dividend per share | ₹ per share per year |
| D | Total annual dividend | ₹ per year |
| y | Numerical yield percentage | Percentage number |

## Relationship 1: buying

One share costs M. Therefore n shares cost n times M:

$$I=nM.$$

To find n, divide both sides by M. To find M, divide both sides by n:

$$n=\frac{I}{M},\qquad M=\frac{I}{n}.$$

**Example:** ₹6,000 buys shares at ₹60, so n = 6000/60 = 100. The face value is irrelevant to this buying calculation.

## Relationship 2: dividend on one share

r% of face value F gives the dividend on one share:

$$d=F\times\frac{r}{100}.$$

**Example:** F = ₹50 and r = 12 gives d = 50 × 12/100 = ₹6. If you use r as the decimal .12 instead, write d = F × .12; do not divide by 100 again.

## Relationship 3: dividend on the holding

Each of n shares earns d, so:

$$D=nd=\frac{nFr}{100}.$$

Reversing for different unknowns:

$$n=\frac{D}{d}=\frac{100D}{Fr},\qquad r=\frac{100D}{nF}.$$

**Why divide D by d?** If each share contributes ₹6, ₹480 total income needs 480/6 = 80 such contributions.

**Why is nF below r?** A dividend percentage is measured against the holding’s total face value. nF is not necessarily the investment nM.

## Relationship 4: what the investor earns per rupee spent

$$y=\frac{D}{I}\times100.$$

Substitute D = nFr/100 and I = nM:

$$y=\frac{nFr/100}{nM}\times100=\frac{Fr}{M}.$$

The n cancels because both income and cost scale with the number of shares. Therefore buying more identical shares does not change the dividend yield at that price.

Multiplying both sides by M gives yM = Fr. Consequently:

$$M=\frac{Fr}{y},\qquad r=\frac{yM}{F}.$$

These divisions require positive, nonzero denominators. A zero dividend and zero yield cannot determine market price through Fr/y.

## Select a formula by the unknown

| Asked to find | Given or found first | Calculation | Reason |
|---|---|---|---|
| Investment | n, M | I = nM | Pay for each share |
| Share count | I, M | n = I/M | Cost of one fits into total |
| Annual income | n, F, r | d = Fr/100, then D = nd | One-share income, then all shares |
| Annual income from invested money | I, M, F, r | n = I/M, then D = nd | Money must first become shares |
| Shares for desired income | Desired D, d | n = D/d | Count the income-producing units |
| Investment for desired income | Desired D, d, M | n = D/d, then I = nM | Price those required shares |
| Dividend rate | D, n, F | r = 100D/(nF) | Use total face value as base |
| Market price from investment and income | I, D, F, r | n = D/d, then M = I/n | Recover count, then price |
| Yield | D and I, or F, r and M | y = 100D/I = Fr/M | Income relative to cost |
| Price for a specified yield | F, r, y | M = Fr/y | Reverse the yield equation |
| Company rate for a specified yield | F, M, y | r = yM/F | Different unknown in the same equation |

**Method first, shortcut second.** The combined formula D = IFr/(100M) is correct, but the two-step route n = I/M then D = nd shows the reasoning and makes errors easier to locate.

## Quotations: translate words into M first

| Wording | Market price |
|---|---|
| At par | M = F |
| Premium of ₹a | M = F + a |
| Discount of ₹a | M = F − a |
| Premium of p% | M = F(1 + p/100) |
| Discount of p% | M = F(1 − p/100) |
| Quoted at ₹a | M = a directly |

If F = ₹50, a ₹10 premium gives ₹60, but a 10% premium gives ₹55. Never treat the percentage sign as decorative.

## Extra income and time

For an increase **by** ΔD, extra shares = ΔD/d; extra money = (ΔD/d)M.

For an increase **to** a target, first subtract current income: ΔD = target D − current D.

When the rate is explicitly **per half-year**, annual dividend is twice the half-year dividend for an unchanged holding. A per-annum rate paid half-yearly is not doubled. Reinvestment must be explicitly stated before adding dividend to new capital.

## Transactions: keep the amounts separate

Let b be the original buying price and s the selling price, each per share.

$$\text{Sale proceeds}=n_{sold}s$$
$$\text{Capital gain}=n_{sold}(s-b)$$
$$n_{new}=\frac{\text{cash reinvested}}{M_{new}}$$
$$\Delta D=D_{new}-D_{old}.$$

If dividend is also reinvested, cash reinvested = sale proceeds + that dividend. Otherwise it is only the stated sale proceeds. If only part of a holding is sold, compare the income on the sold part with its replacement; keep retained shares accounted for.

“Profit including dividend” = capital gain + dividend received. This is different from the future annual income after reinvestment.

## Two percentages that answer different questions

$$\text{Relative income growth}=\frac{D_{new}-D_{old}}{D_{old}}\times100$$

$$\text{Extra income as a percentage of original capital}=\frac{D_{new}-D_{old}}{I_{original}}\times100.$$

Read the denominator from the question. Do not choose whichever percentage looks familiar.

## Allocation equations come from words

Let k = d/M be annual income per rupee invested; a yield of 8% means k = .08.

| Condition | Equation to construct |
|---|---|
| Equal investments x, combined income D | xkA + xkB = D |
| Equal investments x, income difference ΔD | x times the absolute difference between kA and kB = ΔD |
| Fixed total T, equal incomes | xkA = (T − x)kB |
| Known first two incomes, unknown third | D3 = Dtotal − D1 − D2; I3 = D3/k3 |

These are models to understand, not four more unexplained formulas to memorise. Say what x represents before writing an equation.

## Recall test

Close this page and rebuild I = nM, d = Fr/100, D = nd and y = 100D/I in words. Then explain how to find n from desired income and why dividend rate uses F while yield uses M.

Next: [How to read a problem](./read-problems.md), then [fully worked exam solutions](./worked-solutions.md).
