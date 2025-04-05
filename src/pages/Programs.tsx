
import React from 'react';
import Navbar from '@/components/Navbar';
import ProgramsList from '@/components/ProgramsList';
import Footer from '@/components/Footer';
import ProgramsHero from '@/components/ProgramsHero';

const Programs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <ProgramsHero />
        <ProgramsList />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
