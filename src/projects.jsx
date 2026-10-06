import React, { useState } from "react";
  import gcs from './assets/gcs.png'
  import simp from './assets/simp.png'
  import rt from  './assets/Rt.png'
  import osis from './assets/osis.png'
  import red from './assets/red.png'
  import without from './assets/withoutData.png'
  import black from './assets/black.jpeg'
  import pengaduan from './assets/pengaduan.png'
  import blue from './assets/blue.png'
  import design from './assets/design.png'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");


  const projectList = [
    { 
      title: "Sistem Manajemen Perhotelan", 
      shortDesc: "Aplikasi web end-to-end untuk mengelola operasional hotel—mulai dari check-in/check-out tamu, ketersediaan kamar, hingga rekapitulasi laporan keuangan harian.", 
      category: "Full-Stack Web App",
      filterGroup: "web",
      image: simp,
      background: "Dikembangkan sebagai proyek praktikum kejuruan untuk mensimulasikan operasional hotel nyata secara digital, mulai dari pengelolaan reservasi, data tamu, hingga pencatatan transaksi kasir.",
      features: [
        "Manajemen data kamar dan ketersediaan secara real-time",
        "Sistem reservasi, check-in, dan check-out tamu yang terstruktur",
        "Pencatatan laporan transaksi keuangan dan rekap harian",
        "Panel akses multi-level (Admin & Resepsionis)"
      ],
      techStack: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "PHP"],
      demoLink: "#"
    },
    { 
      title: "GCS PENS JOSJIS", 
      shortDesc: "Ground Control Station dashboard berbasis React dan Python untuk pemantauan real-time telemetri, sikap sensor, dan log penerbangan.", 
      category: "Aerospace & Software",
      filterGroup: "aerospace",
      image: gcs,
      background: "Antarmuka Ground Control Station yang dirancang untuk memonitor data telemetri wahana dan drone secara langsung melalui komunikasi soket jaringan dan parsing paket data.",
      features: [
        "Visualisasi metrik misi dan indikator sikap sensor secara live",
        "Sistem monitoring log telemetri berbasis koneksi TCP/UDP",
        "Tampilan dashboard responsif untuk kontrol stasiun darat",
        "Pencatatan waktu sinkronisasi sistem secara presisi"
      ],
      techStack: ["React", "Python", "TCP/UDP Sockets", "Tailwind CSS", "MAVProxy"],
      demoLink: "#"
    },
    { 
      title: "E-Vote RT (E-Voting Warga)", 
      shortDesc: "Aplikasi e-voting digital untuk pemilihan tingkat rukun tetangga (RT) yang transparan, aman, dan real-time.", 
      category: "Web Application",
      filterGroup: "web",
      image: rt,
      background: "Dibangun untuk mendigitalisasi proses pemilihan pengurus atau suara warga di lingkungan RT agar lebih efisien, transparan, dan menghindari kecurangan rekapitulasi manual.",
      features: [
        "Manajemen profil kandidat dan visi-misi interaktif",
        "Sistem autentikasi pemilih berbasis token/NIK warga",
        "Penghitungan suara otomatis (real-time vote counting)",
        "Rekapitulasi hasil akhir yang siap diunduh"
      ],
      techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
      demoLink: "#"
    },
    { 
      title: "E-Vote Pemilihan Ketua Osis", 
      shortDesc: "Aplikasi e-voting digital untuk pemilihan Ketua Osis yang transparan, aman, dan real-time.", 
      category: "Web Application",
      filterGroup: "web",
      image: osis,
      background: "Dibangun untuk mendigitalisasi proses pemilihan pengurus atau suara warga di lingkungan RT agar lebih efisien, transparan, dan menghindari kecurangan rekapitulasi manual.",
      features: [
        "Manajemen profil kandidat dan visi-misi interaktif",
        "Sistem autentikasi pemilih berbasis Nama Dan Absen",
        "Penghitungan suara otomatis (real-time vote counting)",
        "Rekapitulasi hasil akhir yang siap diunduh"
      ],
      techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
      demoLink: "#"
    },
    { 
    title: "Website Pengaduan", 
    shortDesc: "Platform layanan pengaduan masyarakat berbasis web untuk menyampaikan aspirasi dan keluhan secara transparan, cepat, dan terpantau.", 
    category: "Web Application",
    filterGroup: "web",
    image: pengaduan,
    background: "Dibangun untuk mendigitalisasi proses pelaporan dan penanganan keluhan warga di lingkungan sekitar agar setiap aspirasi dapat ditindaklanjuti secara cepat, transparan, dan terstruktur tanpa birokrasi manual yang rumit.",
    features: [
      "Formulir pengaduan interaktif dengan lampiran bukti foto",
      "Sistem tracking status pengaduan warga (Pending, Diproses, Selesai)",
      "Dashboard manajemen khusus admin untuk verifikasi dan disposisi laporan",
      "Fitur tanggapan resmi dan riwayat penanganan aduan secara real-time"
    ],
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    demoLink: "#"
},
    { 
      title: "Computer Vision Object Detection (YOLOv8)", 
      shortDesc: "Implementasi model deteksi objek kustom menggunakan Ultralytics YOLOv8 dan Python untuk identifikasi visual secara presisi.", 
      category: "Computer Vision",
      filterGroup: "vision",
      image: without,
      background: "Eksperimen pelatihan model computer vision menggunakan dataset kustom dari Roboflow untuk mendeteksi objek tertentu secara real-time via kamera.",
      features: [
        "Pelatihan model custom dengan Ultralytics YOLOv8",
        "Pemrosesan video/frame secara real-time menggunakan OpenCV",
        "Evaluasi metrik akurasi deteksi dan bounding box"
      ],
      techStack: ["Python", "OpenCV", "YOLOv8"],
      demoLink: "#"
    },
        { 
      title: "Computer Vision Red Tracking Object", 
      shortDesc: "Eksperimen pelatihan model computer vision  mendeteksi objek Bewarna Merah tertentu secara real-time via kamera.", 
      category: "Computer Vision",
      filterGroup: "vision",
      image: red,
      background: "Eksperimen pelatihan model computer vision  mendeteksi objek Bewarna Merah tertentu secara real-time via kamera.",
      features: [
        "Pelatihan model custom dengan Ultralytics YOLOv8",
        "Pemrosesan video/frame secara real-time menggunakan OpenCV",
        "Evaluasi metrik akurasi deteksi dan bounding box"
      ],
      techStack: ["Python", "OpenCV"],
      demoLink: "#"
    },
            { 
      title: "Computer Vision Blue Tracking Object", 
      shortDesc: "Eksperimen pelatihan model computer vision  mendeteksi objek Bewarna Biru tertentu secara real-time via kamera.", 
      category: "Computer Vision",
      filterGroup: "vision",
      image: blue,
      background: "Eksperimen pelatihan model computer vision  mendeteksi objek Bewarna Biru tertentu secara real-time via kamera.",
      features: [
        "Pemrosesan video/frame secara real-time menggunakan OpenCV",
        "Evaluasi metrik akurasi deteksi dan bounding box"
      ],
      techStack: ["Python", "OpenCV"],
      demoLink: "#"
    },
      { 
      title: "Computer Vision Tracking Baju Hitam", 
      shortDesc: "Eksperimen sistem computer vision untuk mendeteksi dan melacak objek pakaian atau subjek berwarga hitam tertentu secara real-time via kamera Dengan Dataset Custom Roboflow.",
      category: "Computer Vision",
      filterGroup: "vision",
      image: black,
      background: "Eksperimen pemrosesan citra digital dan pelatihan model computer vision untuk mengidentifikasi serta melacak keberadaan objek berwarna hitam secara spesifik pada tangkapan kamera secara real-time.",
      features: [
        "Filter warna dan ekstraksi fitur khusus untuk deteksi Baju hitam",
        "Pemrosesan video/frame secara real-time menggunakan OpenCV",
        "Evaluasi pelacakan pergerakan subjek secara akurat"
      ],
      techStack: ["Python", "OpenCV","RoboFlow"],
      demoLink: "#"
    },
    
  { 
    title: "Design Cover Book Project With PT Semen Indonesia Gresik", 
    shortDesc: "Perancangan konsep visual dan tata letak sampul buku korporat yang profesional, komunikatif, serta elegan.", 
    category: "Graphic Design",
    filterGroup: "design",
    image: design,
    background: "Proyek kolaborasi profesional bersama PT Semen Indonesia untuk merancang identitas visual sampul buku yang mencerminkan citra perusahaan, mengutamakan hierarki tipografi yang kuat, serta estetika desain yang selaras dengan standar korporat.",
    features: [
      "Eksplorasi konsep layout dan hierarki tipografi profesional",
      "Pemilihan palet warna dan aset visual sesuai identitas brand korporat",
      "Penyusunan file siap cetak (print-ready) dengan standar resolusi tinggi"
    ],
    techStack: ["Canva", "Figma"],
    demoLink: "#"
  }
  ];

  // Logika filter proyek
  const filteredProjects = activeFilter === "All" 
    ? projectList 
    : projectList.filter(p => p.filterGroup === activeFilter);

  return (
    <section className="block overflow-hidden py-5" id="projects">
      <div className="container">
        <h2 
          className="fw-black mb-2" 
          style={{ letterSpacing: '-1px' }}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          PROYEK PILIHAN
        </h2>
        <p 
          className="text-secondary mb-4"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
        >
          Geser ke samping untuk memilih kategori atau melihat proyek lainnya.
        </p>
        
        {/* TOMBOL TOGGLE KATEGORI */}
        <div 
          className="d-flex flex-row flex-nowrap overflow-auto pb-3 mb-4 gap-3" 
          style={{ scrollbarWidth: 'thin', msOverflowStyle: 'none' }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {[
            { id: "All", label: "Semua" },
            { id: "web", label: "Full-Stack & Web" },
            { id: "aerospace", label: "Aerospace & Software" },
            { id: "vision", label: "Computer Vision" },
            { id: "design", label: "Design" }
          ].map((cat) => (
            <button 
              key={cat.id}
              className={`btn px-4 fw-bold text-nowrap rounded-0`}
              onClick={() => setActiveFilter(cat.id)}
              style={{
                backgroundColor: activeFilter === cat.id ? '#000000' : 'transparent',
                color: activeFilter === cat.id ? '#ffffff' : '#000000',
                border: '3px solid #000000',
                boxShadow: activeFilter === cat.id ? 'none' : '4px 4px 0px #000000',
                transition: 'all 0.1s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* CONTAINER KARTU PROYEK */}
        <div 
          className="d-flex flex-row flex-nowrap overflow-auto pb-4 gap-4" 
          style={{ scrollbarWidth: 'thin', msOverflowStyle: 'none' }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              style={{ minWidth: '320px', maxWidth: '360px', flex: '0 0 auto' }}
            >
              <div 
                className="h-100 d-flex flex-column justify-content-between p-3"
                style={{ 
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  border: '3px solid #000000',
                  boxShadow: '6px 6px 0px #000000',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = '8px 8px 0px #000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0px, 0px)';
                  e.currentTarget.style.boxShadow = '6px 6px 0px #000000';
                }}
              >
                <div>
                  <div className="overflow-hidden mb-3 border border-dark" style={{ height: '160px', border: '3px solid #000000' }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <span className="badge bg-warning text-dark border border-dark mb-2 px-2 py-1 fw-bold rounded-0">{project.category}</span>
                  <h3 className="fw-bold fs-5 text-dark">{project.title}</h3>
                  <p className="mb-0 mt-2 text-secondary small">{project.shortDesc}</p>
                </div>
                <div className="mt-4 pt-3 border-top border-dark d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-dark small text-uppercase">Lihat Dokumentasi &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DOKUMENTASI PROYEK */}
        {selectedProject && (
          <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content p-3 shadow-lg" style={{ borderRadius: '0px', backgroundColor: '#ffffff', border: '4px solid #000000', boxShadow: '10px 10px 0px #000000' }}>
                <div className="modal-header border-bottom border-dark pb-3">
                  <div>
                    <span className="badge bg-warning text-dark border border-dark mb-1 fw-bold rounded-0">{selectedProject.category}</span>
                    <h3 className="modal-title fw-black text-dark mb-0">{selectedProject.title}</h3>
                  </div>
                  <button 
                    type="button" 
                    className="btn-close fw-bold" 
                    onClick={() => setSelectedProject(null)}
                    style={{ backgroundColor: '#fef08a', border: '2px solid #000', opacity: 1 }}
                  ></button>
                </div>
                
                <div className="modal-body py-4">
                  <div className="mb-4 border border-dark overflow-hidden" style={{ maxHeight: '250px', border: '3px solid #000000' }}>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>

                  <h5 className="fw-bold text-dark">Latar Belakang & Tujuan</h5>
                  <p className="text-secondary">{selectedProject.background}</p>

                  <h5 className="fw-bold text-dark mt-4">Fitur Utama</h5>
                  <ul className="text-secondary ps-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="mb-1">{feature}</li>
                    ))}
                  </ul>

                  <h5 className="fw-bold text-dark mt-4">Teknologi / Tools yang Digunakan</h5>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span key={idx} className="badge bg-warning text-dark border border-dark px-3 py-2 fw-bold rounded-0">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-footer border-top border-dark pt-3 d-flex justify-content-between">
                  <button 
                    type="button" 
                    className="btn rounded-0 px-4 fw-bold" 
                    onClick={() => setSelectedProject(null)}
                    style={{ backgroundColor: 'transparent', border: '2px solid #000000', boxShadow: '3px 3px 0px #000000' }}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
