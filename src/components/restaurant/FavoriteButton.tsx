'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

interface FavoriteButtonProps {
  restaurantId: string;
  initialFavorited: boolean;
  isLoggedIn: boolean;
}

export function FavoriteButton({ restaurantId, initialFavorited, isLoggedIn }: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(initialFavorited);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleToggleFavorite = async () => {
    if (!isLoggedIn) {
      router.push('/auth/login');
      return;
    }

    setIsLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/login');
        return;
      }

      if (isFavorited) {
        // Remove favorite
        await supabase
          .from('favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('restaurant_id', restaurantId);
        setIsFavorited(false);
      } else {
        // Add favorite
        await supabase
          .from('favorites')
          .insert({
            user_id: user.id,
            restaurant_id: restaurantId,
            list_name: 'Saved',
          });
        setIsFavorited(true);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      disabled={isLoading}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors disabled:opacity-50 ${
        isFavorited
          ? 'bg-red-50 border-red-200 text-red-600'
          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
      }`}
    >
      <Heart className={`h-5 w-5 ${isFavorited ? 'fill-current' : ''}`} />
      <span className="font-medium">{isFavorited ? 'Saved' : 'Save'}</span>
    </button>
  );
}
