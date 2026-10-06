import React from 'react';
import './frame.css';
import AOS from 'aos';

export default function Frame() {
  return (
    <section className="hero-pantai container-fluid p-0" id="frame" >
      <div className="content-wrapper d-flex flex-column justify-content-center align-items-center text-center px-3">
        
        <div className="floating-plane">✈️</div>

        <h1 className="hero-name fw-bold text-white" data-aos="fade-up">
          GALANG<br />
          CIPTA<br />
          RAMADHAN
        </h1>
      </div>

      <div className="neo-wave-container">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" 
            fill="#edd7b4" 
            stroke="#edd7b4" 
            strokeWidth="4"
          />
          {/* Lapisan Ombak Depan (Warna Pasir / Beige) */}
          <path 
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" 
            fill="#edd7b4" 
            stroke="#edd7b4" 
          />
        </svg>
      </div>

      {/* Bagian Pasir di Bawah ala Pantai */}
     <div className="sand-bottom d-flex align-items-center justify-content-between px-5">
        {/* Dekorasi Kiri: Pohon Kelapa */}
        <div className="sand-decoration d-flex align-items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20v-8m0 0a4 4 0 0 1-4-4c0-2.2 2-4 4-4s4 1.8 4 4a4 4 0 0 1-4 4z" fill="#34d399"/>
          </svg>
          <span className="fw-bold text-dark fs-6 font-monospace">EST. 2026</span>
        </div>

        {/* Dekorasi Tengah: Jejak Kaki (Footprints) SVG */}
        <div className="sand-footprints d-flex align-items-center gap-3">
          {/* Jejak Kaki 1 */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#d97706" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-15deg)' }}>
            <path d="M11 4C9.5 4 8.5 5 8.5 6.5C8.5 7.5 9 8.5 9.5 9.5C8 10 7 11.5 7 13.5C7 16 9 18 12 18C15 18 17 16 17 13.5C17 11.5 16 10 14.5 9.5C15 8.5 15.5 7.5 15.5 6.5C15.5 5 14.5 4 13 4H11Z" />
            <circle cx="9" cy="2.5" r="1" fill="#111827" />
            <circle cx="11.5" cy="2" r="1" fill="#111827" />
            <circle cx="14" cy="2.5" r="1" fill="#111827" />
          </svg>
          {/* Jejak Kaki 2 */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#d97706" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(15deg) translateY(4px)' }}>
            <path d="M11 4C9.5 4 8.5 5 8.5 6.5C8.5 7.5 9 8.5 9.5 9.5C8 10 7 11.5 7 13.5C7 16 9 18 12 18C15 18 17 16 17 13.5C17 11.5 16 10 14.5 9.5C15 8.5 15.5 7.5 15.5 6.5C15.5 5 14.5 4 13 4H11Z" />
            <circle cx="9" cy="2.5" r="1" fill="#111827" />
            <circle cx="11.5" cy="2" r="1" fill="#111827" />
            <circle cx="14" cy="2.5" r="1" fill="#111827" />
          </svg>
        </div>

        {/* Dekorasi Kanan: Bintang Laut */}
        <div className="sand-decoration d-flex align-items-center gap-2">
          <span className="fw-bold text-dark fs-6 font-monospace">PENS TECH</span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#fbbf24"/>
          </svg>
        </div>
      </div>
    </section>
  );
}