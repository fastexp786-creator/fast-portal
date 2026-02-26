"use client";

import { AuthModalProvider } from "@/components/AuthModalProvider";
import { TopBar } from "@/components/Header";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthModalProvider>
      <TopBar />
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </AuthModalProvider>
  );
}
