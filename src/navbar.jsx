import React, { useState, useEffect } from 'react';
import './nav.css';

export default function Navbar({ brandName = "GalangCipsss" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  // Efek untuk mendeteksi posisi scroll halaman
  useEffect(() => {
    const sections = document.querySelectorAll("section, div[id]");
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // Offset agar deteksi lebih pas

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
          if (id) setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="brut-navbar navbar navbar-expand-md fixed-top bg-white">
      <div className="container-fluid px-4">
        <a className="brand" href="#top">
          Porto<strong>{brandName}</strong>
        </a>
        
        <button 
          className="navbar-toggler border-3 border-dark rounded-0 bg-white shadow-sm" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="menu" 
          aria-expanded={isOpen} 
          aria-label="Buka menu"
          style={{ boxShadow: '3px 3px 0 #ffffff' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="menu">
          <ul className="navbar-nav align-items-md-center gap-md-2 mt-3 mt-md-0">
            <li className="nav-item">
              <a 
                className={`brut-nav-link ${activeSection === 'frame' || activeSection === 'about' ? 'active font-weight-bold text-decoration-underline' : ''}`} 
                href="#frame" 
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`brut-nav-link ${activeSection === 'skills' ? 'active font-weight-bold text-decoration-underline' : ''}`} 
                href="#skills" 
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`brut-nav-link ${activeSection === 'projects' ? 'active font-weight-bold text-decoration-underline' : ''}`} 
                href="#projects" 
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`brut-nav-link ${activeSection === 'contact' ? 'active font-weight-bold text-decoration-underline' : ''}`} 
                href="#contact" 
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}