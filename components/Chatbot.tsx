'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, User } from 'lucide-react'
import { useT } from '@/lib/i18n'
import type { Lang } from '@/lib/content'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function Chatbot() {
  const { t, lang } = useT()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: t.chatbot.greeting },
  ])
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMessages([{ role: 'assistant', content: t.chatbot.greeting }])
  }, [lang])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    const updated: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(updated)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated, lang }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.content }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Lo siento, ocurrió un error. Por favor intenta de nuevo.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chatbot"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[var(--m-accent)] text-[var(--bg)] flex items-center justify-center shadow-xl hover:bg-[var(--accent-hi)] transition-all glow-accent"
        style={{ boxShadow: '0 0 30px rgba(48,191,18,0.4)' }}
      >
        {open ? <X size={20} /> : <MessageSquare size={20} />}
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden border border-[var(--m-border)] bg-[var(--bg-card)] shadow-2xl"
            style={{ boxShadow: '0 0 40px rgba(48,191,18,0.12), 0 20px 40px rgba(0,0,0,0.3)' }}
            role="dialog"
            aria-label={t.chatbot.title}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[var(--bg-mid)] border-b border-[var(--m-border)]">
              <div className="w-8 h-8 rounded-lg bg-[var(--m-accent)] flex items-center justify-center">
                <Bot size={16} className="text-[var(--bg)]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--text-1)]">{t.chatbot.title}</p>
                <div className="flex items-center gap-1 text-[10px] text-[var(--m-accent)]">
                  <span className="logo-dot w-1.5 h-1.5 rounded-full bg-[var(--m-accent)]" />
                  Online
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--accent-dim)] transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex flex-col gap-3 p-4 h-72 overflow-y-auto">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === 'assistant' ? 'bg-[var(--m-accent)]' : 'bg-[var(--accent-lo)]'
                  }`}>
                    {msg.role === 'assistant'
                      ? <Bot size={12} className="text-[var(--bg)]" />
                      : <User size={12} className="text-white" />
                    }
                  </div>
                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.role === 'assistant'
                        ? 'bg-[var(--bg-mid)] text-[var(--text-1)] rounded-tl-none'
                        : 'bg-[var(--m-accent)] text-[var(--bg)] rounded-tr-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--bg-mid)] w-16">
                  <span className="flex gap-1">
                    {[0, 1, 2].map((j) => (
                      <span
                        key={j}
                        className="w-1.5 h-1.5 rounded-full bg-[var(--m-accent)] animate-bounce"
                        style={{ animationDelay: `${j * 0.15}s` }}
                      />
                    ))}
                  </span>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 p-3 border-t border-[var(--m-border)] bg-[var(--bg-mid)]">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder={t.chatbot.placeholder}
                className="flex-1 px-3 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--m-border)] text-sm text-[var(--text-1)] placeholder-[var(--text-2)] focus:outline-none focus:border-[var(--m-accent)] transition-colors"
                aria-label={t.chatbot.placeholder}
              />
              <button
                onClick={send}
                disabled={!input.trim() || loading}
                aria-label={t.chatbot.send}
                className="w-9 h-9 rounded-lg bg-[var(--m-accent)] text-[var(--bg)] flex items-center justify-center hover:bg-[var(--accent-hi)] disabled:opacity-50 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
