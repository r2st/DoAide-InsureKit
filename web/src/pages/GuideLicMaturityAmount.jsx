import { Link } from "react-router-dom";
import GuideLayout from "../components/GuideLayout";
import FAQ from "../components/FAQ";

const FAQ_ITEMS = [
  {
    q: "How is LIC maturity amount calculated?",
    a: "LIC maturity amount = Sum Assured + Accumulated Simple Reversionary Bonus + Final Additional Bonus (FAB). The bonus is declared annually by LIC based on the plan's performance. FAB is a one-time addition paid at maturity for policies with a term of 15 years or more.",
  },
  {
    q: "Is the LIC maturity amount taxable?",
    a: "Under Section 10(10D), maturity proceeds are fully tax-free if the annual premium does not exceed 10% of the sum assured (20% for policies issued before April 2012). If the premium exceeds this limit, the maturity amount is taxable as 'Income from Other Sources' and TDS at 5% is deducted if the amount exceeds Rs 1 lakh.",
  },
  {
    q: "How do I claim my LIC maturity amount?",
    a: "LIC sends an intimation letter 2-3 months before maturity. Submit the Discharge Voucher (signed), original policy bond, ID proof, cancelled cheque, and NEFT mandate form to your LIC branch. If NEFT details are already registered, the amount is credited automatically within 7-10 days of maturity.",
  },
  {
    q: "Can I know the exact maturity amount before the policy matures?",
    a: "You can estimate the maturity amount using declared bonus rates, but the exact amount is finalized only at maturity because the Final Additional Bonus (FAB) is declared in the maturity year. Our Maturity Calculator provides an estimate based on the latest declared rates.",
  },
  {
    q: "What happens if I don't claim my maturity amount?",
    a: "If you don't claim within the stipulated period, the amount remains with LIC and earns a nominal interest under the Unclaimed Amount Scheme. You can claim it at any time by contacting your branch. However, after 10 years, the unclaimed amount is transferred to the Senior Citizens' Welfare Fund.",
  },
  {
    q: "Does loan against the policy reduce the maturity amount?",
    a: "Yes. Any outstanding loan amount (principal + accrued interest) is deducted from the maturity payout. If you have taken a policy loan, it is advisable to repay it before maturity to receive the full maturity value.",
  },
  {
    q: "What is the difference between maturity value and surrender value?",
    a: "Maturity value is the full amount you receive when the policy completes its full term - it includes SA, all accumulated bonuses, and FAB. Surrender value is what you get if you exit early - it is significantly lower, typically 30-50% of the maturity value, as bonuses are discounted and a surrender penalty applies.",
  },
];

const TOC = [
  { id: "what-is-maturity", label: "What is LIC Maturity Amount" },
  { id: "components", label: "Components of Maturity Value" },
  { id: "check-online", label: "How to Check Maturity Online" },
  { id: "insurekit-calculator", label: "Using InsureKit Maturity Calculator" },
  { id: "sample-calculations", label: "Sample Maturity Calculations" },
  { id: "factors-affecting", label: "Factors Affecting Maturity Value" },
  { id: "maturity-vs-surrender", label: "Maturity Amount vs Surrender Value" },
  { id: "tax-on-maturity", label: "Tax on Maturity Amount" },
  { id: "claim-process", label: "What to Do When Policy Matures" },
];

const RELATED_GUIDES = [
  { path: "/guides/lic-policy-status-check", title: "How to Check LIC Policy Status Online" },
  { path: "/guides/lic-tax-benefits", title: "LIC Tax Benefits Guide" },
  { path: "/guides/lic-claim-process", title: "LIC Claim Process Guide" },
];

const RELATED_TOOLS = [
  { path: "/maturity-calculator", label: "Maturity Calculator" },
  { path: "/claim-estimator", label: "Claim Estimator" },
  { path: "/tax-calculator", label: "Tax Calculator" },
  { path: "/bonus-history", label: "Bonus History" },
];

export default function GuideLicMaturityAmount() {
  return (
    <GuideLayout
      tag="How-To Guide"
      title="How to Check LIC Maturity Amount Online"
      subtitle="Understand how LIC maturity amount is calculated, check your projected payout, and learn how to claim it when your policy matures."
      publishDate="Oct 2026"
      readTime="9 min read"
      toc={TOC}
      relatedGuides={RELATED_GUIDES}
      relatedTools={RELATED_TOOLS}
    >
      {/* --- What is Maturity Amount --- */}
      <section id="what-is-maturity" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">What is LIC Maturity Amount</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          The maturity amount is the total sum you receive from LIC when your endowment or
          money-back policy completes its full term. It is the culmination of years of premium
          payments and represents the guaranteed return on your life insurance investment. Unlike
          term plans (which have no maturity benefit), traditional LIC plans build up a maturity
          corpus through a combination of the sum assured and bonuses declared over the policy
          term.
        </p>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          The maturity amount is typically much higher than the total premiums you pay. This is
          because LIC invests your premiums and shares the profits with you in the form of
          bonuses. The longer your policy term and higher the sum assured, the larger the
          maturity payout.
        </p>
        <div className="panel p-4 border-l-4 border-l-signal">
          <p className="text-white/60 text-sm">
            <span className="text-signal font-semibold">Key Formula:</span>{" "}
            Maturity Amount = Sum Assured + Simple Reversionary Bonus (accumulated) + Final
            Additional Bonus (if applicable)
          </p>
        </div>
      </section>

      {/* --- Components --- */}
      <section id="components" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Components of Maturity Value</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Understanding the three components of your maturity payout helps you estimate the
          amount you'll receive and make informed decisions about your policy.
        </p>
        <div className="space-y-3 mb-4">
          <div className="panel-inner p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-signal text-lg font-bold">1</span>
              <p className="text-white font-semibold text-sm">Sum Assured (SA)</p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              This is the guaranteed base amount of your policy, chosen at the time of purchase.
              It is the minimum amount payable at maturity (or on death). For example, if you
              bought a Jeevan Anand policy with SA of Rs 5,00,000, this amount is guaranteed
              regardless of LIC's bonus performance. The sum assured is printed on your policy
              bond and never changes during the policy term.
            </p>
          </div>
          <div className="panel-inner p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-signal text-lg font-bold">2</span>
              <p className="text-white font-semibold text-sm">Simple Reversionary Bonus (SRB)</p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              LIC declares a Simple Reversionary Bonus each year for participating policies. This
              bonus is expressed as a rate per Rs 1,000 of sum assured. Once declared, it is
              guaranteed and cannot be taken away. The bonus accumulates over the entire policy
              term. For example, if LIC declares Rs 50 per Rs 1,000 SA for a particular plan,
              and your SA is Rs 5,00,000, the bonus for that year is Rs 25,000. Over a 20-year
              term with similar rates, the accumulated bonus could be Rs 5,00,000 or more.
            </p>
          </div>
          <div className="panel-inner p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-signal text-lg font-bold">3</span>
              <p className="text-white font-semibold text-sm">Final Additional Bonus (FAB)</p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              The Final Additional Bonus is a one-time lump sum added at the time of maturity (or
              death claim). It is declared by LIC for policies with a term of 15 years or more.
              FAB rates vary by plan and term. For long-term policies, FAB can add a significant
              amount to the maturity payout. For instance, a Jeevan Anand policy with SA of
              Rs 5,00,000 and a 25-year term might receive an FAB of Rs 1,00,000 or more,
              depending on the declared rates in the maturity year.
            </p>
          </div>
        </div>
      </section>

      {/* --- Check Online --- */}
      <section id="check-online" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">How to Check Maturity Online</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          You can get a reasonable estimate of your maturity amount through the LIC customer
          portal. While the exact amount is finalized only at maturity (because FAB is declared
          annually), the portal shows the accumulated bonus which forms the bulk of your payout.
        </p>
        <div className="space-y-2 mb-4">
          {[
            "Log in to your LIC customer portal at licindia.in using your registered credentials.",
            "Navigate to your policy details by clicking on the policy number from the dashboard.",
            "Check the 'Bonus' section, which shows the year-wise Simple Reversionary Bonus credited to your policy.",
            "Note the total accumulated bonus amount. Add this to your Sum Assured for a preliminary estimate.",
            "For policies nearing maturity, check the LIC website for the latest FAB declaration. Add the applicable FAB to your estimate.",
            "For a more accurate projection, use the InsureKit Maturity Calculator which factors in the latest declared bonus rates.",
          ].map((step, i) => (
            <div key={i} className="panel-inner p-3 flex gap-3 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-signal/10 text-signal text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-white/60 text-sm">{step}</p>
            </div>
          ))}
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          If your policy is within 2-3 months of maturity, LIC will send you an intimation
          letter with the exact maturity amount. This letter also contains the Discharge Voucher
          that you need to sign and submit to receive the payout.
        </p>
      </section>

      {/* --- InsureKit Calculator --- */}
      <section id="insurekit-calculator" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Using InsureKit Maturity Calculator</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Our free Maturity Calculator provides an estimate based on the latest declared bonus
          rates for your specific LIC plan. It factors in the plan type, policy term, sum
          assured, and applicable bonus rates to give you a projected maturity value.
        </p>
        <div className="space-y-2 mb-4">
          {[
            "Select your LIC plan from the dropdown (e.g., Jeevan Anand 915, Jeevan Labh 936, New Endowment 914).",
            "Enter your Sum Assured and Policy Term as per your policy bond.",
            "The calculator automatically applies the latest declared bonus rates for your plan.",
            "View the projected maturity breakdown: SA + Accumulated Bonus + Estimated FAB.",
            "Compare with total premiums paid to see your effective return on investment.",
          ].map((step, i) => (
            <div key={i} className="panel-inner p-3 flex gap-3 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-signal/10 text-signal text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-white/60 text-sm">{step}</p>
            </div>
          ))}
        </div>
        <div className="panel-inner p-5 text-center">
          <p className="text-white/60 text-sm mb-3">
            Estimate your LIC maturity payout with the latest bonus rates
          </p>
          <Link
            to="/maturity-calculator"
            className="text-signal text-sm font-semibold hover:underline no-underline"
          >
            Open Maturity Calculator &rarr;
          </Link>
        </div>
      </section>

      {/* --- Sample Calculations --- */}
      <section id="sample-calculations" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Sample Maturity Calculations</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Here are two examples showing how maturity amounts are calculated for popular LIC plans.
          These use the latest declared bonus rates and are illustrative estimates.
        </p>

        <div className="panel-inner p-5 mb-4">
          <p className="text-signal text-sm font-semibold mb-3">Example 1: Jeevan Anand (Plan 915)</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm mb-4">
            <span className="text-white/50">Sum Assured</span>
            <span className="text-white/80 font-medium">Rs 5,00,000</span>
            <span className="text-white/50">Policy Term</span>
            <span className="text-white/80 font-medium">21 years</span>
            <span className="text-white/50">Annual Premium (approx.)</span>
            <span className="text-white/80 font-medium">Rs 22,600</span>
            <span className="text-white/50">Total Premiums Paid</span>
            <span className="text-white/80 font-medium">Rs 4,74,600</span>
          </div>
          <div className="border-t border-white/10 pt-3">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <span className="text-white/50">SRB (Rs 50/1000 SA x 21 yrs)</span>
              <span className="text-white/80 font-medium">Rs 5,25,000</span>
              <span className="text-white/50">FAB (estimated Rs 20/1000 SA)</span>
              <span className="text-white/80 font-medium">Rs 1,00,000</span>
              <span className="text-white/50 font-semibold">Estimated Maturity Amount</span>
              <span className="text-signal font-bold">Rs 11,25,000</span>
            </div>
          </div>
          <p className="text-white/40 text-xs mt-3">
            * Jeevan Anand also provides a whole-life cover of Rs 5,00,000 after maturity at no
            extra cost. Bonus rates are illustrative and subject to LIC declarations.
          </p>
        </div>

        <div className="panel-inner p-5">
          <p className="text-signal text-sm font-semibold mb-3">Example 2: Jeevan Labh (Plan 936)</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm mb-4">
            <span className="text-white/50">Sum Assured</span>
            <span className="text-white/80 font-medium">Rs 10,00,000</span>
            <span className="text-white/50">Policy Term</span>
            <span className="text-white/80 font-medium">25 years (premium paying 16 yrs)</span>
            <span className="text-white/50">Annual Premium (approx.)</span>
            <span className="text-white/80 font-medium">Rs 39,400</span>
            <span className="text-white/50">Total Premiums Paid</span>
            <span className="text-white/80 font-medium">Rs 6,30,400</span>
          </div>
          <div className="border-t border-white/10 pt-3">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <span className="text-white/50">Loyalty Addition</span>
              <span className="text-white/80 font-medium">Rs 2,50,000 (estimated)</span>
              <span className="text-white/50">SRB (Rs 58/1000 SA x 25 yrs)</span>
              <span className="text-white/80 font-medium">Rs 14,50,000</span>
              <span className="text-white/50">FAB (estimated)</span>
              <span className="text-white/80 font-medium">Rs 2,00,000</span>
              <span className="text-white/50 font-semibold">Estimated Maturity Amount</span>
              <span className="text-signal font-bold">Rs 29,00,000</span>
            </div>
          </div>
          <p className="text-white/40 text-xs mt-3">
            * Jeevan Labh has a limited premium paying term. Bonus and loyalty addition rates are
            illustrative. Actual amounts depend on LIC's annual declarations.
          </p>
        </div>
      </section>

      {/* --- Factors Affecting --- */}
      <section id="factors-affecting" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Factors Affecting Maturity Value</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Several factors determine the final maturity amount you receive. Understanding these
          helps you make better decisions when buying a new policy or managing an existing one.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              factor: "Bonus Rates",
              desc: "Higher bonus declarations by LIC directly increase your maturity amount. Bonus rates vary by plan and LIC's investment performance each year.",
            },
            {
              factor: "Policy Term",
              desc: "Longer terms accumulate more years of bonus and qualify for higher FAB rates. A 25-year policy typically yields much more per rupee of premium than a 15-year one.",
            },
            {
              factor: "Sum Assured",
              desc: "Higher SA means higher bonus accumulation in absolute terms, since bonus is calculated per Rs 1,000 of SA. This is the most direct lever for higher maturity.",
            },
            {
              factor: "Premium Payment Mode",
              desc: "Annual payment mode attracts a rebate (typically 2%) compared to monthly/quarterly. Over the policy term, this rebate reduces total cost and improves effective returns.",
            },
            {
              factor: "Policy Loan Outstanding",
              desc: "Any loan taken against the policy, along with accrued interest, is deducted from the maturity payout. Repaying the loan before maturity maximises your payout.",
            },
            {
              factor: "Plan Type",
              desc: "Different LIC plans have different bonus structures. Jeevan Anand provides whole-life cover post-maturity. Jeevan Labh offers loyalty additions. Choose based on your goals.",
            },
          ].map((item, i) => (
            <div key={i} className="panel-inner p-4">
              <p className="text-white font-semibold text-sm mb-1">{item.factor}</p>
              <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Maturity vs Surrender --- */}
      <section id="maturity-vs-surrender" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Maturity Amount vs Surrender Value</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Policyholders sometimes confuse maturity value with surrender value. These are very
          different, and understanding the difference can prevent costly mistakes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="panel-inner p-4 border-t-2 border-t-good">
            <p className="text-good text-sm font-semibold mb-2">Maturity Value</p>
            <ul className="text-white/50 text-xs space-y-1.5 leading-relaxed">
              <li>Received when policy completes full term</li>
              <li>Includes SA + full accumulated bonus + FAB</li>
              <li>Maximum possible payout from the policy</li>
              <li>Generally tax-free under Section 10(10D)</li>
              <li>No surrender penalty applied</li>
            </ul>
          </div>
          <div className="panel-inner p-4 border-t-2 border-t-warn">
            <p className="text-warn text-sm font-semibold mb-2">Surrender Value</p>
            <ul className="text-white/50 text-xs space-y-1.5 leading-relaxed">
              <li>Received when you exit the policy early</li>
              <li>Calculated as a percentage of paid premiums and bonus</li>
              <li>Typically 30-50% of maturity value</li>
              <li>May be taxable if Section 10(10D) conditions not met</li>
              <li>Surrender penalty reduces the payout significantly</li>
            </ul>
          </div>
        </div>
        <div className="panel p-4 border-l-4 border-l-warn">
          <p className="text-white/60 text-sm">
            <span className="text-warn font-semibold">Advisory:</span> Surrendering a policy in
            the early years (first 5-7 years) results in significant losses. If you're
            facing a financial crunch, consider a policy loan instead of surrender. The loan
            amount is up to 90% of the surrender value at a reasonable interest rate, and your
            policy stays in force.
          </p>
        </div>
      </section>

      {/* --- Tax on Maturity --- */}
      <section id="tax-on-maturity" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Tax on Maturity Amount</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Understanding the tax implications of your LIC maturity amount is important for
          financial planning. The tax treatment depends on when the policy was issued and the
          premium-to-SA ratio.
        </p>
        <div className="space-y-3 mb-4">
          <div className="panel-inner p-4">
            <p className="text-white font-semibold text-sm mb-2">Section 10(10D) - Tax Exemption Rules</p>
            <div className="space-y-2 text-white/50 text-sm leading-relaxed">
              <p>
                <span className="text-good font-semibold">Policies issued after 1 Apr 2012:</span>{" "}
                Maturity proceeds are tax-free if the annual premium does not exceed 10% of the
                sum assured. For example, a policy with SA of Rs 10,00,000 must have an annual
                premium of Rs 1,00,000 or less for tax-free maturity.
              </p>
              <p>
                <span className="text-good font-semibold">Policies issued before 1 Apr 2012:</span>{" "}
                The premium limit is 20% of the sum assured. These older policies have a more
                relaxed tax exemption threshold.
              </p>
              <p>
                <span className="text-good font-semibold">Policies issued after 1 Apr 2023:</span>{" "}
                If the total annual premium across all life insurance policies exceeds Rs 5,00,000,
                the maturity proceeds from policies with combined premium above this threshold
                become taxable.
              </p>
            </div>
          </div>
          <div className="panel-inner p-4">
            <p className="text-white font-semibold text-sm mb-2">When Maturity is Taxable</p>
            <p className="text-white/50 text-sm leading-relaxed mb-2">
              If your policy does not qualify for Section 10(10D) exemption, the maturity amount
              is taxable as 'Income from Other Sources'. It is added to your total income for
              the financial year and taxed at your applicable slab rate.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              LIC deducts TDS at 5% if the taxable maturity amount exceeds Rs 1,00,000 in a
              financial year. You can claim the TDS credit while filing your income tax return.
              If your total income is below the taxable limit, you can submit Form 15G/15H
              to LIC to avoid TDS deduction.
            </p>
          </div>
        </div>
        <div className="panel p-4 border-l-4 border-l-signal">
          <p className="text-white/60 text-sm">
            <span className="text-signal font-semibold">Tip:</span> Most traditional LIC plans
            with moderate sum assured easily qualify for Section 10(10D) exemption. Use our{" "}
            <Link to="/tax-calculator" className="text-signal hover:underline">
              Tax Calculator
            </Link>{" "}
            to check if your specific policy qualifies.
          </p>
        </div>
      </section>

      {/* --- Claim Process --- */}
      <section id="claim-process" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">What to Do When Policy Matures</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          When your LIC policy reaches its maturity date, follow these steps to ensure a smooth
          and timely payout. LIC typically initiates the process 2-3 months before maturity.
        </p>
        <div className="space-y-2 mb-4">
          {[
            "LIC sends a maturity intimation letter to your registered address, 2-3 months before the maturity date. This contains the Discharge Voucher and the exact maturity amount.",
            "Verify the maturity amount mentioned in the letter. Cross-check with the bonus details on the LIC portal and the FAB rates for your plan.",
            "Sign the Discharge Voucher with the date. If the policy has multiple lives assured or assignments, all parties must sign.",
            "Collect the required documents: original policy bond, signed Discharge Voucher, identity proof (Aadhaar/PAN), and a cancelled cheque or NEFT mandate form for the bank account where you want the credit.",
            "Submit all documents to your LIC servicing branch. If you've already registered your bank details through NEFT mandate, the process is faster.",
            "LIC processes the maturity claim and credits the amount to your bank account, usually within 7-10 working days of maturity date if all documents are in order.",
            "Download the maturity payment receipt from the LIC portal for your records and for income tax filing purposes.",
          ].map((step, i) => (
            <div key={i} className="panel-inner p-3 flex gap-3 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-signal/10 text-signal text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-white/60 text-sm">{step}</p>
            </div>
          ))}
        </div>
        <div className="panel p-4 border-l-4 border-l-signal mb-4">
          <p className="text-white/60 text-sm">
            <span className="text-signal font-semibold">Pro Tip:</span> Register your bank
            account with LIC via NEFT mandate well before the maturity date. This allows LIC to
            credit the maturity amount directly without waiting for you to submit a cheque. You
            can register NEFT details at your branch or through the LIC portal.
          </p>
        </div>

        <h3 className="text-sm font-semibold text-white/80 mb-2">What if You've Lost the Original Policy Bond?</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          If you've misplaced the original policy bond, you need to apply for a duplicate before
          the maturity date. Submit an indemnity bond, an affidavit (on Rs 100 stamp paper), a
          copy of the FIR (if lost/stolen), and your identity proof to the LIC branch. The
          duplicate bond takes 2-4 weeks to process, so start early. Alternatively, LIC may
          accept an indemnity bond in lieu of the original at the time of maturity settlement
          for low-value policies.
        </p>
        <p className="text-white/60 text-sm leading-relaxed">
          For policies where the maturity amount is below Rs 1,00,000, LIC may waive the
          requirement for the original policy bond and settle the claim with simplified
          documentation.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
