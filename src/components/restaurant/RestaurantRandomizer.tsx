'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { Restaurant } from '@/types/database';
import { Shuffle, X, Sparkles } from 'lucide-react';

// Confetti particle component
interface ParticleProps {
  delay: number;
  color: string;
  left: number;
  size: number;
  drift: number;
  duration: number;
  shape: 'circle' | 'square' | 'strip';
}

function ConfettiParticle({ delay, color, left, size, drift, duration, shape }: ParticleProps) {
  const shapeStyles = {
    circle: { borderRadius: '50%', width: size, height: size },
    square: { borderRadius: '2px', width: size, height: size, transform: `rotate(${Math.random() * 45}deg)` },
    strip: { borderRadius: '1px', width: size * 0.4, height: size * 1.5 },
  };

  return (
    <div
      className="absolute animate-confetti"
      style={{
        left: `${left}%`,
        top: '40%',
        backgroundColor: color,
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}s`,
        ['--drift' as string]: `${drift}px`,
        ...shapeStyles[shape],
      }}
    />
  );
}

// Generate confetti pieces
const CONFETTI_COLORS = ['#f472b6', '#a855f7', '#3b82f6', '#22c55e', '#eab308', '#ef4444', '#06b6d4', '#ec4899', '#8b5cf6'];
const SHAPES: ParticleProps['shape'][] = ['circle', 'square', 'strip'];

function Confetti() {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    delay: Math.random() * 400,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    left: 30 + Math.random() * 40, // Concentrate in the center
    size: 6 + Math.random() * 8,
    drift: (Math.random() - 0.5) * 200,
    duration: 1.5 + Math.random() * 1.5,
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {particles.map((p) => (
        <ConfettiParticle key={p.id} {...p} />
      ))}
    </div>
  );
}

type CategoryChoice = 'restaurant' | 'bar' | null;

export function RestaurantRandomizer() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [filteredList, setFilteredList] = useState<Restaurant[]>([]);
  const [displayedRestaurant, setDisplayedRestaurant] = useState<Restaurant | null>(null);
  const [winner, setWinner] = useState<Restaurant | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [category, setCategory] = useState<CategoryChoice>(null);

  // Fetch all restaurants when modal opens
  useEffect(() => {
    if (isOpen && allRestaurants.length === 0) {
      const fetchRestaurants = async () => {
        const supabase = createClient();
        const { data } = await supabase
          .from('restaurants')
          .select('*')
          .order('average_rating', { ascending: false });

        if (data) {
          // Exclude cafes and coffee shops from the randomizer
          const filtered = data.filter(r =>
            r.cuisine_type !== 'cafe' && r.cuisine_type !== 'coffee'
          );
          setAllRestaurants(filtered);
        }
      };
      fetchRestaurants();
    }
  }, [isOpen, allRestaurants.length]);

  // Filter list based on category selection
  const selectCategory = (choice: CategoryChoice) => {
    setCategory(choice);
    if (choice === 'bar') {
      setFilteredList(allRestaurants.filter(r => r.cuisine_type === 'bar'));
    } else if (choice === 'restaurant') {
      setFilteredList(allRestaurants.filter(r => r.cuisine_type !== 'bar'));
    }
  };

  const spin = useCallback(() => {
    if (filteredList.length === 0 || isSpinning) return;

    setIsSpinning(true);
    setWinner(null);
    setShowConfetti(false);

    // Pick the winner first
    const winnerIndex = Math.floor(Math.random() * filteredList.length);
    const selectedWinner = filteredList[winnerIndex];

    // Animation: cycle through items rapidly, then slow down
    let delay = 50; // Start fast
    const maxIterations = 30 + Math.floor(Math.random() * 10); // 30-40 iterations
    let iteration = 0;

    const animate = () => {
      if (iteration >= maxIterations) {
        // Final reveal with confetti!
        setDisplayedRestaurant(selectedWinner);
        setWinner(selectedWinner);
        setIsSpinning(false);
        setShowConfetti(true);

        // Hide confetti after animation
        setTimeout(() => setShowConfetti(false), 2500);
        return;
      }

      // Show random item during spin
      const randomIndex = Math.floor(Math.random() * filteredList.length);
      setDisplayedRestaurant(filteredList[randomIndex]);

      iteration++;

      // Slow down as we approach the end
      if (iteration > maxIterations - 10) {
        delay = delay * 1.15; // Gradually slow down
      }

      setTimeout(animate, delay);
    };

    animate();
  }, [filteredList, isSpinning]);

  const handleOpen = () => {
    setIsOpen(true);
    setWinner(null);
    setDisplayedRestaurant(null);
    setShowConfetti(false);
    setCategory(null);
    setFilteredList([]);
  };

  const handleClose = () => {
    setIsOpen(false);
    setWinner(null);
    setDisplayedRestaurant(null);
    setIsSpinning(false);
    setShowConfetti(false);
    setCategory(null);
    setFilteredList([]);
  };

  const handleBack = () => {
    setCategory(null);
    setFilteredList([]);
    setWinner(null);
    setDisplayedRestaurant(null);
  };

  const goToRestaurant = () => {
    if (winner) {
      router.push(`/restaurants/${winner.slug}`);
      handleClose();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleOpen}
        className="group flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base font-semibold hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl pointer-events-auto"
      >
        <Shuffle className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
        <span>can't choose?</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-auto">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all overflow-hidden">
            {/* Confetti explosion */}
            {showConfetti && <Confetti />}

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              {/* Step 1: Category Selection */}
              {!category ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    What are you in the mood for?
                  </h2>
                  <p className="text-gray-500 mb-8">
                    Pick a category and let fate decide
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => selectCategory('restaurant')}
                      disabled={allRestaurants.length === 0}
                      className="group p-6 rounded-2xl border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition-all"
                    >
                      <span className="text-5xl block mb-3 group-hover:scale-110 transition-transform">🍽️</span>
                      <span className="font-bold text-gray-900">Restaurant</span>
                      <p className="text-xs text-gray-400 mt-1">
                        {allRestaurants.filter(r => r.cuisine_type !== 'bar').length} spots
                      </p>
                    </button>
                    <button
                      onClick={() => selectCategory('bar')}
                      disabled={allRestaurants.length === 0}
                      className="group p-6 rounded-2xl border-2 border-gray-200 hover:border-pink-400 hover:bg-pink-50 transition-all"
                    >
                      <span className="text-5xl block mb-3 group-hover:scale-110 transition-transform">🍸</span>
                      <span className="font-bold text-gray-900">Bar</span>
                      <p className="text-xs text-gray-400 mt-1">
                        {allRestaurants.filter(r => r.cuisine_type === 'bar').length} spots
                      </p>
                    </button>
                  </div>

                  {allRestaurants.length === 0 && (
                    <p className="mt-6 text-sm text-gray-400">Loading...</p>
                  )}
                </>
              ) : (
                <>
                  {/* Step 2: Spin */}
                  <button
                    onClick={handleBack}
                    className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors text-sm flex items-center gap-1"
                  >
                    ← Back
                  </button>

                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {category === 'bar' ? '🍸 Bar Time' : '🍽️ Let\'s Eat'}
                  </h2>
                  <p className="text-gray-500 mb-8">
                    We'll pick a random {category} for you
                  </p>

                  {/* Slot Machine Display */}
                  <div className="relative mb-8">
                    <div className={`
                      bg-gradient-to-br from-gray-100 to-gray-50
                      rounded-2xl p-6 border-4
                      ${isSpinning ? 'border-purple-400' : winner ? 'border-green-400' : 'border-gray-200'}
                      transition-colors duration-300
                      min-h-[120px] flex items-center justify-center
                    `}>
                      {displayedRestaurant ? (
                        <div className={`${isSpinning ? 'animate-pulse' : ''}`}>
                          <p className={`
                            text-2xl font-bold
                            ${winner ? 'text-gray-900' : 'text-gray-600'}
                            transition-all duration-300
                          `}>
                            {displayedRestaurant.name}
                          </p>
                          {winner && (
                            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-gray-500">
                              <span>{winner.cuisine_type.replace(/-/g, ' ')}</span>
                              <span>•</span>
                              <span>{winner.district}</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-6xl">🎰</div>
                      )}
                    </div>

                    {/* Sparkles when winner is shown */}
                    {winner && !isSpinning && (
                      <>
                        <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-yellow-400 animate-bounce" />
                        <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce delay-100" />
                        <Sparkles className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 text-yellow-400 animate-bounce delay-200" />
                      </>
                    )}
                  </div>

                  {/* Action Buttons */}
                  {!winner ? (
                    <button
                      onClick={spin}
                      disabled={isSpinning || filteredList.length === 0}
                      className={`
                        w-full py-4 rounded-xl font-bold text-lg transition-all
                        ${isSpinning
                          ? 'bg-purple-300 text-white cursor-not-allowed'
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:scale-[1.02]'
                        }
                      `}
                    >
                      {isSpinning ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="animate-spin">🎲</span>
                          Spinning...
                        </span>
                      ) : (
                        'Spin!'
                      )}
                    </button>
                  ) : (
                    <div className="space-y-3">
                      <button
                        onClick={goToRestaurant}
                        className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all hover:scale-[1.02]"
                      >
                        Let's go!
                      </button>
                      <button
                        onClick={spin}
                        className="w-full py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        Spin again
                      </button>
                    </div>
                  )}

                  <p className="mt-4 text-xs text-gray-400">
                    {filteredList.length} {category === 'bar' ? 'bars' : 'restaurants'} in the mix
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
