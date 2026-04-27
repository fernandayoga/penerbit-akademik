import Link from 'next/link'
import { ArrowRight, BookOpen, Edit, FileText, MessageSquare, Search, Send } from 'lucide-react'

export const metadata = {
  title: 'Layanan Publikasi Akademik',
  description:
    'Layanan penerbitan jurnal, penerbitan buku, editing, proofreading, dan konsultasi publikasi akademik profesional.',
}

const services = [
  {
    icon: FileText,
    title: 'Penerbitan Jurnal',
    description:
      'Kami membantu publikasi jurnal ilmiah Anda dengan standar internasional. Proses review cepat, layout profesional, dan terindeks di database nasional.',
    features: ['Peer review process', 'Layout profesional', 'ISSN resmi', 'Terindeks nasional'],
    color: '#1E3A8A',
    bg: '#dbeafe',
  },
  {
    icon: BookOpen,
    title: 'Penerbitan Buku',
    description:
      'Terbitkan buku akademik, buku ajar, atau buku referensi Anda dengan ISBN resmi. Tersedia dalam format digital dan cetak.',
    features: ['ISBN resmi', 'Format digital & cetak', 'Distribusi nasional', 'Cover profesional'],
    color: '#D4AF37',
    bg: '#fef9c3',
  },
  {
    icon: Edit,
    title: 'Editing Naskah',
    description:
      'Tim editor berpengalaman kami akan memoles naskah Anda dari segi bahasa, struktur, dan konten agar memenuhi standar publikasi.',
    features: ['Editing bahasa', 'Editing struktur', 'Konsistensi penulisan', 'Format sitasi'],
    color: '#16a34a',
    bg: '#dcfce7',
  },
  {
    icon: Search,
    title: 'Proofreading',
    description:
      'Layanan pengecekan akhir naskah untuk memastikan tidak ada kesalahan ejaan, tata bahasa, dan format sebelum publikasi.',
    features: ['Cek ejaan & grammar', 'Cek format', 'Cek referensi', 'Laporan revisi'],
    color: '#7c3aed',
    bg: '#ede9fe',
  },
  {
    icon: MessageSquare,
    title: 'Konsultasi Publikasi',
    description:
      'Tidak tahu harus mulai dari mana? Konsultasikan kebutuhan publikasi Anda dengan tim ahli kami secara gratis.',
    features: ['Konsultasi gratis', 'Pemilihan jurnal', 'Strategi publikasi', 'Mentoring penulisan'],
    color: '#0891b2',
    bg: '#cffafe',
  },
  {
    icon: FileText,
    title: 'Translate & Lokalisasi',
    description:
      'Layanan penerjemahan naskah akademik dari Bahasa Indonesia ke Inggris atau sebaliknya dengan akurasi terminologi ilmiah.',
    features: ['Terjemahan akurat', 'Terminologi ilmiah', 'Native proofreading', 'Revisi gratis'],
    color: '#dc2626',
    bg: '#fee2e2',
  },
]

const steps = [
  { step: '01', title: 'Kirim Naskah', desc: 'Kirimkan naskah Anda via WhatsApp atau email kami.' },
  { step: '02', title: 'Konsultasi', desc: 'Tim kami akan menghubungi untuk diskusi kebutuhan.' },
  { step: '03', title: 'Proses', desc: 'Naskah diproses sesuai layanan yang dipilih.' },
  { step: '04', title: 'Terbit', desc: 'Karya Anda resmi diterbitkan dan terdistribusi.' },
]

export default function LayananPage() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const waMessage = encodeURIComponent('Halo, saya ingin konsultasi tentang layanan publikasi AkademiJurnal.')
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <div
        className="pt-28 pb-20"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)' }}
      >
        <div className="container-custom text-center">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
            style={{
              backgroundColor: 'rgba(212,175,55,0.2)',
              color: '#D4AF37',
              border: '1px solid rgba(212,175,55,0.3)',
            }}
          >
            Layanan Kami
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            Solusi Publikasi Akademik
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto mb-8"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Kami menyediakan layanan lengkap untuk kebutuhan publikasi ilmiah Anda,
            dari penerbitan hingga konsultasi.
          </p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <Send size={18} />
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Semua Layanan Kami</h2>
            <p className="section-subtitle mx-auto">
              Pilih layanan yang sesuai dengan kebutuhan publikasi akademik Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group"
                  style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)', backgroundColor: 'white', border: '1px solid #f1f5f9' }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: service.bg }}
                  >
                    <Icon size={28} style={{ color: service.color }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: '#0F172A', fontFamily: 'Merriweather, serif' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0"
                          style={{ backgroundColor: service.bg, color: service.color }}
                        >
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Cara Kerja</h2>
            <p className="section-subtitle mx-auto">
              Proses publikasi yang mudah dan transparan dalam 4 langkah sederhana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="text-center relative">
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5"
                    style={{ backgroundColor: '#dbeafe' }}
                  />
                )}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10"
                  style={{ backgroundColor: '#1E3A8A', color: 'white', fontFamily: 'Merriweather, serif' }}
                >
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#0F172A' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)' }}
      >
        <div className="container-custom text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            Siap Memulai Publikasi?
          </h2>
          <p className="mb-8 text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Hubungi kami sekarang dan dapatkan konsultasi gratis bersama tim ahli kami.
          </p>
          
           <a href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base px-10 py-4"
          >
            <Send size={20} />
            Hubungi via WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}