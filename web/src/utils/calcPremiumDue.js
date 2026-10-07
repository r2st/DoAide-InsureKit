export function calculatePremiumDueDates(startDate, mode, policyTerm) {
  const start = new Date(startDate);
  if (isNaN(start.getTime())) return [];

  const intervalsPerYear = { yearly: 1, halfYearly: 2, quarterly: 4, monthly: 12 };
  const perYear = intervalsPerYear[mode] || 1;
  const monthsPerInterval = 12 / perYear;

  const now = new Date();
  const currentYear = now.getFullYear();

  const dueDates = [];
  const startYear = start.getFullYear();

  for (let year = 0; year < policyTerm; year++) {
    for (let interval = 0; interval < perYear; interval++) {
      if (year === 0 && interval === 0) continue;
      const dueDate = new Date(start);
      dueDate.setMonth(dueDate.getMonth() + (year * 12 + interval * monthsPerInterval));

      if (dueDate.getFullYear() < currentYear) continue;
      if (dueDate.getFullYear() > currentYear + 1) break;

      const daysUntil = Math.ceil((dueDate - now) / (24 * 60 * 60 * 1000));

      dueDates.push({
        date: dueDate.toISOString().slice(0, 10),
        year: year + 1,
        installment: interval + 1,
        daysUntil,
        isPast: daysUntil < 0,
        isUpcoming: daysUntil >= 0 && daysUntil <= 30,
      });
    }
    if (start.getFullYear() + year > currentYear + 1) break;
  }

  return dueDates;
}
