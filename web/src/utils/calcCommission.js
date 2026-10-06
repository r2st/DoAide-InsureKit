import { COMMISSION_RATES } from "../data/licPlans";

export function calculateCommission(plan, annualPremium, term) {
  const planType = plan.type;
  const fyRate = COMMISSION_RATES.firstYear[planType] || 0;
  const renewalRate = COMMISSION_RATES.renewal[planType] || 0;

  const firstYearComm = Math.round(annualPremium * fyRate);
  const renewalComm = Math.round(annualPremium * renewalRate);
  const renewalYears = Math.max(0, term - 1);
  const totalRenewalComm = renewalComm * renewalYears;
  const totalCommission = firstYearComm + totalRenewalComm;

  return {
    firstYearRate: fyRate,
    renewalRate,
    firstYearComm,
    renewalComm,
    renewalYears,
    totalRenewalComm,
    totalCommission,
  };
}

export function calculateCommissionByYear(plan, annualPremium, term) {
  const planType = plan.type;
  const fyRate = COMMISSION_RATES.firstYear[planType] || 0;
  const renewalRate = COMMISSION_RATES.renewal[planType] || 0;

  const years = [];
  for (let y = 1; y <= term; y++) {
    const rate = y === 1 ? fyRate : renewalRate;
    years.push({
      year: y,
      premium: annualPremium,
      rate,
      commission: Math.round(annualPremium * rate),
    });
  }
  return years;
}
