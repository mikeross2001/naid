import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { RestaurantCard } from '@/components/restaurant/RestaurantCard';
import type { Restaurant } from '@/types/database';

interface FavoriteWithRestaurant {
  id: string;
  user_id: string;
  restaurant_id: string;
  list_name: string;
  created_at: string;
  restaurant: Restaurant | null;
}

export default async function FavoritesPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  // Fetch all favorites
  const { data: favorites } = await supabase
    .from('favorites')
    .select(`
      *,
      restaurant:restaurants(*)
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  // Group by list_name
  const lists: Record<string, FavoriteWithRestaurant[]> = {};
  (favorites as FavoriteWithRestaurant[] | null)?.forEach((fav: FavoriteWithRestaurant) => {
    if (!lists[fav.list_name]) {
      lists[fav.list_name] = [];
    }
    lists[fav.list_name]!.push(fav);
  });

  const listNames = Object.keys(lists);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Restaurants</h1>
      <p className="text-gray-500 mb-8">
        {favorites?.length || 0} restaurants saved
      </p>

      {listNames.length > 0 ? (
        <div className="space-y-12">
          {listNames.map((listName) => (
            <section key={listName}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {listName} ({lists[listName].length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {lists[listName].map((fav) => (
                  fav.restaurant && (
                    <RestaurantCard key={fav.id} restaurant={fav.restaurant} />
                  )
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-4xl mb-4">❤️</p>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No saved restaurants</h3>
          <p className="text-gray-500">
            Start exploring and save restaurants you want to try!
          </p>
        </div>
      )}
    </div>
  );
}
