'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const defaultCategories = [
  { name: 'Teknologi & Informatika', slug: 'teknologi-informatika', icon: '💻', count: 45 },
  { name: 'Pendidikan', slug: 'pendidikan', icon: '🎓', count: 38 },
  { name: 'Kesehatan & Kedokteran', slug: 'kesehatan', icon: '🏥', count: 52 },
  { name: 'Hukum & Politik', slug: 'hukum-politik', icon: '⚖️', count: 29 },
  { name: 'Ekonomi & Bisnis', slug: 'ekonomi-bisnis', icon: '📈', count: 61 },
  { name: 'Sains & Matematika', slug: 'sains-matematika', icon: '🔬', count: 44 },
  { name: 'Sosial & Humaniora', slug: 'sosial-humaniora', icon: '🌍', count: 33 },
  { name: 'Pertanian & Lingkungan', slug: 'pertanian-lingkungan', icon: '🌿', count: 27 },
]

export default function CategorySection() {
  const [categories, setCategories] = useState(defaultCategories)

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        if (data.categories && data.categories.length > 0) {
          setCategories(data.categories)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <section className="py-24" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#dbeafe', color: '#1E3A8A' }}
          >
            Jelajahi Kategori
          </span>
          <h2 className="section-title">Temukan Bidang Ilmu Anda</h2>
          <p className="section-subtitle mx-auto">
            Kami menyediakan publikasi dari berbagai bidang ilmu untuk mendukung kebutuhan akademik Anda.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <Link
              key={cat.slug || index}
              href={`/produk?category=${cat.slug}`}
              className="group bg-white rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(30,58,138,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
              }}
            >
              <div className="text-4xl mb-3">{cat.icon || '📚'}</div>
              <h3
                className="font-semibold text-sm mb-1 leading-snug group-hover:text-blue-700 transition-colors"
                style={{ color: '#0F172A' }}
              >
                {cat.name}
              </h3>
              {cat.count && (
                <p className="text-xs text-gray-400">{cat.count} publikasi</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}