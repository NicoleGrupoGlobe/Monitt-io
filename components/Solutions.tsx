'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Truck, MapPin } from 'lucide-react'
import { useT } from '@/lib/i18n'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Zap,
  Truck,
  MapPin,
}

export function Solutions() {
  const { t } = useT()

  return (
    <section id="soluciones" className="py-24 bg-[var(--bg)]" aria-label="Solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-4">
            {t.solutions.title}
          </h2>
          <p className="text-[var(--text-2)] max-w-2xl mx-auto text-lg">
            {t.solutions.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.solutions.cards.map((card, i) => {
            const Icon = iconMap[card.icon] ?? Brain
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-[var(--bg-card)] border border-[var(--m-border)] rounded-xl p-6 flex flex-col gap-4 hover:border-[var(--m-accent)] hover:glow-accent transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-dim)] flex items-center justify-center group-hover:bg-[var(--m-accent)] transition-colors">
                  <Icon size={22} className="text-[var(--m-accent)] group-hover:text-[var(--bg)] transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-[var(--text-1)]">{card.title}</h3>
                <p className="text-sm text-[var(--text-2)] leading-relaxed flex-1">{card.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
