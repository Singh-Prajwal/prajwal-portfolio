'use client'

import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useActiveSection } from '@/context/active-section-context'
import Link from 'next/link';


export default function LeftSidebar() {
  const { scrollYProgress } = useScroll();
  const { activeSection } = useActiveSection();

  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/Singh-Prajwal/" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/prajwal-singh-8740b4236/" },
    { icon: <Mail size={24} />, href: "mailto:prajwal.singh.226@gmail.com" },
  ];

  return (
    // This sidebar is fixed to the left side of the viewport.
    <div className="fixed top-0 left-0 h-full w-24 hidden md:flex flex-col items-center justify-between py-8 z-40">
      
      {/* Logo/Name at the top */}
      <Link href="/#" className="font-bold text-xl">
        P.S.
      </Link>

      {/* Scroll Progress Indicator with Section Name */}
      <div className="flex items-center">
        {/* The progress bar track */}
        <div className="relative w-1 h-40 bg-white/10 rounded-full">
          {/* The actual progress bar that grows */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full"
            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
          />
        </div>
        {/* The animated section name */}
        <div className="relative w-20 h-20 ml-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center font-semibold text-xs text-gray-400 uppercase tracking-widest [writing-mode:vertical-rl]"
            >
              {activeSection}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Social Links at the bottom */}
      <div className="flex flex-col gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}