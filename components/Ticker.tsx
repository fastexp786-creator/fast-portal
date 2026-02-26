export default function Ticker() {
  const items = [
    "🚀 Europe Work Visas: Poland & Malta Recruitment Open for 2026.",
    "🇸🇦 Saudi Arabia: 1000+ Vacancies for Neom Project - Apply Now!",
    "🇦🇪 UAE Jobs: Urgent Hiring for Security Guards & Drivers in Dubai.",
    "🇬🇧 UK Skilled Worker: Healthcare & Hospitality Roles Available.",
  ];

  return (
    <div className="ticker-container">
      <div className="ticker-label">LATEST NEWS</div>
      <div className="ticker-content">
        {items.map((text, i) => (
          <div key={i} className="ticker-item">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
