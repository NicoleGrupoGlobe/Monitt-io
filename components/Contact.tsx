'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Send } from 'lucide-react'
import { toast } from 'sonner'
import { useT } from '@/lib/i18n'

export function Contact() {
  const { t } = useT()
  const f = t.contact.fields
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', plan: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      toast.success(t.contact.successTitle, { description: t.contact.successBody })
      setForm({ name: '', company: '', email: '', phone: '', plan: '', message: '' })
    } catch {
      toast.error('Error al enviar. Por favor, intente nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-[var(--bg-mid)] border border-[var(--m-border)] text-[var(--text-1)] placeholder-[var(--text-2)] text-sm focus:outline-none focus:border-[var(--m-accent)] focus:ring-1 focus:ring-[var(--m-accent)] transition-colors'

  return (
    <section id="contacto" className="py-24 bg-[var(--bg-mid)]" aria-label="Contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-4">{t.contact.title}</h2>
          <p className="text-[var(--text-2)] text-lg max-w-xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 flex flex-col gap-4 bg-[var(--bg-card)] border border-[var(--m-border)] rounded-2xl p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-[var(--text-2)]">{f.name}</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder={f.name} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-xs font-medium text-[var(--text-2)]">{f.company}</label>
                <input id="company" name="company" type="text" value={form.company} onChange={handleChange} className={inputClass} placeholder={f.company} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-[var(--text-2)]">{f.email}</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder={f.email} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs font-medium text-[var(--text-2)]">{f.phone}</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} placeholder={f.phone} />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="plan" className="text-xs font-medium text-[var(--text-2)]">{f.plan}</label>
              <select id="plan" name="plan" value={form.plan} onChange={handleChange} className={inputClass}>
                <option value="" disabled>{f.plan}</option>
                {f.planOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium text-[var(--text-2)]">{f.message}</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder={f.message}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold bg-[var(--m-accent)] text-[var(--bg)] hover:bg-[var(--accent-hi)] disabled:opacity-60 transition-all glow-accent text-sm"
            >
              {loading ? (
                <span className="animate-spin rounded-full w-4 h-4 border-2 border-[var(--bg)] border-t-transparent" />
              ) : (
                <Send size={15} />
              )}
              {t.contact.submit}
            </button>
          </motion.form>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-[var(--bg-card)] border border-[var(--m-border)] rounded-2xl p-8 flex flex-col gap-6">
              <h3 className="font-semibold text-[var(--text-1)]">{t.contact.info.title}</h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: MapPin, text: t.contact.info.address },
                  { icon: Mail, text: t.contact.info.email },
                  { icon: Phone, text: t.contact.info.phone },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-[var(--text-2)]">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-dim)] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[var(--m-accent)]" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--accent-dim)] border border-[var(--m-border)] rounded-2xl p-6">
              <p className="text-sm text-[var(--text-2)] leading-relaxed">
                <span className="text-[var(--m-accent)] font-semibold">Respuesta en &lt;24h.</span>{' '}
                Nuestro equipo está disponible de Lunes a Viernes, 9:00–18:00 (Chile, UTC-3).
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
