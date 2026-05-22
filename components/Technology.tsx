'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Shield, Wifi, Cloud, Smartphone } from 'lucide-react'
import { useT } from '@/lib/i18n'

const archIcons = [Wifi, Shield, Cloud, Smartphone]

export function Technology() {
  const { t } = useT()

  return (
    <section id="tecnologia" className="py-24 bg-[var(--bg-mid)]" aria-label="Technology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-4">{t.technology.title}</h2>
          <p className="text-[var(--text-2)] text-lg max-w-2xl mx-auto">{t.technology.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: text + architecture */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <p className="text-[var(--text-2)] leading-relaxed">{t.technology.body}</p>

            {/* Architecture diagram */}
            <div className="bg-[var(--bg-card)] border border-[var(--m-border)] rounded-xl p-6">
              <h3 className="text-sm font-semibold text-[var(--text-2)] mb-5 uppercase tracking-wider">
                {t.technology.archTitle}
              </h3>
              <div className="flex flex-col gap-3">
                {t.technology.nodes.map((node, i) => {
                  const Icon = archIcons[i] ?? Wifi
                  return (
                    <div key={i} className="flex flex-col">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-[var(--accent-dim)] border border-[var(--m-border)]">
                        <div className="w-8 h-8 rounded-lg bg-[var(--m-accent)] flex items-center justify-center shrink-0">
                          <Icon size={14} className="text-[var(--bg)]" />
                        </div>
                        <span className="text-sm font-medium text-[var(--text-1)]">{node}</span>
                      </div>
                      {i < t.technology.nodes.length - 1 && (
                        <div className="flex justify-start pl-7 py-1">
                          <ArrowRight size={14} className="text-[var(--m-accent)] rotate-90" />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: device photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center gap-4"
          >
            <div
              className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden glow-device"
              style={{ filter: 'contrast(1.1) brightness(1.05)' }}
            >
              <Image
                src="/device.jpg"
                alt="TRB256 IoT Gateway device"
                fill
                quality={90}
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--bg)]/80 backdrop-blur-sm border border-[var(--m-border)]">
                <span className="logo-dot w-2 h-2 rounded-full bg-[var(--m-accent)] shrink-0" />
                <span className="text-xs font-medium text-[var(--text-1)]">{t.technology.photoCaption}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
