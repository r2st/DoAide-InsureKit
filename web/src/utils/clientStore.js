const STORAGE_KEY = "insurekit_clients";

function loadClients() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveClients(clients) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
}

export function getClients() {
  return loadClients();
}

export function addClient(client) {
  const clients = loadClients();
  const newClient = {
    ...client,
    id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2),
    createdAt: new Date().toISOString(),
  };
  clients.push(newClient);
  saveClients(clients);
  return newClient;
}

export function updateClient(id, updates) {
  const clients = loadClients();
  const idx = clients.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  clients[idx] = { ...clients[idx], ...updates, id };
  saveClients(clients);
  return clients[idx];
}

export function deleteClient(id) {
  const clients = loadClients();
  const filtered = clients.filter((c) => c.id !== id);
  saveClients(filtered);
  return filtered;
}

function getNextOccurrence(monthDay) {
  if (!monthDay) return null;
  const [month, day] = monthDay.split("-").map(Number);
  const now = new Date();
  const thisYear = now.getFullYear();
  let next = new Date(thisYear, month - 1, day);
  if (next < now) {
    next = new Date(thisYear + 1, month - 1, day);
  }
  return next;
}

export function getUpcomingEvents(daysAhead = 30) {
  const clients = loadClients();
  const now = new Date();
  const events = [];

  for (const client of clients) {
    if (client.birthday) {
      const next = getNextOccurrence(client.birthday);
      if (next) {
        const daysUntil = Math.ceil((next - now) / (24 * 60 * 60 * 1000));
        if (daysUntil >= 0 && daysUntil <= daysAhead) {
          events.push({
            clientId: client.id,
            clientName: client.name,
            type: "birthday",
            date: next.toISOString().slice(0, 10),
            daysUntil,
            phone: client.phone,
          });
        }
      }
    }

    if (client.anniversary) {
      const next = getNextOccurrence(client.anniversary);
      if (next) {
        const daysUntil = Math.ceil((next - now) / (24 * 60 * 60 * 1000));
        if (daysUntil >= 0 && daysUntil <= daysAhead) {
          events.push({
            clientId: client.id,
            clientName: client.name,
            type: "anniversary",
            date: next.toISOString().slice(0, 10),
            daysUntil,
            phone: client.phone,
          });
        }
      }
    }
  }

  return events.sort((a, b) => a.daysUntil - b.daysUntil);
}

export function validateClient(client) {
  const errors = [];
  if (!client.name?.trim()) errors.push("Client name is required");
  if (!client.phone?.trim()) errors.push("Phone number is required");
  return errors;
}
