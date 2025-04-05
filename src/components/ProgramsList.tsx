
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ProgramCard from '@/components/ProgramCard';
import { programsData } from '@/data/programsData';

const ProgramsList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Get unique categories
  const categories = ["all", ...new Set(programsData.map(program => program.category))];
  
  // Filter programs based on selected category
  const filteredPrograms = selectedCategory === "all" 
    ? programsData 
    : programsData.filter(program => program.category === selectedCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Programs</h2>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-200">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="capitalize"
                >
                  {category === "all" ? "All Programs" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ProgramsList;
