import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FAQ from "../components/FAQ";
import { calculateInsuranceNeeds } from "../utils/calcInsuranceNeeds";

const FAQ_ITEMS = [
  {
    q: "How much life insurance do I need?",
    a: "A common rule of thumb is 10-15 times your annual income. However, the exact amount depends on your dependents, liabilities, existing savings, and future financial goals. This calculator provides a more accurate estimate by considering all these factors.",
  },
  {
    q: "Does this calculator include health insurance needs?",
    a: "No, this calculator focuses on life insurance (sum assured). For health insurance, IRDAI recommends a cover of at least ₹5-10 lakh per family member. You should have both life insurance and health insurance.",
  },
  {
    q: "Should I buy one large policy or multiple smaller ones?",
    a: "Multiple policies can be useful: a term plan for the main cover, and an endowment plan for savings + additional cover. However, one large term plan is cheaper. Use our Plan Recommender for personalized suggestions.",
  },
];

function fmt(n) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function InsuranceNeedsCalculator() {
  const [age, setAge] = useState(30);
  const [income, setIncome] = useState(800000);
  const [dependents, setDependents] = useState(2);
  const [childrenCount, setChildrenCount] = useState(1);
  const [outstandingLoans, setOutstandingLoans] = useState(0);
  const [existingCover, setExistingCover] = useState(0);
  const [savings, setSavings] = useState(0);
  const [retirementAge, setRetirementAge] = useState(60);

  const result = useMemo(() => calculateInsuranceNeeds({
    age, income, dependents, childrenCount, outstandingLoans, existingCover, savings, retirementAge,
  }), [age, income, dependents, childrenCount, outstandingLoans, existingCover, savings, retirementAge]);

  const {
    yearsToRetire, incomeReplacement, childEducation, childMarriage,
    emergencyFund, funeralAndSettlement, totalNeeds, recommendedCover: roundedCover, multiplier,
  } = result;

  useEffect(() => {
    document.title = "Insurance Needs Calculator — How Much Cover Do You Need? | InsureKit";
  }, []);

  return (
    <div className="animate-fade-up">
      <SEOHead
        title="Insurance Needs Calculator — How Much Cover Do You Need? | InsureKit"
        description="Calculate your ideal life insurance coverage based on age, income, dependents, and liabilities. Free insurance needs calculator by InsureKit."
        canonical="https://insure.doaide.com/insurance-needs-calculator"
      />

      <h1 className="text-2xl font-bold text-white mb-1">Insurance Needs Calculator</h1>
      <p className="text-white/40 text-sm mb-6">
        Find out how much life insurance cover you need based on your income, dependents, and financial goals.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wide mb-1">Your Age</label>
            <input type="number" min={18} max={65} value={age} onChange={(e) => setAge(+e.target.value)} className="input-field" style={{ fontSize: "16px", minHeight: "44px" }} />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wide mb-1">Annual Income (₹)</label>
            <input type="number" min={0} step={50000} value={income} onChange={(e) => setIncome(+e.target.value)} className="input-field" style={{ fontSize: "16px", minHeight: "44px" }} />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wide mb-1">Number of Dependents</label>
            <input type="number" min={0} max={10} value={dependents} onChange={(e) => setDependents(+e.target.value)} className="input-field" style={{ fontSize: "16px", minHeight: "44px" }} />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wide mb-1">Number of Children</label>
            <input type="number" min={0} max={5} value={childrenCount} onChange={(e) => setChildrenCount(+e.target.value)} className="input-field" style={{ fontSize: "16px", minHeight: "44px" }} />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wide mb-1">Outstanding Loans (₹)</label>
            <input type="number" min={0} step={100000} value={outstandingLoans} onChange={(e) => setOutstandingLoans(+e.target.value)} className="input-field" style={{ fontSize: "16px", minHeight: "44px" }} />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wide mb-1">Existing Life Insurance Cover (₹)</label>
            <input type="number" min={0} step={100000} value={existingCover} onChange={(e) => setExistingCover(+e.target.value)} className="input-field" style={{ fontSize: "16px", minHeight: "44px" }} />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wide mb-1">Existing Savings / Investments (₹)</label>
            <input type="number" min={0} step={100000} value={savings} onChange={(e) => setSavings(+e.target.value)} className="input-field" style={{ fontSize: "16px", minHeight: "44px" }} />
          </div>
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wide mb-1">Planned Retirement Age</label>
            <input type="number" min={45} max={70} value={retirementAge} onChange={(e) => setRetirementAge(+e.target.value)} className="input-field" style={{ fontSize: "16px", minHeight: "44px" }} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="panel p-6 text-center">
            <div className="text-xs text-white/40 uppercase tracking-wide mb-1">Recommended Cover</div>
            <div className="text-signal text-3xl font-bold">{fmt(roundedCover)}</div>
            <div className="text-xs text-white/30 mt-1">{multiplier}x your annual income</div>
          </div>

          <div className="panel p-4">
            <h3 className="text-sm font-semibold text-white mb-3">Needs Breakdown</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/50">Income Replacement ({yearsToRetire} yrs × 70%)</span>
                <span className="text-white/70">{fmt(incomeReplacement)}</span>
              </div>
              {childrenCount > 0 && (
                <>
                  <div className="flex justify-between">
                    <span className="text-white/50">Child Education ({childrenCount} × ₹25L)</span>
                    <span className="text-white/70">{fmt(childEducation)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Child Marriage ({childrenCount} × ₹15L)</span>
                    <span className="text-white/70">{fmt(childMarriage)}</span>
                  </div>
                </>
              )}
              {outstandingLoans > 0 && (
                <div className="flex justify-between">
                  <span className="text-white/50">Outstanding Loans</span>
                  <span className="text-white/70">{fmt(outstandingLoans)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-white/50">Emergency Fund (2yr income)</span>
                <span className="text-white/70">{fmt(emergencyFund)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Funeral &amp; Settlement</span>
                <span className="text-white/70">{fmt(funeralAndSettlement)}</span>
              </div>
              <div className="border-t border-white/10 pt-2 flex justify-between font-semibold">
                <span className="text-white/60">Total Needs</span>
                <span className="text-white">{fmt(totalNeeds)}</span>
              </div>
              {(existingCover > 0 || savings > 0) && (
                <>
                  {existingCover > 0 && (
                    <div className="flex justify-between text-bad/70">
                      <span>− Existing Cover</span>
                      <span>{fmt(existingCover)}</span>
                    </div>
                  )}
                  {savings > 0 && (
                    <div className="flex justify-between text-bad/70">
                      <span>− Savings / Investments</span>
                      <span>{fmt(savings)}</span>
                    </div>
                  )}
                </>
              )}
              <div className="border-t border-white/10 pt-2 flex justify-between font-bold">
                <span className="text-signal">Additional Cover Needed</span>
                <span className="text-signal">{fmt(roundedCover)}</span>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white mb-2">Suggested Plan Mix</h3>
            <div className="text-sm text-white/60 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-signal mt-0.5">1.</span>
                <div>
                  <strong className="text-white/80">Term Plan</strong> — {fmt(roundedCover)} cover
                  <div className="text-xs text-white/40">LIC Tech Term (854) — cheapest way to get full cover</div>
                </div>
              </div>
              {income >= 500000 && (
                <div className="flex items-start gap-2">
                  <span className="text-signal mt-0.5">2.</span>
                  <div>
                    <strong className="text-white/80">Endowment Plan</strong> — ₹5-10L SA
                    <div className="text-xs text-white/40">Jeevan Labh (836) — guaranteed savings + tax benefits</div>
                  </div>
                </div>
              )}
              {childrenCount > 0 && (
                <div className="flex items-start gap-2">
                  <span className="text-signal mt-0.5">{income >= 500000 ? "3." : "2."}</span>
                  <div>
                    <strong className="text-white/80">Child Plan</strong> — ₹5-10L SA
                    <div className="text-xs text-white/40">Amritbaal (874) — dedicated child education planning</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/premium-calculator" className="btn-primary no-underline text-sm">
              Calculate Premium
            </Link>
            <Link to="/plan-recommender" className="btn-secondary no-underline text-sm">
              Get Plan Recommendations
            </Link>
          </div>
        </div>
      </div>

      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
