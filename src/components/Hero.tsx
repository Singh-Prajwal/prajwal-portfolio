'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useActiveSection } from '@/context/active-section-context'

export default function Hero() {
  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({ threshold: 0.75 });

  useEffect(() => {
    if (inView) {
      setActiveSection('Home');
    }
  }, [inView, setActiveSection]);

  return (
    <section id="home" ref={ref} className="h-screen flex flex-col justify-center items-start scroll-mt-28">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Prajwal Singh.
      </motion.h1>
      <motion.p 
        className="max-w-2xl text-lg text-gray-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Full Stack Developer building robust, scalable, and user-friendly digital experiences from end to end.
      </motion.p>
      <motion.a
        href="#projects"
        className="flex items-center gap-2 px-6 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors animate-pulse"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        id={"visitbtn"}
      >
        View My Work <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
