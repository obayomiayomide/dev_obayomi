import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'

export const metadata: Metadata = {
  title: 'Obayomi Abdul-Hafeez | Frontend Developer',
  description: 'Frontend Web Developer specializing in React, Next.js, and modern web technologies. Building fast, responsive, and beautiful web applications.',
  keywords: ['Frontend Developer', 'React Developer', 'Next.js', 'Web Developer', 'JavaScript', 'Nigeria'],
  authors: [{ name: 'Obayomi Abdul-Hafeez' }],
  openGraph: {
    title: 'Obayomi Abdul-Hafeez | Frontend Developer',
    description: 'Frontend Web Developer specializing in React, Next.js, and modern web technologies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
