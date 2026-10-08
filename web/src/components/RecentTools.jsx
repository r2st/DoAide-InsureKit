import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecentTools } from "../utils/doaideViral";

export default function RecentTools() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    setRecent(getRecentTools());
  }, []);

  if (recent.length === 0) return null;

  return (
    <section className="mb-8 p-4 rounded-xl bg-signal/5 border border-signal/15">
      <div className="text-xs font-semibold text-signal uppercase tracking-wide mb-3">
        Pick up where you left off
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {recent.map((tool) => (
          <Link
            key={tool.path}
            to={tool.path}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] border border-white/10 text-white text-xs font-medium whitespace-nowrap no-underline hover:border-signal/30 transition-colors"
          >
            {tool.name}
            <span className="text-signal font-bold">Continue &rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
