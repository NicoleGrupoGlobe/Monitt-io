'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useT } from '@/lib/i18n'

export function Blog() {
  const { t } = useT()

  return (
    <section id="blog" className="py-24 bg-[var(--bg-mid)]" aria-label="Blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] mb-4">{t.blog.title}</h2>
          <p className="text-[var(--text-2)] text-lg max-w-xl mx-auto">{t.blog.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.blog.posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[var(--bg-card)] border border-[var(--m-border)] rounded-xl p-6 flex flex-col gap-4 hover:border-[var(--m-accent)] transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[var(--accent-dim)] text-[var(--m-accent)] border border-[var(--m-border)]">
                  {post.tag}
                </span>
                <span className="text-[11px] text-[var(--text-2)]">{post.date}</span>
              </div>

              <h3 className="text-base font-semibold text-[var(--text-1)] leading-snug group-hover:text-[var(--m-accent)] transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-[var(--text-2)] leading-relaxed flex-1">{post.excerpt}</p>

              <div className="flex items-center gap-1.5 text-xs text-[var(--m-accent)] font-medium group-hover:gap-2.5 transition-all">
                Leer más <ArrowRight size={12} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
