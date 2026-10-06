const STORAGE_KEY = "insurekit_policies";

function loadPolicies() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function savePolicies(policies) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(policies));
}

export function getPolicies() {
  return loadPolicies();
}

export function addPolicy(policy) {
  const policies = loadPolicies();
  const newPolicy = {
    ...policy,
    id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2),
    createdAt: new Date().toISOString(),
  };
  policies.push(newPolicy);
  savePolicies(policies);
  return newPolicy;
}

export function updatePolicy(id, updates) {
  const policies = loadPolicies();
  const idx = policies.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  policies[idx] = { ...policies[idx], ...updates, id };
  savePolicies(policies);
  return policies[idx];
}

export function deletePolicy(id) {
  const policies = loadPolicies();
  const filtered = policies.filter((p) => p.id !== id);
  savePolicies(filtered);
  return filtered;
}

export function getUpcomingRenewals(daysAhead = 30) {
  const policies = loadPolicies();
  const now = new Date();
  const cutoff = new Date(now.getTime() + daysAhead * 24 * 60 * 60 * 1000);

  return policies
    .filter((p) => p.nextDueDate)
    .map((p) => {
      const dueDate = new Date(p.nextDueDate);
      const daysUntil = Math.ceil((dueDate - now) / (24 * 60 * 60 * 1000));
      return { ...p, daysUntil };
    })
    .filter((p) => p.daysUntil <= daysAhead && p.daysUntil >= -7)
    .sort((a, b) => a.daysUntil - b.daysUntil);
}

export function validatePolicy(policy) {
  const errors = [];
  if (!policy.policyNumber?.trim()) errors.push("Policy number is required");
  if (!policy.holderName?.trim()) errors.push("Policy holder name is required");
  if (!policy.planName?.trim()) errors.push("Plan name is required");
  if (!policy.sumAssured || policy.sumAssured <= 0) errors.push("Sum assured must be positive");
  if (!policy.premium || policy.premium <= 0) errors.push("Premium must be positive");
  return errors;
}
