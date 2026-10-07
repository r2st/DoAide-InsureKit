import { LIC_PLANS, PLAN_TYPES } from "../data/licPlans";
import { calculatePremium } from "./calcPremium";
import { calculateMaturity, calculateIRR } from "./calcMaturity";

const GOALS = {
  savings: { label: "Savings & Returns", types: [PLAN_TYPES.ENDOWMENT] },
  protection: { label: "Family Protection", types: [PLAN_TYPES.TERM] },
  child: { label: "Child's Future", types: [PLAN_TYPES.CHILD] },
  retirement: { label: "Retirement", types: [PLAN_TYPES.PENSION, PLAN_TYPES.WHOLE_LIFE] },
  moneyBack: { label: "Regular Income", types: [PLAN_TYPES.MONEY_BACK] },
  taxSaving: { label: "Tax Saving", types: [PLAN_TYPES.ENDOWMENT, PLAN_TYPES.MONEY_BACK] },
};

export { GOALS };

export function recommendPlans(age, monthlyBudget, goal, preferLimitedPPT = false) {
  const goalConfig = GOALS[goal];
  if (!goalConfig) return [];

  const annualBudget = monthlyBudget * 12;

  const candidates = LIC_PLANS.filter((plan) => {
    if (plan.type === PLAN_TYPES.GOVT) return false;
    if (Object.keys(plan.premiumRates).length === 0 && !plan.fixedPremium) return false;
    if (age < plan.minAge || age > plan.maxAge) return false;
    if (!goalConfig.types.includes(plan.type)) return false;
    if (preferLimitedPPT && plan.ppt !== "limited") return false;
    return true;
  });

  const scored = candidates.map((plan) => {
    const term = pickBestTerm(plan, age);
    if (!term) return null;

    const prem = calculatePremium(plan, age, plan.minSA, term, "yearly");
    if (!prem) return null;

    const maxSA = Math.max(plan.minSA, Math.floor(annualBudget / (prem.annualPremium / plan.minSA)) * 1000);
    const sa = Math.max(plan.minSA, Math.min(maxSA, plan.maxSA || Infinity));

    const actualPrem = calculatePremium(plan, age, sa, term, "yearly");
    if (!actualPrem || actualPrem.annualPremium > annualBudget * 1.1) return null;

    const mat = plan.type !== PLAN_TYPES.TERM && plan.type !== PLAN_TYPES.PENSION
      ? calculateMaturity(plan, sa, term)
      : null;

    const irr = mat && actualPrem
      ? calculateIRR(actualPrem.annualPremium, mat.maturityValue, term)
      : null;

    let score = 0;
    if (irr !== null) score += irr * 100;
    if (plan.ppt === "limited" && preferLimitedPPT) score += 5;
    if (actualPrem.annualPremium <= annualBudget) score += 10;
    if (plan.srbRate >= 50) score += 3;

    return {
      plan,
      term,
      sumAssured: sa,
      premium: actualPrem,
      maturity: mat,
      irr,
      score,
      monthlyPremium: Math.round(actualPrem.annualPremium / 12),
      whyRecommended: buildReason(plan, goal),
    };
  }).filter(Boolean);

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3);
}

function pickBestTerm(plan, age) {
  const ages = Object.keys(plan.premiumRates).map(Number).sort((a, b) => a - b);
  let ageKey = ages[0];
  for (const a of ages) {
    if (a <= age) ageKey = a;
    else break;
  }
  const terms = Object.keys(plan.premiumRates[ageKey] || {}).map(Number).sort((a, b) => a - b);
  if (terms.length === 0) return null;
  if (terms.includes(20)) return 20;
  if (terms.includes(25)) return 25;
  if (terms.includes(15)) return 15;
  return terms[Math.floor(terms.length / 2)];
}

function buildReason(plan, goal) {
  const reasons = {
    savings: "Good returns with life cover — balanced savings and protection",
    protection: "Maximum cover at minimum cost — protect your family",
    child: "Guaranteed maturity for your child's future with premium waiver",
    retirement: "Secure retirement with guaranteed income",
    moneyBack: "Regular payouts every few years — liquidity + insurance",
    taxSaving: "Maximize Section 80C deduction with life cover",
  };
  return reasons[goal] || plan.description;
}
