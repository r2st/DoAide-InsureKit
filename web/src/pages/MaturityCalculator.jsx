import { useState, useMemo } from "react";
import { LIC_PLANS, PLAN_TYPES } from "../data/licPlans";
import { calculatePremium } from "../utils/calcPremium";
import {
  calculateMaturity,
  calculateTotalPremiumsPaid,
  calculateIRR,
  calculateSurvivalBenefits,
} from "../utils/calcMaturity";
import { formatINR, formatPercent } from "../utils/format";
import ResultCard from "../components/ResultCard";
import WhatsAppShare from "../components/WhatsAppShare";

const maturityPlans = LIC_PLANS.filter(
  (p) =>
    p.type !== PLAN_TYPES.TERM &&
    p.type !== PLAN_TYPES.PENSION &&
    p.type !== PLAN_TYPES.GOVT &&
    Object.keys(p.premiumRates).length > 0,
);

export default function MaturityCalculator() {
  const [planId, setPlanId] = useState(maturityPlans[0].id);
  const [age, setAge] = useState(30);
  const [sumAssured, setSumAssured] = useState(1000000);
  const [term, setTerm] = useState(20);
  const [customBonus, setCustomBonus] = useState("");

  const plan = useMemo(() => maturityPlans.find((p) => p.id === planId), [planId]);

  const premResult = useMemo(() => {
    if (!plan) return null;
    return calculatePremium(plan, age, sumAssured, term, "yearly");
  }, [plan, age, sumAssured, term]);

  const matResult = useMemo(() => {
    if (!plan) return null;
    const bonusRate = customBonus !== "" ? Number(customBonus) : null;
    return calculateMaturity(plan, sumAssured, term, bonusRate);
  }, [plan, sumAssured, term, customBonus]);

  const totalPaid = useMemo(() => {
    if (!premResult) return 0;
    return calculateTotalPremiumsPaid(premResult.annualPremium, term);
  }, [premResult, term]);

  const irr = useMemo(() => {
    if (!premResult || !matResult) return null;
    return calculateIRR(premResult.annualPremium, matResult.maturityValue, term);
  }, [premResult, matResult, term]);

  const survivalBenefits = useMemo(() => {
    if (!plan) return [];
    return calculateSurvivalBenefits(plan, sumAssured);
  }, [plan, sumAssured]);

  const shareText =
    matResult && premResult
      ? `LIC ${plan.name} — Maturity Analysis\nSA: ${formatINR(sumAssured)}, Term: ${term}yr\nTotal Premiums: ${formatINR(totalPaid)}\nMaturity Value: ${formatINR(matResult.maturityValue)}\nIRR: ${irr !== null ? formatPercent(irr) : "N/A"}\n\nCalculated on DoAide InsureKit — insure.doaide.com`
      : "";

  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold text-white mb-1">LIC Maturity Calculator</h1>
      <p className="text-white/40 text-sm mb-6">
        Calculate maturity value with bonus, FAB, and compare IRR
      </p>

      <div className="panel p-5 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Plan</label>
            <select className="select-field" value={planId} onChange={(e) => setPlanId(e.target.value)}>
              {maturityPlans.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.tableNo})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Age</label>
            <input type="number" className="input-field" value={age} onChange={(e) => setAge(Number(e.target.value))} />
          </div>
          <div>
            <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Sum Assured (₹)</label>
            <input type="number" className="input-field" min={100000} step={100000} value={sumAssured} onChange={(e) => setSumAssured(Number(e.target.value))} />
          </div>
          <div>
            <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Term (years)</label>
            <input type="number" className="input-field" min={10} max={40} value={term} onChange={(e) => setTerm(Number(e.target.value))} />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">
              Bonus Rate (₹/1000 SA) — leave blank for default ({plan?.isNonPar ? "Non-par plan" : `₹${plan?.bonusRate}`})
            </label>
            <input
              type="number"
              className="input-field"
              placeholder={plan?.isNonPar ? "N/A" : String(plan?.bonusRate)}
              value={customBonus}
              onChange={(e) => setCustomBonus(e.target.value)}
              disabled={plan?.isNonPar}
            />
          </div>
        </div>
      </div>

      {matResult && premResult ? (
        <div className="animate-fade-up">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            <ResultCard label="Sum Assured" value={formatINR(matResult.sumAssured)} />
            {matResult.totalBonus > 0 && (
              <ResultCard
                label="Total Bonus"
                value={formatINR(matResult.totalBonus)}
                sub={`₹${matResult.bonusRate}/1000 SA × ${term}yr`}
              />
            )}
            {matResult.fab > 0 && (
              <ResultCard label="FAB" value={formatINR(matResult.fab)} sub={`${plan.fabRate}% of bonus`} />
            )}
            {matResult.guaranteedAdditions > 0 && (
              <ResultCard label="Guaranteed Additions" value={formatINR(matResult.guaranteedAdditions)} />
            )}
            <ResultCard label="Maturity Value" value={formatINR(matResult.maturityValue)} accent />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            <ResultCard label="Total Premiums Paid" value={formatINR(totalPaid)} />
            <ResultCard
              label="Profit"
              value={formatINR(matResult.maturityValue - totalPaid)}
              accent={matResult.maturityValue > totalPaid}
            />
            {irr !== null && (
              <ResultCard
                label="IRR (Annual Return)"
                value={formatPercent(irr)}
                sub="Compare with FD/PPF rates"
              />
            )}
          </div>

          {survivalBenefits.length > 0 && (
            <div className="panel-inner p-4 mb-4">
              <div className="text-xs text-white/40 mb-2 uppercase tracking-wide">Survival Benefits</div>
              <div className="space-y-1">
                {survivalBenefits.map((sb) => (
                  <div key={sb.year} className="flex justify-between text-sm">
                    <span className="text-white/50">Year {sb.year} ({sb.percent}% SA)</span>
                    <span className="text-white font-medium">{formatINR(sb.amount)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="panel-inner p-4 mb-6">
            <div className="text-xs text-white/40 mb-2 uppercase tracking-wide">Breakdown</div>
            <div className="w-full h-6 rounded-full overflow-hidden flex">
              <div
                className="bg-signal h-full"
                style={{ width: `${(matResult.sumAssured / matResult.maturityValue) * 100}%` }}
                title="Sum Assured"
              />
              {matResult.totalBonus > 0 && (
                <div
                  className="bg-signal-soft h-full"
                  style={{ width: `${(matResult.totalBonus / matResult.maturityValue) * 100}%` }}
                  title="Bonus"
                />
              )}
              {matResult.fab > 0 && (
                <div
                  className="bg-signal-dim h-full"
                  style={{ width: `${(matResult.fab / matResult.maturityValue) * 100}%` }}
                  title="FAB"
                />
              )}
              {matResult.guaranteedAdditions > 0 && (
                <div
                  className="bg-signal-soft h-full"
                  style={{ width: `${(matResult.guaranteedAdditions / matResult.maturityValue) * 100}%` }}
                  title="Guaranteed Additions"
                />
              )}
            </div>
            <div className="flex gap-4 mt-2 text-xs text-white/40">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-signal inline-block" /> SA</span>
              {matResult.totalBonus > 0 && <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-signal-soft inline-block" /> Bonus</span>}
              {matResult.fab > 0 && <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-signal-dim inline-block" /> FAB</span>}
              {matResult.guaranteedAdditions > 0 && <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-signal-soft inline-block" /> GA</span>}
            </div>
          </div>

          <div className="flex justify-end">
            <WhatsAppShare text={shareText} />
          </div>
        </div>
      ) : (
        <div className="panel-inner p-6 text-center text-white/30 text-sm">
          Could not calculate maturity for this combination. Try adjusting inputs.
        </div>
      )}
    </div>
  );
}
