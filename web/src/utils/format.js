const INR = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const INR_PRECISE = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

export function formatINR(amount) {
  return INR.format(amount);
}

export function formatINRPrecise(amount) {
  return INR_PRECISE.format(amount);
}

export function formatPercent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

export function formatLakh(amount) {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} L`;
  return formatINR(amount);
}
