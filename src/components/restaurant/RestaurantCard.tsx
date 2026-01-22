import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Star } from 'lucide-react';
import type { Restaurant } from '@/types/database';

interface RestaurantCardProps {
  restaurant: Restaurant;
  variant?: 'default' | 'featured' | 'compact';
}

export function RestaurantCard({ restaurant, variant = 'default' }: RestaurantCardProps) {
  const priceSymbols = '฿'.repeat(restaurant.price_range);

  if (variant === 'featured') {
    return (
      <Link href={`/restaurants/${restaurant.slug}`} className="block col-span-full">
        <article className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-gray-200">
            {restaurant.cover_image ? (
              <Image
                src={restaurant.cover_image}
                alt={restaurant.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-8xl">🍽️</span>
              </div>
            )}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white mb-3">
              {restaurant.cuisine_type.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform">
              {restaurant.name}
            </h2>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{restaurant.average_rating.toFixed(1)}</span>
              </div>
              <span className="text-white/50">•</span>
              <span>{priceSymbols}</span>
              <span className="text-white/50">•</span>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{restaurant.district}</span>
              </div>
            </div>
            {restaurant.description && (
              <p className="mt-4 text-white/70 max-w-2xl line-clamp-2 text-sm md:text-base">
                {restaurant.description}
              </p>
            )}
          </div>
        </article>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link href={`/restaurants/${restaurant.slug}`}>
        <article className="group flex gap-4 p-3 bg-white rounded-2xl hover:bg-gray-50 transition-colors">
          {/* Image */}
          <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
            {restaurant.cover_image ? (
              <Image
                src={restaurant.cover_image}
                alt={restaurant.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-2xl">🍽️</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate group-hover:text-gray-600">
              {restaurant.name}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>{restaurant.average_rating.toFixed(1)}</span>
              <span>•</span>
              <span>{priceSymbols}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1 truncate">{restaurant.district}</p>
          </div>
        </article>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={`/restaurants/${restaurant.slug}`}>
      <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          {restaurant.cover_image ? (
            <Image
              src={restaurant.cover_image}
              alt={restaurant.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span className="text-4xl">🍽️</span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

          {/* Rating badge */}
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-900">{restaurant.average_rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-1 text-lg">
              {restaurant.name}
            </h3>
            <span className="text-sm text-gray-400 flex-shrink-0">{priceSymbols}</span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
              {restaurant.cuisine_type.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {restaurant.district}
            </span>
          </div>

          {restaurant.description && (
            <p className="mt-3 text-sm text-gray-500 line-clamp-2">
              {restaurant.description}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
