export default function Service() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h1 className="fade-up">Our Services</h1>

        <p className="services-intro fade-up delay-1">
          We provide modern digital solutions to grow your business online.
        </p>

        <div className="services-grid">
          <div className="service-card fade-up delay-2">
            <h2>3D Website Design</h2>
            <p>
              Interactive and immersive 3D websites built with modern web
              technologies.
            </p>
          </div>

          <div className="service-card fade-up delay-3">
            <h2>Web Development</h2>
            <p>
              Fast and scalable websites using Next.js, React and latest
              frameworks.
            </p>
          </div>

          <div className="service-card fade-up delay-4">
            <h2>UI / UX Design</h2>
            <p>
              Clean, modern and user-friendly interface design focused on
              better engagement.
            </p>
          </div>

          <div className="service-card fade-up delay-5">
            <h2>SEO Optimization</h2>
            <p>
              Improve your website ranking and visibility with advanced SEO
              strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}