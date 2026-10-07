export function calculateFD({ principal, ratePercent, years, compounding = "quarterly" }) {
  const rate = ratePercent / 100;
  const n = compounding === "monthly" ? 12 : compounding === "quarterly" ? 4 : compounding === "half-yearly" ? 2 : 1;

  const maturity = principal * Math.pow(1 + rate / n, n * years);
  const interest = maturity - principal;
  const effectiveRate = (Math.pow(maturity / principal, 1 / years) - 1) * 100;

  const taxSlab25 = interest * 0.25;
  const taxSlab30 = interest * 0.30;
  const postTax25 = maturity - taxSlab25;
  const postTax30 = maturity - taxSlab30;

  return {
    principal,
    maturity: Math.round(maturity),
    interest: Math.round(interest),
    effectiveRate: +effectiveRate.toFixed(2),
    postTax25: Math.round(postTax25),
    postTax30: Math.round(postTax30),
    years,
  };
}

export function calculateRD({ monthly, ratePercent, years }) {
  const rate = ratePercent / 100;
  const n = 4;
  const totalMonths = years * 12;
  const ratePerQuarter = rate / n;

  let maturity = 0;
  for (let m = 0; m < totalMonths; m++) {
    const remainingQuarters = ((totalMonths - m) / 3);
    maturity += monthly * Math.pow(1 + ratePerQuarter, remainingQuarters);
  }

  const invested = monthly * totalMonths;
  const interest = maturity - invested;

  return {
    monthly,
    invested: Math.round(invested),
    maturity: Math.round(maturity),
    interest: Math.round(interest),
    years,
  };
}

export function compareWithInsurance({ fdResult, insuranceSA, insurancePremium, insuranceTerm, bonusRate = 45 }) {
  const annualBonus = (bonusRate / 1000) * insuranceSA;
  const totalBonus = annualBonus * insuranceTerm;
  const insuranceMaturity = insuranceSA + totalBonus;
  const totalPremiumPaid = insurancePremium * insuranceTerm;
  const insuranceReturns = insuranceMaturity - totalPremiumPaid;
  const insuranceIRR = (Math.pow(insuranceMaturity / totalPremiumPaid, 1 / insuranceTerm) - 1) * 100;

  const lifecover = insuranceSA;

  return {
    fdMaturity: fdResult.maturity,
    fdInterest: fdResult.interest,
    fdPostTax: fdResult.postTax30,
    insuranceMaturity: Math.round(insuranceMaturity),
    insuranceReturns: Math.round(insuranceReturns),
    insuranceIRR: +insuranceIRR.toFixed(2),
    totalPremiumPaid: Math.round(totalPremiumPaid),
    lifeCover: lifecover,
    taxFreeInsurance: true,
    taxableFD: true,
  };
}
