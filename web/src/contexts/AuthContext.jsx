import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { migrateLocalData } from "../utils/apiStore";

const AuthContext = createContext(null);

const MIGRATED_KEY = "insurekit_migrated";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    try {
      const res = await fetch("/auth/me", { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        setUser(data);

        if (!localStorage.getItem(MIGRATED_KEY)) {
          try {
            await migrateLocalData();
            localStorage.setItem(MIGRATED_KEY, "1");
          } catch {}
        }
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const login = useCallback((provider) => {
    window.location.href = `/auth/${provider}/login`;
  }, []);

  const logout = useCallback(async () => {
    try {
      await fetch("/auth/logout", { method: "POST", credentials: "include" });
    } catch {}
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refreshUser: fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
