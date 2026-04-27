import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'AkademiJurnal — Platform Publikasi Jurnal & Buku Akademik',
    template: '%s | AkademiJurnal',
  },
  description:
    'Platform terpercaya untuk publikasi jurnal dan buku akademik digital di Indonesia. Tersedia ribuan jurnal ilmiah dan buku akademik dari para peneliti terbaik.',
  keywords: ['jurnal akademik', 'buku akademik', 'publikasi ilmiah', 'penerbitan jurnal', 'penelitian'],
  authors: [{ name: 'AkademiJurnal' }],
  creator: 'AkademiJurnal',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'AkademiJurnal',
    title: 'AkademiJurnal — Platform Publikasi Jurnal & Buku Akademik',
    description:
      'Platform terpercaya untuk publikasi jurnal dan buku akademik digital di Indonesia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AkademiJurnal',
    description: 'Platform terpercaya untuk publikasi jurnal dan buku akademik digital.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}