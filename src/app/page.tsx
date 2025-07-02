import AchivementSection from '@/components/sections/AchivementSection';
import ContactSection from '@/components/sections/ContactSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectSection from '@/components/sections/ProjectsSection';
import TechStackSection from '@/components/sections/TechStackSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Harsh Kumar',
  description: 'Harsh kumar - frontend developer portfolio',
};

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center">
      <HeroSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectSection />
      <AchivementSection />
      <ContactSection />
    </main>
  );
}
