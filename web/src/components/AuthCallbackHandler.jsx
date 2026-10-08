import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AuthCallbackHandler() {
  const navigate = useNavigate();
  const { refreshUser } = useAuth();

  useEffect(() => {
    refreshUser().then(() => navigate("/", { replace: true }));
  }, [refreshUser, navigate]);

  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <div className="animate-spin w-6 h-6 border-2 border-signal border-t-transparent rounded-full mx-auto mb-3" />
        <p className="text-white/50 text-sm">Signing you in…</p>
      </div>
    </div>
  );
}
