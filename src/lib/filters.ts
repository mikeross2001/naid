import type { Restaurant, FilterState, MealTime, AreaFilter } from '@/types/database';
import { DISTRICT_TO_AREA } from '@/types/database';

/**
 * Filter restaurants based on the current filter state
 */
export function filterRestaurants(
  restaurants: Restaurant[],
  filters: FilterState,
  category: 'restaurant' | 'bar'
): Restaurant[] {
  return restaurants.filter((r) => {
    // Category filter (existing logic)
    if (category === 'bar' && r.cuisine_type !== 'bar') return false;
    if (category === 'restaurant' && r.cuisine_type === 'bar') return false;

    // Budget filter (maps to existing price_range)
    if (filters.budget === 'budget' && r.price_range !== 1) return false;
    if (filters.budget === 'moderate' && r.price_range !== 2) return false;
    if (filters.budget === 'upscale' && r.price_range < 3) return false;
    // 'no_limit' matches all

    // Meal time filter
    if (filters.mealTime !== 'any') {
      const mealTimes = r.meal_times || [];
      if (!mealTimes.includes(filters.mealTime)) return false;
    }

    // Vibe filter (match ANY selected vibe)
    if (filters.vibes.length > 0) {
      const restaurantVibes = r.vibes || [];
      if (!filters.vibes.some((v) => restaurantVibes.includes(v))) return false;
    }

    // Area filter (maps district to area group)
    if (filters.area !== 'anywhere') {
      const restaurantArea = DISTRICT_TO_AREA[r.district] || 'anywhere';
      if (restaurantArea !== filters.area) return false;
    }

    return true;
  });
}

/**
 * Auto-detect current meal time based on hour
 */
export function getCurrentMealTime(): MealTime | 'any' {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 11) return 'breakfast';
  if (hour >= 11 && hour < 15) return 'lunch';
  if (hour >= 17 && hour < 22) return 'dinner';
  if (hour >= 22 || hour < 4) return 'late_night';
  return 'any';
}

/**
 * Get the default filter state with auto-detected meal time
 */
export function getDefaultFilterState(): FilterState {
  return {
    budget: 'no_limit',
    mealTime: getCurrentMealTime(),
    vibes: [],
    area: 'anywhere',
  };
}

/**
 * Get a friendly description of the most restrictive filter
 * for suggesting what to loosen when no matches
 */
export function getMostRestrictiveFilter(filters: FilterState): string {
  if (filters.vibes.length > 0) return 'vibes';
  if (filters.area !== 'anywhere') return 'area';
  if (filters.budget !== 'no_limit') return 'budget';
  if (filters.mealTime !== 'any') return 'meal time';
  return 'filters';
}
