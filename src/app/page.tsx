import AchivementSection from '@/components/sections/AchivementSection';
import ContactSection from '@/components/sections/ContactSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectSection from '@/components/sections/ProjectsSection';
import TechStackSection from '@/components/sections/TechStackSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Harsh Kumar',
  description:
    'Harsh kumar - Results-driven Frontend Developer with 4+ years of experience in building scalable, high-performance web and mobile applications. Expertise in React, Next.js, TypeScript, and Flutter, with a strong focus on UI/UX optimization, performance tuning, and modern frontend architectures. Passionate about clean code, SOLID principles, and mentoring junior developers.',
  keywords: ['harsh', 'kumar', 'portfolio', 'frontend developer'],
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
