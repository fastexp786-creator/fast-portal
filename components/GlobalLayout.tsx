"use client";

import { AuthModalProvider } from "@/components/AuthModalProvider";
import { TopBar } from "@/components/Header";
import Header from "@/components/Header";
import BookingFooter from "@/components/BookingFooter";
import Newsletter from "@/components/Newsletter";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "@/messages/en.json";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthModalProvider>
      <TopBar />
      <NextIntlClientProvider locale="en" messages={enMessages as any}>
        <Header />
      </NextIntlClientProvider>
      {children}
      <Newsletter />
      <BookingFooter />
    </AuthModalProvider>
  );
}