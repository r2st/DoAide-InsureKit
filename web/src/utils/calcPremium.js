import { MODE_FACTORS, MODE_REBATES, GST_RATES, SA_REBATES } from "../data/licPlans";

function interpolateRate(premiumRates, age, term) {
  const ages = Object.keys(premiumRates).map(Number).sort((a, b) => a - b);
  if (ages.length === 0) return null;

  let ageKey = ages[0];
  for (const a of ages) {
    if (a <= age) ageKey = a;
    else break;
  }

  const termsObj = premiumRates[ageKey];
  if (!termsObj) return null;

  const terms = Object.keys(termsObj).map(Number).sort((a, b) => a - b);
  let termKey = null;
  for (const t of terms) {
    if (t <= term) termKey = t;
    else break;
  }
  if (termKey === null) termKey = terms[0];

  return termsObj[termKey] ?? null;
}

function getSARebatePerThousand(sumAssured) {
  for (const { minSA, rate } of SA_REBATES) {
    if (sumAssured >= minSA) return rate;
  }
  return 0;
}

export function calculatePremium(plan, age, sumAssured, term, mode = "yearly", isFirstYear = true) {
  if (plan.fixedPremium) {
    const gstRate = isFirstYear ? GST_RATES.firstYear : GST_RATES.renewal;
    return {
      basePremium: plan.fixedPremium,
      gst: Math.round(plan.fixedPremium * gstRate),
      totalPremium: Math.round(plan.fixedPremium * (1 + gstRate)),
      annualPremium: plan.fixedPremium,
      modeFactor: 1,
      gstRate,
      saRebate: 0,
      modeRebate: 0,
    };
  }

  const ratePerThousand = interpolateRate(plan.premiumRates, age, term);
  if (ratePerThousand === null) return null;

  const saRebate = getSARebatePerThousand(sumAssured);
  const effectiveRate = Math.max(0, ratePerThousand - saRebate);

  const tabularAnnualPremium = Math.round((effectiveRate * sumAssured) / 1000);
  const modeRebate = MODE_REBATES[mode] || 0;
  const annualPremium = Math.round(tabularAnnualPremium * (1 - modeRebate));

  const modeFactor = MODE_FACTORS[mode] || 1.0;
  const basePremium = Math.round(annualPremium * modeFactor);

  const gstRate = isFirstYear ? GST_RATES.firstYear : GST_RATES.renewal;
  const gst = Math.round(basePremium * gstRate);
  const totalPremium = basePremium + gst;

  return {
    basePremium,
    gst,
    totalPremium,
    annualPremium,
    tabularAnnualPremium,
    ratePerThousand,
    effectiveRate,
    modeFactor,
    gstRate,
    saRebate,
    modeRebate,
  };
}
