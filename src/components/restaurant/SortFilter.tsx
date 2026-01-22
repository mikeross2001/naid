'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface SortFilterProps {
  selected?: string;
}

export function SortFilter({ selected }: SortFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', e.target.value);
    router.push(`/restaurants?${params.toString()}`);
  };

  return (
    <select
      value={selected || 'rating'}
      onChange={handleChange}
      className="px-4 py-2 border border-gray-200 rounded-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
    >
      <option value="rating">Top Rated</option>
      <option value="reviews">Most Reviews</option>
      <option value="recent">Recently Added</option>
    </select>
  );
}
