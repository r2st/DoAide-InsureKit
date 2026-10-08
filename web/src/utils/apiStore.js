const API_BASE = "";

async function apiFetch(path, opts = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...opts,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...opts.headers },
  });
  if (res.status === 204) return null;
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}

export async function migrateLocalData() {
  const clients = JSON.parse(localStorage.getItem("insurekit_clients") || "[]");
  const policies = JSON.parse(localStorage.getItem("insurekit_policies") || "[]");

  if (clients.length === 0 && policies.length === 0) return { clients_added: 0, policies_added: 0 };

  const payload = {
    clients: clients.map((c) => ({
      local_id: c.id,
      name: c.name,
      phone: c.phone || null,
      email: c.email || null,
      birthday: c.birthday || null,
      anniversary: c.anniversary || null,
      notes: c.notes || null,
    })),
    policies: policies.map((p) => ({
      local_id: p.id,
      policy_number: p.policyNumber || p.policy_number || "",
      holder_name: p.holderName || p.holder_name || "",
      plan_name: p.planName || p.plan_name || "",
      sum_assured: p.sumAssured || p.sum_assured || 0,
      premium: p.premium || 0,
      mode: p.mode || "yearly",
      start_date: p.startDate || p.start_date || null,
      term: p.term || null,
      next_due_date: p.nextDueDate || p.next_due_date || null,
      status: p.status || "active",
      notes: p.notes || null,
    })),
  };

  return apiFetch("/api/migrate", { method: "POST", body: JSON.stringify(payload) });
}

export async function fetchClients() {
  return apiFetch("/api/clients");
}

export async function createClient(data) {
  return apiFetch("/api/clients", { method: "POST", body: JSON.stringify(data) });
}

export async function updateClientApi(id, data) {
  return apiFetch(`/api/clients/${id}`, { method: "PUT", body: JSON.stringify(data) });
}

export async function deleteClientApi(id) {
  return apiFetch(`/api/clients/${id}`, { method: "DELETE" });
}

export async function fetchPolicies() {
  return apiFetch("/api/policies");
}

export async function createPolicy(data) {
  return apiFetch("/api/policies", { method: "POST", body: JSON.stringify(data) });
}

export async function updatePolicyApi(id, data) {
  return apiFetch(`/api/policies/${id}`, { method: "PUT", body: JSON.stringify(data) });
}

export async function deletePolicyApi(id) {
  return apiFetch(`/api/policies/${id}`, { method: "DELETE" });
}

export async function importPortfolioCsv(file, columnMap) {
  const form = new FormData();
  form.append("file", file);
  form.append("column_map", JSON.stringify(columnMap));
  const res = await fetch("/api/portfolio/import", {
    method: "POST",
    credentials: "include",
    body: form,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || `API ${res.status}`);
  }
  return res.json();
}

export async function fetchPortfolio() {
  return apiFetch("/api/portfolio");
}

export async function fetchPortfolioAnalytics() {
  return apiFetch("/api/portfolio/analytics");
}
