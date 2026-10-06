import { MODE_FACTORS, GST_RATES } from "../data/licPlans";

const REVIVAL_INTEREST_RATE = 0.0925;
const LATE_FEE_PER_THOUSAND = 0;

export function calculateRevival(annualPremium, mode, lapsedMonths, sumAssured) {
  const modeFactor = MODE_FACTORS[mode] || 1;
  const paymentsPerYear = { yearly: 1, halfYearly: 2, quarterly: 4, monthly: 12 }[mode] || 1;
  const premiumPerInstalment = Math.round(annualPremium * modeFactor);

  const missedInstalments = Math.ceil(lapsedMonths * (paymentsPerYear / 12));
  const totalArrears = premiumPerInstalment * missedInstalments;

  const avgLapsedYears = lapsedMonths / 24;
  const interest = Math.round(totalArrears * REVIVAL_INTEREST_RATE * avgLapsedYears);

  const gstOnArrears = Math.round(totalArrears * GST_RATES.renewal);

  const lateFee = Math.round((sumAssured / 1000) * LATE_FEE_PER_THOUSAND);

  const medicalRequired = lapsedMonths > 24;

  const totalRevivalAmount = totalArrears + interest + gstOnArrears + lateFee;

  return {
    premiumPerInstalment,
    missedInstalments,
    totalArrears,
    interestRate: REVIVAL_INTEREST_RATE,
    interest,
    gstOnArrears,
    lateFee,
    totalRevivalAmount,
    medicalRequired,
    medicalNote: medicalRequired
      ? "Policy lapsed > 2 years — medical examination required for revival"
      : "Policy lapsed ≤ 2 years — revival without medical (subject to LIC discretion)",
    lapsedMonths,
  };
}
