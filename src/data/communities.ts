
export interface Community {
  id: string;
  name: string;
  members: number;
  image: string;
  description: string;
  categories: string[];
  recommended?: boolean;
  matchingExperiences?: number;
}

export const communitiesData: Community[] = [
  {
    id: '1',
    name: 'Solo Travelers',
    members: 12680,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2487&auto=format&fit=crop',
    description: 'Connect with other independent explorers around the world.',
    categories: ['Solo Travel', 'Budget Travel', 'Safety Tips']
  },
  {
    id: '2',
    name: 'Adventure Seekers',
    members: 9523,
    image: 'https://images.unsplash.com/photo-1498940757830-82f7813bf178?q=80&w=2274&auto=format&fit=crop',
    description: 'Find your next adrenaline rush with fellow thrill-seekers.',
    categories: ['Extreme Sports', 'Hiking', 'Diving', 'Skydiving']
  },
  {
    id: '3',
    name: 'Luxury Escapes',
    members: 4230,
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1974&auto=format&fit=crop',
    description: 'Discover premium experiences and high-end destinations.',
    categories: ['Luxury', 'Fine Dining', 'Resorts', 'Cruises']
  },
  {
    id: '4',
    name: 'Desert Explorers',
    members: 3245,
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2076&auto=format&fit=crop',
    description: 'For those who love desert adventures and dune bashing.',
    categories: ['Desert', 'Camping', 'Safari', 'Photography'],
    recommended: true,
    matchingExperiences: 3
  },
  {
    id: '5',
    name: 'Scuba & Snorkel Enthusiasts',
    members: 7650,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop',
    description: 'Explore the underwater world with diving experts and enthusiasts.',
    categories: ['Diving', 'Marine Life', 'Islands', 'Beach'],
    recommended: true,
    matchingExperiences: 2
  },
  {
    id: '6',
    name: 'Mountain Climbers',
    members: 5430,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
    description: 'For passionate mountaineers and trekking enthusiasts.',
    categories: ['Hiking', 'Climbing', 'Mountains', 'Camping']
  },
  {
    id: '7',
    name: 'Cultural Explorers',
    members: 8920,
    image: 'https://images.unsplash.com/photo-1581979635837-3aa65c1d73d8?q=80&w=2067&auto=format&fit=crop',
    description: 'Immerse yourself in traditions, festivals, and local customs.',
    categories: ['Culture', 'History', 'Festivals', 'Local Experiences']
  },
  {
    id: '8',
    name: 'Urban Adventurers',
    members: 6840,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    description: 'Explore the world\'s most vibrant cities and urban landscapes.',
    categories: ['City Travel', 'Architecture', 'Nightlife', 'Food Tours']
  },
  {
    id: '9',
    name: 'Festival Goers',
    members: 5230,
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?q=80&w=2070&auto=format&fit=crop',
    description: 'Connect with travelers seeking unique festival experiences worldwide.',
    categories: ['Festivals', 'Music', 'Events', 'Cultural Celebrations'],
    recommended: true,
    matchingExperiences: 1
  },
  {
    id: '10',
    name: 'Photography Travelers',
    members: 7320,
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1974&auto=format&fit=crop',
    description: 'Share tips, locations, and inspiration for travel photography.',
    categories: ['Photography', 'Landscapes', 'Wildlife', 'Urban']
  }
];
