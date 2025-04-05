
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Announcements from '@/components/Announcements';
import FeaturedPrograms from '@/components/FeaturedPrograms';
import StatsSection from '@/components/StatsSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Announcements />
        <FeaturedPrograms />
        <StatsSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
