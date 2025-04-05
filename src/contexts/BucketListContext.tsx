
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BucketListItem, ItineraryDay, PlanningTip } from '@/types/bucketList';
import { toast } from '@/components/ui/use-toast';

// Sample data for planning tips
const samplePlanningTips: Record<string, PlanningTip[]> = {
  '1': [
    {
      id: 'tip1',
      experienceId: '1',
      title: 'Best Time to Visit',
      description: 'The Northern Lights are most visible from September to March when the skies are darkest.',
      category: 'preparation'
    },
    {
      id: 'tip2',
      experienceId: '1',
      title: 'Packing Tips',
      description: 'Pack multiple layers of warm clothing, thermal underwear, and hand warmers. Temperatures can drop to -15°C (5°F).',
      category: 'preparation'
    },
    {
      id: 'tip3',
      experienceId: '1',
      title: 'Budget Considerations',
      description: 'Iceland is expensive. Budget at least $200-300 per day for accommodation, food, and transportation.',
      category: 'budget'
    }
  ],
  '2': [
    {
      id: 'tip4',
      experienceId: '2',
      title: 'Cultural Etiquette',
      description: 'Remove your shoes before entering temples and traditional homes. Bow slightly when greeting others.',
      category: 'local-info'
    },
    {
      id: 'tip5',
      experienceId: '2',
      title: 'Cherry Blossom Season',
      description: 'If planning to visit during cherry blossom season (late March to early April), book accommodations 6-12 months in advance.',
      category: 'time'
    }
  ],
  '3': [
    {
      id: 'tip6',
      experienceId: '3',
      title: 'Sunset Timing',
      description: 'The cruise is timed to catch the sunset. In summer, it departs around 7:00 PM; in winter, around 4:30 PM.',
      category: 'time'
    },
    {
      id: 'tip7',
      experienceId: '3',
      title: 'What to Wear',
      description: 'Smart casual attire is recommended. Bring a light jacket as it can get breezy on the water.',
      category: 'preparation'
    }
  ],
  '4': [
    {
      id: 'tip8',
      experienceId: '4',
      title: 'Health Precautions',
      description: 'Consult with a travel doctor for necessary vaccinations at least 6-8 weeks before your trip.',
      category: 'preparation'
    },
    {
      id: 'tip9',
      experienceId: '4',
      title: 'Photography Equipment',
      description: 'Bring a camera with a good zoom lens (at least 200mm) for wildlife photography.',
      category: 'preparation'
    },
    {
      id: 'tip10',
      experienceId: '4',
      title: 'Safari Season',
      description: 'The best time for wildlife viewing is during the dry season (June to October).',
      category: 'time'
    }
  ]
};

// Sample data for itinerary generation
const generateSampleItinerary = (experienceId: string): ItineraryDay[] => {
  switch (experienceId) {
    case '1': // Northern Lights
      return [
        {
          date: 'Day 1',
          activities: [
            {
              id: 'a1',
              title: 'Arrival in Reykjavik',
              time: '10:00 AM',
              description: 'Arrive at Keflavik International Airport and transfer to your hotel in Reykjavik.',
              type: 'transportation'
            },
            {
              id: 'a2',
              title: 'Blue Lagoon Visit',
              time: '2:00 PM',
              description: 'Relax and recover from jet lag at the famous Blue Lagoon geothermal spa.',
              type: 'experience'
            }
          ]
        },
        {
          date: 'Day 2',
          activities: [
            {
              id: 'a3',
              title: 'Golden Circle Tour',
              time: '9:00 AM',
              description: 'Full-day tour of Thingvellir National Park, Geysir Geothermal Area, and Gullfoss Waterfall.',
              type: 'experience'
            },
            {
              id: 'a4',
              title: 'Northern Lights Hunt',
              time: '9:00 PM',
              description: 'Evening tour to hunt for the Northern Lights with expert guides.',
              type: 'experience'
            }
          ]
        },
        {
          date: 'Day 3',
          activities: [
            {
              id: 'a5',
              title: 'South Coast Adventure',
              time: '8:00 AM',
              description: 'Full-day tour of the South Coast including Seljalandsfoss and Skógafoss waterfalls.',
              type: 'experience'
            },
            {
              id: 'a6',
              title: 'Northern Lights Photography Workshop',
              time: '8:00 PM',
              description: 'Learn how to capture the Northern Lights with professional photographers.',
              type: 'experience'
            }
          ]
        }
      ];
    case '2': // Kyoto
      return [
        {
          date: 'Day 1',
          activities: [
            {
              id: 'b1',
              title: 'Arrival in Kyoto',
              time: '11:00 AM',
              description: 'Arrive at Kansai International Airport and transfer to your hotel in Kyoto.',
              type: 'transportation'
            },
            {
              id: 'b2',
              title: 'Gion District Walking Tour',
              time: '4:00 PM',
              description: 'Evening walking tour through the historic Gion district with chances to spot geisha.',
              type: 'experience'
            }
          ]
        },
        {
          date: 'Day 2',
          activities: [
            {
              id: 'b3',
              title: 'Tea Ceremony',
              time: '10:00 AM',
              description: 'Traditional Japanese tea ceremony experience with a tea master.',
              type: 'experience'
            },
            {
              id: 'b4',
              title: 'Fushimi Inari Shrine',
              time: '2:00 PM',
              description: 'Visit the iconic shrine with thousands of vermilion torii gates.',
              type: 'experience'
            }
          ]
        },
        {
          date: 'Day 3',
          activities: [
            {
              id: 'b5',
              title: 'Arashiyama Bamboo Grove',
              time: '9:00 AM',
              description: 'Morning visit to the famous bamboo forest and surrounding temples.',
              type: 'experience'
            },
            {
              id: 'b6',
              title: 'Kimono Rental',
              time: '1:00 PM',
              description: 'Rent a kimono and stroll through historic Kyoto districts for memorable photos.',
              type: 'experience'
            }
          ]
        }
      ];
    default:
      return [
        {
          date: 'Sample Itinerary',
          activities: [
            {
              id: 'sample1',
              title: 'Starting Point',
              time: 'Day 1',
              description: 'Begin your journey with our customized itinerary.',
              type: 'other'
            },
            {
              id: 'sample2',
              title: 'Contact a Travel Advisor',
              time: 'Today',
              description: 'Get a personalized itinerary by speaking with one of our travel specialists.',
              type: 'other'
            }
          ]
        }
      ];
  }
};

interface BucketListContextType {
  bucketList: BucketListItem[];
  addToBucketList: (experience: any) => void;
  removeFromBucketList: (id: string) => void;
  updateBucketListItem: (id: string, updates: Partial<BucketListItem>) => void;
  getItinerary: (experienceId: string) => ItineraryDay[];
  getPlanningTips: (experienceId: string) => PlanningTip[];
}

const BucketListContext = createContext<BucketListContextType | undefined>(undefined);

export const BucketListProvider = ({ children }: { children: ReactNode }) => {
  const [bucketList, setBucketList] = useState<BucketListItem[]>(() => {
    const savedList = localStorage.getItem('bucketList');
    return savedList ? JSON.parse(savedList) : [];
  });

  // Save to localStorage when bucketList changes
  useEffect(() => {
    localStorage.setItem('bucketList', JSON.stringify(bucketList));
  }, [bucketList]);

  const addToBucketList = (experience: any) => {
    const existingItem = bucketList.find(item => item.experienceId === experience.id);
    
    if (existingItem) {
      toast({
        title: "Already in Bucket List",
        description: `${experience.title} is already in your bucket list.`,
      });
      return;
    }
    
    const newItem: BucketListItem = {
      id: crypto.randomUUID(),
      experienceId: experience.id,
      title: experience.title,
      location: experience.location,
      category: experience.category,
      image: experience.image,
      status: 'planning',
    };
    
    setBucketList(prev => [...prev, newItem]);
    
    toast({
      title: "Added to Bucket List",
      description: `${experience.title} has been added to your bucket list.`,
    });
  };

  const removeFromBucketList = (id: string) => {
    const itemToRemove = bucketList.find(item => item.id === id);
    
    if (itemToRemove) {
      setBucketList(prev => prev.filter(item => item.id !== id));
      
      toast({
        title: "Removed from Bucket List",
        description: `${itemToRemove.title} has been removed from your bucket list.`,
      });
    }
  };

  const updateBucketListItem = (id: string, updates: Partial<BucketListItem>) => {
    setBucketList(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };

  const getItinerary = (experienceId: string): ItineraryDay[] => {
    return generateSampleItinerary(experienceId);
  };

  const getPlanningTips = (experienceId: string): PlanningTip[] => {
    return samplePlanningTips[experienceId] || [];
  };

  return (
    <BucketListContext.Provider 
      value={{ 
        bucketList, 
        addToBucketList, 
        removeFromBucketList, 
        updateBucketListItem,
        getItinerary,
        getPlanningTips
      }}
    >
      {children}
    </BucketListContext.Provider>
  );
};

export const useBucketList = () => {
  const context = useContext(BucketListContext);
  if (context === undefined) {
    throw new Error('useBucketList must be used within a BucketListProvider');
  }
  return context;
};
