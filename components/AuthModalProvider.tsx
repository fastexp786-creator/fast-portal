"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import LoginSignupModal from "./LoginSignupModal";

interface AuthModalContextValue {
  openAuthModal: (pendingUrl?: string) => void;
}

const AuthModalContext = createContext<AuthModalContextValue | null>(null);

export function useAuthModal() {
  const ctx = useContext(AuthModalContext);
  if (!ctx) {
    return {
      openAuthModal: (url?: string) => {
        if (url) window.open(url, "_blank", "noopener,noreferrer");
      },
    };
  }
  return ctx;
}

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);

  const openAuthModal = useCallback((url?: string) => {
    setPendingUrl(url ?? null);
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
    setPendingUrl(null);
  }, []);

  const onContinueAsGuest = useCallback(() => {
    if (pendingUrl) {
      window.open(pendingUrl, "_blank", "noopener,noreferrer");
    }
    setPendingUrl(null);
  }, [pendingUrl]);

  useEffect(() => {
    const doRedirect = () => {
      if (typeof window !== "undefined" && window.location?.pathname === "/dashboard") {
        setOpen(false);
        setPendingUrl(null);
        return;
      }
      setOpen(false);
      setPendingUrl(null);
      window.location.href = "/dashboard";
    };

    const { data: sub } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!session) return;
      try {
        doRedirect();
      } catch {
        // no-op
      }
    });
    const handleBypass = () => {
      try {
        const flag = localStorage.getItem("fjc_admin_bypass");
        if (flag === "1") {
          doRedirect();
        }
      } catch {}
    };
    window.addEventListener("fjc-admin-bypass", handleBypass as EventListener);
    handleBypass();
    return () => {
      sub.subscription.unsubscribe();
      window.removeEventListener("fjc-admin-bypass", handleBypass as EventListener);
    };
  }, []);

  return (
    <AuthModalContext.Provider value={{ openAuthModal }}>
      {children}
      <LoginSignupModal
        open={open}
        onClose={onClose}
        onContinueAsGuest={pendingUrl ? onContinueAsGuest : undefined}
      />
    </AuthModalContext.Provider>
  );
}
