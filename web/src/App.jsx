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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
