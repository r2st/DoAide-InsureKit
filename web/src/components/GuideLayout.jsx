import { useState } from "react";
import { Link } from "react-router-dom";
import WhatsAppShare from "./WhatsAppShare";
import PrintButton from "./PrintButton";

export default function GuideLayout({
  tag,
  title,
  subtitle,
  publishDate,
  readTime,
  toc = [],
  relatedGuides = [],
  relatedTools = [],
  children,
}) {
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <div className="animate-fade-up">
      {/* --- Tag badge + Title + Subtitle + Meta --- */}
      <span className="text-[10px] px-2 py-0.5 rounded bg-signal/10 text-signal font-medium uppercase tracking-wide">
        {tag}
      </span>
      <h1 className="text-2xl font-bold text-white mt-3 mb-1">{title}</h1>
      <p className="text-white/40 text-sm mb-2">{subtitle}</p>
      <div className="flex items-center gap-3 text-xs text-white/30 mb-8">
        {publishDate && <span>{publishDate}</span>}
        {publishDate && readTime && <span>-</span>}
        {readTime && <span>{readTime}</span>}
      </div>

      {/* --- Table of Contents --- */}
      {toc.length > 0 && (
        <nav className="panel-inner p-4 mb-8 print:hidden">
          <button
            onClick={() => setTocOpen((o) => !o)}
            className="flex items-center justify-between w-full text-sm font-semibold text-white/70 md:pointer-events-none"
          >
            <span>Table of Contents</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`md:hidden transition-transform ${tocOpen ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <ol
            className={`mt-3 space-y-1.5 text-sm list-decimal list-inside ${
              tocOpen ? "block" : "hidden md:block"
            }`}
          >
            {toc.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-white/50 hover:text-signal transition-colors no-underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* --- Guide content --- */}
      <div>{children}</div>

      {/* --- CTA panel --- */}
      <div className="panel-inner p-6 text-center my-10">
        <p className="text-white/70 text-sm mb-3">
          Want to run the numbers yourself?
        </p>
        <Link
          to="/"
          className="btn-primary inline-block text-sm no-underline"
        >
          Try our free calculators
        </Link>
      </div>

      {/* --- Share + Print --- */}
      <div className="flex flex-wrap items-center gap-3 mb-10 print:hidden">
        <WhatsAppShare text={`${title} - InsureKit\nhttps://insure.doaide.com${typeof window !== "undefined" ? window.location.pathname : ""}`} />
        <PrintButton />
      </div>

      {/* --- Related Tools --- */}
      {relatedTools.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">
            Related Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {relatedTools.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/50 hover:bg-signal/10 hover:text-signal transition-colors no-underline"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* --- Related Guides --- */}
      {relatedGuides.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">
            Related Guides
          </h2>
          <div className="space-y-2">
            {relatedGuides.map(({ path, title: t }) => (
              <Link
                key={path}
                to={path}
                className="block panel-inner p-3 text-sm text-white/60 hover:text-signal transition-colors no-underline"
              >
                {t}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
