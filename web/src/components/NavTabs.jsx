import { NavLink } from "react-router-dom";

export default function NavTabs({ routes }) {
  return (
    <nav className="border-b border-white/7 overflow-x-auto">
      <div className="max-w-4xl mx-auto px-4 flex gap-1">
        {routes.map((r) => (
          <NavLink
            key={r.path}
            to={r.path}
            className={({ isActive }) =>
              `px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                isActive
                  ? "text-signal border-signal"
                  : "text-white/40 border-transparent hover:text-white/70"
              }`
            }
          >
            {r.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
