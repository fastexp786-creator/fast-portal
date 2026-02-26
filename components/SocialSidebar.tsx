"use client";

export default function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <a
        href="https://www.facebook.com/FastJobCareer/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ background: "#3b5998" }}
        aria-label="Facebook"
      >
        <i className="fab fa-facebook-f" />
      </a>
      <a
        href="https://www.instagram.com/fastjobcareer/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ background: "#e1306c" }}
        aria-label="Instagram"
      >
        <i className="fab fa-instagram" />
      </a>
      <a
        href="https://www.linkedin.com/company/fastjobcareer/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ background: "#0077b5" }}
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin-in" />
      </a>
    </div>
  );
}
