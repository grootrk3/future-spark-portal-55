
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-university-blue to-university-teal text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Shape Your Future with Excellence</h1>
          <p className="text-xl mb-8">Discover world-class education, innovative research opportunities, and a vibrant campus community at Future Spark University.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-university-blue hover:bg-university-lightBlue hover:text-university-blue text-lg px-8 py-6">
              <Link to="/enrollment" className="flex items-center">
                Enroll Now <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6">
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
