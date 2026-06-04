'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, ArrowDown, Download, ExternalLink } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { personalInfo } from '@/data'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background Orbs */}
      <div className="orb orb-1 absolute top-1/4 -left-24 opacity-60" />
      <div className="orb orb-2 absolute bottom-1/4 -right-24 opacity-50" />
      <div className="orb orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

      {/* Floating code snippets */}
      <motion.div
        className="absolute top-32 right-12 hidden lg:block font-mono text-xs text-accent/30 select-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {'<Component />'}
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-12 hidden lg:block font-mono text-xs text-accent-2/30 select-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        {'const dev = () => 🚀'}
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-8 hidden xl:block font-mono text-xs text-green-400/20 select-none"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        {'npm run build'}
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
        <div className="max-w-3xl">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            <span className="font-mono text-xs text-green-400 tracking-wider">
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono text-accent text-sm tracking-widest mb-3"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-2"
          >
            <span className="text-text">Abdul</span>
            <span className="gradient-text">-Hafeez</span>
            <span className="text-accent">.</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl md:text-4xl font-display font-bold text-muted mb-6 h-12 flex items-center"
          >
            <span className="mr-3">I build</span>
            <TypeAnimation
              sequence={[
                'web applications.',
                2000,
                'React UIs.',
                2000,
                'Next.js apps.',
                2000,
                'fast websites.',
                2000,
                'great experiences.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-muted text-lg leading-relaxed max-w-xl mb-10"
          >
            Frontend Developer with <span className="text-accent">2+ years</span> of experience crafting
            fast, responsive web apps using{' '}
            <span className="text-text font-medium">HTML, CSS, JavaScript, React & Next.js</span>.
            Based in {personalInfo.location}.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(56,189,248,0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-accent text-bg font-display font-bold rounded-lg transition-all duration-300 hover:bg-accent/90 flex items-center gap-2"
            >
              View My Work <ExternalLink size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 border border-accent/40 text-accent font-display font-bold rounded-lg transition-all duration-300 hover:bg-accent/10 hover:border-accent flex items-center gap-2"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center gap-6"
          >
            <div className="h-px w-12 bg-accent/30" />
            {[
              { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
              { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
              { icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, color: '#38bdf8' }}
                className="text-muted transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="font-mono text-xs tracking-widest">scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} className="text-accent" />
        </motion.div>
      </motion.div>

      {/* Side line decoration */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 origin-center"
      >
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-accent/40" />
        <span className="font-mono text-[10px] text-muted tracking-widest rotate-90 origin-center whitespace-nowrap">
          FRONTEND DEV
        </span>
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-accent/40" />
      </motion.div>
    </section>
  )
}
