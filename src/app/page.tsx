import Link from 'next/link';
import { RestaurantRandomizer } from '@/components/restaurant/RestaurantRandomizer';

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

const POSITIONS = [
  { top: '6%', left: '8%', rotate: '-12deg', scale: 1.1 },
  { top: '5%', right: '25%', rotate: '8deg', scale: 1.0 },
  { top: '8%', right: '5%', rotate: '-5deg', scale: 1.05 },
  { top: '30%', left: '3%', rotate: '15deg', scale: 0.95 },
  { top: '35%', right: '5%', rotate: '10deg', scale: 1.0 },
  { top: '55%', left: '5%', rotate: '-8deg', scale: 1.1 },
  { top: '60%', right: '8%', rotate: '12deg', scale: 0.95 },
  { bottom: '25%', left: '10%', rotate: '-15deg', scale: 1.0 },
  { bottom: '20%', right: '20%', rotate: '5deg', scale: 1.05 },
  { bottom: '8%', left: '25%', rotate: '18deg', scale: 0.9 },
  { bottom: '5%', right: '8%', rotate: '-10deg', scale: 1.0 },
  { bottom: '10%', left: '50%', rotate: '8deg', scale: 0.95 },
  { top: '18%', left: '20%', rotate: '-6deg', scale: 1.0 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Static cuisine emojis */}
      {CUISINES.map((cuisine, index) => {
        const pos = POSITIONS[index % POSITIONS.length];
        return (
          <Link
            key={cuisine.value}
            href={`/restaurants?cuisine=${cuisine.value}`}
            className="absolute z-20 flex flex-col items-center gap-1 hover:scale-110 transition-transform duration-200 cursor-pointer select-none"
            style={{
              top: pos.top,
              bottom: pos.bottom,
              left: pos.left,
              right: pos.right,
              transform: `rotate(${pos.rotate}) scale(${pos.scale})`,
            }}
          >
            <span className="text-5xl md:text-6xl">{cuisine.emoji}</span>
            <span className="text-[10px] md:text-xs text-gray-900 font-medium">{cuisine.label}</span>
          </Link>
        );
      })}

      {/* Center Content - pointer-events-none so emojis behind can be clicked */}
      <div className="min-h-screen flex flex-col items-center justify-center pointer-events-none">
        <h1
          className="font-display text-[10rem] md:text-[14rem] leading-none tracking-tight text-gray-900 pointer-events-auto"
          style={{ letterSpacing: '-0.03em' }}
        >
          NaiD?
        </h1>
        <p className="text-gray-900 text-lg mt-2 tracking-wide">
          end the food debate
        </p>

        <div className="mt-8">
          <RestaurantRandomizer />
        </div>

        <Link
          href="/restaurants"
          className="mt-6 text-gray-400 hover:text-gray-900 text-sm transition-colors pointer-events-auto"
        >
          browse all →
        </Link>
      </div>
    </div>
  );
}
