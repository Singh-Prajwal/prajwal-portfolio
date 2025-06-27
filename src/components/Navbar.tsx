'use client'

import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { ThemeToggle } from "./ThemeToggle"
import Link from 'next/link'

const navLinks = [
  { name: 'Skills', hash: '#skills' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Contact', hash: '#contact' },
]

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Use Framer Motion's optimized event listener for scroll changes
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    // Hide navbar if scrolling down and past a certain threshold (150px)
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      // Show navbar if scrolling up
      setHidden(false);
    }
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 p-4"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-110%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center bg-white/30 dark:bg-gray-950/30 backdrop-blur-md rounded-full border border-white/10">
        <Link href="/#" className="font-bold text-xl">
          Prajwal Singh
        </Link>
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.hash}>
              <a href={link.hash} className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </motion.header>
  )
}
