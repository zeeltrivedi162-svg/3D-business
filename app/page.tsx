export default function Home() {
  return (
    <section className="hero-video-bg">

      {/* YouTube Iframe Background */}
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/AWz5guBHcI8?autoplay=1&mute=1&loop=1&playlist=AWz5guBHcI8&controls=0&showinfo=0&modestbranding=1&rel=0"
          title="Cinematic Background"
          allow="autoplay; encrypted-media; picture-in-picture"
          className="bg-iframe"
        ></iframe>
      </div>

      {/* Overlay for readability */}
      <div className="hero-overlay"></div>

      {/* Your Hero Content */}
      <div className="hero-content">
        <h1>
          3D <span> Module </span> Website
        </h1>

        <p>
          We design and develop high-performance websites using
          modern technologies like Next.js and 3D web animations.
        </p>

        <div className="hero-buttons">
          <a href="/service" className="btn-primary">
            Our Services
          </a>
          <a href="/contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}