'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { skills } from '@/data'

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-text text-sm font-medium">{name}</span>
        <span className="font-mono text-xs text-accent">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-surface/80 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8)' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden">
      <div className="orb orb-3 absolute bottom-0 right-0 opacity-30" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Skills"
          title="My Technical"
          highlight="Expertise"
          description="Technologies and tools I work with to bring ideas to life."
        />

        <div className="grid lg:grid-cols-3 gap-10 mt-4">
          {/* Frontend Skills with bars */}
          <FadeIn delay={0.2} direction="up" className="lg:col-span-1">
            <div className="p-6 rounded-xl border border-accent/10 bg-surface/30 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <h3 className="font-display font-bold text-text">Frontend Stack</h3>
              </div>
              {skills.frontend.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.1 * i + 0.3} />
              ))}
            </div>
          </FadeIn>

          {/* Tools */}
          <FadeIn delay={0.3} direction="up" className="lg:col-span-1">
            <div className="p-6 rounded-xl border border-accent/10 bg-surface/30 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <h3 className="font-display font-bold text-text">Tools & Platforms</h3>
              </div>
              {skills.tools.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.1 * i + 0.3} />
              ))}
            </div>
          </FadeIn>

          {/* Other skills as badges */}
          <FadeIn delay={0.4} direction="up" className="lg:col-span-1">
            <div className="p-6 rounded-xl border border-accent/10 bg-surface/30 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <h3 className="font-display font-bold text-text">Other Expertise</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(56,189,248,0.5)' }}
                    className="skill-badge px-3 py-1.5 rounded-lg font-mono text-xs text-accent/80 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Currently Learning */}
              <div className="mt-6 pt-6 border-t border-accent/10">
                <p className="font-mono text-[10px] text-muted uppercase tracking-wider mb-3">Currently Learning</p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'GraphQL', 'Docker'].map((item) => (
                    <span key={item}
                      className="px-3 py-1.5 rounded-lg font-mono text-xs text-yellow-400/70 border border-yellow-400/15 bg-yellow-400/5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Tech icons strip */}
        <FadeIn delay={0.5} className="mt-12">
          <div className="p-6 rounded-xl border border-accent/10 bg-surface/20">
            <p className="font-mono text-xs text-muted text-center mb-6 uppercase tracking-widest">Technologies I work with daily</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Git', 'Figma', 'VS Code', 'Vercel', 'GitHub'].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4, color: '#38bdf8' }}
                  className="px-4 py-2 rounded-lg border border-accent/10 bg-bg/50 font-mono text-xs text-muted hover:border-accent/30 transition-all cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
