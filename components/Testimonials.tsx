import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="mid-title">
        <h2>What Our Candidates Say</h2>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>
            &quot;Fast Job Career helped me get my dream job in Dubai within 2 weeks.
            The process was very smooth.&quot;
          </p>
          <div className="user-info">
            <Image
              src="https://i.pravatar.cc/150?u=1"
              alt="Ali Ahmed"
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
            />
            <div>
              <h4>Ali Ahmed</h4>
              <span>Warehouse Staff</span>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p>
            &quot;The best platform for Europe visas. I got my Poland work permit
            through their guidance.&quot;
          </p>
          <div className="user-info">
            <Image
              src="https://i.pravatar.cc/150?u=2"
              alt="Kamran Khan"
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
            />
            <div>
              <h4>Kamran Khan</h4>
              <span>Trailer Driver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
