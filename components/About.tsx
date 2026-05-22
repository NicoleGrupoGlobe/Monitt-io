'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useT } from '@/lib/i18n'

export function About() {
  const { t } = useT()

  return (
    <section id="nosotros" className="py-24 bg-[var(--bg)]" aria-label="About">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full text-sm bg-[var(--accent-dim)] border border-[var(--m-border)] text-[var(--text-2)]">
              {t.about.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)]">{t.about.title}</h2>
            <p className="text-lg text-[var(--text-2)] leading-relaxed">{t.about.subtitle}</p>
            <p className="text-[var(--text-2)] leading-relaxed">{t.about.body}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {t.about.stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--m-border)]">
                  <span className="text-2xl font-bold text-[var(--m-accent)]">{s.value}</span>
                  <span className="text-xs text-[var(--text-2)] mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: field photos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {(['/field1.jpg', '/field2.jpg'] as const).map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden glow-device group"
                  style={{ filter: 'contrast(1.05) saturate(1.1)' }}
                >
                  <Image
                    src={src}
                    alt={`Field installation ${i + 1} — TRB256 device at ElectroPower generator`}
                    fill
                    quality={90}
                    className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-[var(--text-2)] italic">{t.about.photoCaption}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
