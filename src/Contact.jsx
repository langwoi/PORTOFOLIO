import { useState } from 'react';
import './contact.css'
import Swal from 'sweetalert2';

export default function Contact() {
    const [status, setStatus] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("Mengirim...");

        const formData = new FormData(event.target);
        formData.append("access_key", "5d643aea-0b5e-4059-9a87-a3c7810df1de");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
            }).then((res) => res.json());

            if (res.success) {
                setStatus("")

                Swal.fire({
                    title: 'Berhasil!',
                    text: 'Pesan kamu berhasil dikirim ke email Galang!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#000'
                })
                event.target.reset();
            } else {
                setStatus("Gagal mengirim pesan.");
                alert(res.message || "Terjadi kesalahan.");
            }
        } catch (error) {
            setStatus("Terjadi kesalahan koneksi.");
            alert("Gagal terhubung ke server.");
        }
    };

  return (
    <section className="contact-section" id="contact">
      <div 
        className="contact-container"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div 
          className="contact-card"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="150"
        >
          <h2 className="contact-title">Kontak</h2>
          <p className="contact-intro">Tertarik bekerja sama? Kirim pesan lewat email.</p>
          
          <form 
            onSubmit={onSubmit}
            className="contact-form"
          >
            <div className="contact-field">
              <label htmlFor="contact-email">Email Kamu</label>
              <input 
                id="contact-email"
                type="email" 
                name="email" 
                required 
                placeholder="nama@example.com"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Pesan</label>
              <textarea 
                id="contact-message"
                name="message" 
                rows="4" 
                required 
                placeholder="Tulis pesanmu di sini..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              {status === "Mengirim..." ? "Mengirim..." : "Kirim email"}
            </button>
            
            {status && <p className="contact-status" style={{ marginTop: '10px', fontSize: '14px', fontWeight: 'bold' }}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}