import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '../animation/ThemeToggle'
import Button from '../ui/Button'
import { navLinks, contact } from '../../data/siteData'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-muted/20 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-2xl font-bold text-brand">
          TIS
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button href={contact.admissionUrl} className="hidden md:inline-flex">
            Apply Now
          </Button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button href={contact.admissionUrl} className="mt-2">
            Apply Now
          </Button>
        </nav>
      )}
    </header>
  )
}