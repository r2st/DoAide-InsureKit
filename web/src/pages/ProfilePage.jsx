import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PROVIDER_LABELS = {
  google: "Google",
  github: "GitHub",
  microsoft: "Microsoft",
};

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-6 h-6 border-2 border-signal border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="max-w-md mx-auto py-8">
      <h1 className="text-2xl font-bold text-white mb-6">Account</h1>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-4">
          {user.picture ? (
            <img src={user.picture} alt="User profile photo" className="w-14 h-14 rounded-full" referrerPolicy="no-referrer" loading="lazy" />
          ) : (
            <div className="w-14 h-14 rounded-full bg-signal/20 flex items-center justify-center text-signal font-bold text-xl">
              {user.name?.[0]?.toUpperCase() || "?"}
            </div>
          )}
          <div>
            <div className="text-white font-semibold text-lg">{user.name}</div>
            <div className="text-white/50 text-sm">{user.email}</div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-white/50">Sign-in provider</span>
            <span className="text-white">{PROVIDER_LABELS[user.provider] || user.provider}</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-white/40 text-xs mb-4">
            Your client and policy data syncs across all your devices. Calculator tools remain free and don't require sign-in.
          </p>
          <button
            onClick={logout}
            className="w-full py-2.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors text-sm font-medium"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
