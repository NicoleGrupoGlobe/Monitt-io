'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { useT } from '@/lib/i18n'

export function Pricing() {
  const { t } = useT()
  const [annual, setAnnual] = useState(false)

  return (
    <section id="precios" className="py-24 bg-[var(--bg)]" aria-label="Pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-4">{t.pricing.title}</h2>
          <p className="text-[var(--text-2)] text-lg max-w-xl mx-auto mb-8">{t.pricing.subtitle}</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-card)] border border-[var(--m-border)]">
            {[false, true].map((isAnnual) => (
              <button
                key={String(isAnnual)}
                onClick={() => setAnnual(isAnnual)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  annual === isAnnual
                    ? 'bg-[var(--m-accent)] text-[var(--bg)]'
                    : 'text-[var(--text-2)] hover:text-[var(--text-1)]'
                }`}
              >
                {isAnnual ? t.pricing.toggle.annual : t.pricing.toggle.monthly}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.pricing.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-8 bg-[var(--bg-card)] border transition-all ${
                plan.highlight
                  ? 'border-2 border-[var(--m-accent)] shadow-lg glow-accent'
                  : 'border border-[var(--m-border)]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full bg-[var(--m-accent)] text-[var(--bg)] text-xs font-bold">
                  <Star size={10} fill="currentColor" />
                  Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[var(--text-1)] mb-2">{plan.name}</h3>
                <p className="text-sm text-[var(--text-2)] mb-4">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[var(--text-1)]">
                    {annual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.price.monthly !== 'Cotizar' && plan.price.monthly !== 'Custom' && (
                    <span className="text-sm text-[var(--text-2)]">/mo</span>
                  )}
                </div>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-[var(--text-2)]">
                    <Check size={15} className="text-[var(--m-accent)] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`w-full py-3 rounded-xl text-sm font-semibold text-center transition-all ${
                  plan.highlight
                    ? 'bg-[var(--m-accent)] text-[var(--bg)] hover:bg-[var(--accent-hi)] glow-accent'
                    : 'border border-[var(--m-border)] text-[var(--text-1)] hover:bg-[var(--accent-dim)] hover:border-[var(--m-accent)]'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
