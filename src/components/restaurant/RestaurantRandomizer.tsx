'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { Restaurant } from '@/types/database';
import { X, Sparkles } from 'lucide-react';

// Rotating button copy options
const BUTTON_COPIES = [
  { text: 'Spin for food', emoji: '🎲' },
  { text: 'Surprise me', emoji: '🍜' },
  { text: 'Decide for me', emoji: '😵‍💫' },
  { text: "Can't choose?", emoji: '🎰' },
  { text: 'Feeling lucky', emoji: '🍀' },
];

// Thinking messages for suspense
const THINKING_MESSAGES = [
  { text: 'Thinking', emoji: '🤔' },
  { text: 'Consulting the food gods', emoji: '🙏' },
  { text: 'Spinning the wheel', emoji: '🎡' },
  { text: 'Trust us', emoji: '😏' },
];

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

const CONFETTI_COLORS = ['#f472b6', '#a855f7', '#3b82f6', '#22c55e', '#eab308', '#ef4444', '#06b6d4', '#ec4899', '#8b5cf6'];
const SHAPES: ParticleProps['shape'][] = ['circle', 'square', 'strip'];

function Confetti() {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    delay: Math.random() * 400,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    left: 20 + Math.random() * 60,
    size: 6 + Math.random() * 10,
    drift: (Math.random() - 0.5) * 250,
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
type GamePhase = 'idle' | 'thinking' | 'reveal';

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
  const [buttonCopyIndex, setButtonCopyIndex] = useState(0);
  const [gamePhase, setGamePhase] = useState<GamePhase>('idle');
  const [thinkingMessageIndex, setThinkingMessageIndex] = useState(0);

  // Rotate button copy every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setButtonCopyIndex((prev) => (prev + 1) % BUTTON_COPIES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
          const filtered = (data as Restaurant[]).filter((r: Restaurant) =>
            r.cuisine_type !== 'cafe' && r.cuisine_type !== 'coffee'
          );
          setAllRestaurants(filtered);
        }
      };
      fetchRestaurants();
    }
  }, [isOpen, allRestaurants.length]);

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
    setGamePhase('thinking');
    setThinkingMessageIndex(0);

    // Pick the winner first
    const winnerIndex = Math.floor(Math.random() * filteredList.length);
    const selectedWinner = filteredList[winnerIndex];

    // Phase 1: Thinking messages (cycle through them)
    let messageIndex = 0;
    const thinkingInterval = setInterval(() => {
      messageIndex++;
      if (messageIndex < THINKING_MESSAGES.length) {
        setThinkingMessageIndex(messageIndex);
      }
    }, 600);

    // Phase 2: Quick shuffle of names
    setTimeout(() => {
      clearInterval(thinkingInterval);
      setGamePhase('reveal');

      let delay = 50;
      const maxIterations = 25 + Math.floor(Math.random() * 10);
      let iteration = 0;

      const animate = () => {
        if (iteration >= maxIterations) {
          setDisplayedRestaurant(selectedWinner);
          setWinner(selectedWinner);
          setIsSpinning(false);
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
          return;
        }

        const randomIndex = Math.floor(Math.random() * filteredList.length);
        setDisplayedRestaurant(filteredList[randomIndex]);
        iteration++;

        if (iteration > maxIterations - 8) {
          delay = delay * 1.2;
        }

        setTimeout(animate, delay);
      };

      animate();
    }, 2400);

  }, [filteredList, isSpinning]);

  const handleOpen = () => {
    setIsOpen(true);
    setWinner(null);
    setDisplayedRestaurant(null);
    setShowConfetti(false);
    setCategory(null);
    setFilteredList([]);
    setGamePhase('idle');
  };

  const handleClose = () => {
    setIsOpen(false);
    setWinner(null);
    setDisplayedRestaurant(null);
    setIsSpinning(false);
    setShowConfetti(false);
    setCategory(null);
    setFilteredList([]);
    setGamePhase('idle');
  };

  const handleBack = () => {
    setCategory(null);
    setFilteredList([]);
    setWinner(null);
    setDisplayedRestaurant(null);
    setGamePhase('idle');
  };

  const goToRestaurant = () => {
    if (winner) {
      router.push(`/restaurants/${winner.slug}`);
      handleClose();
    }
  };

  const currentButtonCopy = BUTTON_COPIES[buttonCopyIndex];
  const currentThinkingMessage = THINKING_MESSAGES[thinkingMessageIndex];

  return (
    <>
      {/* Trigger Button - Big, Animated, Delightful */}
      <button
        onClick={handleOpen}
        className="group relative flex items-center justify-center gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-xl font-bold hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl pointer-events-auto animate-pulse-subtle overflow-hidden"
      >
        {/* Gradient wave animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer" />

        {/* Button content with rotation */}
        <span
          key={buttonCopyIndex}
          className="text-2xl animate-bounce-subtle group-hover:animate-spin-slow"
        >
          {currentButtonCopy.emoji}
        </span>
        <span className="relative z-10 animate-fade-in" key={`text-${buttonCopyIndex}`}>
          {currentButtonCopy.text}
        </span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-auto">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={handleClose}
          />

          <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all overflow-hidden">
            {showConfetti && <Confetti />}

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              {/* Step 1: Category Selection */}
              {!category ? (
                <>
                  <div className="text-5xl mb-4 animate-bounce">🎰</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    What's the vibe?
                  </h2>
                  <p className="text-gray-500 mb-8">
                    Pick your poison, we'll handle the rest
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => selectCategory('restaurant')}
                      disabled={allRestaurants.length === 0}
                      className="group p-6 rounded-2xl border-2 border-gray-200 hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <span className="text-5xl block mb-3 group-hover:animate-wiggle">🍽️</span>
                      <span className="font-bold text-gray-900">Food</span>
                      <p className="text-xs text-gray-400 mt-1">
                        {allRestaurants.filter(r => r.cuisine_type !== 'bar').length} spots
                      </p>
                    </button>
                    <button
                      onClick={() => selectCategory('bar')}
                      disabled={allRestaurants.length === 0}
                      className="group p-6 rounded-2xl border-2 border-gray-200 hover:border-pink-400 hover:bg-gradient-to-br hover:from-pink-50 hover:to-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <span className="text-5xl block mb-3 group-hover:animate-wiggle">🍸</span>
                      <span className="font-bold text-gray-900">Drinks</span>
                      <p className="text-xs text-gray-400 mt-1">
                        {allRestaurants.filter(r => r.cuisine_type === 'bar').length} spots
                      </p>
                    </button>
                  </div>

                  {allRestaurants.length === 0 && (
                    <p className="mt-6 text-sm text-gray-400 animate-pulse">Loading the goods...</p>
                  )}
                </>
              ) : (
                <>
                  <button
                    onClick={handleBack}
                    className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors text-sm flex items-center gap-1"
                  >
                    ← Back
                  </button>

                  {/* Game Phase: Thinking */}
                  {gamePhase === 'thinking' && (
                    <div className="py-8">
                      <div className="text-6xl mb-6 animate-spin-slow">
                        {currentThinkingMessage.emoji}
                      </div>
                      <p className="text-xl font-bold text-gray-700 animate-pulse">
                        {currentThinkingMessage.text}...
                      </p>
                      <div className="flex justify-center gap-1 mt-4">
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}

                  {/* Game Phase: Reveal / Idle */}
                  {(gamePhase === 'reveal' || gamePhase === 'idle') && (
                    <>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {winner
                          ? '🎉 Winner!'
                          : category === 'bar'
                            ? '🍸 Drinks Time'
                            : '🍽️ Let\'s Eat'}
                      </h2>
                      <p className="text-gray-500 mb-6">
                        {winner
                          ? 'The universe has spoken'
                          : `${filteredList.length} options, one destiny`}
                      </p>

                      {/* Result Display */}
                      <div className="relative mb-6">
                        <div className={`
                          bg-gradient-to-br from-gray-50 to-gray-100
                          rounded-2xl p-8 border-4
                          ${isSpinning ? 'border-purple-400 animate-pulse' : winner ? 'border-green-400' : 'border-gray-200'}
                          transition-all duration-300
                          min-h-[140px] flex items-center justify-center
                        `}>
                          {displayedRestaurant ? (
                            <div className={winner ? 'animate-bounce-in' : ''}>
                              <p className={`
                                text-2xl font-bold
                                ${winner ? 'text-gray-900' : 'text-gray-500'}
                                transition-all duration-150
                              `}>
                                {displayedRestaurant.name}
                              </p>
                              {winner && (
                                <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-500">
                                  <span className="px-2 py-1 bg-gray-200 rounded-full">
                                    {winner.cuisine_type.replace(/-/g, ' ')}
                                  </span>
                                  <span>•</span>
                                  <span>{winner.district}</span>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="text-6xl animate-pulse">
                              {category === 'bar' ? '🍸' : '🍽️'}
                            </div>
                          )}
                        </div>

                        {winner && !isSpinning && (
                          <>
                            <Sparkles className="absolute -top-3 -left-3 w-8 h-8 text-yellow-400 animate-ping" />
                            <Sparkles className="absolute -top-3 -right-3 w-8 h-8 text-yellow-400 animate-ping" style={{ animationDelay: '150ms' }} />
                            <Sparkles className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 text-yellow-400 animate-ping" style={{ animationDelay: '300ms' }} />
                          </>
                        )}
                      </div>

                      {/* Action Buttons */}
                      {!winner ? (
                        <button
                          onClick={spin}
                          disabled={isSpinning || filteredList.length === 0}
                          className={`
                            w-full py-5 rounded-2xl font-bold text-xl transition-all duration-300
                            ${isSpinning
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white hover:shadow-xl hover:scale-[1.02] active:scale-95'
                            }
                          `}
                        >
                          {isSpinning ? (
                            <span className="flex items-center justify-center gap-2">
                              <span className="animate-spin">🎲</span>
                              Spinning...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              <span className="animate-bounce">🎲</span>
                              Spin the Wheel!
                            </span>
                          )}
                        </button>
                      ) : (
                        <div className="space-y-3">
                          <button
                            onClick={goToRestaurant}
                            className="w-full py-5 rounded-2xl font-bold text-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95"
                          >
                            Let's Go! 🚀
                          </button>
                          <button
                            onClick={() => {
                              setWinner(null);
                              setDisplayedRestaurant(null);
                              setGamePhase('idle');
                              spin();
                            }}
                            className="w-full py-4 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-all"
                          >
                            Nah, spin again 🎲
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
