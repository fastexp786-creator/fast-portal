import Link from "next/link";

export default function Footer() {
  return (
    <footer id="main-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4 className="footer-title">
            Fast Job <span>Career</span>
          </h4>
          <p className="brand-desc">
            Connect with overseas employers and find your dream job abroad. We&apos;ve
            helped thousands of job seekers find international opportunities.
          </p>
          <div className="footer-social-circles">
            <a href="https://www.facebook.com/FastJobCareer/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://x.com/fastjobcareer" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-tiktok" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <div className="footer-links">
            <Link href="/"><i className="fas fa-chevron-right" /> Home</Link>
            <Link href="/find-jobs"><i className="fas fa-chevron-right" /> Find Jobs</Link>
            <Link href="/travel"><i className="fas fa-chevron-right" /> Travel</Link>
            <Link href="/resource-hub"><i className="fas fa-chevron-right" /> Resource Hub</Link>
            <Link href="/categories"><i className="fas fa-chevron-right" /> All Categories</Link>
            <Link href="/contact"><i className="fas fa-chevron-right" /> Contact</Link>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Popular Countries</h4>
          <div className="footer-links">
            <Link href="/jobs/saudi-arabia-jobs"><i className="fas fa-chevron-right" /> Saudi Arabia</Link>
            <Link href="/jobs/uae-jobs"><i className="fas fa-chevron-right" /> United Arab Emirates</Link>
            <Link href="/jobs/qatar-jobs"><i className="fas fa-chevron-right" /> Qatar</Link>
            <Link href="/jobs/kuwait-jobs"><i className="fas fa-chevron-right" /> Kuwait</Link>
            <Link href="/jobs/oman-jobs"><i className="fas fa-chevron-right" /> Oman</Link>
            <Link href="/jobs/bahrain-jobs"><i className="fas fa-chevron-right" /> Bahrain</Link>
            <Link href={{ pathname: "/find-jobs", query: { country: "South Korea" } }}>
              <i className="fas fa-chevron-right" /> South Korea
            </Link>
            <Link href={{ pathname: "/find-jobs", query: { country: "Japan" } }}>
              <i className="fas fa-chevron-right" /> Japan
            </Link>
            <Link href="/jobs/malaysia-jobs"><i className="fas fa-chevron-right" /> Malaysia</Link>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <div className="contact-info-list">
            <div className="support-item-new">
              <i className="fas fa-map-marker-alt icon-location" />
              <span>G-9 Markaz, Islamabad, Pakistan</span>
            </div>
            <div className="support-item-new">
              <i className="fas fa-envelope icon-email" />
              <span>info@fastjobcareer.com</span>
            </div>
            <div className="support-item-new">
              <i className="fas fa-phone-alt icon-phone" />
              <span>+92 310 0570707</span>
            </div>
            <div className="support-item-new">
              <i className="fas fa-clock" style={{ color: "#ffcc00" }} />
              <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy">&copy; 2026 Fast Job Career. All Rights Reserved.</div>
    </footer>
  );
}
