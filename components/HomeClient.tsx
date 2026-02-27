"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import Categories from "@/components/Categories";
import JobsSection from "@/components/JobsSection";
import CVSection from "@/components/CVSection";
import ResourceHub from "@/components/ResourceHub";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import AIVisaTerminal from "@/components/AIVisaTerminal";
import Contact from "@/components/Contact";
import SocialSidebar from "@/components/SocialSidebar";
import DarkModeToggle from "@/components/DarkModeToggle";
import AdPopup from "@/components/AdPopup";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function HomeClient() {
  const [filterTitle, setFilterTitle] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [filterTrigger, setFilterTrigger] = useState(0);
  const router = useRouter();

  const handleFilter = useCallback((title: string, country: string) => {
    // Update local section for immediate feedback
    setFilterTitle(title);
    setFilterCountry(country);
    setFilterTrigger((prev) => prev + 1);
    // Unify behavior by navigating to central Find Jobs with query params
    const params = new URLSearchParams();
    if (title) params.set("q", title);
    if (country) params.set("country", country);
    router.push(`/find-jobs?${params.toString()}`);
  }, []);

  return (
    <>
      <DarkModeToggle />
      <div className="hidden md:block">
        <SocialSidebar />
      </div>
      <Ticker />
      <Hero onFilter={handleFilter} />
      <Services />
      <Categories />
      <JobsSection
        filterTitle={filterTitle}
        filterCountry={filterCountry}
        triggerFilter={filterTrigger}
      />
      <CVSection />
      <ResourceHub />
      <Stats />
      <Testimonials />
      <AIVisaTerminal />
      <Contact />
      <AdPopup />
      <WhatsAppFloat />
    </>
  );
}
