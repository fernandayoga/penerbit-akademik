import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import ScrollToTop from "@/components/ui/ScrollToTop"

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'AkademiJurnal'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Platform Publikasi Jurnal & Buku Akademik Digital`,
    template: `%s | ${siteName}`,
  },
  description:
    'Platform terpercaya untuk publikasi jurnal dan buku akademik digital di Indonesia. Tersedia ribuan jurnal ilmiah dan buku akademik dari para peneliti terbaik.',
  keywords: [
    'jurnal akademik',
    'buku akademik',
    'publikasi ilmiah',
    'penerbitan jurnal',
    'penerbitan buku',
    'penelitian ilmiah',
    'jurnal Indonesia',
    'akademik digital',
    'karya ilmiah',
    'open access',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName,
    title: `${siteName} — Platform Publikasi Jurnal & Buku Akademik Digital`,
    description:
      'Platform terpercaya untuk publikasi jurnal dan buku akademik digital di Indonesia.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} — Platform Publikasi Akademik`,
    description:
      'Platform terpercaya untuk publikasi jurnal dan buku akademik digital di Indonesia.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'GOOGLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}