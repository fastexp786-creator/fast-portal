import Link from "next/link";

export default function Services() {
  return (
    <section id="services">
      <div className="mid-title">
        <h2>Worldwide Travel Services</h2>
      </div>
      <div className="main-grid">
        <Link
          href="/services/visit-visa-tours"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <div className="info-card" style={{ cursor: "pointer" }}>
            <i className="fas fa-passport" />
            <h3>Visit Visa & Tours</h3>
            <p>
              Get fast-track visa processing for Dubai, UK, USA, and Schengen
              countries with expert documentation.
            </p>
          </div>
        </Link>

        <Link
          href="/services/umrah-2026"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <div className="info-card" style={{ cursor: "pointer" }}>
            <i className="fas fa-kaaba" />
            <h3>Umrah 2026</h3>
            <p>
              Exclusive Umrah packages for 2026 including luxury hotels, transport,
              and complete visa assistance.
            </p>
          </div>
        </Link>

        <Link
          href="/services/luxury-stays"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <div className="info-card" style={{ cursor: "pointer" }}>
            <i className="fas fa-hotel" />
            <h3>Luxury Hotel Bookings</h3>
            <p>
              Book 5-star hotels and premium apartments worldwide at discounted
              rates with 24/7 support
            </p>
          </div>
        </Link>

        <Link
          href="/services/cruise-cloud"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <div className="info-card" style={{ cursor: "pointer" }}>
            <i className="fas fa-ship" />
            <h3>Cruise Cloud</h3>
            <p>
              Book your dream voyage! Get the best deals on international cruise
              tickets and luxury travel packages
            </p>
          </div>
        </Link>

        <Link
          href="/services/air-tickets"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <div className="info-card" style={{ cursor: "pointer" }}>
            <i className="fas fa-plane" />
            <h3>Air Tickets</h3>
            <p>
              Find the cheapest worldwide airfares for all major airlines with
              instant booking and flexible dates.
            </p>
          </div>
        </Link>

        <Link
          href="/services/premium-rentals"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <div className="info-card" style={{ cursor: "pointer" }}>
            <i className="fas fa-car" />
            <h3>Premium Rentals</h3>
            <p>
              Professional and reliable car rental services for your business
              trips or family vacations globally.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
