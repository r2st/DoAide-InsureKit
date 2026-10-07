export default function HowItWorks({ steps }) {
  return (
    <div className="panel p-5 mb-6">
      <h2 className="text-sm font-semibold text-white mb-4">How it works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-signal/10 flex items-center justify-center text-signal font-bold text-sm shrink-0">
              {i + 1}
            </div>
            <div>
              <div className="text-sm font-medium text-white">{step.title}</div>
              <div className="text-xs text-white/40 mt-0.5">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
