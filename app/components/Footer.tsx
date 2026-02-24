import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Info */}
        <div className="footer-column">
          <h2 className="footer-logo">3D Studio</h2>
          <p>
            We create modern 3D websites, digital experiences, 
            and creative visual solutions for brands worldwide.
          </p>
        </div>

        {/* Techstrota Details */}
        <div className="footer-column">
          <h3>Techstrota</h3>
          <p>
            Techstrota is a digital solutions company providing 
            website development, UI/UX design, and 3D web experiences.
          </p>
          <Link
            href="https://techstrota.com"
            target="_blank"
            className="footer-link"
          >
            Visit Techstrota →
          </Link>
        </div>

        {/* contact info */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/service" className="footer-link">Service</Link>
          <Link href="/Gallery" className="footer-link">Gallery</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
          
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} 3D Studio | Designed by{" "}
        <span className="highlight">Techstrota</span>
      </div>
    </footer>
  );
}