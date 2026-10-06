import { MODE_FACTORS } from "../data/licPlans";
import { getSRBRate, getFABRate, getSASlabBonus } from "../data/licPlans";

export function calculateMaturity(plan, sumAssured, term, customSRBRate = null) {
  if (plan.isNonPar) {
    const ga = (plan.guaranteedAdditions / 1000) * sumAssured * term;
    return {
      sumAssured,
      totalBonus: 0,
      fab: 0,
      guaranteedAdditions: Math.round(ga),
      maturityValue: Math.round(sumAssured + ga),
      srbRate: 0,
      fabRate: 0,
      saSlabBonus: 0,
      maturityMultiplier: 1,
    };
  }

  const baseSRB = customSRBRate ?? getSRBRate(plan, term);
  const saSlabBonus = getSASlabBonus(plan, sumAssured);
  const effectiveSRB = baseSRB + saSlabBonus;

  const totalBonus = Math.round((effectiveSRB / 1000) * sumAssured * term);

  const fabRatePerThousand = getFABRate(plan, term);
  const fab = Math.round((fabRatePerThousand / 1000) * totalBonus);

  const maturityMultiplier = plan.maturityMultiplier || 1;
  const baseSA = Math.round(sumAssured * maturityMultiplier);

  const maturityValue = baseSA + totalBonus + fab;

  return {
    sumAssured,
    baseSA,
    totalBonus,
    fab,
    guaranteedAdditions: 0,
    maturityValue: Math.round(maturityValue),
    srbRate: effectiveSRB,
    fabRate: fabRatePerThousand,
    saSlabBonus,
    maturityMultiplier,
  };
}

export function calculateTotalPremiumsPaid(annualPremium, term, mode = "yearly") {
  const modeFactor = MODE_FACTORS[mode] || 1;
  const paymentsPerYear = { yearly: 1, halfYearly: 2, quarterly: 4, monthly: 12 }[mode] || 1;
  const premiumPerPayment = Math.round(annualPremium * modeFactor);
  return premiumPerPayment * paymentsPerYear * term;
}

export function calculateIRR(annualPremium, maturityValue, term) {
  let lo = -0.5, hi = 1.0;
  for (let i = 0; i < 100; i++) {
    const mid = (lo + hi) / 2;
    let fv = 0;
    for (let t = 0; t < term; t++) {
      fv += annualPremium * Math.pow(1 + mid, term - t);
    }
    if (fv > maturityValue) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

export function calculateSurvivalBenefits(plan, sumAssured) {
  if (!plan.survivalBenefits) return [];
  return plan.survivalBenefits.map((sb) => ({
    year: sb.year,
    percent: sb.percent,
    amount: Math.round((sb.percent / 100) * sumAssured),
  }));
}
