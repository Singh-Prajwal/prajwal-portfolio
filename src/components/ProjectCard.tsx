'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Figma } from 'lucide-react'

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  figmaUrl?: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-[#171719] rounded-xl overflow-hidden border border-white/5 flex flex-col h-full"
      whileHover={{ 
        y: -8, 
        borderColor: "rgba(59, 130, 246, 0.5)",
        // 3D Tilt Effect
        rotateX: 5,
        rotateY: 3,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }} 
    >
      <div className="aspect-video relative overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>

      <div className="p-4 border-y border-white/5 text-gray-400 text-sm">
        {project.tech.join(' · ')}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-gray-400">{project.description}</p>
        
        <div className="flex flex-wrap gap-4 mt-auto pt-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" className="link-button"><ExternalLink size={16} /> Live</a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" className="link-button"><Github size={16} /> Github</a>
          )}
          {project.figmaUrl && (
            <a href={project.figmaUrl} target="_blank" className="link-button"><Figma size={16} /> Figma</a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
