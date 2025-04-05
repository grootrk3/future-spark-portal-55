
import React from 'react';
import { GraduationCap, Users, Globe, BookOpen } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: '10,000+',
    label: 'Students Enrolled',
    icon: Users
  },
  {
    id: 2,
    value: '500+',
    label: 'Expert Faculty',
    icon: GraduationCap
  },
  {
    id: 3,
    value: '100+',
    label: 'Degree Programs',
    icon: BookOpen
  },
  {
    id: 4,
    value: '50+',
    label: 'Global Partners',
    icon: Globe
  }
];

const StatsSection = () => {
  return (
    <div className="bg-university-lightBlue py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(stat => (
            <div key={stat.id} className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4">
                <stat.icon size={32} className="text-university-blue" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-university-blue mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
