interface PriceRangeProps {
  value: 1 | 2 | 3 | 4;
  size?: 'sm' | 'md' | 'lg';
}

export function PriceRange({ value, size = 'md' }: PriceRangeProps) {
  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <span className={`${sizes[size]} font-medium`}>
      <span className="text-gray-900">{'฿'.repeat(value)}</span>
      <span className="text-gray-300">{'฿'.repeat(4 - value)}</span>
    </span>
  );
}
