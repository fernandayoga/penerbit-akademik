import { BookOpen } from 'lucide-react'

export default function EmptyState({
  title = 'Tidak ada data',
  description = 'Belum ada konten yang tersedia.',
  icon: Icon = BookOpen,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
        style={{ backgroundColor: '#dbeafe' }}
      >
        <Icon size={36} style={{ color: '#1E3A8A' }} />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: '#0F172A' }}>
        {title}
      </h3>
      <p className="text-gray-500 max-w-md">{description}</p>
    </div>
  )
}