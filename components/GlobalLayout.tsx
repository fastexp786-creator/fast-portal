"use client";

import { AuthModalProvider } from "@/components/AuthModalProvider";
import { TopBar } from "@/components/Header";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingFooter from "@/components/BookingFooter";
import Newsletter from "@/components/Newsletter";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "@/messages/en.json";
import { useState } from "react";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [useBookingFooter, setUseBookingFooter] = useState(true); // Toggle between footers

  return (
    <AuthModalProvider>
      <TopBar />
      <NextIntlClientProvider locale="en" messages={enMessages as any}>
        <Header />
      </NextIntlClientProvider>
      {children}
      <Newsletter />
      {useBookingFooter ? <BookingFooter /> : <Footer />}
      
      {/* Temporary Toggle Button - Remove in production */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setUseBookingFooter(!useBookingFooter)}
          className="bg-purple-600 text-white px-3 py-2 rounded-lg text-xs shadow-lg"
        >
          {useBookingFooter ? 'Old Footer' : 'New Footer'}
        </button>
      </div>
    </AuthModalProvider>
  );
}
