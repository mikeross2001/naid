import { Suspense } from 'react';
import { createClient } from '@/lib/supabase/server';
import { RestaurantCard } from '@/components/restaurant/RestaurantCard';
import { CuisineFilter } from '@/components/restaurant/CuisineFilter';
import { DistrictFilter } from '@/components/restaurant/DistrictFilter';
import { SortFilter } from '@/components/restaurant/SortFilter';
import Link from 'next/link';
import type { Restaurant } from '@/types/database';

const CUISINE_EMOJIS: Record<string, string> = {
  thai: '🍜',
  japanese: '🍣',
  korean: '🍖',
  chinese: '🥟',
  indian: '🍛',
  italian: '🍝',
  french: '🥐',
  american: '🍔',
  seafood: '🦞',
  cafe: '☕',
  coffee: '☕',
  bar: '🍸',
  dessert: '🍰',
  vegetarian: '🥗',
};

const CUISINE_TAGLINES: Record<string, string> = {
  thai: 'From street food to royal cuisine',
  japanese: 'Omakase, ramen & izakaya',
  korean: 'BBQ, fried chicken & more',
  chinese: 'Dim sum to Sichuan heat',
  indian: 'Bold spices, rich flavors',
  italian: 'Pizza, pasta & amore',
  french: 'Bistros & fine dining',
  american: 'Burgers, steaks & comfort',
  seafood: 'Fresh catches daily',
  coffee: 'Specialty brews & cozy spots',
  bar: 'Cocktails & nightlife',
  dessert: 'Sweet endings',
  vegetarian: 'Plant-based goodness',
};

interface PageProps {
  searchParams: Promise<{
    cuisine?: string;
    district?: string;
    sort?: string;
    search?: string;
  }>;
}

export default async function RestaurantsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const supabase = await createClient();

  let query = supabase.from('restaurants').select('*');

  // Apply filters
  if (params.cuisine) {
    if (params.cuisine === 'thai') {
      query = query.or('cuisine_type.eq.thai,cuisine_type.eq.thai-isaan,cuisine_type.eq.thai-northern,cuisine_type.eq.thai-southern,cuisine_type.eq.thai-street-food');
    } else if (params.cuisine === 'coffee') {
      query = query.or('cuisine_type.eq.coffee,cuisine_type.eq.cafe');
    } else {
      query = query.eq('cuisine_type', params.cuisine);
    }
  }

  if (params.district) {
    query = query.eq('district', params.district);
  }

  if (params.search) {
    query = query.or(`name.ilike.%${params.search}%,description.ilike.%${params.search}%`);
  }

  // Apply sorting
  switch (params.sort) {
    case 'rating':
      query = query.order('average_rating', { ascending: false });
      break;
    case 'reviews':
      query = query.order('review_count', { ascending: false });
      break;
    case 'recent':
      query = query.order('created_at', { ascending: false });
      break;
    default:
      query = query.order('average_rating', { ascending: false });
  }

  const { data: restaurants, error } = await query;

  const cuisineTitle = params.cuisine
    ? params.cuisine.charAt(0).toUpperCase() + params.cuisine.slice(1)
    : 'All';

  const tagline = params.cuisine ? CUISINE_TAGLINES[params.cuisine] : 'Discover Bangkok\'s best eats';

  // Split restaurants for layout
  const featuredRestaurant = restaurants?.[0];
  const remainingRestaurants = restaurants?.slice(1) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-black tracking-tighter text-gray-900 hover:text-gray-600 transition-colors">
            NaiD
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            {params.cuisine && CUISINE_EMOJIS[params.cuisine] && (
              <span className="text-6xl">{CUISINE_EMOJIS[params.cuisine]}</span>
            )}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                {params.search
                  ? `"${params.search}"`
                  : cuisineTitle}
              </h1>
              <p className="text-gray-500 text-lg mt-1">{tagline}</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            {restaurants?.length || 0} spots in Bangkok
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 space-y-4">
          <Suspense fallback={<div className="h-10 bg-gray-100 rounded-lg animate-pulse" />}>
            <CuisineFilter selected={params.cuisine} />
          </Suspense>

          <div className="flex flex-wrap gap-3">
            <Suspense fallback={<div className="h-10 w-32 bg-gray-100 rounded-full animate-pulse" />}>
              <DistrictFilter selected={params.district} />
            </Suspense>
            <Suspense fallback={<div className="h-10 w-32 bg-gray-100 rounded-full animate-pulse" />}>
              <SortFilter selected={params.sort} />
            </Suspense>
          </div>
        </div>

        {/* Results */}
        {error ? (
          <div className="text-center py-20">
            <p className="text-gray-500">Failed to load restaurants. Please try again.</p>
          </div>
        ) : restaurants && restaurants.length > 0 ? (
          <div className="space-y-8">
            {/* Featured Card */}
            {featuredRestaurant && (
              <RestaurantCard restaurant={featuredRestaurant} variant="featured" />
            )}

            {/* Grid of remaining cards */}
            {remainingRestaurants.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(remainingRestaurants as Restaurant[]).map((restaurant: Restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🍽️</p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No spots found</h3>
            <p className="text-gray-500">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
