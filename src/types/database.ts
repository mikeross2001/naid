export interface Profile {
  id: string;
  username: string;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
}

export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  cuisine_type: string;
  address: string;
  district: string;
  latitude: number | null;
  longitude: number | null;
  phone: string | null;
  website: string | null;
  price_range: 1 | 2 | 3 | 4;
  cover_image: string | null;
  images: string[];
  average_rating: number;
  review_count: number;
  is_verified: boolean;
  submitted_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  user_id: string;
  restaurant_id: string;
  rating: number;
  content: string;
  images: string[];
  helpful_count: number;
  created_at: string;
  updated_at: string;
  // Joined data
  profile?: Profile;
  restaurant?: Restaurant;
}

export interface Favorite {
  id: string;
  user_id: string;
  restaurant_id: string;
  list_name: string;
  created_at: string;
  // Joined data
  restaurant?: Restaurant;
}

export interface Follow {
  id: string;
  follower_id: string;
  following_id: string;
  created_at: string;
  // Joined data
  follower?: Profile;
  following?: Profile;
}

export interface CuisineType {
  value: string;
  label: string;
  count?: number;
}

export const CUISINE_TYPES: CuisineType[] = [
  { value: 'thai', label: 'Thai' },
  { value: 'thai-isaan', label: 'Thai Isaan' },
  { value: 'thai-northern', label: 'Thai Northern' },
  { value: 'thai-southern', label: 'Thai Southern' },
  { value: 'thai-street-food', label: 'Thai Street Food' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'korean', label: 'Korean' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'vietnamese', label: 'Vietnamese' },
  { value: 'indian', label: 'Indian' },
  { value: 'italian', label: 'Italian' },
  { value: 'french', label: 'French' },
  { value: 'american', label: 'American' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'mediterranean', label: 'Mediterranean' },
  { value: 'seafood', label: 'Seafood' },
  { value: 'steakhouse', label: 'Steakhouse' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'cafe', label: 'Cafe' },
  { value: 'bakery', label: 'Bakery' },
  { value: 'dessert', label: 'Dessert' },
  { value: 'fusion', label: 'Fusion' },
  { value: 'other', label: 'Other' },
];

export const BANGKOK_DISTRICTS = [
  'Sukhumvit',
  'Silom',
  'Sathorn',
  'Thonglor',
  'Ekkamai',
  'Ari',
  'Siam',
  'Chinatown',
  'Old Town',
  'Riverside',
  'Khao San',
  'Ratchada',
  'Ladprao',
  'Chatuchak',
  'Bang Na',
  'On Nut',
  'Phra Khanong',
  'Other',
];
