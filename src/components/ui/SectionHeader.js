export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span
          className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
          style={{
            backgroundColor: '#dbeafe',
            color: '#1E3A8A',
          }}
        >
          {badge}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}