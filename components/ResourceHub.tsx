export default function ResourceHub() {
  return (
    <section id="global-hub" style={{ background: "rgba(0,0,0,0.02)" }}>
      <div className="mid-title">
        <h2>Global Resource Hub</h2>
        <p>Direct access to Embassy updates, Airlines, and Industry news.</p>
      </div>
      <div className="info-hub-grid">
        <a
          href="https://fastjobcareer.com/embassy-updates/"
          className="hub-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-landmark" />
          <h4>Embassy Updates</h4>
          <p>Official Visa Fees & Slot Appointment Links</p>
        </a>
        <a href="#" className="hub-card">
          <i className="fas fa-plane-departure" />
          <h4>Airline News</h4>
          <p>Careers in Emirates, Qatar & New Travel Deals</p>
        </a>
        <a href="#" className="hub-card">
          <i className="fas fa-hotel" />
          <h4>Hotel Industry</h4>
          <p>Hiring for NEOM, UAE Projects & Global Resorts</p>
        </a>
        <a href="#" className="hub-card">
          <i className="fas fa-ship" />
          <h4>Cruise & Deals</h4>
          <p>Staffing for Cruise Lines & Group Travel Slots</p>
        </a>
      </div>
    </section>
  );
}
