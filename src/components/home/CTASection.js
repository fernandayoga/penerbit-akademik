import Link from 'next/link'
import { ArrowRight, Send } from 'lucide-react'

export default function CTASection() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const waMessage = encodeURIComponent(
    'Halo, saya ingin mengirimkan naskah untuk diterbitkan di AkademiJurnal.'
  )
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)' }}>
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: '#D4AF37' }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: '#D4AF37' }}
        />
      </div>

      <div className="container-custom relative z-10 text-center">
        <span
          className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6"
          style={{ backgroundColor: 'rgba(212,175,55,0.2)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.3)' }}
        >
          Mulai Sekarang
        </span>

        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight"
          style={{ fontFamily: 'Merriweather, serif' }}
        >
          Siap Menerbitkan{' '}
          <span style={{
            backgroundImage: 'linear-gradient(135deg, #D4AF37, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Karya Terbaik
          </span>{' '}
          Anda?
        </h2>

        <p
          className="text-lg mb-10 max-w-2xl mx-auto"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          Kirimkan naskah Anda sekarang dan tim kami akan membantu proses publikasi
          dari awal hingga akhir dengan standar internasional.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          
          <a  href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base px-8 py-4"
          >
            <Send size={20} />
            Kirim Naskah via WhatsApp
          </a>
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '2px solid rgba(255,255,255,0.3)',
            }}
          >
            Lihat Layanan Kami
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            '✅ Proses Cepat & Mudah',
            '✅ Terindeks Nasional',
            '✅ Konsultasi Gratis',
            '✅ Revisi Tidak Terbatas',
          ].map((item) => (
            <span key={item} className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}