import { MODE_FACTORS, GST_RATE } from "../data/licPlans";

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

export function calculatePremium(plan, age, sumAssured, term, mode = "yearly") {
  if (plan.fixedPremium) {
    return {
      basePremium: plan.fixedPremium,
      gst: Math.round(plan.fixedPremium * GST_RATE),
      totalPremium: Math.round(plan.fixedPremium * (1 + GST_RATE)),
      annualPremium: plan.fixedPremium,
      modeFactor: 1,
    };
  }

  const ratePerThousand = interpolateRate(plan.premiumRates, age, term);
  if (ratePerThousand === null) {
    return null;
  }

  const annualPremium = Math.round((ratePerThousand * sumAssured) / 1000);
  const modeFactor = MODE_FACTORS[mode] || 1.0;
  const basePremium = Math.round(annualPremium * modeFactor);
  const gst = Math.round(basePremium * GST_RATE);
  const totalPremium = basePremium + gst;

  return {
    basePremium,
    gst,
    totalPremium,
    annualPremium,
    ratePerThousand,
    modeFactor,
  };
}
