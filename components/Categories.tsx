import Link from "next/link";

export default function Categories() {
  return (
    <section id="categories" style={{ background: "rgba(0,0,0,0.02)" }}>
      <div className="mid-title">
        <h2>Explore Job Categories</h2>
      </div>
      <div className="main-grid">
        <Link href="/jobs/usa-jobs" className="info-card">
          <i className="fas fa-flag" />
          <h3>USA Jobs</h3>
          <p>Government & Industry Careers.</p>
        </Link>
        <Link href="/jobs/uk-jobs" className="info-card">
          <i className="fas fa-university" />
          <h3>UK Jobs</h3>
          <p>Skilled worker visa pathways Poland, Malta, and Germany.</p>
        </Link>
        <Link href="/jobs/gulf-jobs" className="info-card">
          <i className="fas fa-globe-asia" />
          <h3>Gulf Jobs</h3>
          <p>Dubai, Saudi Arabia, and Qatar.</p>
        </Link>
        <Link href="/jobs/india-jobs" className="info-card">
          <i className="fas fa-euro-sign" />
          <h3>India Jobs</h3>
          <p>Public & Private Sector Roles.</p>
        </Link>
        <Link href="/jobs/pakistan-jobs" className="info-card">
          <i className="fas fa-flag" />
          <h3>Pakistan Jobs</h3>
          <p>Government & Private openings.</p>
        </Link>
        <Link href="/jobs/malaysia-jobs" className="info-card">
          <i className="fas fa-flag" />
          <h3>Malaysia Jobs</h3>
          <p>Official & Corporate Vacancies</p>
        </Link>
      </div>
    </section>
  );
}
