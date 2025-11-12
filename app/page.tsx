import Hero from '@/components/Hero';
import InstagramSection from '@/components/InstagramSection';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <InstagramSection />
      <Services />
      <Contact />
    </main>
  );
}
