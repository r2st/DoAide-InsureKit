import { useState } from "react";

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mt-12 mb-8">
      <h2 className="text-lg font-bold text-white mb-4">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="panel-inner overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-sm text-white/70 hover:text-white transition-colors"
            >
              <span className="font-medium pr-4">{item.q}</span>
              <svg
                className={`w-4 h-4 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-3 text-sm text-white/50 leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
