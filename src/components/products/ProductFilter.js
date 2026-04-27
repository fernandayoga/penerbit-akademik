'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function ProductFilter({ categories = [] }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentType = searchParams.get('type') || 'all'
  const currentCategory = searchParams.get('category') || 'all'

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    params.delete('page')
    router.push(`/produk?${params.toString()}`)
  }

  const typeFilters = [
    { value: 'all', label: 'Semua' },
    { value: 'journal', label: 'Jurnal' },
    { value: 'book', label: 'Buku' },
  ]

  return (
    <div className="flex flex-wrap gap-10">
      {/* Type Filter */}
      <div>
        <p className="text-sm font-semibold mb-2" style={{ color: '#0F172A' }}>
          Tipe Produk
        </p>
        <div className="flex flex-wrap gap-2">
          {typeFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => updateFilter('type', f.value)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: currentType === f.value ? '#1E3A8A' : '#f1f5f9',
                color: currentType === f.value ? 'white' : '#475569',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      {categories.length > 0 && (
        <div>
          <p className="text-sm font-semibold mb-2" style={{ color: '#0F172A' }}>
            Kategori
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => updateFilter('category', 'all')}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: currentCategory === 'all' ? '#D4AF37' : '#f1f5f9',
                color: currentCategory === 'all' ? '#0F172A' : '#475569',
              }}
            >
              Semua Kategori
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => updateFilter('category', cat.slug)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: currentCategory === cat.slug ? '#D4AF37' : '#f1f5f9',
                  color: currentCategory === cat.slug ? '#0F172A' : '#475569',
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}