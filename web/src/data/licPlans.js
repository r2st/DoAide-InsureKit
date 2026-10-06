export const PLAN_TYPES = {
  ENDOWMENT: "endowment",
  MONEY_BACK: "money_back",
  WHOLE_LIFE: "whole_life",
  TERM: "term",
  CHILD: "child",
  PENSION: "pension",
  GOVT: "govt",
};

export const MODE_FACTORS = {
  yearly: 1.0,
  halfYearly: 0.5131,
  quarterly: 0.2615,
  monthly: 0.0875,
};

export const MODE_LABELS = {
  yearly: "Yearly",
  halfYearly: "Half-Yearly",
  quarterly: "Quarterly",
  monthly: "Monthly (SSS/ECS)",
};

export const MODE_REBATES = {
  yearly: 0.02,
  halfYearly: 0.01,
  quarterly: 0,
  monthly: 0,
};

export const GST_RATES = {
  firstYear: 0.045,
  renewal: 0.0225,
};

export const SA_REBATES = [
  { minSA: 1000000, rate: 4.0 },
  { minSA: 500000, rate: 2.5 },
];

export const COMMISSION_RATES_BY_PPT = [
  { minPPT: 15, firstYear: 0.25, renewal: 0.075 },
  { minPPT: 12, firstYear: 0.20, renewal: 0.075 },
  { minPPT: 8, firstYear: 0.15, renewal: 0.075 },
  { minPPT: 5, firstYear: 0.10, renewal: 0.05 },
  { minPPT: 2, firstYear: 0.05, renewal: 0.03 },
];

export const COMMISSION_OVERRIDES = {
  term: { firstYear: 0.28, renewal: 0.075 },
  pension: { firstYear: 0.02, renewal: 0.02 },
  govt: { firstYear: 0, renewal: 0 },
};

export function getCommissionRates(plan, ppt) {
  const override = COMMISSION_OVERRIDES[plan.type];
  if (override) return override;

  const effectivePPT = ppt || plan.maxTerm || 20;
  for (const bracket of COMMISSION_RATES_BY_PPT) {
    if (effectivePPT >= bracket.minPPT) {
      return { firstYear: bracket.firstYear, renewal: bracket.renewal };
    }
  }
  return { firstYear: 0.05, renewal: 0.03 };
}

export const LIC_PLANS = [
  {
    id: "jeevan_anand_715",
    name: "New Jeevan Anand",
    tableNo: 715,
    type: PLAN_TYPES.ENDOWMENT,
    minAge: 18,
    maxAge: 50,
    minTerm: 15,
    maxTerm: 35,
    minSA: 200000,
    maxSA: null,
    ppt: "full",
    srbRate: 45,
    fabByTerm: { 15: 0, 20: 25, 25: 180, 30: 350, 35: 500 },
    deathBenefit: "Higher of 125% BSA or 7× annual premium",
    maturityNote: "SA + SRB + FAB, then free life cover continues till age 100",
    description: "Endowment with whole life cover — maturity + continued life cover till 100",
    features: [
      "Maturity = SA + SRB + FAB",
      "Life cover continues free after maturity",
      "Death: higher of 125% SA or 7× AP",
      "2% yearly / 1% half-yearly mode rebate",
    ],
    premiumRates: {
      18: { 15: 64.45, 20: 46.10, 25: 35.60, 30: 28.75, 35: 24.15 },
      20: { 15: 64.75, 20: 46.35, 25: 35.85, 30: 29.00, 35: 24.35 },
      25: { 15: 65.70, 20: 47.15, 25: 36.60, 30: 29.70, 35: 25.05 },
      30: { 15: 67.15, 20: 48.40, 21: 47.00, 25: 37.75, 30: 30.80, 35: 26.10 },
      35: { 15: 69.30, 20: 50.20, 25: 39.40, 30: 32.40, 35: 27.60 },
      40: { 15: 72.40, 20: 52.80, 25: 41.75, 30: 34.65, 35: 29.75 },
      45: { 15: 76.80, 20: 56.50, 25: 45.00, 30: 37.75 },
      50: { 15: 82.80, 20: 61.60, 25: 49.50 },
    },
  },
  {
    id: "new_endowment_714",
    name: "New Endowment Plan",
    tableNo: 714,
    type: PLAN_TYPES.ENDOWMENT,
    minAge: 8,
    maxAge: 55,
    minTerm: 12,
    maxTerm: 35,
    minSA: 100000,
    maxSA: null,
    ppt: "full",
    srbByTerm: { 12: 42, 15: 42, 16: 42, 20: 42, 21: 48, 25: 48, 30: 48, 35: 48 },
    fabByTerm: { 12: 0, 15: 0, 16: 25, 20: 70, 25: 450, 30: 600, 35: 750 },
    saSlabBonus: { 500000: 1 },
    description: "Classic endowment — savings + insurance combined",
    features: [
      "Maturity = SA + SRB + FAB",
      "SRB: ₹42 (≤20yr) / ₹48 (21yr+) per 1000 SA",
      "Loan after 3 years",
      "Tax benefits under 80C",
    ],
    premiumRates: {
      18: { 12: 80.30, 15: 63.00, 20: 45.10, 25: 34.80, 30: 28.10, 35: 23.60 },
      20: { 12: 80.50, 15: 63.20, 20: 45.30, 25: 35.00, 30: 28.30, 35: 23.80 },
      25: { 12: 81.20, 15: 63.80, 20: 45.90, 25: 35.60, 30: 28.90, 35: 24.30 },
      30: { 12: 82.30, 15: 64.90, 20: 47.00, 25: 36.60, 30: 29.90, 35: 25.30 },
      35: { 12: 84.00, 15: 66.50, 20: 48.60, 25: 38.10, 30: 31.30 },
      40: { 12: 86.50, 15: 68.80, 20: 50.90, 25: 40.20, 30: 33.30 },
      45: { 12: 90.00, 15: 72.00, 20: 54.00, 25: 43.10 },
      50: { 12: 95.00, 15: 76.50, 20: 58.20 },
      55: { 12: 101.50, 15: 82.50 },
    },
  },
  {
    id: "jeevan_labh_736",
    name: "Jeevan Labh",
    tableNo: 736,
    type: PLAN_TYPES.ENDOWMENT,
    minAge: 8,
    maxAge: 59,
    minTerm: 16,
    maxTerm: 25,
    minSA: 200000,
    maxSA: null,
    ppt: "limited",
    pptOptions: { 16: 10, 21: 15, 25: 16 },
    srbByTerm: { 16: 35, 21: 37, 25: 39 },
    srbSlabBonus: { 500000: 0, 1000000: 2 },
    fabByTerm: { 16: 20, 21: 80, 25: 250 },
    description: "Limited premium endowment — pay for fewer years, get maturity later",
    features: [
      "Limited premium paying term (10/15/16 yr)",
      "SRB: ₹35-39/1000 SA depending on term",
      "+₹2/1000 for SA ≥ ₹10L",
      "Death benefit: higher of 10× AP or SA + bonus",
    ],
    premiumRates: {
      8: { 16: 46.50, 21: 34.55, 25: 30.40 },
      10: { 16: 47.00, 21: 35.00, 25: 30.80 },
      15: { 16: 48.30, 21: 35.95, 25: 31.75 },
      20: { 16: 50.00, 21: 37.20, 25: 32.90 },
      25: { 16: 52.20, 21: 38.85, 25: 34.45 },
      30: { 16: 55.00, 21: 41.05, 25: 36.45 },
      35: { 16: 58.60, 21: 43.85, 25: 39.05 },
      40: { 16: 63.20, 21: 47.50, 25: 42.40 },
      45: { 16: 69.10, 21: 52.10 },
      50: { 16: 76.80 },
    },
  },
  {
    id: "jeevan_umang_745",
    name: "Jeevan Umang",
    tableNo: 745,
    type: PLAN_TYPES.WHOLE_LIFE,
    minAge: 0,
    maxAge: 55,
    minTerm: 100,
    maxTerm: 100,
    minSA: 200000,
    maxSA: null,
    ppt: "limited",
    pptOptions: { 100: [15, 20, 25, 30] },
    srbRate: 50,
    fabByTerm: { 15: 30, 20: 100, 25: 300, 30: 500 },
    survivalBenefitPercent: 8,
    description: "Whole life plan with 8% SA survival benefits every year after PPT",
    features: [
      "8% SA paid annually after PPT ends",
      "Whole life cover up to age 100",
      "Maturity at 100 = SA + SRB + FAB",
    ],
    premiumRates: {
      10: { 15: 63.50, 20: 45.80, 25: 36.50, 30: 30.00 },
      15: { 15: 64.00, 20: 46.20, 25: 36.80, 30: 30.30 },
      20: { 15: 65.00, 20: 47.00, 25: 37.40, 30: 30.80 },
      25: { 15: 66.50, 20: 48.00, 25: 38.30, 30: 31.50 },
      30: { 15: 68.60, 20: 49.50, 25: 39.50, 30: 32.50 },
      35: { 15: 71.30, 20: 51.50, 25: 41.10, 30: 33.80 },
      40: { 15: 74.90, 20: 54.00, 25: 43.10, 30: 35.50 },
      45: { 15: 79.50, 20: 57.30, 25: 45.60 },
      50: { 15: 85.50, 20: 61.50 },
      55: { 15: 93.00 },
    },
  },
  {
    id: "money_back_20_720",
    name: "New Money Back (20 yr)",
    tableNo: 720,
    type: PLAN_TYPES.MONEY_BACK,
    minAge: 13,
    maxAge: 50,
    minTerm: 20,
    maxTerm: 20,
    minSA: 100000,
    maxSA: null,
    ppt: "full",
    srbRate: 44,
    fabByTerm: { 20: 60 },
    survivalBenefits: [
      { year: 5, percent: 20 },
      { year: 10, percent: 20 },
      { year: 15, percent: 20 },
    ],
    description: "20-year money back — 20% SA returned every 5 years",
    features: [
      "20% SA at 5, 10, 15 years",
      "40% SA + SRB + FAB at maturity",
      "Full SA on death anytime",
    ],
    premiumRates: {
      18: { 20: 54.50 },
      20: { 20: 54.80 },
      25: { 20: 55.60 },
      30: { 20: 57.00 },
      35: { 20: 59.00 },
      40: { 20: 61.80 },
      45: { 20: 65.50 },
      50: { 20: 70.50 },
    },
  },
  {
    id: "money_back_25_721",
    name: "New Money Back (25 yr)",
    tableNo: 721,
    type: PLAN_TYPES.MONEY_BACK,
    minAge: 13,
    maxAge: 45,
    minTerm: 25,
    maxTerm: 25,
    minSA: 100000,
    maxSA: null,
    ppt: "full",
    srbRate: 42,
    fabByTerm: { 25: 200 },
    survivalBenefits: [
      { year: 5, percent: 15 },
      { year: 10, percent: 15 },
      { year: 15, percent: 15 },
      { year: 20, percent: 15 },
    ],
    description: "25-year money back — 15% SA returned every 5 years",
    features: [
      "15% SA at 5, 10, 15, 20 years",
      "40% SA + SRB + FAB at maturity",
      "Full SA on death anytime",
    ],
    premiumRates: {
      18: { 25: 43.50 },
      20: { 25: 43.80 },
      25: { 25: 44.60 },
      30: { 25: 45.90 },
      35: { 25: 47.80 },
      40: { 25: 50.50 },
      45: { 25: 54.20 },
    },
  },
  {
    id: "jeevan_lakshya_733",
    name: "Jeevan Lakshya",
    tableNo: 733,
    type: PLAN_TYPES.ENDOWMENT,
    minAge: 18,
    maxAge: 51,
    minTerm: 13,
    maxTerm: 25,
    minSA: 100000,
    maxSA: null,
    ppt: "limited",
    pptOptions: { 13: 10, 16: 13, 21: 18, 25: 22 },
    srbRate: 49,
    fabByTerm: { 13: 0, 15: 15, 16: 15, 20: 60, 21: 60, 25: 200 },
    maturityMultiplier: 1.10,
    description: "Family protection plan — annual income to nominee on death, plus maturity",
    features: [
      "On death: 10% SA annual income to family till maturity",
      "Maturity: 110% SA + SRB + FAB",
      "Limited premium paying term",
    ],
    premiumRates: {
      20: { 13: 67.00, 16: 53.00, 21: 39.50, 25: 33.50 },
      25: { 13: 67.80, 16: 53.70, 21: 40.10, 25: 34.00 },
      30: { 13: 69.20, 16: 55.00, 21: 41.20, 25: 35.00 },
      35: { 13: 71.50, 16: 57.00, 21: 42.80, 25: 36.50 },
      40: { 13: 74.80, 16: 59.80, 21: 45.10, 25: 38.50 },
      45: { 13: 79.50, 16: 63.80, 21: 48.30 },
      50: { 13: 86.00, 16: 69.50 },
    },
  },
  {
    id: "single_prem_endow_717",
    name: "Single Premium Endowment",
    tableNo: 717,
    type: PLAN_TYPES.ENDOWMENT,
    minAge: 8,
    maxAge: 55,
    minTerm: 10,
    maxTerm: 25,
    minSA: 100000,
    maxSA: null,
    ppt: "single",
    srbByTerm: { 10: 38, 15: 42, 20: 48, 25: 48 },
    fabByTerm: { 10: 0, 15: 20, 20: 70, 25: 450 },
    description: "Pay once, get maturity — single premium endowment",
    features: [
      "One-time premium payment",
      "SRB: ₹38-48/1000 depending on term",
      "Maturity = SA + SRB + FAB",
    ],
    premiumRates: {
      18: { 10: 650, 15: 500, 20: 400, 25: 340 },
      25: { 10: 660, 15: 510, 20: 410, 25: 350 },
      30: { 10: 675, 15: 525, 20: 425, 25: 365 },
      35: { 10: 700, 15: 550, 20: 450, 25: 390 },
      40: { 10: 740, 15: 585, 20: 485 },
      45: { 10: 790, 15: 635 },
      50: { 10: 860 },
    },
  },
  {
    id: "tech_term_854",
    name: "Tech Term",
    tableNo: 854,
    type: PLAN_TYPES.TERM,
    minAge: 18,
    maxAge: 65,
    minTerm: 10,
    maxTerm: 40,
    minSA: 5000000,
    maxSA: 50000000,
    ppt: "full",
    srbRate: 0,
    description: "Online pure term plan — highest cover at lowest cost",
    features: [
      "Pure protection, no maturity benefit",
      "Available online only",
      "Level or increasing cover option",
    ],
    premiumRates: {
      25: { 10: 3.00, 15: 3.10, 20: 3.25, 25: 3.50, 30: 3.90, 35: 4.50, 40: 5.30 },
      30: { 10: 3.20, 15: 3.40, 20: 3.65, 25: 4.00, 30: 4.60, 35: 5.50, 40: 6.80 },
      35: { 10: 4.10, 15: 4.50, 20: 5.00, 25: 5.70, 30: 6.70, 35: 8.20 },
      40: { 10: 5.80, 15: 6.50, 20: 7.50, 25: 8.80, 30: 10.50 },
      45: { 10: 8.50, 15: 9.80, 20: 11.50, 25: 13.80 },
      50: { 10: 13.00, 15: 15.50, 20: 18.50 },
      55: { 10: 20.00, 15: 24.00 },
      60: { 10: 30.50 },
      65: { 10: 45.00 },
    },
  },
  {
    id: "jeevan_kiran_875",
    name: "Jeevan Kiran",
    tableNo: 875,
    type: PLAN_TYPES.TERM,
    minAge: 18,
    maxAge: 55,
    minTerm: 10,
    maxTerm: 30,
    minSA: 500000,
    maxSA: 25000000,
    ppt: "full",
    srbRate: 0,
    isROP: true,
    description: "Term plan with return of premium — get all premiums back on survival",
    features: [
      "Pure protection during term",
      "All premiums returned on survival (excl. GST)",
      "No bonus or maturity benefit beyond ROP",
    ],
    premiumRates: {
      20: { 10: 24.50, 15: 17.80, 20: 14.50, 25: 12.50, 30: 11.20 },
      25: { 10: 24.80, 15: 18.00, 20: 14.70, 25: 12.70, 30: 11.40 },
      30: { 10: 25.50, 15: 18.60, 20: 15.30, 25: 13.30, 30: 12.00 },
      35: { 10: 27.00, 15: 19.80, 20: 16.40, 25: 14.40, 30: 13.10 },
      40: { 10: 29.50, 15: 21.80, 20: 18.20, 25: 16.10 },
      45: { 10: 33.50, 15: 25.00, 20: 21.10 },
      50: { 10: 39.50, 15: 30.00 },
      55: { 10: 48.00 },
    },
  },
  {
    id: "dhan_sanchay_871",
    name: "Dhan Sanchay",
    tableNo: 871,
    type: PLAN_TYPES.WHOLE_LIFE,
    minAge: 3,
    maxAge: 60,
    minTerm: 15,
    maxTerm: 25,
    minSA: 100000,
    maxSA: null,
    ppt: "limited",
    pptOptions: { 15: 7, 18: 10, 21: 12, 25: 15 },
    srbRate: 0,
    isNonPar: true,
    guaranteedAdditions: 50,
    description: "Non-participating savings plan with guaranteed additions",
    features: [
      "Guaranteed additions ₹50/1000 SA per year",
      "No bonus/FAB — returns are guaranteed",
      "Limited premium paying",
    ],
    premiumRates: {
      10: { 15: 82.00, 18: 63.00, 21: 52.00, 25: 42.00 },
      15: { 15: 82.50, 18: 63.40, 21: 52.30, 25: 42.30 },
      20: { 15: 83.20, 18: 64.00, 21: 52.80, 25: 42.70 },
      25: { 15: 84.00, 18: 64.80, 21: 53.50, 25: 43.30 },
      30: { 15: 85.20, 18: 65.80, 21: 54.40, 25: 44.10 },
      35: { 15: 86.80, 18: 67.20, 21: 55.60, 25: 45.20 },
      40: { 15: 89.00, 18: 69.00, 21: 57.20, 25: 46.60 },
      45: { 15: 92.00, 18: 71.50, 21: 59.50 },
      50: { 15: 96.00, 18: 74.80 },
      55: { 15: 101.00 },
      60: { 15: 107.50 },
    },
  },
  {
    id: "amritbaal_774",
    name: "Amritbaal",
    tableNo: 774,
    type: PLAN_TYPES.CHILD,
    minAge: 0,
    maxAge: 13,
    minTerm: 25,
    maxTerm: 25,
    minSA: 100000,
    maxSA: null,
    ppt: "limited",
    pptOptions: { 25: [10, 18] },
    srbRate: 58,
    fabByTerm: { 25: 250 },
    description: "Child plan — maturity at age 25 for higher education/marriage",
    features: [
      "Premium waiver on parent's death",
      "Maturity at child's age 25",
      "SA + SRB + FAB at maturity",
    ],
    premiumRates: {
      0: { 25: 39.00 },
      1: { 25: 39.50 },
      2: { 25: 40.00 },
      3: { 25: 40.80 },
      5: { 25: 42.00 },
      7: { 25: 44.00 },
      10: { 25: 47.50 },
      13: { 25: 52.00 },
    },
  },
  {
    id: "saral_pension_862",
    name: "Saral Pension",
    tableNo: 862,
    type: PLAN_TYPES.PENSION,
    minAge: 40,
    maxAge: 80,
    minTerm: 0,
    maxTerm: 0,
    minSA: 0,
    maxSA: null,
    ppt: "single",
    srbRate: 0,
    isAnnuity: true,
    annuityRate: 0.0575,
    description: "Immediate annuity — single premium for lifelong pension",
    features: [
      "Single premium, lifelong pension",
      "Multiple annuity options",
      "Return of purchase price on death",
    ],
    premiumRates: {},
  },
  {
    id: "pmjjby",
    name: "PMJJBY",
    tableNo: 0,
    type: PLAN_TYPES.GOVT,
    minAge: 18,
    maxAge: 50,
    minTerm: 1,
    maxTerm: 1,
    minSA: 200000,
    maxSA: 200000,
    ppt: "full",
    srbRate: 0,
    fixedPremium: 436,
    description: "Pradhan Mantri Jeevan Jyoti Bima Yojana — ₹436/yr for ₹2L life cover",
    features: ["₹436 annual premium", "₹2 lakh death cover", "Renewable yearly till age 55"],
    premiumRates: {},
  },
  {
    id: "pmsby",
    name: "PMSBY",
    tableNo: 0,
    type: PLAN_TYPES.GOVT,
    minAge: 18,
    maxAge: 70,
    minTerm: 1,
    maxTerm: 1,
    minSA: 200000,
    maxSA: 200000,
    ppt: "full",
    srbRate: 0,
    fixedPremium: 20,
    description: "Pradhan Mantri Suraksha Bima Yojana — ₹20/yr for ₹2L accident cover",
    features: [
      "₹20 annual premium",
      "₹2L accidental death, ₹1L partial disability",
      "Auto-debit from bank account",
    ],
    premiumRates: {},
  },
];

export function getPlan(id) {
  return LIC_PLANS.find((p) => p.id === id);
}

export function getPlansForComparison() {
  return LIC_PLANS.filter(
    (p) => p.type !== PLAN_TYPES.GOVT && p.type !== PLAN_TYPES.PENSION,
  );
}

export function getSRBRate(plan, term) {
  if (plan.srbByTerm) {
    const terms = Object.keys(plan.srbByTerm).map(Number).sort((a, b) => a - b);
    let key = terms[0];
    for (const t of terms) {
      if (t <= term) key = t;
      else break;
    }
    return plan.srbByTerm[key];
  }
  return plan.srbRate || 0;
}

export function getFABRate(plan, term) {
  if (!plan.fabByTerm) return 0;
  const terms = Object.keys(plan.fabByTerm).map(Number).sort((a, b) => a - b);
  let key = terms[0];
  for (const t of terms) {
    if (t <= term) key = t;
    else break;
  }
  return plan.fabByTerm[key];
}

export function getSASlabBonus(plan, sumAssured) {
  if (plan.srbSlabBonus) {
    const thresholds = Object.keys(plan.srbSlabBonus).map(Number).sort((a, b) => b - a);
    for (const t of thresholds) {
      if (sumAssured >= t) return plan.srbSlabBonus[t];
    }
  }
  if (plan.saSlabBonus) {
    const thresholds = Object.keys(plan.saSlabBonus).map(Number).sort((a, b) => b - a);
    for (const t of thresholds) {
      if (sumAssured >= t) return plan.saSlabBonus[t];
    }
  }
  return 0;
}
