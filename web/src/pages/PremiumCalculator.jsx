import { useState, useMemo } from "react";
import { LIC_PLANS, MODE_LABELS, PLAN_TYPES } from "../data/licPlans";
import { calculatePremium } from "../utils/calcPremium";
import { formatINR } from "../utils/format";
import ResultCard from "../components/ResultCard";
import WhatsAppShare from "../components/WhatsAppShare";

const selectablePlans = LIC_PLANS.filter(
  (p) => Object.keys(p.premiumRates).length > 0 || p.fixedPremium,
);

export default function PremiumCalculator() {
  const [planId, setPlanId] = useState(selectablePlans[0].id);
  const [age, setAge] = useState(30);
  const [sumAssured, setSumAssured] = useState(1000000);
  const [term, setTerm] = useState(20);
  const [mode, setMode] = useState("yearly");

  const plan = useMemo(() => selectablePlans.find((p) => p.id === planId), [planId]);

  const availableTerms = useMemo(() => {
    if (!plan || plan.fixedPremium) return [];
    const ages = Object.keys(plan.premiumRates).map(Number).sort((a, b) => a - b);
    let ageKey = ages[0];
    for (const a of ages) {
      if (a <= age) ageKey = a;
      else break;
    }
    return Object.keys(plan.premiumRates[ageKey] || {}).map(Number).sort((a, b) => a - b);
  }, [plan, age]);

  const result = useMemo(() => {
    if (!plan) return null;
    return calculatePremium(plan, age, sumAssured, term, mode);
  }, [plan, age, sumAssured, term, mode]);

  const shareText = result
    ? `LIC ${plan.name} (Table ${plan.tableNo})\nAge: ${age}, SA: ${formatINR(sumAssured)}, Term: ${term}yr\nPremium (${MODE_LABELS[mode]}): ${formatINR(result.totalPremium)} (incl. GST)\n\nCalculated on DoAide InsureKit — insure.doaide.com`
    : "";

  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold text-white mb-1">LIC Premium Calculator</h1>
      <p className="text-white/40 text-sm mb-6">
        Calculate exact premium for any LIC plan with GST
      </p>

      <div className="panel p-5 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Plan</label>
            <select
              className="select-field"
              value={planId}
              onChange={(e) => setPlanId(e.target.value)}
            >
              {selectablePlans.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.tableNo || "Govt"})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Age</label>
            <input
              type="number"
              className="input-field"
              min={plan?.minAge || 0}
              max={plan?.maxAge || 70}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </div>

          {!plan?.fixedPremium && (
            <>
              <div>
                <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">
                  Sum Assured (₹)
                </label>
                <input
                  type="number"
                  className="input-field"
                  min={plan?.minSA || 100000}
                  step={100000}
                  value={sumAssured}
                  onChange={(e) => setSumAssured(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">
                  Policy Term (years)
                </label>
                {availableTerms.length > 0 ? (
                  <select
                    className="select-field"
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                  >
                    {availableTerms.map((t) => (
                      <option key={t} value={t}>{t} years</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="number"
                    className="input-field"
                    min={plan?.minTerm || 10}
                    max={plan?.maxTerm || 40}
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                  />
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">
                  Payment Mode
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.entries(MODE_LABELS).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setMode(key)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        mode === key
                          ? "bg-signal text-ink-900"
                          : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {plan && (
        <div className="panel-inner p-4 mb-6">
          <div className="text-xs text-white/40 mb-1 uppercase tracking-wide">About this plan</div>
          <div className="text-sm text-white/70">{plan.description}</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {plan.features.map((f, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-white/40">
                {f}
              </span>
            ))}
          </div>
        </div>
      )}

      {result ? (
        <div className="animate-fade-up">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <ResultCard
              label={`Premium (${MODE_LABELS[mode]})`}
              value={formatINR(result.basePremium)}
            />
            <ResultCard label="GST (18%)" value={formatINR(result.gst)} />
            <ResultCard
              label="Total Premium"
              value={formatINR(result.totalPremium)}
              accent
            />
            <ResultCard
              label="Annual Premium"
              value={formatINR(result.annualPremium)}
              sub={result.ratePerThousand ? `₹${result.ratePerThousand}/1000 SA` : null}
            />
          </div>

          <div className="flex justify-end">
            <WhatsAppShare text={shareText} />
          </div>
        </div>
      ) : (
        <div className="panel-inner p-6 text-center text-white/30 text-sm">
          Premium rate not available for this age/term combination.
          Try adjusting the inputs.
        </div>
      )}
    </div>
  );
}
