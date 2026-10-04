import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import useTheme from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className={`flex h-9 w-16 items-center rounded-full bg-surface p-1 ring-1 ring-muted/30 ${
        isDark ? 'justify-end' : 'justify-start'
      }`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[#0f1b3d]"
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </motion.span>
    </button>
  )
}