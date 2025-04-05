
import React from 'react';
import { 
  Bell, 
  Calendar, 
  Users, 
  Award,
  ArrowRight
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const announcements = [
  {
    id: 1,
    title: 'Summer Registration Now Open',
    date: 'April 5, 2025',
    description: 'Early registration for summer courses is now open for all students. Reserve your spot before classes fill up.',
    icon: Calendar,
    category: 'Academic'
  },
  {
    id: 2,
    title: 'New Scholarship Opportunities',
    date: 'April 3, 2025',
    description: 'Several new merit and need-based scholarships are available for the upcoming academic year.',
    icon: Award,
    category: 'Financial'
  },
  {
    id: 3,
    title: 'Campus Career Fair',
    date: 'March 28, 2025',
    description: 'Over 50 companies will be recruiting at our annual career fair on April 15. Prepare your resume!',
    icon: Users,
    category: 'Event'
  }
];

const Announcements = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Bell size={24} className="text-university-teal mr-3" />
          <h2 className="text-3xl font-bold text-university-blue">Latest Announcements</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {announcements.map(announcement => (
            <Card key={announcement.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm text-university-teal font-medium mb-1">{announcement.category}</div>
                    <CardTitle className="text-xl text-university-blue">{announcement.title}</CardTitle>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-university-lightBlue flex items-center justify-center text-university-blue">
                    <announcement.icon size={20} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{announcement.description}</CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{announcement.date}</span>
                  <Button variant="link" className="text-university-teal p-0 h-auto">
                    Read more <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-university-teal text-university-teal hover:bg-university-teal hover:text-white">
            View All Announcements <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
