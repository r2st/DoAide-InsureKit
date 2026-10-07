import { useState, useMemo } from "react";
import { LIC_PLANS, MODE_LABELS } from "../data/licPlans";
import { getPolicies, addPolicy, deletePolicy, getUpcomingRenewals, validatePolicy } from "../utils/policyStore";
import { formatINR } from "../utils/format";
import WhatsAppShare from "../components/WhatsAppShare";
import FAQ from "../components/FAQ";
import PrintButton from "../components/PrintButton";
import HowItWorks from "../components/HowItWorks";

const MODE_OPTIONS = Object.entries(MODE_LABELS);


const HOW_IT_WORKS = [
  { title: "Add policies", desc: "Enter client name, plan, and premium details" },
  { title: "Track renewals", desc: "See upcoming premium due dates at a glance" },
  { title: "Send reminders", desc: "Share renewal reminders via WhatsApp" },
];

const FAQ_ITEMS = [
  { q: "Where is my policy data stored?", a: "All data is stored locally in your browser (localStorage). Nothing is sent to any server. If you clear browser data, the policies will be deleted." },
  { q: "Can I track policies from different clients?", a: "Yes! Add each policy with the client/holder name. You can track unlimited policies for all your clients." },
  { q: "How do premium reminders work?", a: "Set the next due date when adding a policy. The tracker shows upcoming renewals within the next 30 days, sorted by urgency." },
  { q: "Can I export my policy data?", a: "Use the Print/PDF button to generate a printable list of all your tracked policies. You can save this as a PDF from your browser's print dialog." },
  { q: "What happens if I use a different browser?", a: "Since data is stored in your browser, it won't transfer across browsers or devices automatically. Use Print/PDF to keep a backup." },
];

export default function PolicyTracker() {
  const [policies, setPolicies] = useState(() => getPolicies());
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState([]);
  const [form, setForm] = useState({
    policyNumber: "",
    holderName: "",
    planName: LIC_PLANS[0].name,
    sumAssured: 500000,
    premium: 25000,
    mode: "yearly",
    startDate: "",
    nextDueDate: "",
    notes: "",
  });

  const upcoming = useMemo(() => getUpcomingRenewals(30), [policies]);

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validatePolicy(form);
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    const newPolicy = addPolicy(form);
    setPolicies((prev) => [...prev, newPolicy]);
    setShowForm(false);
    setErrors([]);
    setForm({ policyNumber: "", holderName: "", planName: LIC_PLANS[0].name, sumAssured: 500000, premium: 25000, mode: "yearly", startDate: "", nextDueDate: "", notes: "" });
  }

  function handleDelete(id) {
    const updated = deletePolicy(id);
    setPolicies(updated);
  }

  const shareText = upcoming.length > 0
    ? `Premium Reminders (Next 30 days):\n${upcoming.map((p) => `${p.holderName} — ${p.planName}\nPolicy: ${p.policyNumber}\nPremium: ${formatINR(p.premium)}\nDue: ${p.nextDueDate} (${p.daysUntil <= 0 ? "OVERDUE" : `${p.daysUntil} days`})`).join("\n\n")}\n\n— DoAide InsureKit`
    : "";

  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold text-white mb-1">Policy Tracker</h1>
      <p className="text-white/40 text-sm mb-6">
        Track client policies, renewal dates, and premium reminders
      </p>

      <HowItWorks steps={HOW_IT_WORKS} />

      {upcoming.length > 0 && (
        <div className="panel p-4 mb-6 border-l-4 border-l-warn">
          <div className="text-sm font-medium text-white mb-2">Upcoming Renewals (Next 30 days)</div>
          <div className="space-y-2">
            {upcoming.map((p) => (
              <div key={p.id} className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-white/70">{p.holderName}</span>
                  <span className="text-white/30 mx-1">&mdash;</span>
                  <span className="text-white/50">{p.planName}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/70">{formatINR(p.premium)}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${p.daysUntil <= 0 ? "bg-bad/15 text-bad" : p.daysUntil <= 7 ? "bg-warn/15 text-warn" : "bg-signal/15 text-signal"}`}>
                    {p.daysUntil <= 0 ? "OVERDUE" : `${p.daysUntil}d`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-white/40">{policies.length} {policies.length === 1 ? "policy" : "policies"} tracked</div>
        <div className="flex gap-2">
          <PrintButton />
          {upcoming.length > 0 && <WhatsAppShare text={shareText} />}
          <button onClick={() => setShowForm(!showForm)} className="btn-primary text-sm py-2 px-4">
            {showForm ? "Cancel" : "+ Add Policy"}
          </button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="panel p-5 mb-6 animate-fade-up">
          {errors.length > 0 && (
            <div className="mb-4 p-3 rounded-lg bg-bad/10 border border-bad/20 text-bad text-sm">
              {errors.map((e, i) => <div key={i}>{e}</div>)}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Policy Number</label>
              <input className="input-field" value={form.policyNumber} onChange={(e) => setForm({ ...form, policyNumber: e.target.value })} placeholder="e.g. 123456789" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Holder Name</label>
              <input className="input-field" value={form.holderName} onChange={(e) => setForm({ ...form, holderName: e.target.value })} placeholder="e.g. Rajesh Kumar" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Plan Name</label>
              <select className="select-field" value={form.planName} onChange={(e) => setForm({ ...form, planName: e.target.value })}>
                {LIC_PLANS.map((p) => <option key={p.id} value={p.name}>{p.name} ({p.tableNo || "Govt"})</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Sum Assured</label>
              <input type="number" className="input-field" min={10000} step={10000} value={form.sumAssured} onChange={(e) => setForm({ ...form, sumAssured: Number(e.target.value) })} />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Premium Amount</label>
              <input type="number" className="input-field" min={100} step={100} value={form.premium} onChange={(e) => setForm({ ...form, premium: Number(e.target.value) })} />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Payment Mode</label>
              <select className="select-field" value={form.mode} onChange={(e) => setForm({ ...form, mode: e.target.value })}>
                {MODE_OPTIONS.map(([key, label]) => <option key={key} value={key}>{label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Policy Start Date</label>
              <input type="date" className="input-field" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Next Premium Due Date</label>
              <input type="date" className="input-field" value={form.nextDueDate} onChange={(e) => setForm({ ...form, nextDueDate: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Notes (optional)</label>
              <input className="input-field" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Any additional notes..." />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button type="submit" className="btn-primary text-sm py-2 px-6">Save Policy</button>
          </div>
        </form>
      )}

      {policies.length > 0 ? (
        <div className="space-y-3">
          {policies.map((p) => (
            <div key={p.id} className="panel p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-white">{p.holderName}</div>
                  <div className="text-xs text-white/40 mt-0.5">{p.planName} &mdash; Policy #{p.policyNumber}</div>
                </div>
                <button onClick={() => handleDelete(p.id)} className="text-xs text-bad/60 hover:text-bad transition-colors print:hidden">Delete</button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wide">Sum Assured</div>
                  <div className="text-sm text-white/70">{formatINR(p.sumAssured)}</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wide">Premium</div>
                  <div className="text-sm text-white/70">{formatINR(p.premium)} ({MODE_LABELS[p.mode] || p.mode})</div>
                </div>
                {p.startDate && (
                  <div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wide">Start Date</div>
                    <div className="text-sm text-white/70">{p.startDate}</div>
                  </div>
                )}
                {p.nextDueDate && (
                  <div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wide">Next Due</div>
                    <div className="text-sm text-white/70">{p.nextDueDate}</div>
                  </div>
                )}
              </div>
              {p.notes && <div className="text-xs text-white/30 mt-2">{p.notes}</div>}
            </div>
          ))}
        </div>
      ) : (
        !showForm && (
          <div className="panel-inner p-8 text-center text-white/30 text-sm">
            No policies tracked yet. Click &quot;+ Add Policy&quot; to get started.
          </div>
        )
      )}

      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
