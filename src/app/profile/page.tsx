import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { RestaurantCard } from '@/components/restaurant/RestaurantCard';
import { ReviewCard } from '@/components/restaurant/ReviewCard';
import { FollowStats } from '@/components/user/FollowStats';
import { User, Settings, MapPin, Calendar } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import type { Restaurant, Review } from '@/types/database';

interface FavoriteWithRestaurant {
  id: string;
  user_id: string;
  restaurant_id: string;
  list_name: string;
  created_at: string;
  restaurant: Restaurant | null;
}

type ReviewWithRestaurant = Review & { restaurant: Restaurant | null };

export default async function ProfilePage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  // Fetch profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (!profile) {
    redirect('/auth/login');
  }

  // Fetch user's reviews with restaurant info
  const { data: reviews } = await supabase
    .from('reviews')
    .select(`
      *,
      restaurant:restaurants(*)
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  // Fetch favorites
  const { data: favorites } = await supabase
    .from('favorites')
    .select(`
      *,
      restaurant:restaurants(*)
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(6);

  // Fetch follow counts
  const { count: followersCount } = await supabase
    .from('follows')
    .select('*', { count: 'exact', head: true })
    .eq('following_id', user.id);

  const { count: followingCount } = await supabase
    .from('follows')
    .select('*', { count: 'exact', head: true })
    .eq('follower_id', user.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Avatar */}
          <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            {profile.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt={profile.username}
                className="h-full w-full object-cover"
              />
            ) : (
              <User className="h-12 w-12 text-gray-400" />
            )}
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">
                {profile.full_name || profile.username}
              </h1>
              <Link
                href="/profile/edit"
                className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
              >
                <Settings className="h-5 w-5" />
              </Link>
            </div>

            <p className="text-gray-500 mb-2">@{profile.username}</p>

            {profile.bio && (
              <p className="text-gray-600 mb-4">{profile.bio}</p>
            )}

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Joined {formatDistanceToNow(new Date(profile.created_at), { addSuffix: true })}</span>
              </div>
            </div>

            {/* Follow Stats */}
            <div className="flex items-center gap-6 mt-4">
              <div>
                <span className="font-bold text-gray-900">{reviews?.length || 0}</span>
                <span className="text-gray-500 ml-1">Reviews</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">{followersCount || 0}</span>
                <span className="text-gray-500 ml-1">Followers</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">{followingCount || 0}</span>
                <span className="text-gray-500 ml-1">Following</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Saved Restaurants */}
      {favorites && favorites.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Saved Restaurants</h2>
            <Link href="/favorites" className="text-[var(--primary)] hover:underline text-sm font-medium">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(favorites as FavoriteWithRestaurant[]).map((fav: FavoriteWithRestaurant) => (
              fav.restaurant && <RestaurantCard key={fav.id} restaurant={fav.restaurant} />
            ))}
          </div>
        </section>
      )}

      {/* Reviews */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Reviews ({reviews?.length || 0})
        </h2>

        {reviews && reviews.length > 0 ? (
          <div className="space-y-4">
            {(reviews as ReviewWithRestaurant[]).map((review: ReviewWithRestaurant) => (
              <div key={review.id}>
                {review.restaurant && (
                  <Link
                    href={`/restaurants/${review.restaurant.slug}`}
                    className="text-sm font-medium text-[var(--primary)] hover:underline mb-2 block"
                  >
                    {review.restaurant.name}
                  </Link>
                )}
                <ReviewCard review={{ ...review, profile }} />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 text-center">
            <p className="text-4xl mb-4">📝</p>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
            <p className="text-gray-500">
              Start sharing your dining experiences!
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
