
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, GraduationCap, DollarSign, Calendar } from 'lucide-react';

interface ProgramProps {
  program: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    duration: string;
    degreeLevel: string;
    tuition: string;
    startDates: string;
  };
}

const ProgramCard = ({ program }: ProgramProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="h-40 sm:h-48 overflow-hidden">
        <img 
          src={program.image} 
          alt={program.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-2 justify-between items-center mb-2">
          <Badge variant="outline" className="bg-university-lightBlue text-university-blue border-none text-xs">
            {program.category}
          </Badge>
          <Badge className="bg-university-teal text-xs">
            {program.degreeLevel}
          </Badge>
        </div>
        <CardTitle className="text-lg sm:text-xl text-university-blue line-clamp-2">{program.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4 sm:px-6 pt-0">
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{program.description}</p>
        <div className="space-y-2 text-xs sm:text-sm">
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-2 text-university-teal flex-shrink-0" /> 
            <span className="truncate">Duration: {program.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign size={16} className="mr-2 text-university-teal flex-shrink-0" /> 
            <span className="truncate">Tuition: {program.tuition}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-2 text-university-teal flex-shrink-0" /> 
            <span className="truncate">Start Dates: {program.startDates}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-4 sm:p-6">
        <Link to={`/programs/${program.id}`} className="w-full">
          <Button className="w-full bg-university-blue hover:bg-university-teal text-sm">
            View Program Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
