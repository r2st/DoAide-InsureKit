import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEOHead from "./components/SEOHead";
import Breadcrumb from "./components/Breadcrumb";
import HomePage from "./pages/HomePage";
import PremiumCalculator from "./pages/PremiumCalculator";
import MaturityCalculator from "./pages/MaturityCalculator";
import PlanComparison from "./pages/PlanComparison";
import CommissionCalculator from "./pages/CommissionCalculator";
import TaxCalculator from "./pages/TaxCalculator";
import PolicyTracker from "./pages/PolicyTracker";
import BonusHistory from "./pages/BonusHistory";
import MarketingGenerator from "./pages/MarketingGenerator";
import ClientReminders from "./pages/ClientReminders";
import ReceiptGenerator from "./pages/ReceiptGenerator";
import RevivalCalculator from "./pages/RevivalCalculator";
import SurrenderCalculator from "./pages/SurrenderCalculator";
import LoanCalculator from "./pages/LoanCalculator";
import PremiumCalendar from "./pages/PremiumCalendar";
import ClaimEstimator from "./pages/ClaimEstimator";
import PlanRecommender from "./pages/PlanRecommender";
import CompareAnyPlans from "./pages/CompareAnyPlans";
import GuidesIndex from "./pages/GuidesIndex";
import GuideBestPlans2026 from "./pages/GuideBestPlans2026";
import GuideCheckPolicyStatus from "./pages/GuideCheckPolicyStatus";
import GuideBonusRatesHistory from "./pages/GuideBonusRatesHistory";
import GuideReviveLapsedPolicy from "./pages/GuideReviveLapsedPolicy";
import GuideLicPremiumPayment from "./pages/GuideLicPremiumPayment";
import GuideLicPolicyStatus from "./pages/GuideLicPolicyStatus";
import GuideLicMaturityAmount from "./pages/GuideLicMaturityAmount";
import GuideLicLoanOnPolicy from "./pages/GuideLicLoanOnPolicy";
import GuideLicSurrenderValue from "./pages/GuideLicSurrenderValue";
import GuideLicAgentExam from "./pages/GuideLicAgentExam";
import GuideLicClaimProcess from "./pages/GuideLicClaimProcess";
import GuideLicTaxBenefits from "./pages/GuideLicTaxBenefits";
import GuideBestLicPlansChild from "./pages/GuideBestLicPlansChild";
import GuideBestTermPlan from "./pages/GuideBestTermPlan";
import PlansDirectoryPage from "./pages/PlansDirectoryPage";
import PlanDetailPage from "./pages/PlanDetailPage";
import VsLicSuperSalesSaathi from "./pages/compare/VsLicSuperSalesSaathi";
import VsPerfectAgentPlus from "./pages/compare/VsPerfectAgentPlus";
import PremiumTable from "./pages/PremiumTable";
import AgentDashboard from "./pages/AgentDashboard";
import BestLicTools from "./pages/BestLicTools";
import PolicyMaturityTracker from "./pages/PolicyMaturityTracker";
import GuideLicCommissionStructure from "./pages/GuideLicCommissionStructure";
import GuideHowToBecomeAgent from "./pages/GuideHowToBecomeAgent";
import GuideBestPlansForTaxSaving from "./pages/GuideBestPlansForTaxSaving";
import GuideSection80D from "./pages/GuideSection80D";
import GuideUlipVsMutualFund from "./pages/GuideUlipVsMutualFund";
import ClaimSettlementRatio from "./pages/ClaimSettlementRatio";
import SipVsInsurance from "./pages/SipVsInsurance";
import PlanPresentation from "./pages/PlanPresentation";
import PremiumDueRegister from "./pages/PremiumDueRegister";
import BranchLocator from "./pages/BranchLocator";
import ReportGenerator from "./pages/ReportGenerator";
import PaidUpValueCalculator from "./pages/PaidUpValueCalculator";
import InsuranceAgeCalculator from "./pages/InsuranceAgeCalculator";
import RiderPremiumCalculator from "./pages/RiderPremiumCalculator";
import RebateCalculator from "./pages/RebateCalculator";
import SelfMixPresentation from "./pages/SelfMixPresentation";
import FamilyMixPresentation from "./pages/FamilyMixPresentation";
import BudgetPresentation from "./pages/BudgetPresentation";
import ClubQualification from "./pages/ClubQualification";
import GreetingCardCreator from "./pages/GreetingCardCreator";

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      {!isHome && <Breadcrumb />}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/premium-calculator" element={<PremiumCalculator />} />
          <Route path="/maturity-calculator" element={<MaturityCalculator />} />
          <Route path="/plan-comparison" element={<PlanComparison />} />
          <Route path="/commission-calculator" element={<CommissionCalculator />} />
          <Route path="/tax-calculator" element={<TaxCalculator />} />
          <Route path="/policy-tracker" element={<PolicyTracker />} />
          <Route path="/bonus-history" element={<BonusHistory />} />
          <Route path="/marketing" element={<MarketingGenerator />} />
          <Route path="/client-reminders" element={<ClientReminders />} />
          <Route path="/receipt-generator" element={<ReceiptGenerator />} />
          <Route path="/revival-calculator" element={<RevivalCalculator />} />
          <Route path="/surrender-calculator" element={<SurrenderCalculator />} />
          <Route path="/loan-calculator" element={<LoanCalculator />} />
          <Route path="/premium-calendar" element={<PremiumCalendar />} />
          <Route path="/claim-estimator" element={<ClaimEstimator />} />
          <Route path="/plan-recommender" element={<PlanRecommender />} />
          <Route path="/compare-plans" element={<CompareAnyPlans />} />
          <Route path="/guides" element={<GuidesIndex />} />
          <Route path="/guides/best-lic-plans-2026" element={<GuideBestPlans2026 />} />
          <Route path="/guides/check-policy-status" element={<GuideCheckPolicyStatus />} />
          <Route path="/guides/bonus-rates-history" element={<GuideBonusRatesHistory />} />
          <Route path="/guides/revive-lapsed-policy" element={<GuideReviveLapsedPolicy />} />
          <Route path="/guides/lic-premium-payment-online" element={<GuideLicPremiumPayment />} />
          <Route path="/guides/lic-policy-status-check" element={<GuideLicPolicyStatus />} />
          <Route path="/guides/lic-maturity-amount-check" element={<GuideLicMaturityAmount />} />
          <Route path="/guides/lic-loan-on-policy" element={<GuideLicLoanOnPolicy />} />
          <Route path="/guides/lic-surrender-value" element={<GuideLicSurrenderValue />} />
          <Route path="/guides/lic-agent-exam-preparation" element={<GuideLicAgentExam />} />
          <Route path="/guides/lic-claim-process" element={<GuideLicClaimProcess />} />
          <Route path="/guides/lic-tax-benefits" element={<GuideLicTaxBenefits />} />
          <Route path="/guides/best-lic-plans-for-child" element={<GuideBestLicPlansChild />} />
          <Route path="/guides/best-term-insurance-plan" element={<GuideBestTermPlan />} />
          <Route path="/plans" element={<PlansDirectoryPage />} />
          <Route path="/plans/:slug" element={<PlanDetailPage />} />
          <Route path="/premium-table" element={<PremiumTable />} />
          <Route path="/dashboard" element={<AgentDashboard />} />
          <Route path="/compare/lic-super-sales-saathi" element={<VsLicSuperSalesSaathi />} />
          <Route path="/compare/perfect-agent-plus" element={<VsPerfectAgentPlus />} />
          <Route path="/best-lic-agent-tools-2026" element={<BestLicTools />} />
          <Route path="/maturity-tracker" element={<PolicyMaturityTracker />} />
          <Route path="/guides/lic-commission-structure" element={<GuideLicCommissionStructure />} />
          <Route path="/guides/how-to-become-lic-agent" element={<GuideHowToBecomeAgent />} />
          <Route path="/guides/best-plans-for-tax-saving" element={<GuideBestPlansForTaxSaving />} />
          <Route path="/guides/section-80d-health-insurance" element={<GuideSection80D />} />
          <Route path="/guides/ulip-vs-mutual-fund" element={<GuideUlipVsMutualFund />} />
          <Route path="/claim-settlement-ratio" element={<ClaimSettlementRatio />} />
          <Route path="/sip-vs-insurance" element={<SipVsInsurance />} />
          <Route path="/plan-presentation" element={<PlanPresentation />} />
          <Route path="/premium-due-register" element={<PremiumDueRegister />} />
          <Route path="/branch-locator" element={<BranchLocator />} />
          <Route path="/report-generator" element={<ReportGenerator />} />
          <Route path="/paid-up-value" element={<PaidUpValueCalculator />} />
          <Route path="/insurance-age-calculator" element={<InsuranceAgeCalculator />} />
          <Route path="/rider-premium-calculator" element={<RiderPremiumCalculator />} />
          <Route path="/rebate-calculator" element={<RebateCalculator />} />
          <Route path="/self-mix" element={<SelfMixPresentation />} />
          <Route path="/family-mix" element={<FamilyMixPresentation />} />
          <Route path="/budget-presentation" element={<BudgetPresentation />} />
          <Route path="/club-qualification" element={<ClubQualification />} />
          <Route path="/greeting-cards" element={<GreetingCardCreator />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
