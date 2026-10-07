import { GST_RATES, MODE_FACTORS } from "../data/licPlans";

export function calculatePaidUpValue(plan, age, sumAssured, term, yearsPaid, mode = "yearly") {
  if (yearsPaid < 3) {
    return { eligible: false, reason: "Minimum 3 full years of premiums must be paid to get paid-up value." };
  }

  const totalPremiumsDue = term;
  const paidUpSA = Math.round(sumAssured * (yearsPaid / totalPremiumsDue));
  const paidUpRatio = yearsPaid / totalPremiumsDue;

  const srbRate = typeof plan.srbRate === "number"
    ? plan.srbRate
    : (plan.srbByTerm ? (plan.srbByTerm[term] || plan.srbByTerm[Object.keys(plan.srbByTerm).sort((a, b) => a - b).pop()]) : 40);
  const annualBonus = (srbRate / 1000) * sumAssured;
  const totalBonusAccrued = Math.round(annualBonus * yearsPaid);
  const paidUpBonus = totalBonusAccrued;

  const paidUpMaturity = paidUpSA + paidUpBonus;

  const remainingYears = term - yearsPaid;

  const basePremiumRate = getPremiumRate(plan, age, term);
  const annualPremium = basePremiumRate
    ? Math.round((basePremiumRate / 1000) * sumAssured)
    : 0;
  const totalPremiumPaid = Math.round(annualPremium * yearsPaid);
  const totalPremiumSaved = Math.round(annualPremium * remainingYears);

  const gsvFactor = getGSVFactor(yearsPaid, term);
  const gsv = Math.round(totalPremiumPaid * gsvFactor);

  return {
    eligible: true,
    paidUpSA,
    paidUpRatio,
    totalBonusAccrued,
    paidUpBonus,
    paidUpMaturity,
    remainingYears,
    annualPremium,
    totalPremiumPaid,
    totalPremiumSaved,
    gsv,
    gsvFactor,
    srbRate,
  };
}

function getPremiumRate(plan, age, term) {
  if (!plan.premiumRates) return null;
  const ages = Object.keys(plan.premiumRates).map(Number).sort((a, b) => a - b);
  let ageKey = ages[0];
  for (const a of ages) {
    if (a <= age) ageKey = a;
    else break;
  }
  return plan.premiumRates[ageKey]?.[term] || null;
}

function getGSVFactor(yearsPaid, term) {
  if (yearsPaid < 3) return 0;
  const ratio = yearsPaid / term;
  if (ratio <= 0.25) return 0.30;
  if (ratio <= 0.50) return 0.50;
  if (ratio <= 0.75) return 0.70;
  return 0.90;
}
