import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "";

export default function DataFreshnessBadge() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/freshness`)
      .then((r) => (r.ok ? r.json() : null))
      .then(setStatus)
      .catch(() => setStatus(null));
  }, []);

  if (!status) return null;

  const { last_verified, days_since_check, data_possibly_stale } = status;
  const isStale = data_possibly_stale || (days_since_check != null && days_since_check > 30);

  const formattedDate = last_verified
    ? new Date(last_verified).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Never";

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
        isStale
          ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
          : "bg-green-500/15 text-green-400 border border-green-500/30"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${isStale ? "bg-amber-400" : "bg-green-400"}`}
      />
      {isStale ? "Data may be outdated" : `Verified: ${formattedDate}`}
    </div>
  );
}
