'use client'

import { motion } from 'framer-motion'
import { useT } from '@/lib/i18n'

const brands = [
  'Caterpillar', 'Cummins', 'Kohler Power', 'Atlas Copco',
  'Generac', 'ABB', 'Schneider Electric', 'Siemens',
]

export function ClientLogos() {
  const { t } = useT()

  return (
    <section className="py-16 border-y border-[var(--m-border)] bg-[var(--bg-mid)]" aria-label="Client logos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-[var(--text-2)] mb-8">{t.logos.title}</p>

        {/* Marquee */}
        <div className="marquee-track overflow-hidden">
          <div className="animate-marquee">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="inline-flex items-center mx-4 px-5 py-2.5 rounded-full border border-[var(--m-border)] bg-[var(--bg-card)] text-sm font-medium text-[var(--text-2)] hover:text-[var(--m-accent)] hover:border-[var(--m-accent)] transition-colors whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {t.testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--bg-card)] border border-[var(--m-border)] rounded-xl p-6 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-[var(--m-accent)] text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-[var(--text-2)] leading-relaxed flex-1">"{item.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-[var(--text-1)]">{item.name}</p>
                <p className="text-xs text-[var(--text-2)]">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
