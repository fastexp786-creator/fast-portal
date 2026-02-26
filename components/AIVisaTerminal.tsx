"use client";

import { useState } from "react";

export default function AIVisaTerminal() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<
    { type: "ai" | "user"; text: string }[]
  >([{ type: "ai", text: "Protocol Initiated. I am your PhD Immigration Assistant. Analyzing global visa trends for 2026. How can I assist your migration?" }]);
  const [chatInput, setChatInput] = useState("");

  const calculateAI = () => {
    const ids = ["userEdu", "userExp", "userLang", "userTravel", "userCriminal"];
    let total = 20;
    ids.forEach((id) => {
      const el = document.getElementById(id) as HTMLSelectElement | null;
      if (el) total += parseInt(el.value || "0");
    });
    const finalScore = Math.max(15, Math.min(98, total));
    setScore(finalScore);
    setShowResult(true);
  };

  const resetAI = () => {
    setShowResult(false);
  };

  const phdAsk = () => {
    const val = chatInput.trim();
    if (!val) return;
    setChatMessages((prev) => [...prev, { type: "user", text: val }]);
    setChatInput("");
    setTimeout(() => {
      const lower = val.toLowerCase();
      let r = "Neural Analysis: Processing current trends... For a specific score, use the AI Terminal above.";
      if (lower.includes("poland"))
        r = "Poland Insight: Labor demand is up by 14%. Work permit approval rates for 2026 are strong.";
      if (lower.includes("cost") || lower.includes("price"))
        r = "Financial Data: Official Schengen fees are approx 80-90 EUR. Total agency packages vary by destination.";
      if (lower.includes("romania"))
        r = "Romania Update: Current 100k quota is still open. High success for skilled & unskilled categories.";
      setChatMessages((prev) => [...prev, { type: "ai", text: r }]);
    }, 800);
  };

  return (
    <section
      id="ai-visa-terminal"
      style={{
        background: "#020617",
        padding: "50px 15px",
        fontFamily: "'Inter', sans-serif",
        color: "#fff",
        borderRadius: "30px",
        margin: "100px 1% 40px",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <h2 className="pro-title" style={{ fontWeight: 900, color: "#ffffff", lineHeight: 1.1, margin: "0 auto" }}>
            Advanced Decision Support AI
          </h2>
          <p style={{ color: "#94a3b8", margin: "12px auto 0", fontSize: "clamp(12px, 3.5vw, 16px)", opacity: 0.8 }}>
            98.4% Real-Time Global Embassy Accuracy
          </p>
        </div>

        {!showResult ? (
          <div className="glass-box" id="input-panel">
            <div className="grid-layout">
              <div className="field">
                <label>Nationality</label>
                <select id="userNationality">
                  <optgroup label="Popular">
                    <option value="PK">Pakistan</option>
                    <option value="IN">India</option>
                    <option value="BD">Bangladesh</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="QA">Qatar</option>
                    <option value="TR">Turkey</option>
                    <option value="PL">Poland</option>
                    <option value="RO">Romania</option>
                  </optgroup>
                  <optgroup label="All Countries">
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="CA">Canada</option>
                    <option value="CN">China</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="UK">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="OTHER">Other Global...</option>
                  </optgroup>
                </select>
              </div>
              <div className="field">
                <label>Destination</label>
                <select id="targetDest">
                  <optgroup label="Europe (High Demand)">
                    <option value="Poland">Poland</option>
                    <option value="Romania">Romania</option>
                    <option value="Malta">Malta</option>
                    <option value="Germany">Germany</option>
                  </optgroup>
                  <optgroup label="Top Tier">
                    <option value="Canada">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="USA">USA</option>
                  </optgroup>
                  <optgroup label="Middle East">
                    <option value="UAE">United Arab Emirates</option>
                    <option value="Saudi">Saudi Arabia</option>
                    <option value="Qatar">Qatar</option>
                  </optgroup>
                  <option value="OTHER">Other Global...</option>
                </select>
              </div>
              <div className="field">
                <label>Visa Type</label>
                <select id="visaType">
                  <option value="Work">Skilled Work Permit</option>
                  <option value="Study">Student Visa</option>
                  <option value="Visit">Tourist / Visit</option>
                  <option value="Business">Business Visa</option>
                </select>
              </div>
              <div className="field">
                <label>Education</label>
                <select id="userEdu">
                  <option value="25">Masters / PhD</option>
                  <option value="20">Bachelors Degree</option>
                  <option value="15">Diploma / Technical</option>
                  <option value="5">High School / Below</option>
                </select>
              </div>
              <div className="field">
                <label>Experience</label>
                <select id="userExp">
                  <option value="20">5+ Years (Expert)</option>
                  <option value="15">2-5 Years (Mid)</option>
                  <option value="5">0-2 Years (Junior)</option>
                </select>
              </div>
              <div className="field">
                <label>English</label>
                <select id="userLang">
                  <option value="15">Expert (7.5+)</option>
                  <option value="10">Standard (6.0)</option>
                  <option value="5">Basic (4.5)</option>
                  <option value="0">No Test Certificate</option>
                </select>
              </div>
              <div className="field">
                <label>Travel</label>
                <select id="userTravel">
                  <option value="15">Strong (EU/US/UK)</option>
                  <option value="10">Moderate (GCC/Asia)</option>
                  <option value="0">Fresh Passport</option>
                </select>
              </div>
              <div className="field">
                <label>Legal Status</label>
                <select id="userCriminal">
                  <option value="0">Clean (No Record)</option>
                  <option value="-40">Refusal History</option>
                  <option value="-100">Criminal History</option>
                </select>
              </div>
            </div>
            <div style={{ marginTop: "50px" }}>
              <button onClick={calculateAI} className="scan-btn">
                RUN PROBABILITY SCAN <i className="fas fa-bolt" style={{ marginLeft: "8px" }} />
              </button>
            </div>
          </div>
        ) : (
          <div
            className="glass-box result-panel"
            style={{ display: "block", textAlign: "center" }}
          >
            <div style={{ color: "#00d4ff", fontWeight: 800, letterSpacing: "2px" }}>
              ANALYSIS COMPLETE
            </div>
            <div style={{ margin: "30px 0", display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "150px" }}>
                <svg viewBox="0 0 36 36">
                  <path
                    style={{ fill: "none", stroke: "#1e293b", strokeWidth: 3 }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    id="circle-fill"
                    style={{
                      fill: "none",
                      stroke: "#00d4ff",
                      strokeWidth: 3,
                      strokeLinecap: "round",
                      strokeDasharray: `${score}, 100`,
                      transition: "1.5s",
                    }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "30px",
                    fontWeight: 900,
                  }}
                >
                  {score}%
                </div>
              </div>
            </div>
            <h3 style={{ marginBottom: "10px" }}>
              {score > 60 ? "HIGH SUCCESS CHANCE" : "STABLE PROBABILITY"}
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "25px" }}>
              Our PhD Neural Engine estimates a {score}% success rate for the current embassy cycle.
            </p>
            <button onClick={resetAI} className="reset-btn">
              START NEW SCAN
            </button>
          </div>
        )}

        <div
          id="phd-trigger"
          onClick={() => setShowChat(!showChat)}
          style={{ position: "relative" }}
        >
          <i className="fas fa-brain" />
          <div className="online-dot" />
        </div>

        <div
          id="phd-window"
          style={{
            display: showChat ? "flex" : "none",
          }}
        >
          <div className="phd-header">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div className="avatar-ai">PhD</div>
              <div style={{ fontSize: "13px", fontWeight: 800 }}>FastJob Neural AI</div>
            </div>
            <span onClick={() => setShowChat(false)} style={{ cursor: "pointer", fontSize: "20px" }}>
              &times;
            </span>
          </div>
          <div className="phd-body" id="phd-stream">
            {chatMessages.map((m, i) => (
              <div key={i} className={`msg ${m.type}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="phd-footer">
            <input
              type="text"
              id="phd-input"
              placeholder="Ask about Poland, Romania, Cost..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && phdAsk()}
            />
            <button onClick={phdAsk} type="button">
              <i className="fas fa-paper-plane" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
