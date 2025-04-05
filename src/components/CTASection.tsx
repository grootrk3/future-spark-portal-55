
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div className="bg-university-blue py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-university-blue to-university-teal p-8 md:p-12 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:max-w-xl mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
              <p className="text-white/90 text-lg">
                Apply now to join our diverse community of learners and innovators. Take the first step toward a brighter future with Future Spark University.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-university-blue hover:bg-university-lightBlue hover:text-university-blue px-6 py-6 text-lg">
                <Link to="/enrollment" className="flex items-center">
                  Apply Now <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-6 py-6 text-lg">
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
