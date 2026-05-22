'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useT } from '@/lib/i18n'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'

export function Navbar() {
  const { t } = useT()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'backdrop-blur-md bg-[var(--bg)]/90 border-b border-[var(--m-border)] shadow-lg'
      : 'backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--m-border)]'
  }`

  return (
    <nav className={navClass} aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0" aria-label="Monitt.io home">
            <div className="relative w-8 h-8">
              <Image src="/logo.svg" alt="Monitt.io" fill className="object-contain" />
            </div>
            <span className="font-bold text-lg text-[var(--text-1)] tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Monitt.io
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--accent-dim)] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="#contacto"
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--m-accent)] text-[var(--bg)] hover:bg-[var(--accent-hi)] transition-colors glow-accent"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--accent-dim)] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-[var(--bg-mid)] border-b border-[var(--m-border)] px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--accent-dim)] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[var(--m-border)]">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="ml-auto px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--m-accent)] text-[var(--bg)] hover:bg-[var(--accent-hi)] transition-colors"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
