import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { Rating } from '@/components/ui/Rating';
import { ThumbsUp, User } from 'lucide-react';
import type { Review } from '@/types/database';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const profile = review.profile;

  return (
    <article className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <Link href={profile ? `/profile/${profile.username}` : '#'}>
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            {profile?.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt={profile.username}
                className="h-full w-full object-cover"
              />
            ) : (
              <User className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </Link>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <Link
              href={profile ? `/profile/${profile.username}` : '#'}
              className="font-medium text-gray-900 hover:text-[var(--primary)]"
            >
              {profile?.full_name || profile?.username || 'Anonymous'}
            </Link>
            <span className="text-xs text-gray-500">
              {formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}
            </span>
          </div>

          {/* Rating */}
          <div className="mb-3">
            <Rating value={review.rating} size="sm" />
          </div>

          {/* Content */}
          <p className="text-gray-600 whitespace-pre-wrap">{review.content}</p>

          {/* Images */}
          {review.images && review.images.length > 0 && (
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {review.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Review image ${index + 1}`}
                  className="h-24 w-24 object-cover rounded-lg flex-shrink-0"
                />
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-[var(--primary)]">
              <ThumbsUp className="h-4 w-4" />
              <span>Helpful ({review.helpful_count})</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
