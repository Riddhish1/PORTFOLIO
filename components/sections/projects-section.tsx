"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "FADE",
      description: "GenAI-powered live code generator using Gemini & OpenAI APIs",
      image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://github.com/Riddhish1",
      technologies: ["OpenAI API", "Gemini API", "React", "Node.js"],
      metrics: [
        { label: "Accuracy", value: 92 },
        { label: "Response Time", value: 1.2, unit: "s" },
      ],
    },
    {
      id: 2,
      title: "AI-Fault Tolerance System",
      description: "AI-based distributed system with fault prediction and ZeroMQ messaging",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://github.com/Riddhish1",
      technologies: ["Python", "TensorFlow", "ZeroMQ", "Docker"],
      metrics: [
        { label: "Prediction Accuracy", value: 95 },
        { label: "Fault Detection", value: 280, unit: "ms" },
      ],
    },
    {
      id: 3,
      title: "SpaceSage",
      description: "ML-powered astronomy toolkit with galaxy classification, orbit modeling (BERT)",
      image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://github.com/Riddhish1",
      technologies: ["PyTorch", "BERT", "Python", "Scikit-learn"],
      metrics: [
        { label: "Classification Accuracy", value: 89 },
        { label: "Model Size", value: 420, unit: "MB" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A showcase of my work in AI and machine learning" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}