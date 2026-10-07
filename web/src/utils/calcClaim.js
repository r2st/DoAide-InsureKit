import { getSRBRate, getFABRate, getSASlabBonus } from "../data/licPlans";

export function estimateClaimAmount(plan, sumAssured, term, yearsPaid, isDeathClaim = false) {
  if (isDeathClaim) {
    const baseSRB = getSRBRate(plan, term);
    const saSlabBonus = getSASlabBonus(plan, sumAssured);
    const effectiveSRB = baseSRB + saSlabBonus;
    const accruedBonus = Math.round((effectiveSRB / 1000) * sumAssured * yearsPaid);

    let deathBenefitSA = sumAssured;
    if (plan.deathBenefit) {
      deathBenefitSA = Math.round(sumAssured * 1.25);
    }

    const saWithBonus = sumAssured + accruedBonus;
    const deathBenefit = Math.max(deathBenefitSA, saWithBonus);

    return {
      type: "death",
      sumAssured,
      accruedBonus,
      srbRate: effectiveSRB,
      deathBenefitSA,
      saWithBonus,
      claimAmount: deathBenefit,
      yearsPaid,
      note: plan.deathBenefit || "Higher of SA+Bonus or guaranteed minimum",
    };
  }

  const baseSRB = getSRBRate(plan, term);
  const saSlabBonus = getSASlabBonus(plan, sumAssured);
  const effectiveSRB = baseSRB + saSlabBonus;
  const totalBonus = Math.round((effectiveSRB / 1000) * sumAssured * term);

  const fabRate = getFABRate(plan, term);
  const fab = Math.round((fabRate / 1000) * totalBonus);

  const maturityMultiplier = plan.maturityMultiplier || 1;
  const baseSA = Math.round(sumAssured * maturityMultiplier);
  const maturityValue = baseSA + totalBonus + fab;

  const bonusProjections = [0.95, 1.0, 1.05].map((factor) => {
    const projSRB = Math.round(effectiveSRB * factor);
    const projBonus = Math.round((projSRB / 1000) * sumAssured * term);
    const projFAB = Math.round((fabRate / 1000) * projBonus);
    return {
      scenario: factor < 1 ? "Conservative (-5%)" : factor > 1 ? "Optimistic (+5%)" : "Current Rate",
      srbRate: projSRB,
      totalBonus: projBonus,
      fab: projFAB,
      maturityValue: baseSA + projBonus + projFAB,
    };
  });

  return {
    type: "maturity",
    sumAssured,
    baseSA,
    totalBonus,
    fab,
    srbRate: effectiveSRB,
    fabRate,
    maturityMultiplier,
    maturityValue,
    bonusProjections,
    note: plan.maturityNote || "SA + SRB + FAB at maturity",
  };
}
