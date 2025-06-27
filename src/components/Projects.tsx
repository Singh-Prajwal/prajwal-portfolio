'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard' 
import { useInView } from 'react-intersection-observer'
import { useActiveSection } from '@/context/active-section-context'
import { useEffect } from 'react'
type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string; 
  liveUrl?: string;
  githubUrl: string;
  figmaUrl?: string;
};

const projectData: Project[] = [
  {
        title: "Vibe Chat App",
        description: "Vibe Chat is a real-time chat application that allows users to chat with the AI-powered chatbot which communicates based on the emotions of the user. It's built with Next, and Socket.io, and it's deployed on Vercel.",
        tech: ["Next", "Node.js", "MongoDB", "Tailwind","TypeScript",""],
          image: "/vibeai.png",
        liveUrl: "https://vibe-ai-45f6.vercel.app/",
        githubUrl: "https://github.com/Singh-Prajwal/VibeAI"
      },
      {
        title: "Rental Guidebook",
        description: "Interactive digital guidebook",
        tech: ["Next.js", "Node.js","Stripe","TypeScript","Tailwind","Contentful"],
        image: "/rental.png",
        liveUrl:"https://rental-frontend-3irp.vercel.app/",
        githubUrl: "https://github.com/Singh-Prajwal/rental-frontend",
        },
        { 
            title: "Resolved Risk", 
            description: "A comprehensive platform for enterprise risk assessment and mitigation.",
            tech: ["React", "Node.js", "PostgreSQL", "Flask","Graphql","AWS","Python"],
            image: "/resolved-risk.png", 
            liveUrl: "https://app.resolvedrisk.com/",
            githubUrl: "https://github.com/Singh-Prajwal"
          },
          { 
            title: "FeeSchedulePro", 
            description: "A comprehensive platform for fee schedule management.",
            tech: ["React", "Node.js", "PostgreSQL", "Flask","Graphql","AWS","Stripe","Python"],
            image: "/feeschedulepro.png",
            liveUrl: "https://app.feeschedulepro.com/",
            githubUrl: "https://github.com/Singh-Prajwal"
          },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

export default function Projects() {
  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      setActiveSection('Projects');
    }
  }, [inView, setActiveSection]);
  return (
    <section id="projects"ref={ref}  className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Selected Work</h2>
      
     
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectData.map((project) => (
  
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  )
}