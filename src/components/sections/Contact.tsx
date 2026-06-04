'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { personalInfo } from '@/data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    // 🔧 Integrate EmailJS or your preferred email service here
    // Example with EmailJS:
    // import emailjs from '@emailjs/browser'
    // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
    
    // Simulated success for now
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1500)
  }

  const inputClass = `w-full px-4 py-3 rounded-lg border border-accent/15 bg-surface/50 text-text 
    placeholder:text-muted/50 font-body text-sm outline-none focus:border-accent/50 
    focus:ring-1 focus:ring-accent/20 transition-all duration-300`

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="orb orb-1 absolute top-1/3 right-0 opacity-25" />
      <div className="orb orb-2 absolute bottom-0 left-0 opacity-20" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Let's Work"
          highlight="Together"
          description="Have a project in mind? I'd love to hear from you. Send me a message and let's build something great."
        />

        <div className="grid lg:grid-cols-5 gap-12 mt-4">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-8">
            <FadeIn delay={0.2} direction="left">
              <div>
                <h3 className="font-display font-bold text-xl text-text mb-2">Get in touch</h3>
                <p className="text-muted text-sm leading-relaxed">
                  I&apos;m currently available for freelance work. If you have a project that needs a frontend developer, let&apos;s talk!
                </p>
              </div>
            </FadeIn>

            {/* Contact details */}
            <FadeIn delay={0.3} direction="left">
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 p-4 rounded-xl border border-accent/10 bg-surface/30 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-muted uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a href={href} className="text-text text-sm hover:text-accent transition-colors">{value}</a>
                      ) : (
                        <p className="text-text text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Social links */}
            <FadeIn delay={0.4} direction="left">
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Find me on</p>
                <div className="flex gap-3">
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
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="w-11 h-11 rounded-xl border border-accent/15 bg-surface/50 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <FadeIn delay={0.3} direction="right" className="lg:col-span-3">
            <form onSubmit={handleSubmit}
              className="p-8 rounded-xl border border-accent/10 bg-surface/30 space-y-5"
              style={{ backdropFilter: 'blur(10px)' }}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2 block">Name</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Your name" required className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="your@email.com" required className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2 block">Subject</label>
                <input
                  type="text" name="subject" value={form.subject} onChange={handleChange}
                  placeholder="Project inquiry" required className={inputClass}
                />
              </div>

              <div>
                <label className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project..." required rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={status !== 'loading' ? { scale: 1.02, boxShadow: '0 0 25px rgba(56,189,248,0.25)' } : {}}
                whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                className={`w-full py-3.5 rounded-lg font-display font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-green-500 text-white'
                    : status === 'error'
                    ? 'bg-red-500/20 text-red-400 border border-red-400/30'
                    : 'bg-accent text-bg hover:bg-accent/90'
                }`}
              >
                {status === 'loading' && (
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                    <Send size={16} />
                  </motion.div>
                )}
                {status === 'success' && <><CheckCircle size={16} /> Message Sent!</>}
                {status === 'error' && <><AlertCircle size={16} /> Failed — Try Again</>}
                {status === 'idle' && <><Send size={16} /> Send Message</>}
              </motion.button>

              {status === 'success' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-center text-green-400 font-mono text-xs">
                  ✓ Thanks! I&apos;ll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
