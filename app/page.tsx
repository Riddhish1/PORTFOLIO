import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { EducationSection } from '@/components/sections/education-section';
import { ContactSection } from '@/components/sections/contact-section';
import { MotionWrapper } from '@/components/ui/motion-wrapper';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <MotionWrapper>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </MotionWrapper>
    </main>
  );
}