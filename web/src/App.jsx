import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEOHead from "./components/SEOHead";
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
import BackLink from "./components/BackLink";

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      {!isHome && <BackLink />}
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
