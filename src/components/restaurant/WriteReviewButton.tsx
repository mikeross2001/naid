'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Edit3, X } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Rating } from '@/components/ui/Rating';

interface WriteReviewButtonProps {
  restaurantId: string;
  restaurantName: string;
  isLoggedIn: boolean;
  hasReviewed: boolean;
}

export function WriteReviewButton({
  restaurantId,
  restaurantName,
  isLoggedIn,
  hasReviewed,
}: WriteReviewButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleOpenModal = () => {
    if (!isLoggedIn) {
      router.push('/auth/login');
      return;
    }
    if (hasReviewed) {
      return;
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      setError('Please select a rating');
      return;
    }

    if (content.trim().length < 10) {
      setError('Review must be at least 10 characters');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/login');
        return;
      }

      const { error: insertError } = await supabase
        .from('reviews')
        .insert({
          user_id: user.id,
          restaurant_id: restaurantId,
          rating,
          content: content.trim(),
        });

      if (insertError) {
        throw insertError;
      }

      setIsModalOpen(false);
      setRating(0);
      setContent('');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit review');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        disabled={hasReviewed}
        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ${
          hasReviewed
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]'
        }`}
      >
        <Edit3 className="h-5 w-5" />
        <span>{hasReviewed ? 'Reviewed' : 'Write Review'}</span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Write a Review</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Share your experience at <strong>{restaurantName}</strong>
              </p>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Rating
                  </label>
                  <Rating
                    value={rating}
                    size="lg"
                    interactive
                    onChange={setRating}
                  />
                </div>

                {/* Review Content */}
                <div>
                  <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review
                  </label>
                  <textarea
                    id="review"
                    rows={5}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Tell others about your experience. What did you enjoy? What would you recommend?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent resize-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {content.length} characters (minimum 10)
                  </p>
                </div>

                {/* Submit */}
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    className="flex-1"
                  >
                    Submit Review
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
