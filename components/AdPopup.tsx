"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AdPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      id="adPopupOverlay"
      style={{
        display: show ? "flex" : "none",
      }}
    >
      <div className="ad-box">
        <span className="close-popup" onClick={() => setShow(false)} role="button" tabIndex={0}>
          &times;
        </span>
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500"
          alt="Recruitment"
          width={500}
          height={160}
          style={{ width: "100%", height: "160px", objectFit: "cover" }}
        />
        <div style={{ padding: "25px" }}>
          <h3>SPECIAL RECRUITMENT!</h3>
          <p>Exclusive 2026 Job Openings for Europe & Gulf.</p>
          <a
            href="https://wa.me/923100570707"
            style={{
              background: "var(--danger)",
              color: "white",
              padding: "12px 25px",
              textDecoration: "none",
              borderRadius: "8px",
              display: "inline-block",
              fontWeight: "bold",
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
