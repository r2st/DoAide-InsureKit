import { calculateSurrenderValue } from "./calcSurrender";

export function calculateLoanAgainstPolicy(
  annualPremium,
  sumAssured,
  policyTerm,
  yearsPaid,
  srbRate = 0,
  loanInterestRate = 0.09,
) {
  if (yearsPaid < 3) {
    return {
      eligible: false,
      reason: "Loan against policy is available only after 3 full years of premium payment",
    };
  }

  const sv = calculateSurrenderValue(annualPremium, sumAssured, policyTerm, yearsPaid, srbRate);
  if (!sv.eligible) {
    return { eligible: false, reason: sv.reason };
  }

  const maxLoanPercent = 0.90;
  const maxLoanAmount = Math.round(sv.surrenderValue * maxLoanPercent);

  const bankPersonalLoanRate = 0.12;
  const goldLoanRate = 0.085;

  const loanAmounts = [maxLoanAmount, Math.round(maxLoanAmount * 0.75), Math.round(maxLoanAmount * 0.5)];

  const interestComparison = loanAmounts.map((amount) => {
    const policyInterest = Math.round(amount * loanInterestRate);
    const bankInterest = Math.round(amount * bankPersonalLoanRate);
    const goldInterest = Math.round(amount * goldLoanRate);
    return {
      loanAmount: amount,
      policyInterest,
      bankInterest,
      goldInterest,
      savingsVsBank: bankInterest - policyInterest,
    };
  });

  return {
    eligible: true,
    surrenderValue: sv.surrenderValue,
    maxLoanPercent,
    maxLoanAmount,
    loanInterestRate,
    annualInterest: Math.round(maxLoanAmount * loanInterestRate),
    interestComparison,
    bankPersonalLoanRate,
    goldLoanRate,
    note: "Loan does not affect policy benefits. Policy continues with all bonuses and death benefit intact.",
  };
}
