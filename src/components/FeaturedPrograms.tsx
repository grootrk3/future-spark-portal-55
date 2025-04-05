
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const programs = [
  {
    id: 1,
    title: 'Computer Science',
    category: 'Technology',
    description: 'Develop expertise in artificial intelligence, software engineering, and data science with our comprehensive program.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800',
    popular: true
  },
  {
    id: 2,
    title: 'Business Administration',
    category: 'Business',
    description: 'Learn key management principles, finance, marketing, and entrepreneurship skills needed in today\'s global economy.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800',
    popular: false
  },
  {
    id: 3,
    title: 'Environmental Science',
    category: 'Science',
    description: 'Study sustainability, conservation, and environmental policy to address the world\'s most pressing ecological challenges.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800',
    popular: true
  },
];

const FeaturedPrograms = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-university-blue mb-4">Featured Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular degree programs designed to prepare you for success in today's competitive job market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map(program => (
            <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="bg-university-lightBlue text-university-blue border-none">
                    {program.category}
                  </Badge>
                  {program.popular && (
                    <Badge className="bg-university-teal">Popular</Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-university-blue">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{program.description}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Link to={`/programs/${program.id}`} className="w-full">
                  <Button className="w-full bg-university-blue hover:bg-university-teal">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-university-blue text-university-blue hover:bg-university-blue hover:text-white">
            <Link to="/programs" className="flex items-center">
              View All Programs <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPrograms;
