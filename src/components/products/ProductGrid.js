import ProductCard from './ProductCard'
import EmptyState from '@/components/ui/EmptyState'
import { Search } from 'lucide-react'

export default function ProductGrid({ products = [] }) {
  if (products.length === 0) {
    return (
      <EmptyState
        icon={Search}
        title="Produk tidak ditemukan"
        description="Coba ubah filter atau kata kunci pencarian kamu."
      />
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  )
}