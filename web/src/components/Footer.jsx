export default function Footer() {
  return (
    <footer className="border-t border-white/7 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-white/30">
        <p>
          Made by{" "}
          <a href="https://doaide.com" className="text-signal hover:text-signal-soft no-underline">
            DoAide
          </a>
          {" "}&mdash; Free, no login required
        </p>
        <p className="mt-1 text-xs text-white/20">
          Disclaimer: Calculations are approximate. Verify with LIC before making decisions.
          Not affiliated with LIC of India.
        </p>
      </div>
    </footer>
  );
}
