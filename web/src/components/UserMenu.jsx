import { useAuth } from "../contexts/AuthContext";

export default function UserMenu() {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    return (
      <a href="/login" className="text-xs font-medium px-3 py-1.5 rounded-lg bg-signal/15 text-signal hover:bg-signal/25 transition-colors no-underline">
        Sign in
      </a>
    );
  }

  return (
    <a href="/profile" className="flex items-center gap-2 no-underline">
      {user.picture ? (
        <img src={user.picture} alt="User profile photo" className="w-7 h-7 rounded-full" referrerPolicy="no-referrer" loading="lazy" />
      ) : (
        <div className="w-7 h-7 rounded-full bg-signal/20 flex items-center justify-center text-signal font-semibold text-xs">
          {user.name?.[0]?.toUpperCase() || "?"}
        </div>
      )}
      <span className="text-white/70 text-sm hidden sm:inline">{user.name?.split(" ")[0]}</span>
    </a>
  );
}
