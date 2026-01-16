import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SkillsSection from '@/components/SkillsSection';
import Speakers from '@/components/Speakers';
import Vision from '@/components/Vision';
import FactsSection from '@/components/FactsSection';
import RSVPForm from '@/components/RSVPForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SkillsSection />
      <Speakers />
      <Vision />
      <FactsSection />
      <RSVPForm />
      <Footer />
    </div>
  );
}