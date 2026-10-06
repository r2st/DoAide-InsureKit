import { useState, useMemo } from "react";
import { LIC_PLANS, PLAN_TYPES } from "../data/licPlans";
import { calculatePremium } from "../utils/calcPremium";
import { calculateCommission, calculateCommissionByYear } from "../utils/calcCommission";
import { formatINR, formatPercent } from "../utils/format";
import ResultCard from "../components/ResultCard";
import WhatsAppShare from "../components/WhatsAppShare";
import PrintButton from "../components/PrintButton";
import FAQ from "../components/FAQ";

const FAQ_ITEMS = [
  { q: "How is LIC agent commission calculated?", a: "Commission is a percentage of the premium paid. First year (FY) commission is higher than renewal. FY rates depend on the Premium Paying Term (PPT): 25% for PPT 15+, 20% for PPT 12-14, 15% for PPT 8-11, 10% for PPT 5-7. Term plans get 28% FY." },
  { q: "What is renewal commission?", a: "Renewal commission is paid every year from the 2nd year onwards when the policyholder pays their premium. Standard renewal rate is 7.5% for most plans, 5% for plans with PPT 5-7 years." },
  { q: "Is commission paid on GST amount?", a: "No, commission is calculated on the base premium before GST. GST on premium goes to the government." },
  { q: "What about commission on single premium plans?", a: "Single premium plans pay commission only once (first year). There is no renewal commission since there's only one premium payment." },
  { q: "Do government schemes (PMJJBY, PMSBY) pay commission?", a: "No, government schemes like PMJJBY (₹436) and PMSBY (₹20) do not pay agent commission. These are social security schemes subsidized by the government." },
  { q: "What is MDRT and how does it affect commission?", a: "MDRT (Million Dollar Round Table) is a global recognition for top insurance agents. While MDRT doesn't directly change commission rates, LIC offers additional incentives and bonuses for high-performing agents through club membership (Star, MDRT, COT, TOT)." },
];

const commissionPlans = LIC_PLANS.filter(
  (p) => p.type !== PLAN_TYPES.GOVT && Object.keys(p.premiumRates).length > 0,
);

export default function CommissionCalculator() {
  const [planId, setPlanId] = useState(commissionPlans[0].id);
  const [age, setAge] = useState(30);
  const [sumAssured, setSumAssured] = useState(1000000);
  const [term, setTerm] = useState(20);
  const [showYearwise, setShowYearwise] = useState(false);

  const plan = useMemo(() => commissionPlans.find((p) => p.id === planId), [planId]);

  const premResult = useMemo(() => {
    if (!plan) return null;
    return calculatePremium(plan, age, sumAssured, term, "yearly");
  }, [plan, age, sumAssured, term]);

  const commission = useMemo(() => {
    if (!plan || !premResult) return null;
    return calculateCommission(plan, premResult.annualPremium, term);
  }, [plan, premResult, term]);

  const yearwise = useMemo(() => {
    if (!plan || !premResult) return [];
    return calculateCommissionByYear(plan, premResult.annualPremium, term);
  }, [plan, premResult, term]);

  const shareText = commission
    ? `LIC Agent Commission — ${plan.name}\nPremium: ${formatINR(premResult.annualPremium)}/yr\nFY Commission (${formatPercent(commission.firstYearRate)}): ${formatINR(commission.firstYearComm)}\nRenewal (${formatPercent(commission.renewalRate)}): ${formatINR(commission.renewalComm)}/yr\nTotal over ${term}yr: ${formatINR(commission.totalCommission)}\n\nCalculated on DoAide InsureKit — insure.doaide.com`
    : "";

  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold text-white mb-1">LIC Commission Calculator</h1>
      <p className="text-white/40 text-sm mb-6">
        Calculate first year, renewal, and total agent commission
      </p>

      <div className="panel p-5 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wide">Plan</label>
            <select className="select-field" value={planId} onChange={(e) => setPlanId(e.target.value)}>
              {commissionPlans.map((p) => (
                <option key={p.id} value={p.id}>{p.name} ({p.tableNo})</option>
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
        </div>
      </div>

      {commission && premResult ? (
        <div className="animate-fade-up">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <ResultCard
              label="Annual Premium"
              value={formatINR(premResult.annualPremium)}
            />
            <ResultCard
              label={`FY Commission (${formatPercent(commission.firstYearRate)})`}
              value={formatINR(commission.firstYearComm)}
              accent
            />
            <ResultCard
              label={`Renewal (${formatPercent(commission.renewalRate)})`}
              value={formatINR(commission.renewalComm)}
              sub="Per year"
            />
            <ResultCard
              label={`Total (${term} yr)`}
              value={formatINR(commission.totalCommission)}
              accent
            />
          </div>

          <div className="panel-inner p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-white/40 uppercase tracking-wide">Commission Structure</div>
              <button
                onClick={() => setShowYearwise(!showYearwise)}
                className="text-xs text-signal hover:text-signal-soft transition-colors"
              >
                {showYearwise ? "Hide" : "Show"} year-wise breakdown
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/50">Year 1 (First Year)</span>
                <span className="text-white font-medium">
                  {formatPercent(commission.firstYearRate)} = {formatINR(commission.firstYearComm)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Year 2-{term} (Renewal × {commission.renewalYears}yr)</span>
                <span className="text-white font-medium">
                  {formatPercent(commission.renewalRate)} = {formatINR(commission.totalRenewalComm)}
                </span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2">
                <span className="text-white/70 font-medium">Total Commission</span>
                <span className="text-signal font-bold">{formatINR(commission.totalCommission)}</span>
              </div>
            </div>
          </div>

          {showYearwise && (
            <div className="panel-inner p-4 mb-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                    <th className="text-left py-2 px-2">Year</th>
                    <th className="text-right py-2 px-2">Premium</th>
                    <th className="text-right py-2 px-2">Rate</th>
                    <th className="text-right py-2 px-2">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {yearwise.map((y) => (
                    <tr key={y.year} className="border-b border-white/5">
                      <td className="py-1.5 px-2 text-white/50">{y.year}</td>
                      <td className="py-1.5 px-2 text-right text-white/70">{formatINR(y.premium)}</td>
                      <td className="py-1.5 px-2 text-right text-white/50">{formatPercent(y.rate)}</td>
                      <td className="py-1.5 px-2 text-right text-white font-medium">{formatINR(y.commission)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="panel-inner p-3 mb-4 text-xs text-white/30">
            <p>Commission rates as per LIC guidelines (post Oct 2024). FY rate depends on PPT:</p>
            <p className="mt-1">PPT 15+ yr: 25% | 12-14 yr: 20% | 8-11 yr: 15% | 5-7 yr: 10% | Term: 28%</p>
            <p className="mt-1">Renewal: 7.5% (life), 5% (short PPT). Actual may vary by club/MDRT status.</p>
          </div>

          <div className="flex justify-end gap-2">
            <PrintButton />
            <WhatsAppShare text={shareText} />
          </div>
        </div>
      ) : (
        <div className="panel-inner p-6 text-center text-white/30 text-sm">
          Could not calculate commission. Try adjusting inputs.
        </div>
      )}

      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
