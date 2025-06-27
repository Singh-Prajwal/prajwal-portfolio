'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Server, BrainCircuit } from 'lucide-react' // Updated import
import { useInView } from 'react-intersection-observer'
import { useActiveSection } from '@/context/active-section-context'

// --- REFINED & MODERNIZED SKILL SET ---
const skills = {
  frontend: [
    "TypeScript", 
    "React", 
    "Next.js", 
    "Tailwind CSS", 
    "Framer Motion"
  ],
  backend: [
    "Node.js", 
    "Python / Flask", 
    "Express.js", 
    "RESTful & GraphQL APIs", 
    "Stripe API"
  ],
  dataAndDatabases: [
    "PostgreSQL (SQL)", 
    "MongoDB (NoSQL)", 
    "Firebase", 
    "Redis", 
    "Prisma ORM"
  ],
  aiCloudAndDevops: [
    "Generative AI (LLMs)", 
    "AWS (EC2, S3, Lambda)", 
    "Docker", 
    "CI/CD (GitHub Actions)", 
    "Vercel", 
    "Git & GitHub"
  ],
};

const SkillCard = ({ title, icon, items }: { title: string, icon: React.ReactNode, items: string[] }) => (
  <motion.div 
    className="bg-[#171719] p-6 rounded-2xl border border-white/5"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map(item => (
        <span key={item} className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-full">
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setActiveSection('Skills');
    }
  }, [inView, setActiveSection]);

  return (
    <section id="skills" ref={ref} className="py-24 scroll-mt-28">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Tech Stack</h2>
      
      {/* --- NEW INTRODUCTORY PARAGRAPH --- */}
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        I specialize in building full-stack applications from concept to deployment, with a focus on 
        <span className="font-semibold text-gray-300"> scalability, security,</span> and seamless user experiences.
        I am comfortable in <span className="font-semibold text-gray-300">client-facing roles</span> and proficient with modern 
        <span className="font-semibold text-gray-300"> AI-powered development tools</span> like GitHub Copilot and Cursor.
      </p>

      {/* --- UPDATED BENTO GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCard title="Frontend" icon={<Code className="text-blue-500" />} items={skills.frontend} />
        <SkillCard title="Backend & APIs" icon={<Server className="text-green-500" />} items={skills.backend} />
        <SkillCard title="Data & Databases" icon={<Database className="text-yellow-500" />} items={skills.dataAndDatabases} />
        <SkillCard title="AI, Cloud & DevOps" icon={<BrainCircuit className="text-purple-500" />} items={skills.aiCloudAndDevops} />
      </div>
    </section>
  );
}
