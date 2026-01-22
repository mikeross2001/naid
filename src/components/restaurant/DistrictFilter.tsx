'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { BANGKOK_DISTRICTS } from '@/types/database';

interface DistrictFilterProps {
  selected?: string;
}

export function DistrictFilter({ selected }: DistrictFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    if (e.target.value) {
      params.set('district', e.target.value);
    } else {
      params.delete('district');
    }
    router.push(`/restaurants?${params.toString()}`);
  };

  return (
    <select
      value={selected || ''}
      onChange={handleChange}
      className="px-4 py-2 border border-gray-200 rounded-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
    >
      <option value="">All Districts</option>
      {BANGKOK_DISTRICTS.map((district) => (
        <option key={district} value={district}>
          {district}
        </option>
      ))}
    </select>
  );
}
