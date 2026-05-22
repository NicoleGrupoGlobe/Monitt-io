'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import content, { type Lang, type ContentShape } from './content'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: ContentShape
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const stored = localStorage.getItem('monitt-lang') as Lang | null
    if (stored === 'es' || stored === 'en') setLangState(stored)
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem('monitt-lang', l)
  }, [])

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useT() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useT must be used within LangProvider')
  return ctx
}
