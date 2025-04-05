
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const ProgramsHero = () => {
  return (
    <div className="bg-university-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Programs</h1>
          <p className="text-xl mb-8">
            Discover our comprehensive range of undergraduate and graduate programs
            designed to prepare you for success in your chosen field.
          </p>
          
          <div className="relative max-w-lg mx-auto">
            <Input 
              type="text" 
              placeholder="Search programs..." 
              className="pl-10 pr-4 py-3 w-full bg-white/10 border-white/20 text-white placeholder-white/60 focus:ring-university-teal"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsHero;
