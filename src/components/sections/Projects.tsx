"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data";

const categories = ["All", "Web App", "Landing Page", "Portfolio", "Business"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-28 px-6 relative"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%)",
      }}
    >
      <div className="orb orb-1 absolute top-1/3 left-0 opacity-20" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Portfolio"
          title="Projects I've"
          highlight="Built"
          description="A selection of projects that showcase my skills and experience building real-world web applications."
        />

        {/* Category Filter */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-accent text-bg border border-accent shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                    : "border border-accent/20 text-muted hover:border-accent/50 hover:text-accent"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="project-card group rounded-xl overflow-hidden cursor-default"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-surface-2">
                  {/* 🔧 Replace placeholder with actual screenshot */}
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, hsl(${(project.id * 60) % 360}deg 30% 15%) 0%, hsl(${(project.id * 60 + 30) % 360}deg 25% 10%) 100%)`,
                    }}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">🖥️</div>
                      <p className="font-mono text-xs text-muted">
                        Add screenshot
                      </p>
                      <p className="font-mono text-[10px] text-muted/50">
                        public/projects/project{project.id}.png
                      </p>
                    </div>
                    {/* To use your screenshot:
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                    */}
                  </div>

                  {/* Overlay on hover */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center gap-4"
                        style={{
                          background: "rgba(8, 12, 20, 0.85)",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.05 }}
                          className="w-10 h-10 rounded-full bg-accent text-bg flex items-center justify-center hover:scale-110 transition-transform"
                          title="Live Preview"
                        >
                          <Eye size={16} />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="w-10 h-10 rounded-full bg-surface border border-accent/30 text-accent flex items-center justify-center hover:scale-110 transition-transform"
                          title="GitHub"
                        >
                          <Github size={16} />
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md font-mono text-[10px] text-accent border border-accent/25 bg-bg/80 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-md font-mono text-[10px] text-yellow-400 border border-yellow-400/25 bg-bg/80 backdrop-blur-sm">
                        Featured ⭐
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-text text-lg mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded font-mono text-[10px] text-accent/70 bg-accent/5 border border-accent/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-accent hover:text-accent/80 font-mono text-xs transition-colors"
                    >
                      <ExternalLink size={12} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-muted hover:text-text font-mono text-xs transition-colors"
                    >
                      <Github size={12} /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More projects CTA */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <motion.a
              href={`https://github.com/obayomiayomide`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-8 py-3 border border-accent/30 text-accent font-mono text-sm rounded-lg hover:bg-accent/10 hover:border-accent transition-all"
            >
              <Github size={16} /> View All on GitHub
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
