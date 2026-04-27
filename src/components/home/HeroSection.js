"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const waMessage = encodeURIComponent(
    "Halo, saya ingin mengirimkan naskah untuk diterbitkan.",
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F172A 0%, #1E3A8A 55%, #1e40af 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "#D4AF37" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "#D4AF37" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ border: "2px solid #D4AF37" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-custom relative z-10 py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: "rgba(212,175,55,0.15)",
                color: "#D4AF37",
                border: "1px solid rgba(212,175,55,0.3)",
              }}
            >
              <Star size={14} fill="#D4AF37" />
              Platform Publikasi Akademik #1 di Indonesia
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: "white", fontFamily: "Merriweather, serif" }}
            >
              Publikasikan{" "}
              <span
                className="text-gradient"
                style={{
                  backgroundImage: "linear-gradient(135deg, #D4AF37, #f59e0b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Karya Ilmiah
              </span>{" "}
              Anda Bersama Kami
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Platform terpercaya untuk publikasi jurnal dan buku akademik
              digital. Kami membantu dosen, peneliti, dan mahasiswa menerbitkan
              karya terbaik mereka.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10 justify-center">
              {[
                { value: "500+", label: "Jurnal Diterbitkan" },
                { value: "1.200+", label: "Buku Akademik" },
                { value: "10.000+", label: "Pengguna Aktif" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold"
                    style={{
                      color: "#D4AF37",
                      fontFamily: "Merriweather, serif",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Kirim Naskah Sekarang
                <ArrowRight size={18} />
              </a>
              <Link
                href="/produk"
                className="btn-secondary"
                style={{ borderColor: "rgba(255,255,255,0.4)" }}
              >
                Lihat Katalog
                <BookOpen size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
