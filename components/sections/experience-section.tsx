"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceCard } from "@/components/ui/experience-card";

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "AI Research Intern",
      company: "Centre for Nanotech & VLSI",
      duration: "May 2024 - Present",
      description: "Working on ZyNet: AI over RISC-V with FPGA + Verilog modules. Developing AI acceleration techniques for embedded systems.",
      responsibilities: [
        "Designed and implemented AI algorithms optimized for RISC-V architecture",
        "Developed Verilog modules for neural network acceleration",
        "Collaborated with hardware engineers to implement AI solutions on FPGA platforms",
        "Improved inference speed by 35% through architectural optimizations",
        "Created documentation and presented research findings to stakeholders"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My journey in the field of AI and technology" 
        />
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}