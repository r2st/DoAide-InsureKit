export default function ResultCard({ label, value, accent = false, sub = null }) {
  return (
    <div className="stat-card">
      <div className="label">{label}</div>
      <div className={`value ${accent ? "accent" : ""}`}>{value}</div>
      {sub && <div className="text-xs text-white/30 mt-1">{sub}</div>}
    </div>
  );
}
