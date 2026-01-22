import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { ReviewCard } from '@/components/restaurant/ReviewCard';
import { FollowButton } from '@/components/user/FollowButton';
import { User, Calendar } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import type { Review, Restaurant } from '@/types/database';

type ReviewWithRestaurant = Review & { restaurant: Restaurant | null };

interface PageProps {
  params: Promise<{ username: string }>;
}

export default async function UserProfilePage({ params }: PageProps) {
  const { username } = await params;
  const supabase = await createClient();

  // Fetch profile by username
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single();

  if (error || !profile) {
    notFound();
  }

  // Get current user
  const { data: { user } } = await supabase.auth.getUser();
  const isOwnProfile = user?.id === profile.id;

  // Fetch user's reviews
  const { data: reviews } = await supabase
    .from('reviews')
    .select(`
      *,
      restaurant:restaurants(*)
    `)
    .eq('user_id', profile.id)
    .order('created_at', { ascending: false });

  // Fetch follow counts
  const { count: followersCount } = await supabase
    .from('follows')
    .select('*', { count: 'exact', head: true })
    .eq('following_id', profile.id);

  const { count: followingCount } = await supabase
    .from('follows')
    .select('*', { count: 'exact', head: true })
    .eq('follower_id', profile.id);

  // Check if current user follows this profile
  let isFollowing = false;
  if (user && !isOwnProfile) {
    const { data: follow } = await supabase
      .from('follows')
      .select('id')
      .eq('follower_id', user.id)
      .eq('following_id', profile.id)
      .single();
    isFollowing = !!follow;
  }

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
              {!isOwnProfile && (
                <FollowButton
                  profileId={profile.id}
                  initialFollowing={isFollowing}
                  isLoggedIn={!!user}
                />
              )}
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
                  <a
                    href={`/restaurants/${review.restaurant.slug}`}
                    className="text-sm font-medium text-[var(--primary)] hover:underline mb-2 block"
                  >
                    {review.restaurant.name}
                  </a>
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
              This user hasn&apos;t written any reviews.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
