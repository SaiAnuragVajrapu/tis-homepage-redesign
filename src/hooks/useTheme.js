import { useEffect, useState } from 'react'

const getInitialTheme = () => {
  const saved = localStorage.getItem('theme')
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}