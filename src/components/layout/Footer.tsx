"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Heart,
  ArrowUp,
} from "lucide-react";
import { personalInfo } from "@/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-accent/10 bg-surface/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <span className="font-display font-bold text-xl">
              <span className="gradient-text">Dev</span>
              <span className="text-text">Obayomi</span>
              <span className="text-accent">.</span>
            </span>
            <p className="text-muted text-sm mt-1 font-mono">
              Frontend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: Github,
                href: personalInfo.social.github,
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: personalInfo.social.linkedin,
                label: "LinkedIn",
              },
              {
                icon: Twitter,
                href: personalInfo.social.twitter,
                label: "Twitter",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-9 h-9 rounded-full border border-accent/20 flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-all"
                aria-label={label}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-muted hover:text-accent transition-colors font-mono text-xs"
          >
            Back to top <ArrowUp size={14} />
          </motion.button>
        </div>

        <div className="section-divider my-8" />

        <div className="text-center text-muted text-sm font-mono">
          <p>
            Designed & Built by{" "}
            <span className="text-accent">Obayomi Abdul-Hafeez</span>
          </p>
          <p className="mt-1 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
