import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
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
import SEOHead from "./components/SEOHead";

const ROUTES = [
  { path: "/premium-calculator", label: "Premium", component: PremiumCalculator },
  { path: "/maturity-calculator", label: "Maturity", component: MaturityCalculator },
  { path: "/plan-comparison", label: "Compare", component: PlanComparison },
  { path: "/commission-calculator", label: "Commission", component: CommissionCalculator },
  { path: "/tax-calculator", label: "Tax", component: TaxCalculator },
  { path: "/policy-tracker", label: "Tracker", component: PolicyTracker },
  { path: "/bonus-history", label: "Bonus", component: BonusHistory },
  { path: "/marketing", label: "Marketing", component: MarketingGenerator },
  { path: "/client-reminders", label: "Clients", component: ClientReminders },
  { path: "/receipt-generator", label: "Receipt", component: ReceiptGenerator },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      <NavTabs routes={ROUTES} />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Navigate to="/premium-calculator" replace />} />
          {ROUTES.map((r) => (
            <Route key={r.path} path={r.path} element={<r.component />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
