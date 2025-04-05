
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { programsData } from '@/data/programsData';
import { ArrowLeft, Clock, GraduationCap, DollarSign, Calendar, FileText, Users, CheckCircle } from 'lucide-react';

const ProgramDetail = () => {
  const { id } = useParams<{ id: string }>();
  const programId = parseInt(id || "0");
  
  const program = programsData.find(p => p.id === programId);
  
  if (!program) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Program Not Found</h1>
          <p className="mb-8">The program you're looking for doesn't exist or has been removed.</p>
          <Link to="/programs">
            <Button>
              <ArrowLeft size={16} className="mr-2" /> Back to Programs
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-university-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <Link to="/programs" className="inline-flex items-center text-university-teal hover:text-university-lightBlue mb-6">
                <ArrowLeft size={16} className="mr-2" /> Back to Programs
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{program.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-university-teal">{program.degreeLevel}</Badge>
                <Badge variant="outline" className="bg-university-lightBlue text-white border-none">
                  {program.category}
                </Badge>
              </div>
              <p className="text-lg mb-8">{program.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Clock size={20} className="mr-3 text-university-teal" />
                  <div>
                    <p className="text-sm opacity-75">Duration</p>
                    <p className="font-medium">{program.duration}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign size={20} className="mr-3 text-university-teal" />
                  <div>
                    <p className="text-sm opacity-75">Tuition Fee</p>
                    <p className="font-medium">{program.tuition}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="mr-3 text-university-teal" />
                  <div>
                    <p className="text-sm opacity-75">Start Dates</p>
                    <p className="font-medium">{program.startDates}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <GraduationCap size={20} className="mr-3 text-university-teal" />
                  <div>
                    <p className="text-sm opacity-75">Degree Awarded</p>
                    <p className="font-medium">{program.degreeLevel}</p>
                  </div>
                </div>
              </div>
              <Link to="/enrollment">
                <Button className="bg-university-teal hover:bg-university-teal/80">
                  Apply Now
                </Button>
              </Link>
            </div>
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-60 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Details Content */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="curriculum">
            <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="career">Career Paths</TabsTrigger>
            </TabsList>
            
            {/* Curriculum Tab */}
            <TabsContent value="curriculum" className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-university-blue">Program Curriculum</h2>
                
                {program.semesters && program.semesters.map((semester, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <FileText size={20} className="mr-2 text-university-teal" />
                      Semester {index + 1}
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Course</TableHead>
                          <TableHead>Credit Hours</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {semester.courses.map((course, courseIndex) => (
                          <TableRow key={courseIndex}>
                            <TableCell className="font-medium">{course.title}</TableCell>
                            <TableCell>{course.credits}</TableCell>
                            <TableCell>{course.description}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* Requirements Tab */}
            <TabsContent value="requirements" className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-university-blue">Admission Requirements</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle size={20} className="mr-2 text-university-teal" />
                    General Requirements
                  </h3>
                  <ul className="space-y-3">
                    {program.requirements && program.requirements.general.map((req, index) => (
                      <li key={index} className="flex">
                        <span className="mr-3 text-university-teal">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle size={20} className="mr-2 text-university-teal" />
                    Academic Requirements
                  </h3>
                  <ul className="space-y-3">
                    {program.requirements && program.requirements.academic.map((req, index) => (
                      <li key={index} className="flex">
                        <span className="mr-3 text-university-teal">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            {/* Career Paths Tab */}
            <TabsContent value="career" className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-university-blue">Career Opportunities</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Users size={20} className="mr-2 text-university-teal" />
                    Potential Career Paths
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {program.careers && program.careers.map((career, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-university-blue">{career.title}</h4>
                        <p className="text-sm text-gray-600 mt-2">{career.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProgramDetail;
