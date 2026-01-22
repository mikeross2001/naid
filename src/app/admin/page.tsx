'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { Restaurant } from '@/types/database';

export default function AdminPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const { data } = await supabase
      .from('restaurants')
      .select('*')
      .order('name');
    setRestaurants(data || []);
    setLoading(false);
  }

  async function handleImageUpload(restaurantId: string, file: File) {
    setUploading(restaurantId);
    setMessage(null);

    try {
      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${restaurantId}-${Date.now()}.${fileExt}`;
      const filePath = `restaurants/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('restaurant-images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('restaurant-images')
        .getPublicUrl(filePath);

      // Update restaurant record
      const { error: updateError } = await supabase
        .from('restaurants')
        .update({ cover_image: publicUrl })
        .eq('id', restaurantId);

      if (updateError) {
        throw updateError;
      }

      setMessage(`Updated image for restaurant`);
      fetchRestaurants();
    } catch (error) {
      console.error('Upload error:', error);
      setMessage(`Error: ${error instanceof Error ? error.message : 'Upload failed'}`);
    } finally {
      setUploading(null);
    }
  }

  async function handleUrlUpdate(restaurantId: string, imageUrl: string) {
    setMessage(null);

    try {
      const { error } = await supabase
        .from('restaurants')
        .update({ cover_image: imageUrl })
        .eq('id', restaurantId);

      if (error) throw error;

      setMessage('Image URL updated');
      fetchRestaurants();
    } catch (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : 'Update failed'}`);
    }
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p>Loading restaurants...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin: Restaurant Images</h1>
      <p className="text-gray-500 mb-8">Upload or update images for each restaurant</p>

      {message && (
        <div className={`mb-6 p-4 rounded-lg ${message.startsWith('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
          {message}
        </div>
      )}

      <div className="space-y-6">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex gap-6">
              {/* Current Image */}
              <div className="w-40 h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                {restaurant.cover_image ? (
                  <img
                    src={restaurant.cover_image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl">
                    🍽️
                  </div>
                )}
              </div>

              {/* Info & Upload */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg">{restaurant.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{restaurant.cuisine_type} • {restaurant.district}</p>

                <div className="flex flex-wrap gap-3">
                  {/* File Upload */}
                  <label className="cursor-pointer">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-full text-sm font-medium hover:bg-[var(--primary-dark)] transition-colors">
                      {uploading === restaurant.id ? 'Uploading...' : 'Upload Image'}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      disabled={uploading === restaurant.id}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImageUpload(restaurant.id, file);
                      }}
                    />
                  </label>

                  {/* URL Input */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.target as HTMLFormElement;
                      const input = form.elements.namedItem('imageUrl') as HTMLInputElement;
                      if (input.value) {
                        handleUrlUpdate(restaurant.id, input.value);
                        input.value = '';
                      }
                    }}
                    className="flex gap-2 flex-1 min-w-[300px]"
                  >
                    <input
                      type="url"
                      name="imageUrl"
                      placeholder="Or paste image URL..."
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200"
                    >
                      Set URL
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
