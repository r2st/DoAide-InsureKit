import { useMemo } from "react";
import { TRENDING_TOOLS } from "../utils/doaideViral";

export default function TrendingTools() {
  const shown = useMemo(() => {
    const day = new Date().getDate();
    const shuffled = [...TRENDING_TOOLS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = (day + i * 7) % (i + 1);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 6);
  }, []);

  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-white mb-4">
        <span role="img" aria-label="fire">🔥</span> Trending on DoAide
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {shown.map((tool) => (
          <a
            key={tool.url}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="panel p-4 hover:border-signal/30 transition-all group no-underline"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-signal/10 flex items-center justify-center text-lg shrink-0 group-hover:bg-signal/20 transition-colors">
                {tool.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-white group-hover:text-signal transition-colors">
                  {tool.name}
                </div>
                <div className="text-xs text-white/35 mt-0.5">
                  on DoAide {tool.product}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
