'use client'
import { motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { services } from '@/data'

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 relative"
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%)' }}>
      <div className="orb orb-1 absolute top-0 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="What I Do"
          title="Services I"
          highlight="Offer"
          description="From clean landing pages to complex web applications — I deliver quality solutions tailored to your needs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.1 * i} direction="up">
              <motion.div
                whileHover={{ y: -6, borderColor: 'rgba(56, 189, 248, 0.4)' }}
                className="group p-6 rounded-xl border border-accent/10 bg-bg/50 hover:bg-surface/80 transition-all duration-400 cursor-default h-full"
                style={{ backdropFilter: 'blur(10px)' }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-text mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 rounded-md font-mono text-[10px] text-accent/70 border border-accent/15 bg-accent/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover line */}
                <div className="mt-4 h-px w-0 group-hover:w-full bg-gradient-to-r from-accent to-accent-2 transition-all duration-500" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
