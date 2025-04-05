
export interface Experience {
  id: string;
  title: string;
  location: string;
  category: string;
  rating: number;
  price: string;
  image: string;
  description?: string;
}

export const experiencesData: Experience[] = [
  // Middle East & UAE
  {
    id: '1',
    title: 'Skydiving in Dubai',
    location: 'Dubai, UAE',
    category: 'Adventure',
    rating: 4.9,
    price: '$499',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop',
    description: 'Experience breathtaking views of Palm Jumeirah and the Dubai skyline as you freefall from 13,000 feet.'
  },
  {
    id: '2',
    title: 'Desert Dune Bashing',
    location: 'Dubai, UAE',
    category: 'Adventure',
    rating: 4.7,
    price: '$85',
    image: 'https://images.unsplash.com/photo-1518550473971-37d37fbe667c?q=80&w=2070&auto=format&fit=crop',
    description: 'Ride through golden sand dunes in a 4x4 vehicle for an exhilarating desert adventure.'
  },
  {
    id: '3',
    title: 'Night Under Desert Stars',
    location: 'Dubai, UAE',
    category: 'Nature',
    rating: 4.8,
    price: '$150',
    image: 'https://images.unsplash.com/photo-1514862034978-7c92a7e1cf99?q=80&w=2070&auto=format&fit=crop',
    description: 'Experience traditional Bedouin hospitality with dinner under the stars, camel rides, and cultural performances.'
  },
  {
    id: '4',
    title: 'Burj Khalifa At The Top',
    location: 'Dubai, UAE',
    category: 'Landmarks',
    rating: 4.6,
    price: '$40',
    image: 'https://images.unsplash.com/photo-1582672512063-0ef381cd8e36?q=80&w=1974&auto=format&fit=crop',
    description: 'Ascend to the observation deck of the world\'s tallest building for panoramic views of Dubai.'
  },
  
  // Singapore
  {
    id: '5',
    title: 'Universal Studios Thrill Rides',
    location: 'Singapore',
    category: 'Adventure',
    rating: 4.7,
    price: '$79',
    image: 'https://images.unsplash.com/photo-1607548998004-c127350d9949?q=80&w=2073&auto=format&fit=crop',
    description: 'Experience world-class roller coasters and themed attractions at Universal Studios Singapore.'
  },
  {
    id: '6',
    title: 'Night Safari Adventure',
    location: 'Singapore',
    category: 'Wildlife',
    rating: 4.5,
    price: '$50',
    image: 'https://images.unsplash.com/photo-1543158556-08e5926bb997?q=80&w=2070&auto=format&fit=crop',
    description: 'Discover nocturnal wildlife on the world\'s first night safari with open-concept habitats and tram rides.'
  },
  {
    id: '7',
    title: 'Marina Bay Exploration',
    location: 'Singapore',
    category: 'Urban',
    rating: 4.8,
    price: '$30',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2071&auto=format&fit=crop',
    description: 'Visit the iconic Marina Bay Sands, Gardens by the Bay, and enjoy the spectacular light shows.'
  },
  
  // Scandinavia
  {
    id: '8',
    title: 'Trek to Trolltunga',
    location: 'Norway',
    category: 'Adventure',
    rating: 4.9,
    price: '$120',
    image: 'https://images.unsplash.com/photo-1516237897329-d6b16a22ced8?q=80&w=2050&auto=format&fit=crop',
    description: 'Hike to the stunning "Troll\'s Tongue" rock formation jutting horizontally out of a mountain.'
  },
  {
    id: '9',
    title: 'Overnight Baltic Cruise',
    location: 'Sweden to Finland',
    category: 'Luxury',
    rating: 4.6,
    price: '$150',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1964&auto=format&fit=crop',
    description: 'Enjoy the scenic beauty of the Baltic Sea on an overnight cruise with entertainment and dining.'
  },
  
  // Germany & Austria
  {
    id: '10',
    title: 'Oktoberfest in Munich',
    location: 'Munich, Germany',
    category: 'Festival',
    rating: 4.7,
    price: '$50',
    image: 'https://images.unsplash.com/photo-1543329325-a78a2170974c?q=80&w=2070&auto=format&fit=crop',
    description: 'Experience the world\'s largest beer festival with traditional Bavarian food, music, and culture.'
  },
  {
    id: '11',
    title: 'Salzburg Ice Caves Tour',
    location: 'Salzburg, Austria',
    category: 'Nature',
    rating: 4.8,
    price: '$45',
    image: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=1974&auto=format&fit=crop',
    description: 'Explore the mesmerizing ice formations in the world\'s largest ice caves near Salzburg.'
  },
  
  // Beach & Water Activities
  {
    id: '12',
    title: 'Scuba Diving in Croatia',
    location: 'Dubrovnik, Croatia',
    category: 'Water',
    rating: 4.8,
    price: '$120',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop',
    description: 'Discover underwater caves, vibrant marine life, and ancient shipwrecks in the crystal-clear Adriatic Sea.'
  },
  {
    id: '13',
    title: 'Snorkeling in Maldives',
    location: 'Maldives',
    category: 'Water',
    rating: 4.9,
    price: '$80',
    image: 'https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=2070&auto=format&fit=crop',
    description: 'Swim among colorful coral reefs and tropical fish in the turquoise waters of the Maldives.'
  },
  
  // Asia & Himalayas
  {
    id: '14',
    title: 'Tiger\'s Nest Monastery Trek',
    location: 'Paro, Bhutan',
    category: 'Cultural',
    rating: 4.9,
    price: '$200',
    image: 'https://images.unsplash.com/photo-1627894005699-957991a4d1ac?q=80&w=2088&auto=format&fit=crop',
    description: 'Hike to the sacred cliffside Buddhist monastery with breathtaking views of the Paro Valley.'
  },
  {
    id: '15',
    title: 'Iceland Ring Road Trip',
    location: 'Iceland',
    category: 'Nature',
    rating: 4.9,
    price: '$1,200',
    image: 'https://images.unsplash.com/photo-1500043357865-c6b8827a0806?q=80&w=2070&auto=format&fit=crop',
    description: 'Drive the full circle around Iceland experiencing waterfalls, glaciers, volcanoes, and hot springs.'
  },
  
  // Parties & Celebrations
  {
    id: '16',
    title: 'New Year in Pokhara',
    location: 'Pokhara, Nepal',
    category: 'Festival',
    rating: 4.7,
    price: '$300',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    description: 'Celebrate the New Year with stunning views of the Annapurna mountain range and Phewa Lake.'
  },
  {
    id: '17',
    title: 'Full Moon Party',
    location: 'Koh Phangan, Thailand',
    category: 'Festival',
    rating: 4.5,
    price: '$40',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1974&auto=format&fit=crop',
    description: 'Experience the famous beach party with fire shows, music, and dancing under the full moon.'
  },
  {
    id: '18',
    title: 'Rann Utsav Luxury Camping',
    location: 'Gujarat, India',
    category: 'Luxury',
    rating: 4.8,
    price: '$250',
    image: 'https://images.unsplash.com/photo-1496080174650-637e3f22fa03?q=80&w=2006&auto=format&fit=crop',
    description: 'Stay in luxury tents at the white desert during the full moon with cultural performances and local crafts.'
  },
  
  // Seasonal Experiences
  {
    id: '19',
    title: 'Cherry Blossom Festival',
    location: 'Kyoto, Japan',
    category: 'Cultural',
    rating: 4.9,
    price: '$60',
    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1976&auto=format&fit=crop',
    description: 'Witness the stunning pink cherry blossoms during peak season with traditional Japanese ceremonies.'
  },
  
  // Adventure Activities
  {
    id: '20',
    title: 'Benagil Cave Kayaking',
    location: 'Algarve, Portugal',
    category: 'Water',
    rating: 4.8,
    price: '$70',
    image: 'https://images.unsplash.com/photo-1596475380310-3aba7872a0ed?q=80&w=1979&auto=format&fit=crop',
    description: 'Paddle through sea caves and grottos, discovering hidden beaches and rock formations.'
  },
  {
    id: '21',
    title: 'River Rafting in Rishikesh',
    location: 'Rishikesh, India',
    category: 'Adventure',
    rating: 4.7,
    price: '$30',
    image: 'https://images.unsplash.com/photo-1504614587269-627ef332bba7?q=80&w=2070&auto=format&fit=crop',
    description: 'Navigate through thrilling rapids on the sacred Ganges River with views of the Himalayas.'
  },
  {
    id: '22',
    title: 'Ziplining in Switzerland',
    location: 'Interlaken, Switzerland',
    category: 'Adventure',
    rating: 4.8,
    price: '$120',
    image: 'https://images.unsplash.com/photo-1578763363055-dd0be99705a0?q=80&w=1974&auto=format&fit=crop',
    description: 'Soar through the Swiss Alps on one of Europe\'s most scenic zipline adventures.'
  },
  {
    id: '23',
    title: 'Ziplining in Shillong',
    location: 'Shillong, India',
    category: 'Adventure',
    rating: 4.6,
    price: '$25',
    image: 'https://images.unsplash.com/photo-1583185257501-95b677afd35d?q=80&w=1974&auto=format&fit=crop',
    description: 'Fly over the lush green valleys and hills of Meghalaya on this thrilling zipline course.'
  },
  {
    id: '24',
    title: 'Northern Lights Adventure',
    location: 'Tromsø, Norway',
    category: 'Nature',
    rating: 4.9,
    price: '$200',
    image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?q=80&w=1964&auto=format&fit=crop',
    description: 'Chase the magical Aurora Borealis in the Arctic Circle with expert guides who know the best viewing spots.'
  }
];
