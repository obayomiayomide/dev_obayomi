'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
    }
    const handleMouseLeave = () => setIsVisible(false)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Glow follow */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        animate={{ x: position.x - 150, y: position.y - 150, opacity: isVisible ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 30, mass: 0.5 }}
        style={{ width: 300, height: 300 }}
      >
        <div className="w-full h-full rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)' }} />
      </motion.div>

      {/* Dot cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: position.x - (isPointer ? 16 : 4),
          y: position.y - (isPointer ? 16 : 4),
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.3 }}
        style={{
          width: isPointer ? 32 : 8,
          height: isPointer ? 32 : 8,
          borderRadius: '50%',
          background: isPointer ? 'transparent' : 'var(--accent)',
          border: isPointer ? '1.5px solid var(--accent)' : 'none',
        }}
      />
    </>
  )
}
