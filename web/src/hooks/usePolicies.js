import { useState, useEffect, useCallback, useMemo } from "react";
import { useAuth } from "../contexts/AuthContext";
import * as local from "../utils/policyStore";
import { fetchPolicies, createPolicy, updatePolicyApi, deletePolicyApi } from "../utils/apiStore";

function apiToCamel(p) {
  return {
    id: p.id,
    localId: p.local_id,
    policyNumber: p.policy_number,
    holderName: p.holder_name,
    planName: p.plan_name,
    sumAssured: p.sum_assured,
    premium: p.premium,
    mode: p.mode || "yearly",
    startDate: p.start_date || "",
    term: p.term || "",
    nextDueDate: p.next_due_date || "",
    status: p.status || "active",
    notes: p.notes || "",
  };
}

function camelToApi(p) {
  return {
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
  };
}

function computeRenewals(policies, daysAhead) {
  const now = new Date();
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

export function usePolicies() {
  const { user, loading: authLoading } = useAuth();
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reload = useCallback(async () => {
    setError(null);
    if (user) {
      try {
        const data = await fetchPolicies();
        setPolicies(data.map(apiToCamel));
      } catch (e) {
        setError(e.message);
        setPolicies(local.getPolicies());
      }
    } else {
      setPolicies(local.getPolicies());
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    if (!authLoading) reload();
  }, [authLoading, reload]);

  const addPolicy = useCallback(async (data) => {
    if (user) {
      const created = await createPolicy(camelToApi(data));
      const mapped = apiToCamel(created);
      setPolicies((prev) => [...prev, mapped]);
      return mapped;
    }
    const created = local.addPolicy(data);
    setPolicies(local.getPolicies());
    return created;
  }, [user]);

  const updatePolicy = useCallback(async (id, data) => {
    if (user) {
      const updated = await updatePolicyApi(id, camelToApi(data));
      const mapped = apiToCamel(updated);
      setPolicies((prev) => prev.map((p) => (p.id === id ? mapped : p)));
      return mapped;
    }
    const updated = local.updatePolicy(id, data);
    setPolicies(local.getPolicies());
    return updated;
  }, [user]);

  const removePolicy = useCallback(async (id) => {
    if (user) {
      await deletePolicyApi(id);
      setPolicies((prev) => prev.filter((p) => p.id !== id));
    } else {
      local.deletePolicy(id);
      setPolicies(local.getPolicies());
    }
  }, [user]);

  const getUpcomingRenewals = useCallback((daysAhead = 30) => {
    return computeRenewals(policies, daysAhead);
  }, [policies]);

  return { policies, loading: loading || authLoading, error, addPolicy, updatePolicy, removePolicy, reload, getUpcomingRenewals, isCloud: !!user };
}
