"use client";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact">
      <div className="mid-title">
        <h2>Get In Touch</h2>
      </div>
      <div className="contact-container">
        <div className="contact-box">
          <p>
            <strong>Office:</strong> G-9 Markaz, Islamabad
          </p>
          <p>
            <strong>Call:</strong> +92 310 0570707
          </p>
          <p>
            <strong>Email:</strong> info@fastjobcareer.com
          </p>
        </div>
        <div className="contact-box">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea rows={4} placeholder="How can we help you?" />
            <button type="submit">SEND MESSAGE NOW</button>
          </form>
        </div>
      </div>
    </section>
  );
}
