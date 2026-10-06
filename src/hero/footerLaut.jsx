import './footerLaut.css';

const footerLinks = [
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Kontak', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="ocean-footer" id="footer">
      <div className="ocean-footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0 48C180 92 300 12 500 42S820 95 1020 48 1260 12 1440 52V100H0Z" />
        </svg>
      </div>

      <div className="ocean-footer__content">
        <a className="ocean-footer__brand" href="#top">
          Galang Cipta Ramadhan
        </a>
        <p className="ocean-footer__tagline">
          MASIH MAU NGEMBANGIN TAPI KAPAN2
        </p>

        <nav className="ocean-footer__nav" aria-label="Navigasi footer">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          
          {/* Link LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/galang-cipta-ramadhan-473779303"
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a 
            href="https://instagram.com/galangggcips" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>

        <p className="ocean-footer__copyright">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}