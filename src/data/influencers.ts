
export interface Influencer {
  id: string;
  name: string;
  username: string;
  followers: number;
  bio: string;
  image: string;
  coverImage: string;
  specialties: string[];
  upcomingTrips: Trip[];
  pastTrips: Trip[];
  featuredContent: FeaturedContent[];
}

export interface Trip {
  destination: string;
  date: string;
  description: string;
}

export interface FeaturedContent {
  title: string;
  image: string;
  type: 'video' | 'blog' | 'guide';
  link: string;
}

export const influencersData: Influencer[] = [
  {
    id: '1',
    name: 'Emma Rivers',
    username: '@emmaexplores',
    followers: 1240000,
    bio: 'Adventure photographer and storyteller. I travel to remote places to capture beauty and inspire conservation.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2031&auto=format&fit=crop',
    specialties: ['Wildlife Photography', 'Eco Tourism', 'Mountain Exploration'],
    upcomingTrips: [
      {
        destination: 'Patagonia',
        date: 'January 2025',
        description: 'Photographing glaciers and wildlife in Torres del Paine National Park and surrounding areas.'
      },
      {
        destination: 'Madagascar',
        date: 'June 2025',
        description: 'Capturing the unique wildlife and landscapes of this biodiverse island.'
      }
    ],
    pastTrips: [
      {
        destination: 'Alaska',
        date: 'August 2024',
        description: 'Brown bear photography and glacier exploration in Katmai National Park.'
      },
      {
        destination: 'Iceland',
        date: 'March 2024',
        description: 'Northern lights and ice cave photography during winter.'
      }
    ],
    featuredContent: [
      {
        title: 'The Last Ice: Documenting Glacial Retreat',
        image: 'https://images.unsplash.com/photo-1531924442080-0a6b90ca4d23?q=80&w=2069&auto=format&fit=crop',
        type: 'video',
        link: '/content/emma-rivers/last-ice'
      },
      {
        title: 'Wildlife Photography Tips for Beginners',
        image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop',
        type: 'blog',
        link: '/content/emma-rivers/wildlife-tips'
      }
    ]
  },
  {
    id: '2',
    name: 'David Chen',
    username: '@daviddiscovers',
    followers: 835000,
    bio: 'Travel photographer specializing in landscape and astrophotography. Searching for light in remote places.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=2027&auto=format&fit=crop',
    specialties: ['Astrophotography', 'Desert Landscapes', 'Time-lapse'],
    upcomingTrips: [
      {
        destination: 'Namibia Safari',
        date: 'September 2025',
        description: 'An immersive photography expedition through Namibia\'s deserts, showcasing wildlife and ancient landscapes.'
      }
    ],
    pastTrips: [
      {
        destination: 'Utah & Arizona',
        date: 'April 2024',
        description: 'Photographing the night sky over Monument Valley and slot canyons.'
      },
      {
        destination: 'New Zealand',
        date: 'January 2024',
        description: 'South Island landscape photography focusing on mountains and lakes.'
      }
    ],
    featuredContent: [
      {
        title: 'Milky Way Photography Masterclass',
        image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=2071&auto=format&fit=crop',
        type: 'guide',
        link: '/content/david-chen/milky-way'
      },
      {
        title: 'Desert Nights: Finding Beauty in Arid Landscapes',
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2076&auto=format&fit=crop',
        type: 'blog',
        link: '/content/david-chen/desert-nights'
      }
    ]
  }
];
