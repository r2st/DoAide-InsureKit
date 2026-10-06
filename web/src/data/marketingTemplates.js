export const TEMPLATE_CATEGORIES = [
  { id: "whatsapp", label: "WhatsApp Message" },
  { id: "social", label: "Social Media Post" },
  { id: "festival", label: "Festival Greeting" },
  { id: "reminder", label: "Premium Reminder" },
];

export const MARKETING_TEMPLATES = [
  {
    id: "wa_plan_pitch",
    category: "whatsapp",
    title: "Plan Introduction",
    template: `\u{1F6E1}️ *LIC {planName}* (Table {tableNo})

✅ {feature1}
✅ {feature2}
✅ {feature3}

\u{1F4B0} Premium starts from just ₹{minPremium}/month!

\u{1F4DE} Contact me for a FREE consultation
{agentName} | LIC Agent
\u{1F4F1} {agentPhone}

_Calculate your premium: insure.doaide.com_`,
    placeholders: ["planName", "tableNo", "feature1", "feature2", "feature3", "minPremium", "agentName", "agentPhone"],
  },
  {
    id: "wa_tax_saving",
    category: "whatsapp",
    title: "Tax Saving Season",
    template: `\u{1F4CA} *Save Tax with LIC — Section 80C*

✔️ Deduction up to ₹1,50,000/yr
✔️ Maturity exempt under 10(10D)
✔️ Guaranteed returns + life cover

Don't wait for March! Start your tax-saving policy today.

\u{1F449} Best plans for tax saving:
• Jeevan Anand (715)
• Jeevan Labh (736)
• New Endowment (714)

{agentName}
LIC Agent | \u{1F4F1} {agentPhone}

_Check your tax benefit: insure.doaide.com/tax-calculator_`,
    placeholders: ["agentName", "agentPhone"],
  },
  {
    id: "wa_money_back",
    category: "whatsapp",
    title: "Money Back Plan Pitch",
    template: `\u{1F4B8} *Get Money Back Every 5 Years!*

LIC *New Money Back Plan* (Table {tableNo})

\u{1F4C5} {survivalBenefit}
\u{1F6E1}️ Full SA death cover throughout
\u{1F3AF} Bonus at maturity

Perfect for those who want regular returns + protection!

{agentName} | LIC Agent
\u{1F4F1} {agentPhone}`,
    placeholders: ["tableNo", "survivalBenefit", "agentName", "agentPhone"],
  },
  {
    id: "wa_term_plan",
    category: "whatsapp",
    title: "Term Insurance Pitch",
    template: `⚡ *₹1 Crore Life Cover for just ₹{monthlyPremium}/month!*

LIC *{planName}* — Pure protection at lowest cost

✅ Highest cover, lowest premium
✅ Tax-free death benefit
✅ Online purchase available

Apne parivaar ko surakshit karein \u{1F3E0}

{agentName} | \u{1F4F1} {agentPhone}
_Calculate: insure.doaide.com/premium-calculator_`,
    placeholders: ["monthlyPremium", "planName", "agentName", "agentPhone"],
  },
  {
    id: "wa_child_plan",
    category: "whatsapp",
    title: "Child Plan Pitch",
    template: `\u{1F393} *Secure Your Child's Future with LIC!*

\u{1F476} LIC *{planName}* (Table {tableNo})

✅ Premium waiver on parent's death
✅ Guaranteed maturity at child's age 25
✅ Bonus: ₹{bonusRate}/1000 SA every year

Start early = lower premium + higher returns!

{agentName} | LIC Agent
\u{1F4F1} {agentPhone}`,
    placeholders: ["planName", "tableNo", "bonusRate", "agentName", "agentPhone"],
  },
  {
    id: "social_benefits",
    category: "social",
    title: "LIC Benefits Post",
    template: `\u{1F4AA} Why choose LIC?

1️⃣ Government-backed — sovereign guarantee
2️⃣ Highest claim settlement ratio (98%+)
3️⃣ Tax benefits under Sec 80C & 10(10D)
4️⃣ Guaranteed bonus + maturity
5️⃣ Loan facility available

Aapki suraksha, humari zimmedari!

#LIC #LifeInsurance #InsuranceIndia #TaxSaving #SecureYourFuture

{agentName} | LIC Agent | {agentPhone}`,
    placeholders: ["agentName", "agentPhone"],
  },
  {
    id: "social_retirement",
    category: "social",
    title: "Retirement Planning",
    template: `\u{1F3D6}️ Retirement ki planning aaj se shuru karein!

\u{1F4CA} LIC Pension & Endowment Plans:
• Jeevan Umang — 8% SA yearly income for life
• Jeevan Anand — maturity + free life cover
• Saral Pension — immediate lifelong pension

⏰ Jitni jaldi shuru, utna zyada paisa!

Start with just ₹5,000/month.

#RetirementPlanning #LIC #PensionPlan #FinancialFreedom

{agentName} | \u{1F4F1} {agentPhone}`,
    placeholders: ["agentName", "agentPhone"],
  },
  {
    id: "social_child_future",
    category: "social",
    title: "Child's Future",
    template: `\u{1F31F} Bachche ka sapna, aapka plan!

\u{1F393} Education \u{1F4B0} Marriage \u{1F3E0} Career

LIC Child Plans se secure karein unka kal:
✅ Guaranteed returns
✅ Premium waiver benefit
✅ Tax-free maturity

Aaj ₹1,000/month se shuru karein!

#ChildFuture #LIC #Education #ParentingGoals

{agentName} | LIC Agent`,
    placeholders: ["agentName"],
  },
  {
    id: "social_tax_season",
    category: "social",
    title: "Tax Saving Season",
    template: `\u{1F4CB} Tax Saving Deadline Approaching!

⏰ Don't miss Sec 80C deduction of ₹1.5 lakh!

LIC policies give you:
✅ Tax saving + Insurance + Returns

Top plans for tax saving:
\u{1F947} Jeevan Anand — best overall
\u{1F948} Jeevan Labh — limited premium
\u{1F949} New Endowment — classic choice

Act now, save later! \u{1F4B9}

#TaxSaving #Section80C #LIC #IncomeTA

{agentName} | {agentPhone}`,
    placeholders: ["agentName", "agentPhone"],
  },
  {
    id: "festival_diwali",
    category: "festival",
    title: "Diwali Greeting",
    template: `\u{1FA94}✨ *Shubh Deepawali!* ✨\u{1FA94}

Is Diwali par apne parivaar ko de suraksha ka tohfa!

\u{1F6E1}️ LIC — Zindagi ke saath bhi, zindagi ke baad bhi

Naye saal, nayi policy — nayi shuruat!

Aapke vishwaas ka dhanywad \u{1F64F}

{agentName}
LIC Agent | \u{1F4F1} {agentPhone}`,
    placeholders: ["agentName", "agentPhone"],
  },
  {
    id: "festival_newyear",
    category: "festival",
    title: "New Year Greeting",
    template: `\u{1F389} *Happy New Year {year}!* \u{1F389}

Naye saal ka sankalp:
✅ Parivaar ki suraksha
✅ Tax ki bachat
✅ Future ki planning

Is saal apni pehli LIC policy le kar ek secure future ki neev rakhein!

{agentName}
Your LIC Advisor | \u{1F4F1} {agentPhone}`,
    placeholders: ["year", "agentName", "agentPhone"],
  },
  {
    id: "festival_independence",
    category: "festival",
    title: "Independence Day",
    template: `\u{1F1EE}\u{1F1F3} *Happy Independence Day!* \u{1F1EE}\u{1F1F3}

Azaadi ka matlab hai — financial freedom bhi!

Apne parivaar ko de aarthik suraksha ka uphaar:
\u{1F6E1}️ LIC Life Insurance
\u{1F4B0} Tax Savings
\u{1F3AF} Guaranteed Returns

Jai Hind! \u{1F64F}

{agentName} | LIC Agent`,
    placeholders: ["agentName"],
  },
  {
    id: "reminder_premium",
    category: "reminder",
    title: "Premium Due Reminder",
    template: `\u{1F514} *Premium Reminder*

Namaste {clientName} ji,

Aapki LIC policy *{policyNumber}* ka premium ₹{premiumAmount} {dueDate} ko due hai.

\u{1F4B3} Payment modes: Online / Branch / Agent
⚠️ Late payment se policy lapse ho sakti hai.

Koi madad chahiye? Mujhe call karein!

{agentName} | \u{1F4F1} {agentPhone}`,
    placeholders: ["clientName", "policyNumber", "premiumAmount", "dueDate", "agentName", "agentPhone"],
  },
  {
    id: "reminder_renewal",
    category: "reminder",
    title: "Policy Renewal Reminder",
    template: `\u{1F504} *Policy Renewal Reminder*

Dear {clientName},

Your LIC policy *{policyNumber}* is due for renewal.

\u{1F4C5} Renewal Date: {renewalDate}
\u{1F4B0} Premium: ₹{premiumAmount}

Timely renewal ensures:
✅ Continuous life cover
✅ Bonus accrual
✅ Tax benefits

Need help? Reach out anytime!

{agentName} | \u{1F4F1} {agentPhone}`,
    placeholders: ["clientName", "policyNumber", "renewalDate", "premiumAmount", "agentName", "agentPhone"],
  },
];

export function fillTemplate(template, values) {
  let result = template;
  for (const [key, value] of Object.entries(values)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, "g"), value || "");
  }
  return result;
}

export function getTemplatesByCategory(category) {
  return MARKETING_TEMPLATES.filter((t) => t.category === category);
}
