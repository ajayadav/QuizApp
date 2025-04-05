
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Heart, Star, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from '@/components/ui/use-toast';
import { useBucketList } from '@/contexts/BucketListContext';
import { Experience } from '@/data/experiences';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, className }) => {
  const { id, title, location, category, rating, price, image } = experience;
  const { addToBucketList } = useBucketList();
  
  const handleAddToBucketList = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToBucketList(experience);
    
    toast({
      title: "Added to Bucket List",
      description: `${title} has been added to your bucket list.`,
    });
  };
  
  return (
    <Link to={`/experiences/${id}`}>
      <div className={cn("experience-card relative group h-full overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all", className)}>
        <div className="image-container aspect-[3/4] relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="experience-image w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
          />
          <div className="absolute top-3 right-3 z-10 flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/80 backdrop-blur-sm hover:bg-white transition-colors rounded-full"
                    onClick={handleAddToBucketList}
                  >
                    <List className="w-4 h-4 text-gray-700 hover:text-accent hover:fill-accent transition-colors" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to bucket list</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">{category}</span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="experience-title font-medium text-lg transition-colors line-clamp-2">{title}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-2">{location}</p>
          <p className="font-medium">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
