'use client' // This page must be a client component to use the hook

import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const { x, y } = useMousePosition();

  return (
    <main className="relative overflow-x-hidden">
      
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
        }}
      />
      
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  )
}
// // src/app/page.tsx
// 'use client' // This page now needs to be a client component for the hook

// import { motion } from 'framer-motion'
// import { useMousePosition } from '@/hooks/useMousePosition' // Import the hook
// import Navbar from '@/components/Navbar'
// import Hero from '@/components/Hero'
// import Skills from '@/components/Skills'
// import Projects from '@/components/Projects'
// import Contact from '@/components/Contact'
// import Footer from '@/components/Footer'

// export default function Home() {
//   const { x, y } = useMousePosition();

//   return (
//     <main className="relative overflow-x-hidden">
//       {/* Dynamic Mouse-Following Gradient */}
//       <motion.div
//         className="pointer-events-none fixed inset-0 z-0 transition duration-300"
//         style={{
//           background: `radial-gradient(600px at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
//         }}
//       />
      
//       {/* The rest of your page content needs a z-index to be above the glow */}
//       <div className="relative z-10">
//         <Navbar />
//         <div className="container mx-auto px-4">
//           <Hero />
//           <Skills />
//           <Projects />
//           <Contact />
//         </div>
//         <Footer />
//       </div>
//     </main>
//   )
// }