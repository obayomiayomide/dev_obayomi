"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { experience } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      <div className="orb orb-2 absolute top-1/2 right-0 opacity-25 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Experience"
          title="My Professional"
          highlight="Journey"
          description="Where I've worked and what I've built along the way."
        />

        {/* Timeline */}
        <div className="relative mt-8">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <FadeIn key={exp.id} delay={0.15 * i} direction="left">
                <div className="relative pl-12 md:pl-20">
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * i, type: "spring" }}
                    className="absolute left-0 md:left-4 top-1 w-8 h-8 rounded-full border-2 border-accent bg-bg flex items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 rounded-xl border border-accent/10 bg-surface/40 hover:border-accent/30 transition-all group"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-xl text-text group-hover:text-accent transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-mono text-sm mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-xs text-muted border border-muted/20 bg-surface px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                        <p className="font-mono text-[10px] text-muted/60 mt-1 text-right">
                          {exp.duration}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.08 + 0.3 }}
                          className="flex items-start gap-2 text-sm text-text/80"
                        >
                          <span className="text-accent mt-1 text-xs">▹</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded font-mono text-[10px] text-accent/70 bg-accent/5 border border-accent/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Education / Certifications */}
        <FadeIn delay={0.4} className="mt-14">
          <div className="p-6 rounded-xl border border-accent/10 bg-surface/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <h3 className="font-display font-bold text-text">
                Education & Certifications
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "National Diploma/ Mechatronics Engineering", // 🔧 UPDATE
                  institution: "Lagos State Polytechnic, Ikorodu", // 🔧 UPDATE
                  year: "2020 — 2023",
                  period: "",
                  icon: "🎓",
                },
                {
                  title: "Frontend Web Development",
                  institution: "IOTB TECH Fellowship",
                  year: "2022 — Present",
                  period: "",
                  icon: "💻",
                },
              ].map((edu) => (
                <div
                  key={edu.title}
                  className="flex items-start gap-3 p-4 rounded-lg bg-bg/40 border border-accent/5"
                >
                  <span className="text-2xl">{edu.icon}</span>
                  <div>
                    <p className="text-text font-medium text-sm">{edu.title}</p>
                    <p className="text-accent font-mono text-xs mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-muted font-mono text-[10px] mt-0.5">
                      {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
