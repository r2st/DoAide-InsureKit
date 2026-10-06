const GSV_FACTORS_BY_TERM = {
  10: [0, 0, 0, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65],
  12: [0, 0, 0, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65, 0.70, 0.75],
  15: [0, 0, 0, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65, 0.70, 0.75, 0.80, 0.85, 0.90],
  20: [0, 0, 0, 0.30, 0.35, 0.40, 0.45, 0.50, 0.50, 0.55, 0.55, 0.60, 0.60, 0.65, 0.65, 0.70, 0.70, 0.75, 0.80, 0.85, 0.90],
  25: [0, 0, 0, 0.30, 0.35, 0.40, 0.40, 0.45, 0.45, 0.50, 0.50, 0.55, 0.55, 0.60, 0.60, 0.65, 0.65, 0.70, 0.70, 0.75, 0.75, 0.80, 0.80, 0.85, 0.85, 0.90],
  30: [0, 0, 0, 0.30, 0.30, 0.35, 0.35, 0.40, 0.40, 0.45, 0.45, 0.50, 0.50, 0.55, 0.55, 0.60, 0.60, 0.65, 0.65, 0.70, 0.70, 0.70, 0.75, 0.75, 0.80, 0.80, 0.85, 0.85, 0.85, 0.90, 0.90],
  35: [0, 0, 0, 0.30, 0.30, 0.35, 0.35, 0.40, 0.40, 0.40, 0.45, 0.45, 0.50, 0.50, 0.55, 0.55, 0.55, 0.60, 0.60, 0.65, 0.65, 0.65, 0.70, 0.70, 0.75, 0.75, 0.75, 0.80, 0.80, 0.80, 0.85, 0.85, 0.85, 0.90, 0.90, 0.90],
};

function getGSVFactor(policyTerm, yearsPaid) {
  const terms = Object.keys(GSV_FACTORS_BY_TERM).map(Number).sort((a, b) => a - b);
  let termKey = terms[0];
  for (const t of terms) {
    if (t <= policyTerm) termKey = t;
    else break;
  }
  const factors = GSV_FACTORS_BY_TERM[termKey];
  if (!factors || yearsPaid >= factors.length) return factors ? factors[factors.length - 1] : 0;
  return factors[yearsPaid] || 0;
}

const SSV_MULTIPLIERS = {
  3: 0.50, 4: 0.55, 5: 0.60, 6: 0.65, 7: 0.70,
  8: 0.75, 9: 0.80, 10: 0.85, 11: 0.88, 12: 0.90,
  13: 0.92, 14: 0.94, 15: 0.96, 16: 0.97, 17: 0.98,
  18: 0.98, 19: 0.99, 20: 0.99,
};

function getSSVMultiplier(remainingYears) {
  if (remainingYears <= 0) return 1.0;
  if (remainingYears > 20) return 0.50;
  return SSV_MULTIPLIERS[remainingYears] || 0.50;
}

export function calculateSurrenderValue(
  annualPremium,
  sumAssured,
  policyTerm,
  yearsPaid,
  srbRate = 0,
) {
  if (yearsPaid < 3) {
    return {
      eligible: false,
      reason: "Surrender value is available only after 3 full years of premium payment",
      yearsPaid,
      policyTerm,
    };
  }

  const totalPremiumsPaid = annualPremium * yearsPaid;
  const gsvFactor = getGSVFactor(policyTerm, yearsPaid);
  const gsv = Math.round(totalPremiumsPaid * gsvFactor);

  const totalBonus = Math.round((srbRate / 1000) * sumAssured * yearsPaid);
  const remainingYears = policyTerm - yearsPaid;
  const ssvMultiplier = getSSVMultiplier(remainingYears);
  const paidUpSA = Math.round(sumAssured * (yearsPaid / policyTerm));
  const paidUpValue = paidUpSA + totalBonus;
  const ssv = Math.round(paidUpValue * ssvMultiplier);

  const surrenderValue = Math.max(gsv, ssv);
  const recommended = ssv >= gsv ? "SSV" : "GSV";

  return {
    eligible: true,
    totalPremiumsPaid,
    gsv,
    gsvFactor,
    ssv,
    ssvMultiplier,
    paidUpSA,
    totalBonus,
    surrenderValue,
    recommended,
    yearsPaid,
    policyTerm,
    remainingYears,
    lossOnSurrender: totalPremiumsPaid - surrenderValue,
  };
}
