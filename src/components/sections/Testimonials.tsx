"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/data";

export default function Testimonials() {
  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%)",
      }}
    >
      <div className="orb orb-3 absolute top-0 left-1/4 opacity-25" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Testimonials"
          title="What Clients"
          highlight="Say"
          description="Real feedback from real clients. Their success is my greatest achievement."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.id} delay={0.15 * i} direction="up">
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(56,189,248,0.3)" }}
                className="p-6 rounded-xl border border-accent/10 bg-bg/60 h-full flex flex-col transition-all duration-300"
                style={{ backdropFilter: "blur(10px)" }}
              >
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Quote size={18} className="text-accent" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                </div>

                {/* Text */}
                <p className="text-text/80 text-sm leading-relaxed flex-1 italic mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-accent/10">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-lg">
                    {testimonial.avatar}
                    {/* 🔧 Replace with real client photo if available */}
                  </div>
                  <div>
                    <p className="text-text font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-muted font-mono text-[10px]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Fiverr CTA */}
        <FadeIn delay={0.5} className="mt-14">
          <div
            className="text-center p-8 rounded-xl border border-accent/10 bg-surface/20"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">
              Available on
            </p>
            <h3 className="font-display text-2xl font-bold text-text mb-3">
              Hire me on <span className="text-green-400">Fiverr</span>
            </h3>
            <p className="text-muted text-sm mb-6 max-w-md mx-auto">
              Looking for a reliable frontend developer? Let&apos;s work
              together to bring your project to life.
            </p>
            <motion.a
              href="https://fiverr.com/sellers/abdulhafeez_oba"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(74, 222, 128, 0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-500 text-white font-display font-bold rounded-lg hover:bg-green-400 transition-all"
            >
              🟢 View My Fiverr Profile
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
