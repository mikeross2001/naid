'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const CUISINES = [
  { value: 'thai', label: 'thai', emoji: '🍜' },
  { value: 'japanese', label: 'japanese', emoji: '🍣' },
  { value: 'korean', label: 'korean', emoji: '🍖' },
  { value: 'chinese', label: 'chinese', emoji: '🥟' },
  { value: 'indian', label: 'indian', emoji: '🍛' },
  { value: 'italian', label: 'italian', emoji: '🍝' },
  { value: 'french', label: 'french', emoji: '🥐' },
  { value: 'american', label: 'american', emoji: '🍔' },
  { value: 'seafood', label: 'seafood', emoji: '🦞' },
  { value: 'coffee', label: 'coffee', emoji: '☕' },
  { value: 'bar', label: 'bars', emoji: '🍸' },
  { value: 'dessert', label: 'dessert', emoji: '🍰' },
  { value: 'vegetarian', label: 'vegetarian', emoji: '🥗' },
];

interface CuisineFilterProps {
  selected?: string;
}

export function CuisineFilter({ selected }: CuisineFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelect = (cuisine: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cuisine) {
      params.set('cuisine', cuisine);
    } else {
      params.delete('cuisine');
    }
    router.push(`/restaurants?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => handleSelect(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
          !selected
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
        }`}
      >
        All
      </button>
      {CUISINES.map((cuisine) => (
        <button
          key={cuisine.value}
          onClick={() => handleSelect(cuisine.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
            selected === cuisine.value
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <span>{cuisine.emoji}</span>
          <span>{cuisine.label}</span>
        </button>
      ))}
    </div>
  );
}
