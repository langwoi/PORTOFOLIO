import { useEffect, useState } from 'react'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Hero from './hero'
//import './frame.css'
//import './nav.css'
import Navbar from './navbar';
import Projects from './projects'
import  HeroSection  from "./hero/heroSection";
import './porto.css'
import HeroBawah from './hero/heroBawah'
import Contact from './Contact'
import Footer from './hero/footerLaut'
import AOS from 'aos';
import 'aos/dist/aos.css';




// --- KOMPONEN: ABOUT ---
function About() {
  return (
    <section className="block" id="about">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="800">Tentang saya</h2>
        <p 
          className="col-lg-7 mx-auto text-center px-0"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
        >
         "Saya adalah mahasiswa D4 Teknik Komputer PENS yang memiliki 
         ketertarikan mendalam pada pengembangan perangkat lunak, sistem tertanam
          (embedded systems), dan teknologi IoT. Saya berfokus membangun solusi digital yang fungsional, 
         mulai dari aplikasi web modern hingga sistem kendali cerdas untuk kebutuhan industri dan rekayasa."
          "Menggabungkan logika teknik komputer dengan kreativitas visual dan pengembangan full-stack. Saya aktif merancang aplikasi web interaktif, sistem embedded, serta antarmuka kendali berbasis data 
         untuk menghadirkan solusi teknologi yang inovatif dan berdampak nyata."
        </p>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once:true,
      offset:100
    })
  })
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Hero/>
      <About />
      <HeroBawah/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}
