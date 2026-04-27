import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import CategorySection from '@/components/home/CategorySection'
import CTASection from '@/components/home/CTASection'

export const metadata = {
  title: 'AkademiJurnal — Platform Publikasi Jurnal & Buku Akademik Digital',
  description:
    'Temukan ribuan jurnal ilmiah dan buku akademik digital. Platform terpercaya untuk dosen, peneliti, dan mahasiswa Indonesia.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <CTASection />
    </>
  )
}