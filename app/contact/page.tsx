export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Have a project in mind? Let’s build something amazing together.
        </p>

        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="input-group">
            <textarea placeholder="Your Message" rows={5} required></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}