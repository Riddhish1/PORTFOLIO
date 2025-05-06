"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  details: string;
  achievements: string[];
}

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <h3 className="text-xl font-bold">{education.degree}</h3>
            <p className="text-lg text-muted-foreground">{education.institution}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground bg-muted py-1 px-2 rounded-full">
              {education.duration}
            </p>
            <p className="text-sm font-semibold">{education.details}</p>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <h4 className="font-medium mb-2">Achievements:</h4>
        <ul className="space-y-2">
          {education.achievements.map((achievement, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start"
            >
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}