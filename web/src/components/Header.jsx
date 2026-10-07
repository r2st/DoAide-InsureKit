import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header className="border-b border-white/7">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-lg bg-signal flex items-center justify-center font-bold text-ink-900 text-sm">
            IK
          </div>
          <div>
            <span className="text-white font-semibold text-lg tracking-tight">InsureKit</span>
            <span className="text-white/30 text-xs ml-1.5">by DoAide</span>
          </div>
        </a>
        <div className="flex items-center gap-4">
          <div className="text-white/30 text-xs hidden sm:block">
            Free LIC Agent Tools
          </div>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
