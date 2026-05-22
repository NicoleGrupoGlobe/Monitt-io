'use client'

import { ThemeProvider } from 'next-themes'
import { LangProvider } from './i18n'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      <LangProvider>{children}</LangProvider>
    </ThemeProvider>
  )
}
