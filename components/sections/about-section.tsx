"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Download } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know more about who I am and what drives my passion for AI"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg">
              I'm a dedicated Generative AI and full-stack developer with a passion for building 
              intelligent systems that solve real-world problems. My expertise spans across machine 
              learning, natural language processing, and modern web development.
            </p>
            
            <p className="text-lg">
              With a strong foundation in computer science and a keen interest in emerging AI technologies, 
              I develop systems that leverage the power of generative models like GPT and GANs. I'm 
              particularly interested in creating AI solutions that are both powerful and ethically 
              responsible.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you can find me exploring the latest research papers, 
              experimenting with new ML architectures, or contributing to open-source projects.
            </p>
            
            <div className="pt-4">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl"
          >
            <Image
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Riddhish Bonde"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}