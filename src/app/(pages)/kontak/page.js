import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react'

export const metadata = {
  title: 'Kontak Kami — AkademiJurnal',
  description: 'Hubungi tim AkademiJurnal untuk konsultasi publikasi, pertanyaan, atau kerjasama.',
}

export default function KontakPage() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const waMessage = encodeURIComponent('Halo AkademiJurnal, saya ingin bertanya tentang layanan publikasi.')
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`

  const contacts = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Akademik No. 1, Surabaya, Jawa Timur 60111',
      color: '#1E3A8A',
      bg: '#dbeafe',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@akademijurnal.id',
      color: '#D4AF37',
      bg: '#fef9c3',
      href: 'mailto:info@akademijurnal.id',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '+62 812-3456-7890',
      color: '#16a34a',
      bg: '#dcfce7',
      href: waLink,
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Jumat: 08.00 - 17.00 WIB',
      color: '#7c3aed',
      bg: '#ede9fe',
    },
  ]

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
            Hubungi Kami
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            Kami Siap Membantu
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Ada pertanyaan atau ingin memulai publikasi? Jangan ragu untuk menghubungi kami.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <div>
              <h2
                className="text-2xl font-bold mb-8"
                style={{ color: '#0F172A', fontFamily: 'Merriweather, serif' }}
              >
                Informasi Kontak
              </h2>

              <div className="space-y-4 mb-10">
                {contacts.map((c, i) => {
                  const Icon = c.icon
                  const content = (
                    <div
                      className="flex items-start gap-4 p-5 rounded-xl transition-all duration-200"
                      style={{ backgroundColor: '#F8FAFC', border: '1px solid #f1f5f9' }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: c.bg }}
                      >
                        <Icon size={22} style={{ color: c.color }} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">{c.title}</p>
                        <p className="font-semibold text-sm" style={{ color: '#0F172A' }}>
                          {c.content}
                        </p>
                      </div>
                    </div>
                  )

                  return c.href ? (
                    <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    <div key={i}>{content}</div>
                  )
                })}
              </div>

              {/* WhatsApp CTA */}
              <div
                className="rounded-2xl p-8 text-center"
                style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A8A)' }}
              >
                <p
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  Chat Langsung via WhatsApp
                </p>
                <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Respon cepat di hari kerja. Konsultasi gratis!
                </p>
                
                 <a href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center w-full"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Mulai Chat WhatsApp
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h2
                className="text-2xl font-bold mb-8"
                style={{ color: '#0F172A', fontFamily: 'Merriweather, serif' }}
              >
                Lokasi Kami
              </h2>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '450px' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5!2d112.7521!3d-7.2575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTUnMjcuMCJTIDExMsKwNDUnMDcuNiJF!5e0!3m2!1sid!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                📍 Jl. Akademik No. 1, Surabaya, Jawa Timur
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}