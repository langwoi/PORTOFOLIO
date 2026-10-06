import React, { useState } from 'react';
import gambarKu from "./assets/galang.jpg"

export default Hero;

function Hero() {
  return (
    <header className="hero" id="frame">
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* Kolom Kiri: Teks & Tombol */}
          <div className="col-lg-6" data-aos="fade-right" data-aos-duration="900">
            <span className="tag tag-hire">INFOLOKER BOSKU</span>
            <h1>Hi, I'm Galang Cipta Ramadhan.</h1>
            <p className="role">Mahasiswa Teknik Komputer &amp; Pemula di Dunia Teknologi Informasi.</p>
            <p className="lead-text">
              Saya Galang Cipta Ramadhan, mahasiswa D4 
              Teknik Komputer di Politeknik Elektronika Negeri Surabaya. Sebelumnya, 
              saya merupakan lulusan SMK Semen Gresik dengan jurusan Rekayasa Perangkat Lunak dan 
              pernah menjabat sebagai Ketua Bidang Divisi TIK OSIS.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn-brut btn-yellow">Lihat Karya</a>
              <a href="#contact" className="btn-brut btn-white">Ayo Ngobrol</a>
            </div>
          </div>

          {/* Kolom Kanan: Foto Profil */}
          <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
            <div className="photo-wrap">
              <span className="tag tag-role">MAHASISWA</span>
              <div className="photo-frame">
                <img src={gambarKu} alt="Foto Galang Cipta Ramadhan"/>
              </div>
              <span className="tag tag-stack">&lt;&gt; Teknik Komputer</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}