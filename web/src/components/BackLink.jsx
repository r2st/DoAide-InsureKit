import { Link } from "react-router-dom";

export default function BackLink() {
  return (
    <div className="border-b border-white/7">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 py-2.5 text-xs text-white/35 hover:text-white/60 transition-colors no-underline"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          All Tools
        </Link>
      </div>
    </div>
  );
}
