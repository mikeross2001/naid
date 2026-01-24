import type { Restaurant, Review, Profile } from '@/types/database';

export const mockProfiles: Profile[] = [
  {
    id: '1',
    username: 'foodie_jane',
    full_name: 'Jane Smith',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    bio: 'Bangkok food explorer. Always hunting for the best local eats!',
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: '2',
    username: 'thai_taste',
    full_name: 'Mike Chen',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    bio: 'Food photographer and restaurant reviewer',
    created_at: '2024-02-01T00:00:00Z',
    updated_at: '2024-02-01T00:00:00Z',
  },
  {
    id: '3',
    username: 'spicy_adventures',
    full_name: 'Sarah Lee',
    avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    bio: 'Spice lover. The hotter the better!',
    created_at: '2024-03-10T00:00:00Z',
    updated_at: '2024-03-10T00:00:00Z',
  },
];

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Sorn',
    slug: 'sorn',
    description: 'Two Michelin-starred restaurant showcasing Southern Thai cuisine with locally sourced ingredients.',
    cuisine_type: 'thai-southern',
    address: '56 Sukhumvit 26',
    district: 'Sukhumvit',
    latitude: 13.7234,
    longitude: 100.5678,
    phone: '+66 2 123 4567',
    website: 'https://sornbkk.com',
    price_range: 4,
    cover_image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800',
    images: [],
    average_rating: 4.8,
    review_count: 156,
    is_verified: true,
    submitted_by: null,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    meal_times: ['dinner'],
    vibes: ['date_night', 'fancy'],
    late_night: false,
  },
  {
    id: '2',
    name: 'Jay Fai',
    slug: 'jay-fai',
    description: 'Legendary street food stall famous for its crab omelet, run by a Michelin-starred chef in goggles.',
    cuisine_type: 'thai-street-food',
    address: '327 Maha Chai Rd',
    district: 'Old Town',
    latitude: 13.7523,
    longitude: 100.5012,
    phone: '+66 2 223 9384',
    website: null,
    price_range: 3,
    cover_image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800',
    images: [],
    average_rating: 4.7,
    review_count: 423,
    is_verified: true,
    submitted_by: null,
    created_at: '2024-01-02T00:00:00Z',
    updated_at: '2024-01-02T00:00:00Z',
    meal_times: ['breakfast', 'lunch', 'dinner'],
    vibes: ['cheap_fast', 'solo', 'comfort'],
    late_night: false,
  },
  {
    id: '3',
    name: 'Sushi Masato',
    slug: 'sushi-masato',
    description: 'Intimate omakase experience with fish flown in directly from Tokyo\'s Tsukiji market.',
    cuisine_type: 'japanese',
    address: '3/22 Soi Sukhumvit 31',
    district: 'Sukhumvit',
    latitude: 13.7321,
    longitude: 100.5689,
    phone: '+66 2 258 4567',
    website: 'https://sushimasato.com',
    price_range: 4,
    cover_image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800',
    images: [],
    average_rating: 4.9,
    review_count: 78,
    is_verified: true,
    submitted_by: null,
    created_at: '2024-01-03T00:00:00Z',
    updated_at: '2024-01-03T00:00:00Z',
    meal_times: ['dinner'],
    vibes: ['date_night', 'fancy'],
    late_night: false,
  },
  {
    id: '4',
    name: 'Gaggan Anand',
    slug: 'gaggan-anand',
    description: 'Progressive Indian cuisine from the chef behind the legendary (closed) Gaggan.',
    cuisine_type: 'indian',
    address: '68/1 Soi Langsuan',
    district: 'Silom',
    latitude: 13.7412,
    longitude: 100.5423,
    phone: '+66 2 652 1700',
    website: 'https://gaggananand.com',
    price_range: 4,
    cover_image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
    images: [],
    average_rating: 4.8,
    review_count: 234,
    is_verified: true,
    submitted_by: null,
    created_at: '2024-01-04T00:00:00Z',
    updated_at: '2024-01-04T00:00:00Z',
    meal_times: ['dinner'],
    vibes: ['date_night', 'fancy'],
    late_night: false,
  },
  {
    id: '5',
    name: 'Supanniga Eating Room',
    slug: 'supanniga-eating-room',
    description: 'Home-style Isaan and Thai comfort food in a charming riverside setting.',
    cuisine_type: 'thai-isaan',
    address: '392/25-26 Soi Wat Umong',
    district: 'Thonglor',
    latitude: 13.7298,
    longitude: 100.5834,
    phone: '+66 2 714 7508',
    website: 'https://supannigaeatingroom.com',
    price_range: 2,
    cover_image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800',
    images: [],
    average_rating: 4.5,
    review_count: 312,
    is_verified: true,
    submitted_by: null,
    created_at: '2024-01-05T00:00:00Z',
    updated_at: '2024-01-05T00:00:00Z',
    meal_times: ['lunch', 'dinner'],
    vibes: ['comfort', 'with_crew', 'drunk_food'],
    late_night: false,
  },
  {
    id: '6',
    name: 'Ramen Danbo',
    slug: 'ramen-danbo',
    description: 'Authentic Fukuoka-style tonkotsu ramen with customizable noodle firmness and broth richness.',
    cuisine_type: 'japanese',
    address: 'Emquartier, 693 Sukhumvit Rd',
    district: 'Sukhumvit',
    latitude: 13.7312,
    longitude: 100.5698,
    phone: '+66 2 003 6000',
    website: null,
    price_range: 2,
    cover_image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800',
    images: [],
    average_rating: 4.3,
    review_count: 445,
    is_verified: true,
    submitted_by: null,
    created_at: '2024-01-06T00:00:00Z',
    updated_at: '2024-01-06T00:00:00Z',
    meal_times: ['lunch', 'dinner'],
    vibes: ['cheap_fast', 'solo', 'comfort'],
    late_night: false,
  },
  {
    id: '7',
    name: 'Appia',
    slug: 'appia',
    description: 'Roman-style trattoria with house-made pasta and excellent Italian wine list.',
    cuisine_type: 'italian',
    address: '20/4 Sukhumvit Soi 31',
    district: 'Sukhumvit',
    latitude: 13.7334,
    longitude: 100.5712,
    phone: '+66 2 261 2056',
    website: 'https://appia-bangkok.com',
    price_range: 3,
    cover_image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800',
    images: [],
    average_rating: 4.5,
    review_count: 267,
    is_verified: true,
    submitted_by: null,
    created_at: '2024-01-07T00:00:00Z',
    updated_at: '2024-01-07T00:00:00Z',
    meal_times: ['lunch', 'dinner'],
    vibes: ['date_night', 'with_crew'],
    late_night: false,
  },
  {
    id: '8',
    name: 'Jua',
    slug: 'jua',
    description: 'Modern Korean gastropub with creative takes on classic dishes and excellent makgeolli selection.',
    cuisine_type: 'korean',
    address: '672/51 Charoenkrung Soi 28',
    district: 'Riverside',
    latitude: 13.7245,
    longitude: 100.5134,
    phone: '+66 2 103 6945',
    website: null,
    price_range: 3,
    cover_image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800',
    images: [],
    average_rating: 4.5,
    review_count: 167,
    is_verified: true,
    submitted_by: null,
    created_at: '2024-01-08T00:00:00Z',
    updated_at: '2024-01-08T00:00:00Z',
    meal_times: ['lunch', 'dinner'],
    vibes: ['date_night', 'with_crew'],
    late_night: false,
  },
  {
    id: '9',
    name: 'Thipsamai',
    slug: 'thipsamai',
    description: 'The most famous Pad Thai in Bangkok since 1966, known for their wrapped egg Pad Thai.',
    cuisine_type: 'thai-street-food',
    address: '313 Maha Chai Rd',
    district: 'Old Town',
    latitude: 13.7534,
    longitude: 100.5023,
    phone: '+66 2 221 6280',
    website: 'https://thipsamai.com',
    price_range: 1,
    cover_image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800',
    images: [],
    average_rating: 4.4,
    review_count: 567,
    is_verified: true,
    submitted_by: null,
    created_at: '2024-01-09T00:00:00Z',
    updated_at: '2024-01-09T00:00:00Z',
    meal_times: ['breakfast', 'lunch', 'dinner'],
    vibes: ['cheap_fast', 'solo', 'comfort'],
    late_night: false,
  },
  {
    id: '10',
    name: 'Le Du',
    slug: 'le-du',
    description: 'Modern Thai-inspired French cuisine using local seasonal ingredients. One Michelin star.',
    cuisine_type: 'french',
    address: '399/3 Silom Soi 7',
    district: 'Silom',
    latitude: 13.7267,
    longitude: 100.5345,
    phone: '+66 2 919 9969',
    website: 'https://ledubkk.com',
    price_range: 4,
    cover_image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    images: [],
    average_rating: 4.7,
    review_count: 189,
    is_verified: true,
    submitted_by: null,
    created_at: '2024-01-10T00:00:00Z',
    updated_at: '2024-01-10T00:00:00Z',
    meal_times: ['dinner'],
    vibes: ['date_night', 'fancy'],
    late_night: false,
  },
  {
    id: '11',
    name: 'Roots Coffee',
    slug: 'roots-coffee',
    description: 'Specialty coffee roaster and cafe with beans sourced from Thai highlands.',
    cuisine_type: 'cafe',
    address: '5 Sukhumvit Soi 26',
    district: 'Sukhumvit',
    latitude: 13.7256,
    longitude: 100.5623,
    phone: '+66 2 258 0208',
    website: 'https://rootsbkk.com',
    price_range: 2,
    cover_image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    images: [],
    average_rating: 4.5,
    review_count: 312,
    is_verified: true,
    submitted_by: null,
    created_at: '2024-01-11T00:00:00Z',
    updated_at: '2024-01-11T00:00:00Z',
    meal_times: ['breakfast', 'lunch'],
    vibes: ['cafe', 'solo'],
    late_night: false,
  },
  {
    id: '12',
    name: 'The Smokin\' Pug',
    slug: 'smokin-pug',
    description: 'Texas-style BBQ with brisket smoked for 14+ hours.',
    cuisine_type: 'american',
    address: '44 Sukhumvit Soi 33',
    district: 'Sukhumvit',
    latitude: 13.7345,
    longitude: 100.5756,
    phone: '+66 2 662 1444',
    website: null,
    price_range: 2,
    cover_image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800',
    images: [],
    average_rating: 4.5,
    review_count: 234,
    is_verified: true,
    submitted_by: null,
    created_at: '2024-01-12T00:00:00Z',
    updated_at: '2024-01-12T00:00:00Z',
    meal_times: ['lunch', 'dinner'],
    vibes: ['comfort', 'with_crew', 'drunk_food'],
    late_night: false,
  },
];

export const mockReviews: Review[] = [
  {
    id: '1',
    user_id: '1',
    restaurant_id: '1',
    rating: 5,
    content: 'Absolutely incredible Southern Thai cuisine! The flavors are bold and authentic. Every dish tells a story of the region. The tasting menu is a must-try. Service is impeccable.',
    images: [],
    helpful_count: 24,
    created_at: '2024-06-15T10:30:00Z',
    updated_at: '2024-06-15T10:30:00Z',
    profile: mockProfiles[0],
  },
  {
    id: '2',
    user_id: '2',
    restaurant_id: '1',
    rating: 5,
    content: 'Worth every baht! The attention to detail is remarkable. Chef Supaksorn sources ingredients from small farms across Southern Thailand. A true culinary journey.',
    images: [],
    helpful_count: 18,
    created_at: '2024-05-20T14:00:00Z',
    updated_at: '2024-05-20T14:00:00Z',
    profile: mockProfiles[1],
  },
  {
    id: '3',
    user_id: '3',
    restaurant_id: '2',
    rating: 5,
    content: 'The crab omelet lives up to the hype! Yes, the queue is long and prices are high for street food, but the quality is unmatched. Jay Fai is a legend for a reason.',
    images: [],
    helpful_count: 45,
    created_at: '2024-07-01T18:00:00Z',
    updated_at: '2024-07-01T18:00:00Z',
    profile: mockProfiles[2],
  },
  {
    id: '4',
    user_id: '1',
    restaurant_id: '3',
    rating: 5,
    content: 'Best omakase in Bangkok, hands down. Masato-san\'s technique is flawless. The fish is incredibly fresh - you can taste the quality in every piece. Book well in advance!',
    images: [],
    helpful_count: 12,
    created_at: '2024-06-28T20:00:00Z',
    updated_at: '2024-06-28T20:00:00Z',
    profile: mockProfiles[0],
  },
  {
    id: '5',
    user_id: '2',
    restaurant_id: '5',
    rating: 4,
    content: 'Great Isaan food in a lovely setting. The larb and som tam are excellent. Portions are generous and prices are reasonable. Perfect for a casual dinner with friends.',
    images: [],
    helpful_count: 8,
    created_at: '2024-07-10T19:30:00Z',
    updated_at: '2024-07-10T19:30:00Z',
    profile: mockProfiles[1],
  },
];

// Helper functions
export function getRestaurantBySlug(slug: string): Restaurant | undefined {
  return mockRestaurants.find(r => r.slug === slug);
}

export function getReviewsByRestaurantId(restaurantId: string): Review[] {
  return mockReviews.filter(r => r.restaurant_id === restaurantId);
}

export function getTopRatedRestaurants(limit: number = 6): Restaurant[] {
  return [...mockRestaurants]
    .sort((a, b) => b.average_rating - a.average_rating)
    .slice(0, limit);
}

export function getRecentRestaurants(limit: number = 6): Restaurant[] {
  return [...mockRestaurants]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, limit);
}

export function filterRestaurants(options: {
  cuisine?: string;
  district?: string;
  search?: string;
  sort?: string;
}): Restaurant[] {
  let filtered = [...mockRestaurants];

  if (options.cuisine) {
    filtered = filtered.filter(r => r.cuisine_type === options.cuisine);
  }

  if (options.district) {
    filtered = filtered.filter(r => r.district === options.district);
  }

  if (options.search) {
    const searchLower = options.search.toLowerCase();
    filtered = filtered.filter(r =>
      r.name.toLowerCase().includes(searchLower) ||
      r.description?.toLowerCase().includes(searchLower)
    );
  }

  switch (options.sort) {
    case 'rating':
      filtered.sort((a, b) => b.average_rating - a.average_rating);
      break;
    case 'reviews':
      filtered.sort((a, b) => b.review_count - a.review_count);
      break;
    case 'recent':
      filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      break;
    default:
      filtered.sort((a, b) => b.average_rating - a.average_rating);
  }

  return filtered;
}
