export default function Button({ href, variant = 'primary', children, className = '' }) {
  const styles =
    variant === 'primary'
      ? 'bg-accent text-[#0f1b3d] hover:brightness-110'
      : 'text-text ring-1 ring-current hover:bg-bg'

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </a>
  )
}