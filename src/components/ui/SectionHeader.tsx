'use client'
import FadeIn from './FadeIn'

interface SectionHeaderProps {
  label: string
  title: string
  highlight?: string
  description?: string
}

export default function SectionHeader({ label, title, highlight, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <FadeIn delay={0.1}>
        <span className="inline-block text-xs font-mono tracking-[0.2em] uppercase text-accent border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full mb-4">
          {label}
        </span>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
          {title}{' '}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.3}>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
