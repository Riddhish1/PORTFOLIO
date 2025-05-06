"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCategory } from "@/components/ui/skill-category";

export function SkillsSection() {
  const skills = {
    programming: [
      { name: "Java", level: 90 },
      { name: "C/C++", level: 85 },
      { name: "Python", level: 95 },
    ],
    ai_ml: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 90 },
      { name: "BERT", level: 80 },
      { name: "GPT", level: 85 },
      { name: "GANs", level: 75 },
      { name: "SVM", level: 80 },
      { name: "Q-learning", level: 70 },
      { name: "Hugging Face", level: 85 },
    ],
    web: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TailwindCSS", level: 90 },
    ],
    databases: [
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 85 },
    ],
    tools: [
      { name: "Docker", level: 75 },
      { name: "Git", level: 90 },
      { name: "Grafana", level: 70 },
    ],
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my technical capabilities" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SkillCategory title="Programming" skills={skills.programming} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SkillCategory title="Web Development" skills={skills.web} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <SkillCategory title="Generative AI & Machine Learning" skills={skills.ai_ml} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SkillCategory title="Databases" skills={skills.databases} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SkillCategory title="Tools & Platforms" skills={skills.tools} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}