import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import * as local from "../utils/clientStore";
import { fetchClients, createClient, updateClientApi, deleteClientApi } from "../utils/apiStore";

function apiToCamel(c) {
  return {
    id: c.id,
    localId: c.local_id,
    name: c.name,
    phone: c.phone || "",
    email: c.email || "",
    birthday: c.birthday || "",
    anniversary: c.anniversary || "",
    notes: c.notes || "",
  };
}

function camelToApi(c) {
  return {
    name: c.name,
    phone: c.phone || null,
    email: c.email || null,
    birthday: c.birthday || null,
    anniversary: c.anniversary || null,
    notes: c.notes || null,
  };
}

export function useClients() {
  const { user, loading: authLoading } = useAuth();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reload = useCallback(async () => {
    setError(null);
    if (user) {
      try {
        const data = await fetchClients();
        setClients(data.map(apiToCamel));
      } catch (e) {
        setError(e.message);
        setClients(local.getClients());
      }
    } else {
      setClients(local.getClients());
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    if (!authLoading) reload();
  }, [authLoading, reload]);

  const addClient = useCallback(async (data) => {
    if (user) {
      const created = await createClient(camelToApi(data));
      const mapped = apiToCamel(created);
      setClients((prev) => [...prev, mapped]);
      return mapped;
    }
    const created = local.addClient(data);
    setClients(local.getClients());
    return created;
  }, [user]);

  const updateClient = useCallback(async (id, data) => {
    if (user) {
      const updated = await updateClientApi(id, camelToApi(data));
      const mapped = apiToCamel(updated);
      setClients((prev) => prev.map((c) => (c.id === id ? mapped : c)));
      return mapped;
    }
    const updated = local.updateClient(id, data);
    setClients(local.getClients());
    return updated;
  }, [user]);

  const removeClient = useCallback(async (id) => {
    if (user) {
      await deleteClientApi(id);
      setClients((prev) => prev.filter((c) => c.id !== id));
    } else {
      local.deleteClient(id);
      setClients(local.getClients());
    }
  }, [user]);

  return { clients, loading: loading || authLoading, error, addClient, updateClient, removeClient, reload, isCloud: !!user };
}
