'use client'

import Image from 'next/image'
import { useT } from '@/lib/i18n'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'

export function Footer() {
  const { t } = useT()

  return (
    <footer className="bg-[var(--accent-dk)] border-t border-[var(--m-border)]" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4" aria-label="Monitt.io home">
              <div className="relative w-7 h-7">
                <Image src="/logo.svg" alt="Monitt.io" fill className="object-contain" />
              </div>
              <span className="font-bold text-base text-[var(--text-1)]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Monitt.io
              </span>
            </a>
            <p className="text-sm text-[var(--text-2)] leading-relaxed max-w-xs mb-6">{t.footer.tagline}</p>
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* Link columns */}
          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-[var(--text-1)] uppercase tracking-wider mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--text-2)] hover:text-[var(--m-accent)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[var(--m-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-2)]">{t.footer.copyright}</p>
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-2)]">
            <span className="logo-dot w-1.5 h-1.5 rounded-full bg-[var(--m-accent)]" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
