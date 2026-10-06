import React, { useRef } from 'react';

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

  // Data keahlian
  const skillsList = [
    { name: 'Python', icon: <Terminal size={18} className="text-black" /> },
    { name: 'PHP', icon: <Code2 size={18} className="text-black" /> },
    { name: 'C / C++', icon: <Cpu size={18} className="text-black" /> },
    { name: 'MySQL', icon: <Database size={18} className="text-black" /> },
    { name: 'Fotografi', icon: <Camera size={18} className="text-black" /> },
    { name: 'React JS', icon: <Terminal size={18} className="text-black" /> }
  ];

  return (
    <section 
      className="ocean-hero" id="skills" 
      style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', position: 'relative' }}
    >
      {/* 1. Judul Utama */}
      <h1 
        className="ocean-hero__title" 
        style={{ position: 'absolute', top: '80px' }}
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Skills Tech
      </h1>
      
      {/* 2. Background Canvas Laut */}
      <div className="ocean-hero__canvas">
        <OceanHeroCanvas ref={oceanRef} />
      </div>

      {/* 3. Animasi Burung */}
      <div className="ocean-hero__seagull-layer">
        <FlyingSeagull />
      </div>

      {/* 4. AREA CARD KEAHLIAN (Gaya Neobrutalism) */}
      <div 
        style={{
          position: 'absolute',
          top: '28%', 
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          width: '92%',
          maxWidth: '520px',
          textAlign: 'center'
        }}
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div style={{
          background: '#ffffff',
          padding: '24px 28px',
          borderRadius: '16px',
          border: '3px solid #000000',
          boxShadow: '6px 6px 0px #000000'
        }}>
          <p style={{ 
            margin: '0 0 16px 0', 
            fontSize: '0.95rem', 
            textTransform: 'uppercase', 
            letterSpacing: '1px', 
            color: '#000000', 
            fontWeight: '900' 
          }}>
            ⚡ Tech Stack & Keahlian ⚡
          </p>
          
          {/* List Keahlian */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center'
          }}>
            {skillsList.map((skill, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#fef08a', // Warna kuning cerah ala neo
                  padding: '10px 16px',
                  borderRadius: '10px',
                  border: '2px solid #000000',
                  fontWeight: '700',
                  color: '#000000',
                  fontSize: '0.95rem',
                  boxShadow: '3px 3px 0px #000000'
                }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
        
      {/* 5. Area Pasir di Bawah (Tombol Aksi) */}
      <div className="ocean-hero__footer">
        <div className="ocean-hero__footer-content">
          <div className="ocean-hero__actions">
          </div>
        </div>
      </div>
    </section>
  );
}
