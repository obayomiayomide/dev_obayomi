"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Code2, Zap, Coffee } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo, stats } from "@/data";
import Image from "next/image";

const highlights = [
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: Code2, label: "Experience", value: "2+ Years" },
  { icon: Zap, label: "Specialty", value: "React / Next.js" },
  { icon: Coffee, label: "Status", value: personalInfo.availability },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <div className="orb orb-2 absolute top-1/2 right-0 opacity-30 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="About Me"
          title="The person behind"
          highlight="the code"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-4">
          {/* Left: Avatar / Visual */}
          <FadeIn direction="left" delay={0.2}>
            <div className="relative flex justify-center lg:justify-start">
              {/* Avatar container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Rotating border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #38bdf8, #818cf8, #34d399, #38bdf8)",
                    padding: "2px",
                    borderRadius: "1rem",
                  }}
                >
                  <div
                    className="w-full h-full rounded-2xl"
                    style={{ background: "var(--bg)" }}
                  />
                </motion.div>

                {/* Profile image placeholder */}
                <div
                  className="absolute inset-1 rounded-2xl overflow-hidden"
                  style={{ background: "var(--surface)" }}
                >
                  {/* 🔧 Replace the div below with your actual <Image> component */}
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-3"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)",
                    }}
                  >
                    <div className="text-6xl">
                      <Image
                        src="/images/profile.png"
                        alt="Abdul-Hafeez"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-mono text-xs text-muted">
                      Your photo here
                    </p>
                    {/* To use your photo: 
                      import Image from 'next/image'
                      <Image src="/profile.jpg" alt="Abdul-Hafeez" fill className="object-cover" />
                      Then place your photo at /public/profile.jpg
                    */}
                  </div>
                </div>

                {/* Experience badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="absolute -bottom-5 -right-5 bg-accent text-bg px-4 py-2 rounded-xl font-display font-bold text-sm shadow-lg"
                >
                  2+ Yrs Exp
                </motion.div>

                {/* Tech badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -top-4 -left-4 bg-surface border border-accent/30 px-4 py-2 rounded-xl font-mono text-xs text-accent shadow-lg"
                >
                  React • Next.js
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <FadeIn delay={0.3}>
              <p className="text-text text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-muted leading-relaxed">
                {personalInfo.bioExtended}
              </p>
            </FadeIn>

            {/* Highlights grid */}
            <FadeIn delay={0.5}>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {highlights.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-lg border border-accent/10 bg-surface/50"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-muted uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="text-text text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.6}>
              <div className="flex gap-4 pt-2">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="px-6 py-3 bg-accent text-bg font-display font-bold rounded-lg text-sm hover:bg-accent/90 transition-all"
                >
                  Get In Touch
                </motion.a>
                {/* 🔧 Optionally add your CV/resume link */}
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.03 }}
                  className="px-6 py-3 border border-accent/30 text-accent font-display font-bold rounded-lg text-sm hover:bg-accent/10 transition-all"
                >
                  Download CV
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 * i} direction="up">
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center p-6 rounded-xl border border-accent/10 bg-surface/30 hover:border-accent/30 transition-all"
              >
                <div className="font-display text-4xl font-extrabold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
