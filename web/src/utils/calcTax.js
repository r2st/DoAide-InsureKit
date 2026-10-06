const OLD_REGIME_SLABS = [
  { limit: 250000, rate: 0 },
  { limit: 500000, rate: 0.05 },
  { limit: 1000000, rate: 0.20 },
  { limit: Infinity, rate: 0.30 },
];

const NEW_REGIME_SLABS = [
  { limit: 400000, rate: 0 },
  { limit: 800000, rate: 0.05 },
  { limit: 1200000, rate: 0.10 },
  { limit: 1600000, rate: 0.15 },
  { limit: 2000000, rate: 0.20 },
  { limit: 2400000, rate: 0.25 },
  { limit: Infinity, rate: 0.30 },
];

function calcTax(income, slabs) {
  let remaining = income;
  let tax = 0;
  let prev = 0;
  for (const slab of slabs) {
    const taxable = Math.min(remaining, slab.limit - prev);
    if (taxable <= 0) break;
    tax += taxable * slab.rate;
    remaining -= taxable;
    prev = slab.limit;
  }
  const cess = tax * 0.04;
  return { tax, cess, total: Math.round(tax + cess) };
}

export function calculateTaxBenefit(annualPremium, sumAssured, income, isNewRegime = false) {
  const maxDeduction = 150000;
  const premiumCapPercent = 0.10;
  const maxPremiumForDeduction = sumAssured * premiumCapPercent;
  const eligiblePremium = Math.min(annualPremium, maxPremiumForDeduction, maxDeduction);

  const slabs = isNewRegime ? NEW_REGIME_SLABS : OLD_REGIME_SLABS;
  const taxWithout = calcTax(income, slabs);
  const taxWith = calcTax(Math.max(0, income - (isNewRegime ? 0 : eligiblePremium)), slabs);

  const sec80cDeduction = isNewRegime ? 0 : eligiblePremium;
  const taxSaved = taxWithout.total - taxWith.total;

  const maturityExempt = annualPremium <= maxPremiumForDeduction;

  return {
    sec80cDeduction,
    taxSaved,
    maturityExempt,
    maturityExemptReason: maturityExempt
      ? "Premium ≤ 10% of SA — maturity proceeds exempt under Sec 10(10D)"
      : "Premium > 10% of SA — maturity proceeds may be taxable",
    taxWithout: taxWithout.total,
    taxWith: taxWith.total,
    regime: isNewRegime ? "New Regime (FY 2025-26)" : "Old Regime",
    note: isNewRegime
      ? "New regime: Sec 80C deduction not available. Sec 10(10D) exemption still applies."
      : "Old regime: Sec 80C deduction up to ₹1.5 lakh on life insurance premiums.",
  };
}
