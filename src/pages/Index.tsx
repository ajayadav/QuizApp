
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Heart, Users } from 'lucide-react';
import ExperienceCard from '@/components/experiences/ExperienceCard';
import CommunityCard from '@/components/communities/CommunityCard';
import Layout from '@/components/layout/Layout';
import { cn } from '@/lib/utils';
import { experiencesData } from '@/data/experiences';
import { communitiesData } from '@/data/communities';
import { useBucketList } from '@/contexts/BucketListContext';

const featuredExperiences = experiencesData.slice(0, 4);

const recommendedCommunities = communitiesData.filter(c => c.recommended).slice(0, 3);
const popularCommunities = recommendedCommunities.length > 0 ? 
  recommendedCommunities : 
  communitiesData.slice(0, 3);

const Index = () => {
  const { bucketList } = useBucketList();
  
  // Create refs for each section
  const experiencesSectionRef = useRef<HTMLDivElement>(null);
  const communitiesSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create an intersection observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Add the sections to be observed
    if (experiencesSectionRef.current) {
      experiencesSectionRef.current.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(experiencesSectionRef.current);
    }
    
    if (communitiesSectionRef.current) {
      communitiesSectionRef.current.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(communitiesSectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Discover Extraordinary Experiences
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Find, save, and plan your dream adventures with a community of passionate travelers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="rounded-full text-lg font-medium">
              <Link to="/experiences">Explore Experiences</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-lg font-medium bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Link to="/bucketlist">View Your Bucket List</Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            width="30" 
            height="30" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path 
              d="M12 5V19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How WanderWish Works</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We connect you with extraordinary experiences and like-minded travelers to make your dream adventures a reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center transition-all duration-300 hover:shadow-md">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-secondary rounded-full">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Discover Experiences</h3>
              <p className="text-muted-foreground">
                Browse through thousands of unique travel experiences curated by experts and fellow travelers.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center transition-all duration-300 hover:shadow-md">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-secondary rounded-full">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Create Your Bucket List</h3>
              <p className="text-muted-foreground">
                Save experiences you love and get personalized planning assistance to make them happen.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center transition-all duration-300 hover:shadow-md">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-secondary rounded-full">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Connect & Share</h3>
              <p className="text-muted-foreground">
                Join communities with similar interests and get recommendations from top travel influencers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section ref={experiencesSectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Experiences</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Discover handpicked experiences that will create memories to last a lifetime.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex items-center gap-2">
              <Link to="/experiences">
                View all experiences
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Button asChild>
              <Link to="/experiences">View all experiences</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Communities Section */}
      <section ref={communitiesSectionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Top Communities to Join
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Connect with travelers who share your passions and discover new adventures together.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex items-center gap-2">
              <Link to="/communities">
                View all communities
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularCommunities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Button asChild>
              <Link to="/communities">View all communities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ready to Start Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Create your account today and begin building your travel bucket list with experiences from around the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 rounded-full">
              Sign Up Free
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
              <Link to="/bucketlist">View Bucket List</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
