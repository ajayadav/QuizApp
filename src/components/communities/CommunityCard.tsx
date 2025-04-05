
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Users, Tags } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';

interface Community {
  id: string;
  name: string;
  members: number;
  image: string;
  description: string;
  categories?: string[];
  recommended?: boolean;
  matchingExperiences?: number;
}

interface CommunityCardProps {
  community: Community;
  className?: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ community, className }) => {
  const { id, name, members, image, description, categories, recommended, matchingExperiences } = community;
  
  const formatMemberCount = (count: number) => {
    if (count > 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };
  
  const handleJoinCommunity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Community Joined",
      description: `You've successfully joined the ${name} community.`,
    });
  };
  
  return (
    <Link to={`/communities/${id}`}>
      <div className={cn(
        "card-hover bg-white rounded-xl overflow-hidden h-full border border-gray-100 transition-all duration-300 hover:shadow-md", 
        recommended && "ring-2 ring-accent/20 ring-offset-2",
        className
      )}>
        <div className="aspect-[16/9] overflow-hidden relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-5 w-full">
              <h3 className="font-display text-xl font-semibold text-white">{name}</h3>
              <div className="flex items-center mt-2">
                <Users className="w-4 h-4 text-white opacity-80 mr-1" />
                <span className="text-sm text-white opacity-80">{formatMemberCount(members)} members</span>
              </div>
              
              {recommended && (
                <Badge className="absolute top-4 right-4 bg-accent/90 hover:bg-accent">
                  Recommended for you
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          
          {categories && categories.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Badge key={index} variant="secondary">{category}</Badge>
              ))}
            </div>
          )}
          
          {matchingExperiences && matchingExperiences > 0 && (
            <div className="mb-4 p-3 bg-secondary/20 rounded-lg">
              <div className="flex items-center">
                <Tags className="w-4 h-4 mr-2 text-accent" />
                <p className="text-sm">
                  <span className="font-medium">{matchingExperiences}</span> experiences match your bucket list
                </p>
              </div>
            </div>
          )}
          
          <Button 
            onClick={handleJoinCommunity} 
            className="w-full"
          >
            Join Community
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default CommunityCard;
