import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { Rating } from '@/components/ui/Rating';
import { PriceRange } from '@/components/ui/PriceRange';
import { ReviewCard } from '@/components/restaurant/ReviewCard';
import { FavoriteButton } from '@/components/restaurant/FavoriteButton';
import { WriteReviewButton } from '@/components/restaurant/WriteReviewButton';
import { MapPin, Phone, Globe, ArrowLeft } from 'lucide-react';
import type { Review, Profile } from '@/types/database';

type ReviewWithProfile = Review & { profile: Profile | null };

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function RestaurantPage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  // Fetch restaurant
  const { data: restaurant, error } = await supabase
    .from('restaurants')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !restaurant) {
    notFound();
  }

  // Fetch reviews with user profiles
  const { data: reviews } = await supabase
    .from('reviews')
    .select(`
      *,
      profile:profiles(*)
    `)
    .eq('restaurant_id', restaurant.id)
    .order('created_at', { ascending: false });

  // Get current user
  const { data: { user } } = await supabase.auth.getUser();

  // Check if user has favorited this restaurant
  let isFavorited = false;
  if (user) {
    const { data: favorite } = await supabase
      .from('favorites')
      .select('id')
      .eq('user_id', user.id)
      .eq('restaurant_id', restaurant.id)
      .single();
    isFavorited = !!favorite;
  }

  // Check if user has already reviewed
  let hasReviewed = false;
  if (user) {
    const { data: existingReview } = await supabase
      .from('reviews')
      .select('id')
      .eq('user_id', user.id)
      .eq('restaurant_id', restaurant.id)
      .single();
    hasReviewed = !!existingReview;
  }

  return (
    <div className="pb-16">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link
          href="/restaurants"
          className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to restaurants
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 bg-gray-100">
        {restaurant.cover_image ? (
          <Image
            src={restaurant.cover_image}
            alt={restaurant.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-8xl">🍽️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Restaurant Info */}
        <div className="relative -mt-16 z-10 bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              {/* Cuisine Badge */}
              <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700 mb-2">
                {restaurant.cuisine_type.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
              </span>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {restaurant.name}
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Rating value={restaurant.average_rating} size="lg" showValue />
                  <span className="text-gray-500">({restaurant.review_count} reviews)</span>
                </div>
                <PriceRange value={restaurant.price_range} size="lg" />
              </div>

              {restaurant.description && (
                <p className="text-gray-600 mb-6">{restaurant.description}</p>
              )}

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span>{restaurant.address}, {restaurant.district}</span>
                </div>
                {restaurant.phone && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <a href={`tel:${restaurant.phone}`} className="hover:text-[var(--primary)]">
                      {restaurant.phone}
                    </a>
                  </div>
                )}
                {restaurant.website && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Globe className="h-4 w-4 text-gray-400" />
                    <a
                      href={restaurant.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--primary)]"
                    >
                      Visit website
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <FavoriteButton
                restaurantId={restaurant.id}
                initialFavorited={isFavorited}
                isLoggedIn={!!user}
              />
              <WriteReviewButton
                restaurantId={restaurant.id}
                restaurantName={restaurant.name}
                isLoggedIn={!!user}
                hasReviewed={hasReviewed}
              />
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Reviews ({reviews?.length || 0})
          </h2>

          {reviews && reviews.length > 0 ? (
            <div className="space-y-4">
              {(reviews as ReviewWithProfile[]).map((review: ReviewWithProfile) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 text-center">
              <p className="text-4xl mb-4">📝</p>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
              <p className="text-gray-500">Be the first to share your experience!</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
