import { getCommissionRates } from "../data/licPlans";

export function calculateCommission(plan, annualPremium, term, ppt = null) {
  const rates = getCommissionRates(plan, ppt || term);

  const firstYearComm = Math.round(annualPremium * rates.firstYear);
  const renewalComm = Math.round(annualPremium * rates.renewal);
  const renewalYears = Math.max(0, term - 1);
  const totalRenewalComm = renewalComm * renewalYears;
  const totalCommission = firstYearComm + totalRenewalComm;

  return {
    firstYearRate: rates.firstYear,
    renewalRate: rates.renewal,
    firstYearComm,
    renewalComm,
    renewalYears,
    totalRenewalComm,
    totalCommission,
    ppt: ppt || term,
  };
}

export function calculateCommissionByYear(plan, annualPremium, term, ppt = null) {
  const rates = getCommissionRates(plan, ppt || term);

  const years = [];
  for (let y = 1; y <= term; y++) {
    const rate = y === 1 ? rates.firstYear : rates.renewal;
    years.push({
      year: y,
      premium: annualPremium,
      rate,
      commission: Math.round(annualPremium * rate),
    });
  }
  return years;
}
