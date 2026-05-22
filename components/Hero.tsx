'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Thermometer, Droplets, Signal, Battery, Activity } from 'lucide-react'
import { useT } from '@/lib/i18n'

function useCounter(target: number, duration: number = 1500) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    const start = Date.now()
    const step = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return { value, start: () => setStarted(true) }
}

export function Hero() {
  const { t } = useT()
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const voltage = useCounter(220, 1500)
  const temp = useCounter(78, 1800)
  const oil = useCounter(87, 1600)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true)
        voltage.start()
        temp.start()
        oil.start()
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated grid bg */}
      <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(48,191,18,0.12) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-dim)] text-[var(--m-accent)] border border-[var(--m-border)] mb-6">
            <span className="logo-dot w-1.5 h-1.5 rounded-full bg-[var(--m-accent)]" />
            {t.hero.badge}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-1)] leading-tight mb-6">
            {t.hero.headline}
          </h1>

          <p className="text-lg text-[var(--text-2)] leading-relaxed mb-8 max-w-lg">
            {t.hero.subhead}
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#contacto"
              className="px-6 py-3 rounded-xl font-semibold bg-[var(--m-accent)] text-[var(--bg)] hover:bg-[var(--accent-hi)] transition-all glow-accent text-sm"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#tecnologia"
              className="px-6 py-3 rounded-xl font-semibold border border-[var(--m-border)] text-[var(--text-1)] hover:bg-[var(--accent-dim)] hover:border-[var(--m-accent)] transition-all text-sm"
            >
              {t.hero.cta2}
            </a>
          </div>

          {/* Stats pills */}
          <div className="flex flex-wrap gap-3">
            {t.hero.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--m-border)] min-w-[90px]"
              >
                <span className="text-lg font-bold text-[var(--m-accent)]">{s.value}</span>
                <span className="text-[10px] text-[var(--text-2)] text-center leading-tight mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div
            className="relative w-72 sm:w-80 rounded-3xl overflow-hidden border border-[var(--m-border)] bg-[var(--bg-card)] shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(48,191,18,0.18), 0 20px 60px rgba(0,0,0,0.4)' }}
          >
            {/* Phone top bar */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-[var(--m-border)]">
              <span className="text-xs font-semibold text-[var(--text-1)]">Monitt.io</span>
              <span className="flex items-center gap-1 text-[10px] text-[var(--m-accent)]">
                <span className="logo-dot w-1.5 h-1.5 rounded-full bg-[var(--m-accent)]" />
                LIVE
              </span>
            </div>

            {/* Status bar */}
            <div className="grid grid-cols-3 gap-2 px-4 py-3 border-b border-[var(--m-border)]">
              <div className="flex flex-col items-center p-2 rounded-lg bg-[var(--accent-dim)]">
                <span className="text-[10px] text-[var(--text-2)]">{t.hero.mockup.statusLabel}</span>
                <span className="text-xs font-bold text-[var(--m-accent)] mt-0.5">{t.hero.mockup.status}</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-[var(--accent-dim)]">
                <Battery size={12} className="text-[var(--text-2)]" />
                <span className="text-[10px] text-[var(--text-2)]">{t.hero.mockup.batteryLabel}</span>
                <span className="text-xs font-bold text-[var(--text-1)] mt-0.5">{t.hero.mockup.battery}</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-[var(--accent-dim)]">
                <Signal size={12} className="text-[var(--text-2)]" />
                <span className="text-[10px] text-[var(--text-2)]">{t.hero.mockup.signalLabel}</span>
                <span className="text-xs font-bold text-[var(--text-1)] mt-0.5">{t.hero.mockup.signal}</span>
              </div>
            </div>

            {/* Telemetry cards */}
            <div className="p-4 space-y-3">
              <TelemetryCard
                icon={<Zap size={16} className="text-[var(--m-accent)]" />}
                label="Voltaje"
                value={`${voltage.value} V`}
                target={220}
                current={voltage.value}
              />
              <TelemetryCard
                icon={<Thermometer size={16} className="text-yellow-400" />}
                label="Temperatura"
                value={`${temp.value} °C`}
                target={100}
                current={temp.value}
                barColor="rgb(250,204,21)"
              />
              <TelemetryCard
                icon={<Droplets size={16} className="text-blue-400" />}
                label="Aceite"
                value={`${oil.value}%`}
                target={100}
                current={oil.value}
                barColor="rgb(96,165,250)"
              />
            </div>

            {/* Activity indicator */}
            <div className="px-4 pb-5">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--accent-dim)] border border-[var(--m-border)]">
                <Activity size={14} className="text-[var(--m-accent)]" />
                <span className="text-[10px] text-[var(--text-2)] flex-1">Sistema operando normalmente</span>
                <span className="text-[10px] text-[var(--m-accent)] font-semibold">OK</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TelemetryCard({
  icon,
  label,
  value,
  target,
  current,
  barColor = 'var(--m-accent)',
}: {
  icon: React.ReactNode
  label: string
  value: string
  target: number
  current: number
  barColor?: string
}) {
  const pct = Math.min((current / target) * 100, 100)
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-mid)] border border-[var(--m-border)]">
      <div className="shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] text-[var(--text-2)]">{label}</span>
          <span className="text-xs font-bold text-[var(--text-1)]">{value}</span>
        </div>
        <div className="h-1.5 rounded-full bg-[var(--accent-dim)] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, background: barColor }}
          />
        </div>
      </div>
    </div>
  )
}
