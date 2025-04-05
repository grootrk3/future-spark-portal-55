
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnrollmentForm from '@/components/EnrollmentForm';
import EnrollmentHero from '@/components/EnrollmentHero';

const Enrollment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <EnrollmentHero />
        <EnrollmentForm />
      </main>
      <Footer />
    </div>
  );
};

export default Enrollment;
