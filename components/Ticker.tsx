"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface TickerMessage {
  id: string;
  message: string;
  priority: number;
  is_active: boolean;
}

export default function Ticker() {
  const [messages, setMessages] = useState<string[]>([
    "🚀 Europe Work Visas: Poland & Malta Recruitment Open for 2026.",
    "🇸🇦 Saudi Arabia: 1000+ Vacancies for Neom Project - Apply Now!",
    "🇦🇪 UAE Jobs: Urgent Hiring for Security Guards & Drivers in Dubai.",
    "🇬🇧 UK Skilled Worker: Healthcare & Hospitality Roles Available.",
  ]);

  useEffect(() => {
    loadTickerMessages();
  }, []);

  const loadTickerMessages = async () => {
    try {
      // Try to load from Supabase
      const { data, error } = await supabase
        .from("ticker_messages")
        .select("message, priority")
        .eq("is_active", true)
        .order("priority", { ascending: true });

      if (error) {
        console.log("Using default ticker messages - table not created yet");
        return; // Keep default messages
      }

      if (data && data.length > 0) {
        const messageTexts = data.map(item => item.message);
        setMessages(messageTexts);
      }
    } catch (error) {
      console.log("Error loading ticker messages, using defaults");
    }
  };

  // Refresh ticker every 30 seconds
  useEffect(() => {
    const interval = setInterval(loadTickerMessages, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker-container">
      <div className="ticker-label">LATEST NEWS</div>
      <div className="ticker-content">
        {messages.map((text, i) => (
          <div key={i} className="ticker-item">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
