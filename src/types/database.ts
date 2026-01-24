export interface Profile {
  id: string;
  username: string;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
}

// Filter-related types
export type MealTime = 'breakfast' | 'lunch' | 'dinner' | 'late_night';
export type VibeTag = 'date_night' | 'cheap_fast' | 'drunk_food' | 'comfort' | 'fancy' | 'cafe' | 'with_crew' | 'solo';
export type BudgetFilter = 'budget' | 'moderate' | 'upscale' | 'no_limit';
export type AreaFilter = 'sukhumvit' | 'silom_sathorn' | 'thonglor_ekkamai' | 'ari' | 'siam' | 'old_town' | 'anywhere';

export interface FilterState {
  budget: BudgetFilter;
  mealTime: MealTime | 'any';
  vibes: VibeTag[];
  area: AreaFilter;
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
  // Filter columns
  meal_times: MealTime[];
  vibes: VibeTag[];
  late_night: boolean;
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

// District to Area mapping for filter grouping
export const DISTRICT_TO_AREA: Record<string, AreaFilter> = {
  'Sukhumvit': 'sukhumvit',
  'On Nut': 'sukhumvit',
  'Phra Khanong': 'sukhumvit',
  'Bang Na': 'sukhumvit',
  'Thonglor': 'thonglor_ekkamai',
  'Ekkamai': 'thonglor_ekkamai',
  'Silom': 'silom_sathorn',
  'Sathorn': 'silom_sathorn',
  'Riverside': 'silom_sathorn',
  'Ari': 'ari',
  'Ladprao': 'ari',
  'Chatuchak': 'ari',
  'Ratchada': 'ari',
  'Ratchathewi': 'ari', // Victory Monument area
  'Siam': 'siam',
  'Old Town': 'old_town',
  'Chinatown': 'old_town',
  'Khao San': 'old_town',
};

// Filter option definitions with emojis for UI
export const BUDGET_OPTIONS: { value: BudgetFilter; label: string; emoji: string }[] = [
  { value: 'budget', label: '฿', emoji: '' },
  { value: 'upscale', label: '฿฿฿', emoji: '' },
  { value: 'no_limit', label: 'Any', emoji: '' },
];

export const MEAL_TIME_OPTIONS: { value: MealTime | 'any'; label: string; emoji: string }[] = [
  { value: 'any', label: 'Any', emoji: '🕐' },
  { value: 'breakfast', label: 'Breakfast', emoji: '🌅' },
  { value: 'lunch', label: 'Lunch', emoji: '☀️' },
  { value: 'dinner', label: 'Dinner', emoji: '🌙' },
  { value: 'late_night', label: 'Late', emoji: '🌃' },
];

export const VIBE_OPTIONS: { value: VibeTag; label: string; emoji: string }[] = [
  { value: 'date_night', label: 'Date Night', emoji: '❤️' },
  { value: 'cheap_fast', label: 'Cheap & Fast', emoji: '⚡' },
  { value: 'drunk_food', label: 'Drunk Food', emoji: '🍻' },
  { value: 'comfort', label: 'Comfort', emoji: '🛋️' },
  { value: 'fancy', label: 'Fancy', emoji: '✨' },
  { value: 'cafe', label: 'Cafe Vibes', emoji: '☕' },
  { value: 'with_crew', label: 'With Crew', emoji: '👯' },
  { value: 'solo', label: 'Solo', emoji: '🎧' },
];

export const AREA_OPTIONS: { value: AreaFilter; label: string; emoji: string }[] = [
  { value: 'anywhere', label: 'Anywhere', emoji: '🌍' },
  { value: 'sukhumvit', label: 'Sukhumvit', emoji: '🚇' },
  { value: 'thonglor_ekkamai', label: 'Thonglor/Ekkamai', emoji: '🌃' },
  { value: 'silom_sathorn', label: 'Silom/Sathorn', emoji: '🏙️' },
  { value: 'ari', label: 'Ari Area', emoji: '🌿' },
  { value: 'siam', label: 'Siam', emoji: '🛍️' },
  { value: 'old_town', label: 'Old Town', emoji: '🏛️' },
];
