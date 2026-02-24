export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="fade-up">About Our 3D Studio</h1>

        <p className="about-intro fade-up delay-1">
          We specialize in creating immersive 3D websites and interactive
          digital experiences that combine creativity, technology, and
          performance. Our goal is to transform ideas into visually stunning
          web realities.
        </p>

        <div className="about-content">
          <div className="about-card fade-up delay-2">
            <h2>Our Mission</h2>
            <p>
              Our mission is to build high-performance 3D websites using
              modern technologies like Next.js, Three.js, and WebGL —
              delivering speed, beauty, and seamless user experience.
            </p>
          </div>

          <div className="about-card fade-up delay-3">
            <h2>Our Vision</h2>
            <p>
              We aim to become a global digital studio known for creating
              futuristic and interactive web solutions.
            </p>
          </div>

          <div className="about-card fade-up delay-4">
            <h2>Our 3D Expertise</h2>
            <p>
              From product visualization to animated landing pages, we craft
              fully interactive 3D elements that engage users.
            </p>
          </div>

          <div className="about-card fade-up delay-5">
            <h2>Why Choose Us</h2>
            <ul className="about-list">
              <li>⚡ High Performance Optimization</li>
              <li>🎨 Modern UI/UX Design</li>
              <li>🌐 Responsive & Mobile Friendly</li>
              <li>🚀 SEO Optimized Structure</li>
              <li>🧩 Custom 3D Animations</li>
            </ul>
          </div>
        </div>

        <div className="about-3d-detail fade-up delay-6">
          <h2>What Makes a 3D Website Powerful?</h2>
          <p>
            A 3D website creates depth, motion, and interaction that
            traditional websites cannot achieve. Using real-time rendering,
            smooth animations, and optimized assets, we ensure high performance.
          </p>
        </div>
      </div>
    </section>
  );
}