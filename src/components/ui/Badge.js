export default function Badge({ children, variant = 'blue' }) {
  const variants = {
    blue: 'badge-blue',
    gold: 'badge-gold',
  }

  return (
    <span className={variants[variant]}>
      {children}
    </span>
  )
}