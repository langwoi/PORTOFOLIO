import React, { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { OceanHeroCanvas } from './OceanHeroCanvas';
import { FlyingSeagull } from './FlyingSeagull';
import { TactileButton } from '../ui/TactileButton';
import './heroSection.css';

export default function HeroSection() {
  const oceanRef = useRef(null);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="ocean-hero" data-aos="fade-down"
        data-aos-duration="1000"
      style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}
    >
      <h1 className="ocean-hero__title" data-aos="fade-down"
        data-aos-duration="1000">Portofolio <br />Galang Cipta</h1>
      
      {/* 1. Background Canvas Laut Full Mengisi Bagian Atas */}
      <div className="ocean-hero__canvas">
        <OceanHeroCanvas ref={oceanRef} />
      </div>

      {/* 2. Kontainer Utama Bagian Atas (Hanya Animasi Burung) */}
      <div className="ocean-hero__seagull-layer">
        <FlyingSeagull />
      </div>
        
      {/* 3. Area Pasir di Bawah (Deskripsi & Tombol Aksi) */}
      <div className="ocean-hero__footer">
        
        {/* Teks Deskripsi & Tombol Aksi (Hanya "Lihat Proyek") */}
        <div className="ocean-hero__footer-content">
          <div className="ocean-hero__actions">
          </div>
        </div>

      </div>
    </section>
  );
}