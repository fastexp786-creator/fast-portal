"use client";

import { useEffect } from "react";

export default function RtlProvider({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const rtlLocales = new Set(["ar", "ur", "fa", "he"]);
    const dir = rtlLocales.has(locale) ? "rtl" : "ltr";
    const html = document.documentElement;
    html.setAttribute("dir", dir);
    html.setAttribute("lang", locale);
    document.body.classList.toggle("rtl", dir === "rtl");
  }, [locale]);

  return <>{children}</>;
}

