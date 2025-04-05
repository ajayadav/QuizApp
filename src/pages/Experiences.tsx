
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ExperienceCard from '@/components/experiences/ExperienceCard';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';
import { experiencesData } from '@/data/experiences';

const categories = [
  "Adventure", "Cultural", "Nature", "Luxury", "Food", "Festival", 
  "Landmarks", "Water", "Winter", "Urban", "Wildlife"
];

const Experiences = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const categoryFilter = searchParams.get('category') || '';

  // Filter experiences based on search term and category
  const filteredExperiences = experiencesData.filter(exp => {
    const matchesSearch = exp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          exp.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? exp.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (category: string) => {
    if (categoryFilter === category) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Extraordinary Experiences</h1>
          <p className="text-lg text-muted-foreground">
            Find and save your dream adventures from our curated collection of top experiences around the world.
          </p>
        </div>

        {/* Search and filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input 
              className="pl-10 py-6" 
              placeholder="Search experiences by name or location..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Badge 
                key={category}
                variant={categoryFilter === category ? "default" : "outline"} 
                className="cursor-pointer py-2 px-4"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Experiences grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No experiences found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Experiences;
