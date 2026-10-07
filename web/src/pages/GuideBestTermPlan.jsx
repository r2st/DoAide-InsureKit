import { Link } from "react-router-dom";
import GuideLayout from "../components/GuideLayout";
import FAQ from "../components/FAQ";

const FAQ_ITEMS = [
  {
    q: "What is the claim rejection rate for term insurance?",
    a: "LIC has a claim settlement ratio of ~98.5% (2024-25). Top private insurers like HDFC Life, ICICI Prudential, and Max Life are at 97-99%. Rejection is rare and usually due to non-disclosure of medical history or fraud, not because companies refuse to pay.",
  },
  {
    q: "Should I buy term insurance online or offline?",
    a: "Online is significantly cheaper (30-40% lower premiums) because there's no agent commission. The policy terms and claim process are identical. If you're comfortable with online processes, always buy online. Offline is better only if you need hand-holding for documentation.",
  },
  {
    q: "Which riders are worth buying with term insurance?",
    a: "Accidental Death Benefit and Critical Illness riders are the most valuable. Waiver of Premium is useful if you have dependents. Income Benefit rider is good for salaried individuals. Avoid riders that duplicate your existing health insurance coverage.",
  },
  {
    q: "How much does smoking affect term insurance premium?",
    a: "Smokers pay 50-100% higher premiums than non-smokers. A 30-year-old non-smoker male might pay ₹8,000/year for ₹1 crore cover, while a smoker of the same age pays ₹14,000-16,000. Quitting smoking for 12+ months before applying can help you qualify as a non-smoker.",
  },
  {
    q: "Can I buy term insurance without medical tests?",
    a: "Some plans offer no-medical-test options for lower sum assured (usually up to ₹50 lakh) and younger ages (under 35-40). However, full medical underwriting is recommended as it results in faster claim settlement and fewer disputes.",
  },
  {
    q: "What happens if I stop paying term insurance premiums?",
    a: "Term insurance has no surrender value. If you stop paying, the policy lapses and you lose all coverage. Some plans offer a grace period of 15-30 days. There is no revival option in most pure term plans after the grace period expires.",
  },
  {
    q: "Is PMJJBY (₹436/year) sufficient for life cover?",
    a: "PMJJBY provides only ₹2 lakh cover, which is grossly inadequate for most families. It's a good supplementary cover but should never be your primary life insurance. You need at least 10-15x your annual income as term cover.",
  },
  {
    q: "Can NRIs buy term insurance in India?",
    a: "Yes, most insurers including LIC offer term plans to NRIs. However, premiums may be higher based on the country of residence, and some countries may be excluded. NRIs need to submit additional KYC and residency documents.",
  },
];

const TOC = [
  { id: "what-is-term", label: "What is Term Insurance" },
  { id: "why-essential", label: "Why Term Insurance is Essential" },
  { id: "lic-term-plans", label: "LIC Term Plans" },
  { id: "private-term-plans", label: "Top Private Term Plans" },
  { id: "lic-vs-private", label: "LIC vs Private: Honest Comparison" },
  { id: "how-much-cover", label: "How Much Cover Do You Need" },
  { id: "riders", label: "Riders to Consider" },
  { id: "tax-benefits", label: "Tax Benefits on Term Plans" },
  { id: "myths", label: "Common Myths About Term Insurance" },
  { id: "how-to-buy", label: "How to Buy Term Insurance" },
  { id: "claim-tips", label: "Claim Settlement Tips" },
];

const RELATED_GUIDES = [
  { path: "/guides/best-lic-plans-for-child", title: "Best LIC Plans for Children 2026" },
  { path: "/guides/lic-claim-process", title: "LIC Claim Process Guide" },
  { path: "/guides/lic-tax-benefits", title: "LIC Tax Benefits Guide" },
];

const RELATED_TOOLS = [
  { path: "/premium-calculator", label: "Premium Calculator" },
  { path: "/claim-estimator", label: "Claim Estimator" },
  { path: "/tax-calculator", label: "Tax Calculator" },
  { path: "/plan-comparison", label: "Plan Comparison" },
];

export default function GuideBestTermPlan() {
  return (
    <GuideLayout
      tag="Comparison Guide"
      title="Best Term Insurance Plans 2026: LIC vs Private"
      subtitle="Compare LIC and private insurer term plans on premium, claim settlement, riders, and trust. Find the right term insurance cover for your family's financial security."
      publishDate="Oct 2026"
      readTime="11 min read"
      toc={TOC}
      relatedGuides={RELATED_GUIDES}
      relatedTools={RELATED_TOOLS}
    >
      {/* --- What is Term Insurance --- */}
      <section id="what-is-term" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">What is Term Insurance</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          Term insurance is the purest and most affordable form of life insurance. It works on a
          simple principle: you pay a small annual premium, and if you pass away during the policy
          term, your nominee receives the full sum assured. There is no maturity benefit, no
          investment component, and no cash value. You are paying purely for protection.
        </p>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          Many people shy away from term insurance because there is "no return" if they survive the
          policy term. This is actually its biggest strength. Because there is no savings or
          investment component, the entire premium goes toward providing maximum life cover at the
          lowest cost. A 30-year-old can get <strong className="text-white/80">₹1 crore
          cover for just ₹8,000-10,000 per year</strong> with a term plan. An endowment plan
          offering the same cover would cost 10-15 times more in premium.
        </p>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          Think of it like car insurance. You don't complain about "not getting returns" when you
          don't have an accident. The value of term insurance is the financial security it provides
          to your family while the risk exists. Once your children are independent and your debts
          are cleared, you may no longer even need the cover. That's exactly how insurance is meant
          to work.
        </p>
        <div className="panel p-4 border-l-4 border-l-signal mb-4">
          <div className="text-sm font-medium text-white mb-1">The Bottom Line</div>
          <p className="text-sm text-white/50">
            Term insurance is not an investment. It is a risk management tool. Buy it for protection,
            invest separately for wealth creation. Mixing insurance and investment gives you the
            worst of both worlds.
          </p>
        </div>
      </section>

      {/* --- Why Term Insurance is Essential --- */}
      <section id="why-essential" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Why Term Insurance is Essential</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          If anyone depends on your income, you need term insurance. It's that simple. Without
          adequate life cover, your family could face severe financial hardship in your absence. Here
          are the key reasons why term insurance should be the first financial product you buy.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">1</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Income Replacement</p>
                <p className="text-xs text-white/50">Your family loses your income but not their expenses. Term insurance replaces 10-15 years of your earnings so they can maintain their standard of living.</p>
              </div>
            </div>
          </div>
          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">2</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Debt Protection</p>
                <p className="text-xs text-white/50">Home loans, car loans, and personal debts don't vanish when you're gone. Without term cover, your family inherits the debt burden along with the loss.</p>
              </div>
            </div>
          </div>
          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">3</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Children's Education</p>
                <p className="text-xs text-white/50">Education costs are rising 10-12% annually. A ₹1 crore term cover can secure your child's engineering, medical, or overseas education even in your absence.</p>
              </div>
            </div>
          </div>
          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">4</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Spouse's Retirement</p>
                <p className="text-xs text-white/50">If your spouse is financially dependent, the sum assured can be invested to generate a retirement corpus, ensuring long-term financial independence.</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          The cost of not having term insurance is far greater than the premium. For most working
          professionals, ₹8,000-15,000 per year is all it takes to secure ₹1 crore of cover.
          That's less than ₹1,000 per month for complete peace of mind. Use our{" "}
          <Link to="/premium-calculator" className="text-signal hover:underline">Premium Calculator</Link>{" "}
          to see exactly how much cover you can get at your age and budget.
        </p>
      </section>

      {/* --- LIC Term Plans --- */}
      <section id="lic-term-plans" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">LIC Term Plans</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          LIC offers two main term insurance plans and one government-backed micro scheme. While LIC
          premiums are generally higher than private insurers, the trust factor and claim settlement
          record make them a solid choice.
        </p>

        <div className="space-y-3 mb-4">
          <div className="panel-inner p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 rounded bg-signal/10 text-signal font-medium">Online Only</span>
              <h3 className="text-sm font-semibold text-white/90">LIC Tech Term (Table 854)</h3>
            </div>
            <p className="text-xs text-white/50 mb-3">
              LIC's most affordable term plan, available exclusively online. No agent commission means
              competitive pricing even by LIC standards.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div><span className="text-white/30">Entry Age</span><p className="text-white/70 mt-0.5">18-65 years</p></div>
              <div><span className="text-white/30">Sum Assured</span><p className="text-white/70 mt-0.5">₹50L - ₹25 Cr</p></div>
              <div><span className="text-white/30">Premium Term</span><p className="text-white/70 mt-0.5">= Policy Term</p></div>
              <div><span className="text-white/30">Indicative Premium</span><p className="text-white/70 mt-0.5">~₹8-10K/yr for ₹1Cr (age 30)</p></div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/40 font-medium">Offline</span>
              <h3 className="text-sm font-semibold text-white/90">LIC Jeevan Amar (Table 855)</h3>
            </div>
            <p className="text-xs text-white/50 mb-3">
              Traditional offline term plan with more flexibility. Offers both level and increasing
              sum assured options. Return of Premium variant available for those who want "money back"
              if they survive.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div><span className="text-white/30">Entry Age</span><p className="text-white/70 mt-0.5">18-65 years</p></div>
              <div><span className="text-white/30">Premium Options</span><p className="text-white/70 mt-0.5">Flexible PPT</p></div>
              <div><span className="text-white/30">RoP Option</span><p className="text-white/70 mt-0.5">Available</p></div>
              <div><span className="text-white/30">Riders</span><p className="text-white/70 mt-0.5">AD Benefit, CI</p></div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 rounded bg-good/10 text-good font-medium">Govt Scheme</span>
              <h3 className="text-sm font-semibold text-white/90">PMJJBY (Pradhan Mantri Jeevan Jyoti Bima Yojana)</h3>
            </div>
            <p className="text-xs text-white/50 mb-3">
              Ultra-affordable government-backed scheme for basic life cover. Auto-debited from your
              bank account annually. Ideal as supplementary cover, not as primary protection.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div><span className="text-white/30">Premium</span><p className="text-white/70 mt-0.5">₹436/year</p></div>
              <div><span className="text-white/30">Cover</span><p className="text-white/70 mt-0.5">₹2 lakh</p></div>
              <div><span className="text-white/30">Age</span><p className="text-white/70 mt-0.5">18-50 years</p></div>
              <div><span className="text-white/30">Enrollment</span><p className="text-white/70 mt-0.5">Via bank account</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Top Private Term Plans --- */}
      <section id="private-term-plans" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Top Private Term Plans</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Private insurers have disrupted the term insurance market with significantly lower premiums,
          seamless online buying, and comprehensive rider options. Here are the three most popular
          private term plans in 2026.
        </p>

        <div className="space-y-3 mb-4">
          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-1">HDFC Life Click2Protect Life</h3>
            <p className="text-xs text-white/50 mb-3">
              One of the most popular term plans in India with multiple payout options including lump
              sum, monthly income, and increasing monthly income. Strong brand trust and excellent
              online buying experience.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div><span className="text-white/30">Entry Age</span><p className="text-white/70 mt-0.5">18-65 years</p></div>
              <div><span className="text-white/30">Max SA</span><p className="text-white/70 mt-0.5">No upper limit</p></div>
              <div><span className="text-white/30">CSR (2024-25)</span><p className="text-white/70 mt-0.5">~98.5%</p></div>
              <div><span className="text-white/30">Premium (30M, ₹1Cr)</span><p className="text-white/70 mt-0.5">~₹6,500-7,500/yr</p></div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-1">ICICI Prudential iProtect Smart</h3>
            <p className="text-xs text-white/50 mb-3">
              Feature-rich term plan with 34 critical illness covers built in at competitive premiums.
              Offers a unique "return of premium" option and terminal illness benefit as standard.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div><span className="text-white/30">Entry Age</span><p className="text-white/70 mt-0.5">18-65 years</p></div>
              <div><span className="text-white/30">Max SA</span><p className="text-white/70 mt-0.5">No upper limit</p></div>
              <div><span className="text-white/30">CSR (2024-25)</span><p className="text-white/70 mt-0.5">~97.8%</p></div>
              <div><span className="text-white/30">Premium (30M, ₹1Cr)</span><p className="text-white/70 mt-0.5">~₹6,000-7,000/yr</p></div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-1">Max Life Smart Secure Plus</h3>
            <p className="text-xs text-white/50 mb-3">
              Known for industry-leading claim settlement ratio and transparent underwriting. Offers
              flexible payout options and comprehensive rider suite. Consistently rated highly by
              independent reviewers.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div><span className="text-white/30">Entry Age</span><p className="text-white/70 mt-0.5">18-60 years</p></div>
              <div><span className="text-white/30">Max SA</span><p className="text-white/70 mt-0.5">₹25 Cr</p></div>
              <div><span className="text-white/30">CSR (2024-25)</span><p className="text-white/70 mt-0.5">~99.3%</p></div>
              <div><span className="text-white/30">Premium (30M, ₹1Cr)</span><p className="text-white/70 mt-0.5">~₹6,500-7,500/yr</p></div>
            </div>
          </div>
        </div>

        <p className="text-white/60 text-sm leading-relaxed">
          Use our{" "}
          <Link to="/plan-comparison" className="text-signal hover:underline">Plan Comparison</Link>{" "}
          tool to compare these plans side by side based on your age, smoking status, and coverage
          requirements.
        </p>
      </section>

      {/* --- LIC vs Private: Honest Comparison --- */}
      <section id="lic-vs-private" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">LIC vs Private: Honest Comparison</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          The LIC vs private debate is one of the most common in Indian insurance. Here's an honest,
          data-backed comparison to help you decide.
        </p>

        <div className="space-y-3 mb-4">
          {/* Claim Settlement */}
          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-2">Claim Settlement Ratio</h3>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-white/50">LIC</span>
              <span className="text-good font-medium">~98.5% (2024-25)</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-2 mb-2">
              <div className="bg-good/60 h-2 rounded-full" style={{ width: "98.5%" }}></div>
            </div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-white/50">Top Private (Max, HDFC, ICICI)</span>
              <span className="text-good font-medium">97-99%</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-2 mb-2">
              <div className="bg-signal/60 h-2 rounded-full" style={{ width: "98%" }}></div>
            </div>
            <p className="text-xs text-white/40 mt-2">
              Verdict: <span className="text-white/60">Both are excellent. The difference is negligible. Focus on full disclosure at the time of buying to avoid claim issues.</span>
            </p>
          </div>

          {/* Premium Cost */}
          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-2">Premium Cost</h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-white/50 mb-1">LIC Tech Term</p>
                <p className="text-white/70 font-medium">₹8,000-10,000/yr</p>
                <p className="text-bad text-[10px] mt-0.5">Higher premiums</p>
              </div>
              <div>
                <p className="text-white/50 mb-1">Private (Online)</p>
                <p className="text-white/70 font-medium">₹6,000-7,500/yr</p>
                <p className="text-good text-[10px] mt-0.5">30-40% cheaper online</p>
              </div>
            </div>
            <p className="text-xs text-white/40 mt-2">
              Example: 30-year-old non-smoker male, ₹1 crore cover, 30-year term.
            </p>
          </div>

          {/* Riders */}
          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-2">Rider Options</h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-white/50 mb-1">LIC</p>
                <p className="text-white/70">AD Benefit, CI (limited)</p>
                <p className="text-warn text-[10px] mt-0.5">Fewer rider options</p>
              </div>
              <div>
                <p className="text-white/50 mb-1">Private</p>
                <p className="text-white/70">AD, CI, WoP, Income, Terminal Illness</p>
                <p className="text-good text-[10px] mt-0.5">Comprehensive rider suite</p>
              </div>
            </div>
          </div>

          {/* Trust Factor */}
          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-2">Trust Factor</h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-white/50 mb-1">LIC</p>
                <p className="text-white/70">Government-backed perception, 68+ years legacy</p>
                <p className="text-good text-[10px] mt-0.5">Highest brand trust</p>
              </div>
              <div>
                <p className="text-white/50 mb-1">Private</p>
                <p className="text-white/70">IRDAI regulated, 20+ years track record</p>
                <p className="text-white/40 text-[10px] mt-0.5">Growing trust, regulated equally</p>
              </div>
            </div>
          </div>

          {/* Online Buying */}
          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-2">Online Buying Experience</h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-white/50 mb-1">LIC</p>
                <p className="text-white/70">Only Tech Term (854) online</p>
                <p className="text-bad text-[10px] mt-0.5">Limited online options</p>
              </div>
              <div>
                <p className="text-white/50 mb-1">Private</p>
                <p className="text-white/70">All major plans available online, instant policy</p>
                <p className="text-good text-[10px] mt-0.5">Seamless digital experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="panel p-4 border-l-4 border-l-signal mb-4">
          <div className="text-sm font-medium text-white mb-1">Our Recommendation</div>
          <p className="text-sm text-white/50">
            If brand trust matters most and you're okay with slightly higher premiums, go with LIC
            Tech Term (854). If you want the lowest premium, best online experience, and more rider
            options, pick a top private insurer like Max Life or HDFC Life. Either way, what matters
            most is that you <strong className="text-white/70">buy term insurance now</strong> rather
            than debating which company.
          </p>
        </div>
      </section>

      {/* --- How Much Cover Do You Need --- */}
      <section id="how-much-cover" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">How Much Cover Do You Need</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          The most common mistake people make is buying too little cover. A ₹25-50 lakh cover might
          sound like a lot, but when you factor in inflation, debts, and your family's long-term
          needs, it falls short quickly. Here are two methods to calculate the right amount.
        </p>

        <div className="space-y-3 mb-4">
          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">1</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Income Multiplier Method</p>
                <p className="text-xs text-white/50 mb-2">
                  The simplest approach: take 10-15 times your annual income as your sum assured.
                </p>
                <div className="bg-signal/10 rounded p-3 text-xs">
                  <p className="text-white/70 mb-1"><strong>Example:</strong> Annual income = ₹10 lakh</p>
                  <p className="text-white/70">Recommended cover = <span className="text-signal font-semibold">₹1 crore to ₹1.5 crore</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">2</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Human Life Value (HLV) Method</p>
                <p className="text-xs text-white/50 mb-2">
                  A more precise method that calculates the present value of your future earnings,
                  minus your personal expenses, discounted for inflation.
                </p>
                <div className="bg-signal/10 rounded p-3 text-xs space-y-1">
                  <p className="text-white/70">Future earnings (30 years remaining) = ₹3 crore</p>
                  <p className="text-white/70">Minus personal expenses (30%) = ₹90 lakh</p>
                  <p className="text-white/70">Plus outstanding debts = ₹40 lakh (home loan)</p>
                  <p className="text-white/70">Plus children's education = ₹30 lakh</p>
                  <p className="text-white/70 font-semibold">Total HLV = <span className="text-signal">₹1.8-2 crore</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-white/60 text-sm leading-relaxed mb-3">
          Don't forget to add your outstanding debts (home loan, car loan, personal loans) to the
          cover amount. Also factor in inflation: ₹1 crore today will be worth significantly less in
          20 years. Many experts recommend adding 20-30% buffer above your calculated requirement.
        </p>
        <p className="text-white/60 text-sm leading-relaxed">
          Use our{" "}
          <Link to="/premium-calculator" className="text-signal hover:underline">Premium Calculator</Link>{" "}
          to see how the cover amount affects your premium. You'll be surprised how affordable even
          ₹2 crore cover can be at a young age.
        </p>
      </section>

      {/* --- Riders to Consider --- */}
      <section id="riders" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Riders to Consider</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Riders are add-on benefits you can attach to your base term plan for additional coverage.
          They cost extra but are cheaper than buying separate policies. Here are the most important
          riders to evaluate.
        </p>

        <div className="space-y-3 mb-4">
          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-1">Accidental Death Benefit (ADB)</h3>
            <p className="text-xs text-white/50 mb-2">
              Pays an additional sum assured if death is due to an accident. Typically offers 100% of
              the base sum assured as extra payout.
            </p>
            <p className="text-xs text-white/40">
              <span className="text-signal">Best for:</span> People with high commute risk, frequent travelers, those in physically demanding jobs.
            </p>
          </div>

          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-1">Critical Illness Rider</h3>
            <p className="text-xs text-white/50 mb-2">
              Pays a lump sum on diagnosis of specified critical illnesses (cancer, heart attack,
              stroke, kidney failure, etc.). The payout is independent of medical expenses and can
              be used for treatment, lifestyle changes, or income replacement during recovery.
            </p>
            <p className="text-xs text-white/40">
              <span className="text-signal">Best for:</span> Everyone, especially if your health insurance has sub-limits or low coverage. Covers 10-34 critical illnesses depending on the plan.
            </p>
          </div>

          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-1">Waiver of Premium</h3>
            <p className="text-xs text-white/50 mb-2">
              Waives all future premiums if you become permanently disabled or critically ill. The
              policy continues without any further premium payments.
            </p>
            <p className="text-xs text-white/40">
              <span className="text-signal">Best for:</span> Sole breadwinners, people with dependents who may not be able to continue premium payments in case of disability.
            </p>
          </div>

          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-1">Income Benefit Rider</h3>
            <p className="text-xs text-white/50 mb-2">
              Instead of a lump sum, provides a monthly income to your family for a specified period
              after your death. Some plans offer both lump sum plus monthly income.
            </p>
            <p className="text-xs text-white/40">
              <span className="text-signal">Best for:</span> Salaried individuals whose families are used to monthly income. Ensures money isn't mismanaged as a lump sum.
            </p>
          </div>
        </div>

        <div className="panel p-4 border-l-4 border-l-warn mb-4">
          <div className="text-sm font-medium text-white mb-1">Rider Tip</div>
          <p className="text-sm text-white/50">
            Don't over-buy riders. Avoid riders that duplicate coverage you already have through
            health insurance or employer benefits. The total rider premium should ideally not exceed
            30% of your base term plan premium.
          </p>
        </div>
      </section>

      {/* --- Tax Benefits on Term Plans --- */}
      <section id="tax-benefits" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Tax Benefits on Term Plans</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Term insurance offers attractive tax benefits under both the old and new tax regimes,
          making it one of the most tax-efficient financial products available.
        </p>

        <div className="space-y-3 mb-4">
          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-1">Section 80C - Premium Deduction</h3>
            <p className="text-xs text-white/50 mb-2">
              The premium you pay for term insurance qualifies for deduction under Section 80C of the
              Income Tax Act, up to the overall limit of <strong className="text-white/70">₹1.5 lakh per year</strong>.
              This benefit is available under the old tax regime.
            </p>
            <p className="text-xs text-white/40">
              Note: The premium should not exceed 10% of the sum assured (for policies issued after
              April 2012) to qualify for full 80C benefit.
            </p>
          </div>

          <div className="panel-inner p-4">
            <h3 className="text-sm font-semibold text-white/90 mb-1">Section 10(10D) - Death Benefit Exemption</h3>
            <p className="text-xs text-white/50 mb-2">
              The death benefit (sum assured) received by the nominee is{" "}
              <strong className="text-good">completely tax-free</strong> under Section 10(10D).
              This applies regardless of the sum assured amount. Your family receives the full
              ₹1 crore (or whatever the cover is) without any tax deduction.
            </p>
            <p className="text-xs text-white/40">
              This is always exempt, even under the new tax regime.
            </p>
          </div>
        </div>

        <p className="text-white/60 text-sm leading-relaxed">
          For a detailed breakdown of all insurance-related tax benefits, read our{" "}
          <Link to="/guides/lic-tax-benefits" className="text-signal hover:underline">LIC Tax Benefits Guide</Link>.
          You can also use our{" "}
          <Link to="/tax-calculator" className="text-signal hover:underline">Tax Calculator</Link>{" "}
          to estimate your exact tax savings.
        </p>
      </section>

      {/* --- Common Myths About Term Insurance --- */}
      <section id="myths" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Common Myths About Term Insurance</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Term insurance is the most misunderstood financial product in India. Here are the most
          common myths and the facts behind them.
        </p>

        <div className="space-y-3">
          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <span className="text-bad text-xs font-semibold mt-0.5 shrink-0">MYTH</span>
              <div>
                <p className="text-sm text-white/80 mb-1">"Money is wasted if I survive"</p>
                <p className="text-xs text-white/50">
                  <span className="text-good font-medium">FACT:</span> You paid for protection,
                  just like car insurance or health insurance. You don't complain about "wasting"
                  car insurance premium if you don't have an accident. The value was the financial
                  security your family had throughout the policy term.
                </p>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <span className="text-bad text-xs font-semibold mt-0.5 shrink-0">MYTH</span>
              <div>
                <p className="text-sm text-white/80 mb-1">"Insurance company won't pay the claim"</p>
                <p className="text-xs text-white/50">
                  <span className="text-good font-medium">FACT:</span> LIC settles 98.5% of claims.
                  Top private insurers settle 97-99%. The remaining 1-3% rejections are almost
                  entirely due to fraud or non-disclosure of pre-existing conditions by the
                  policyholder. If you disclose everything honestly, your claim will be paid.
                </p>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <span className="text-bad text-xs font-semibold mt-0.5 shrink-0">MYTH</span>
              <div>
                <p className="text-sm text-white/80 mb-1">"I'm young, I don't need term insurance"</p>
                <p className="text-xs text-white/50">
                  <span className="text-good font-medium">FACT:</span> This is the single biggest
                  mistake. Premiums are locked at the age of purchase. A 25-year-old pays roughly
                  40-50% less than a 35-year-old for the same cover. Buy early and you save lakhs
                  in total premium over the policy lifetime. Also, health issues can develop at any
                  age, making you ineligible or increasing premiums dramatically.
                </p>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <span className="text-bad text-xs font-semibold mt-0.5 shrink-0">MYTH</span>
              <div>
                <p className="text-sm text-white/80 mb-1">"My employer cover is enough"</p>
                <p className="text-xs text-white/50">
                  <span className="text-good font-medium">FACT:</span> Employer group life cover
                  typically ranges from 2-5x annual CTC. That's often ₹10-30 lakh, far below
                  the 10-15x income recommendation. More critically, this cover ends the day you
                  leave the company, and by then you may be older, unhealthier, and facing much
                  higher premiums for individual cover. Always have your own term plan.
                </p>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <span className="text-bad text-xs font-semibold mt-0.5 shrink-0">MYTH</span>
              <div>
                <p className="text-sm text-white/80 mb-1">"I should just buy the cheapest plan"</p>
                <p className="text-xs text-white/50">
                  <span className="text-good font-medium">FACT:</span> Premium is important but
                  should not be the only factor. Consider the insurer's claim settlement ratio,
                  claim settlement time, available riders, customer service quality, and financial
                  stability. A plan that costs ₹500 more per year but has a better claim record
                  is worth it when your family actually needs to file a claim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- How to Buy Term Insurance --- */}
      <section id="how-to-buy" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">How to Buy Term Insurance</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Buying term insurance is straightforward, especially online. Here is the step-by-step
          process and tips for a smooth experience.
        </p>

        <div className="space-y-3 mb-4">
          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">1</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Calculate Your Coverage Need</p>
                <p className="text-xs text-white/50">
                  Use the 10-15x income rule or HLV method. Add outstanding debts and future expenses
                  (children's education, spouse's retirement). Use our{" "}
                  <Link to="/premium-calculator" className="text-signal hover:underline">Premium Calculator</Link>{" "}
                  to estimate premiums for different cover amounts.
                </p>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">2</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Choose Online vs Offline</p>
                <p className="text-xs text-white/50">
                  Online plans are 30-40% cheaper because there's no agent commission. The policy
                  terms, coverage, and claim process are identical. Offline is recommended only if you
                  need assistance with paperwork or prefer face-to-face interaction.
                </p>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">3</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Compare Plans and Apply</p>
                <p className="text-xs text-white/50">
                  Compare 3-4 plans on premium, CSR, riders, and features. Fill the online proposal
                  form accurately. Upload identity documents (Aadhaar, PAN). Choose your preferred
                  premium frequency (annual is cheapest).
                </p>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">4</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Complete Medical Tests</p>
                <p className="text-xs text-white/50">
                  For sum assured above ₹50 lakh, most insurers require basic medical tests
                  (blood test, urine test, ECG). The insurer usually arranges free home visits for
                  medical check-ups. Tests are simple and results go directly to the insurer.
                </p>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">5</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Choose Policy Term</p>
                <p className="text-xs text-white/50">
                  Select a policy term that covers you until your financial responsibilities end.
                  Most experts recommend covering till age 60-65. If you're 30, a 30-35 year term
                  is ideal. By then, your children will likely be independent and major debts cleared.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="panel p-4 border-l-4 border-l-signal mb-4">
          <div className="text-sm font-medium text-white mb-1">Critical Tip: Disclose Everything</div>
          <p className="text-sm text-white/50">
            Never hide or understate medical conditions, smoking habits, alcohol consumption, or
            family medical history on your proposal form. Non-disclosure is the number one reason
            for claim rejection. Even a minor omission discovered later can give the insurer
            grounds to deny the claim. Full honesty upfront protects your family later.
          </p>
        </div>
      </section>

      {/* --- Claim Settlement Tips --- */}
      <section id="claim-tips" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Claim Settlement Tips</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          A term insurance policy is only as good as its claim settlement. While 97-99% of claims
          are settled, a smooth claim process requires preparation. Here are practical tips to
          ensure your family doesn't face difficulties.
        </p>

        <div className="space-y-3 mb-4">
          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">1</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Keep Your Nominee Updated</p>
                <p className="text-xs text-white/50">
                  Review and update the nominee details whenever there's a life event (marriage,
                  birth of a child, divorce). An outdated nominee can cause legal disputes and
                  delay claim settlement. Use e-nomination for hassle-free updates.
                </p>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">2</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Inform Your Family About the Policy</p>
                <p className="text-xs text-white/50">
                  Your family must know that a term policy exists, the insurer's name, policy number,
                  and the sum assured. Many legitimate claims go unclaimed simply because the family
                  didn't know the policy existed. Have a dedicated document or digital record.
                </p>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">3</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Store Documents Safely</p>
                <p className="text-xs text-white/50">
                  Keep the policy document, premium receipts, and related papers in a safe place that
                  your family can access. Consider keeping digital copies in email or cloud storage.
                  Register on the insurer's portal for easy online access to all policy documents.
                </p>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">4</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Maintain Premium Payment Records</p>
                <p className="text-xs text-white/50">
                  Keep records of all premium payments with transaction IDs and bank statements.
                  Set up auto-debit or standing instructions to ensure you never miss a payment.
                  A lapsed policy due to missed premiums is the most preventable and painful outcome.
                </p>
              </div>
            </div>
          </div>

          <div className="panel-inner p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">5</div>
              <div>
                <p className="text-sm font-medium text-white/80 mb-1">Use E-Nomination</p>
                <p className="text-xs text-white/50">
                  E-nomination (electronic nomination registered with the insurer) eliminates the
                  need for succession certificates or legal heir certificates during claim
                  settlement. This can reduce the claim processing time from weeks to days. Most
                  insurers now support e-nomination through their portals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-white/60 text-sm leading-relaxed">
          For a detailed guide on the claim filing process, including required documents and
          timelines, read our{" "}
          <Link to="/guides/lic-claim-process" className="text-signal hover:underline">LIC Claim Process Guide</Link>.
          You can also use our{" "}
          <Link to="/claim-estimator" className="text-signal hover:underline">Claim Estimator</Link>{" "}
          to understand what your nominee would receive.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
