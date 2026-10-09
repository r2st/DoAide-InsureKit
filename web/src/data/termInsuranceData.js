export const TERM_PLANS = [
  {
    id: "lic-jeevan-amar",
    insurer: "LIC",
    planName: "Jeevan Amar (855)",
    claimSettlementRatio: 98.74,
    features: [
      "Level & increasing cover options",
      "Premium waiver on CI rider",
      "Return of premium variant available",
      "Whole life option up to age 80",
    ],
    riders: ["Accidental Death Benefit", "Critical Illness", "Premium Waiver"],
    minEntry: 18,
    maxEntry: 65,
    minTerm: 10,
    maxTerm: 40,
    minCover: 2500000,
  },
  {
    id: "hdfc-click2protect",
    insurer: "HDFC Life",
    planName: "Click 2 Protect Life",
    claimSettlementRatio: 98.52,
    features: [
      "3D Life Cover — death, disability, disease",
      "Income benefit option",
      "Whole life cover till age 99",
      "Joint life cover available",
    ],
    riders: ["Critical Illness", "Waiver of Premium", "Accidental Death"],
    minEntry: 18,
    maxEntry: 65,
    minTerm: 10,
    maxTerm: 40,
    minCover: 2500000,
  },
  {
    id: "icici-iprotect",
    insurer: "ICICI Prudential",
    planName: "iProtect Smart",
    claimSettlementRatio: 98.07,
    features: [
      "4 plan options — Life, Plus, All-in-One, Return of Premium",
      "Terminal illness benefit",
      "Increasing cover for inflation",
      "Special premium rates for non-smokers",
    ],
    riders: ["Accidental Death", "Disability", "Critical Illness"],
    minEntry: 18,
    maxEntry: 65,
    minTerm: 10,
    maxTerm: 40,
    minCover: 5000000,
  },
  {
    id: "max-life-smart-secure",
    insurer: "Max Life",
    planName: "Smart Secure Plus",
    claimSettlementRatio: 99.51,
    features: [
      "Highest claim settlement ratio",
      "Comprehensive critical illness cover",
      "Waiver of premium on CI",
      "Cover up to age 85",
    ],
    riders: ["Critical Illness", "Waiver of Premium", "Accidental Death"],
    minEntry: 18,
    maxEntry: 60,
    minTerm: 10,
    maxTerm: 40,
    minCover: 2500000,
  },
  {
    id: "tata-aia-sampoorna",
    insurer: "Tata AIA",
    planName: "Sampoorna Raksha Supreme",
    claimSettlementRatio: 99.06,
    features: [
      "Income replacement benefit",
      "Lump sum + monthly income option",
      "Return of premium variant",
      "Hospitalization benefit",
    ],
    riders: ["Accidental Death", "Critical Illness", "Waiver of Premium"],
    minEntry: 18,
    maxEntry: 65,
    minTerm: 10,
    maxTerm: 40,
    minCover: 2500000,
  },
];

const BASE_RATES = {
  "lic-jeevan-amar":    { 25: 520, 30: 680, 35: 920, 40: 1340, 45: 2050, 50: 3280, 55: 5400 },
  "hdfc-click2protect":  { 25: 440, 30: 580, 35: 790, 40: 1150, 45: 1780, 50: 2900, 55: 4800 },
  "icici-iprotect":      { 25: 460, 30: 610, 35: 830, 40: 1200, 45: 1850, 50: 3000, 55: 4950 },
  "max-life-smart-secure": { 25: 480, 30: 630, 35: 860, 40: 1250, 45: 1920, 50: 3100, 55: 5100 },
  "tata-aia-sampoorna":   { 25: 450, 30: 600, 35: 810, 40: 1180, 45: 1820, 50: 2950, 55: 4880 },
};

export function estimateTermPremium({ planId, age, gender, isSmoker, coverAmount, term }) {
  const rates = BASE_RATES[planId];
  if (!rates) return null;

  const ages = Object.keys(rates).map(Number).sort((a, b) => a - b);
  let baseRate;
  if (age <= ages[0]) {
    baseRate = rates[ages[0]];
  } else if (age >= ages[ages.length - 1]) {
    baseRate = rates[ages[ages.length - 1]];
  } else {
    let lower = ages[0], upper = ages[ages.length - 1];
    for (const a of ages) {
      if (a <= age) lower = a;
      if (a >= age && a < upper) upper = a;
    }
    if (lower === upper) {
      baseRate = rates[lower];
    } else {
      const frac = (age - lower) / (upper - lower);
      baseRate = rates[lower] + frac * (rates[upper] - rates[lower]);
    }
  }

  let premium = (baseRate * coverAmount) / 10000000;

  if (gender === "female") premium *= 0.85;
  if (isSmoker) premium *= 1.35;

  if (term <= 15) premium *= 0.9;
  else if (term <= 20) premium *= 0.95;
  else if (term >= 35) premium *= 1.12;
  else if (term >= 30) premium *= 1.08;

  return Math.round(premium);
}
