import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, FileText, User } from 'lucide-react'
import { truncateText, getProductTypeLabel } from '@/lib/utils'

export default function ProductCard({ product }) {
  const isJournal = product.type === 'journal'

  return (
    <Link href={`/produk/${product.slug}`} className="card group block">
      {/* Cover Image */}
      <div
        className="relative overflow-hidden"
        style={{ height: '220px', backgroundColor: '#f1f5f9' }}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #1E3A8A, #1e40af)',
            }}
          >
            {isJournal ? (
              <FileText size={48} color="rgba(255,255,255,0.4)" />
            ) : (
              <BookOpen size={48} color="rgba(255,255,255,0.4)" />
            )}
          </div>
        )}

        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: isJournal ? '#D4AF37' : '#1E3A8A',
              color: isJournal ? '#0F172A' : 'white',
            }}
          >
            {getProductTypeLabel(product.type)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span
          className="text-xs font-medium mb-2 block"
          style={{ color: '#1E3A8A' }}
        >
          {product.category}
        </span>
        <h3
          className="font-bold text-base mb-2 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2"
          style={{ color: '#0F172A', fontFamily: 'Merriweather, serif' }}
        >
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {truncateText(product.description, 100)}
        </p>

        {/* Author */}
        <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#dbeafe' }}
          >
            <User size={14} style={{ color: '#1E3A8A' }} />
          </div>
          <span className="text-xs text-gray-500 truncate">{product.author}</span>
        </div>
      </div>
    </Link>
  )
}