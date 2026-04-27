import { BookOpen, Target, Users, Award, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Tentang Kami — AkademiJurnal',
  description:
    'Kenali lebih dalam tentang AkademiJurnal, platform publikasi jurnal dan buku akademik digital terpercaya di Indonesia.',
}

const team = [
  {
    name: 'Dr. Ahmad Fauzi, M.Pd.',
    role: 'Founder & CEO',
    bio: 'Dosen senior dengan pengalaman 15 tahun di bidang publikasi akademik.',
    emoji: '👨‍🏫',
  },
  {
    name: 'Prof. Siti Rahayu, Ph.D.',
    role: 'Chief Editor',
    bio: 'Pakar editorial dengan rekam jejak publikasi di jurnal internasional bereputasi.',
    emoji: '👩‍💼',
  },
  {
    name: 'Budi Santoso, M.Kom.',
    role: 'CTO',
    bio: 'Engineer berpengalaman yang memimpin pengembangan platform digital kami.',
    emoji: '👨‍💻',
  },
  {
    name: 'Dewi Kusuma, M.Kes.',
    role: 'Head of Publishing',
    bio: 'Ahli penerbitan dengan spesialisasi di bidang kesehatan dan sains.',
    emoji: '👩‍🔬',
  },
]

const values = [
  { icon: '🎯', title: 'Akurasi', desc: 'Setiap publikasi melalui proses review ketat.' },
  { icon: '⚡', title: 'Efisiensi', desc: 'Proses cepat tanpa mengorbankan kualitas.' },
  { icon: '🤝', title: 'Integritas', desc: 'Menjunjung tinggi etika akademik.' },
  { icon: '🌍', title: 'Inklusif', desc: 'Terbuka untuk semua bidang ilmu.' },
]

const legalitas = [
  'SK Kemenkumham No. AHU-XXXX.AH.01.01',
  'NPWP: 12.345.678.9-XXX.000',
  'ISSN Center Indonesia Terdaftar',
  'Anggota IKAPI (Ikatan Penerbit Indonesia)',
  'Terindeks SINTA Kemendikbud',
]

export default function TentangPage() {
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
            Tentang Kami
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            AkademiJurnal
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Platform publikasi akademik digital terpercaya yang mendukung kemajuan ilmu pengetahuan Indonesia.
          </p>
        </div>
      </div>

      {/* Company Profile */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: '#dbeafe', color: '#1E3A8A' }}
              >
                Profil Perusahaan
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: '#0F172A', fontFamily: 'Merriweather, serif' }}
              >
                Memajukan Publikasi Akademik Indonesia
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AkademiJurnal berdiri sejak 2020 dengan misi menjadi jembatan antara para akademisi dan dunia publikasi ilmiah. Kami percaya bahwa setiap karya ilmiah yang berkualitas berhak mendapatkan tempat yang layak untuk dikenal.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Dengan tim yang terdiri dari para akademisi, editor berpengalaman, dan teknolog, kami menghadirkan platform yang memudahkan proses publikasi dari awal hingga akhir.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Jurnal Diterbitkan' },
                  { value: '1.200+', label: 'Buku Akademik' },
                  { value: '10.000+', label: 'Pengguna Aktif' },
                  { value: '50+', label: 'Mitra Universitas' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-4 text-center"
                    style={{ backgroundColor: '#F8FAFC' }}
                  >
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: '#1E3A8A', fontFamily: 'Merriweather, serif' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visi Misi */}
            <div className="space-y-6">
              <div
                className="rounded-2xl p-8"
                style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A8A)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#D4AF37' }}
                  >
                    <Target size={20} color="#0F172A" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Visi</h3>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Menjadi platform publikasi akademik digital nomor satu di Indonesia yang diakui secara nasional dan internasional pada tahun 2030.
                </p>
              </div>

              <div
                className="rounded-2xl p-8"
                style={{ backgroundColor: '#F8FAFC', border: '1px solid #e2e8f0' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#dbeafe' }}
                  >
                    <BookOpen size={20} style={{ color: '#1E3A8A' }} />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: '#0F172A' }}
                  >
                    Misi
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Menyediakan platform publikasi yang mudah, cepat, dan terjangkau',
                    'Meningkatkan kualitas publikasi akademik Indonesia',
                    'Membangun ekosistem akademik yang inklusif dan kolaboratif',
                    'Mendorong produktivitas penelitian nasional',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: '#1E3A8A' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Nilai-Nilai Kami</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: '#0F172A' }}>{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Tim Kami</h2>
            <p className="section-subtitle mx-auto">
              Didukung oleh para ahli di bidangnya masing-masing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="text-center rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4"
                  style={{ backgroundColor: '#F8FAFC' }}
                >
                  {member.emoji}
                </div>
                <h3 className="font-bold mb-1" style={{ color: '#0F172A' }}>{member.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: '#1E3A8A' }}>{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legalitas */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Legalitas & Akreditasi</h2>
            <p className="section-subtitle mx-auto">
              Kami beroperasi secara legal dan telah mendapat pengakuan resmi.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8" style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Award size={24} style={{ color: '#D4AF37' }} />
              <h3 className="font-bold text-lg" style={{ color: '#0F172A' }}>
                Dokumen Legal
              </h3>
            </div>
            <ul className="space-y-4">
              {legalitas.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 pb-4 border-b last:border-0 last:pb-0"
                  style={{ borderColor: '#f1f5f9' }}
                >
                  <CheckCircle size={18} style={{ color: '#16a34a' }} className="shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}