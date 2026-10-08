export function calculateInsuranceNeeds({
  age,
  income,
  dependents,
  childrenCount,
  outstandingLoans = 0,
  existingCover = 0,
  savings = 0,
  retirementAge = 60,
}) {
  const yearsToRetire = Math.max(1, retirementAge - age);
  const incomeReplacement = Math.round(income * yearsToRetire * 0.7);
  const childEducation = childrenCount * 2500000;
  const childMarriage = childrenCount * 1500000;
  const emergencyFund = income * 2;
  const funeralAndSettlement = 500000;
  const totalNeeds =
    incomeReplacement +
    childEducation +
    childMarriage +
    emergencyFund +
    funeralAndSettlement +
    outstandingLoans;
  const netCover = Math.max(0, totalNeeds - existingCover - savings);
  const roundedCover = Math.ceil(netCover / 500000) * 500000;

  return {
    yearsToRetire,
    incomeReplacement,
    childEducation,
    childMarriage,
    emergencyFund,
    funeralAndSettlement,
    totalNeeds,
    netCover,
    recommendedCover: roundedCover,
    multiplier: income > 0 ? +(roundedCover / income).toFixed(1) : 0,
  };
}
