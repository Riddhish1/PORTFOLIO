"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { EducationCard } from "@/components/ui/education-card";

export function EducationSection() {
  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering",
      institution: "VIT Chennai",
      duration: "2020 - 2024",
      details: "CGPA: 9.38/10",
      achievements: [
        "Dean's List for Academic Excellence"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Advanced Learning Algorithms",
      issuer: "Coursera (Stanford University)",
      year: "2023",
      credentialId: "ML-CERT-2023"
    },
    {
      id: 2,
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera (Stanford University)",
      year: "2023",
      credentialId: "ML-CERT-2023"
    },
    {
      id: 3,
      title: "Deep Learning Specialization",
      issuer: "Coursera (deeplearning.ai)",
      year: "2023",
      credentialId: "DL-CERT-2023"
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Education & Certifications" 
          subtitle="My academic background and professional certifications" 
        />
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
            >
              Education
            </motion.h3>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <EducationCard education={item} />
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
            >
              Certifications
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-card rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                >
                  <h4 className="font-medium">{cert.title}</h4>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">ID: {cert.credentialId}</span>
                    <span className="text-xs bg-muted py-0.5 px-2 rounded-full">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}