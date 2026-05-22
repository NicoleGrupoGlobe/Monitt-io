'use client'

import { useT } from '@/lib/i18n'
import type { Lang } from '@/lib/content'

export function LanguageToggle() {
  const { lang, setLang } = useT()

  return (
    <div className="flex items-center gap-0.5 text-xs font-medium">
      {(['es', 'en'] as Lang[]).map((l, i) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-1.5 py-0.5 rounded transition-colors ${
            lang === l
              ? 'text-[var(--m-accent)] font-semibold'
              : 'text-[var(--text-2)] hover:text-[var(--text-1)]'
          }`}
          aria-label={`Switch to ${l.toUpperCase()}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
