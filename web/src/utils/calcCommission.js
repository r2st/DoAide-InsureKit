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

export const BONUS_COMMISSION_SLABS = [
  { minFYC: 2400000, rate: 0.40, label: "TOT (₹24L+ FYC)" },
  { minFYC: 1200000, rate: 0.35, label: "COT (₹12L+ FYC)" },
  { minFYC: 600000, rate: 0.30, label: "MDRT (₹6L+ FYC)" },
  { minFYC: 300000, rate: 0.20, label: "Star Club (₹3L+ FYC)" },
  { minFYC: 0, rate: 0, label: "No Club" },
];

export function getBonusCommissionRate(totalFYC) {
  for (const slab of BONUS_COMMISSION_SLABS) {
    if (totalFYC >= slab.minFYC) return slab;
  }
  return BONUS_COMMISSION_SLABS[BONUS_COMMISSION_SLABS.length - 1];
}

export function calculatePortfolioCommission(policies) {
  let totalFYC = 0;
  let totalRenewal = 0;
  const details = [];

  for (const p of policies) {
    const comm = calculateCommission(p.plan, p.annualPremium, p.term, p.ppt);
    totalFYC += comm.firstYearComm;
    totalRenewal += comm.totalRenewalComm;
    details.push({ ...p, commission: comm });
  }

  const bonusSlab = getBonusCommissionRate(totalFYC);
  const bonusCommission = Math.round(totalFYC * bonusSlab.rate);

  return {
    totalFYC,
    totalRenewal,
    totalCommission: totalFYC + totalRenewal,
    bonusSlab,
    bonusCommission,
    grandTotal: totalFYC + totalRenewal + bonusCommission,
    details,
    policyCount: policies.length,
  };
}
