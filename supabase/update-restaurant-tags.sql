-- Update existing restaurants with meal_times, vibes, and late_night tags
-- Run this after adding the filter columns

-- ===================================
-- BARS: All bars are late_night, drunk_food
-- ===================================
UPDATE public.restaurants
SET
  meal_times = ARRAY['dinner', 'late_night'],
  vibes = ARRAY['drunk_food', 'with_crew'],
  late_night = true
WHERE cuisine_type = 'bar';

-- ===================================
-- CAFES: Breakfast, lunch, cafe vibe
-- ===================================
UPDATE public.restaurants
SET
  meal_times = ARRAY['breakfast', 'lunch'],
  vibes = ARRAY['cafe', 'solo']
WHERE cuisine_type IN ('cafe', 'coffee');

-- ===================================
-- DESSERTS: Lunch, dinner, cafe vibe
-- ===================================
UPDATE public.restaurants
SET
  meal_times = ARRAY['lunch', 'dinner'],
  vibes = ARRAY['cafe', 'with_crew']
WHERE cuisine_type = 'dessert';

-- ===================================
-- BAKERIES: Breakfast, lunch, cafe vibe
-- ===================================
UPDATE public.restaurants
SET
  meal_times = ARRAY['breakfast', 'lunch'],
  vibes = ARRAY['cafe', 'solo']
WHERE cuisine_type = 'bakery';

-- ===================================
-- STREET FOOD: All meal times, cheap_fast, solo/with_crew
-- ===================================
UPDATE public.restaurants
SET
  meal_times = ARRAY['breakfast', 'lunch', 'dinner'],
  vibes = ARRAY['cheap_fast', 'solo', 'comfort']
WHERE cuisine_type = 'thai-street-food';

-- ===================================
-- FINE DINING (price_range = 4): Dinner, date_night, fancy
-- ===================================
UPDATE public.restaurants
SET
  meal_times = ARRAY['dinner'],
  vibes = ARRAY['date_night', 'fancy']
WHERE price_range = 4
  AND cuisine_type NOT IN ('bar', 'cafe', 'coffee', 'dessert', 'bakery');

-- ===================================
-- MID-RANGE DINING (price_range = 3): Lunch & dinner, with_crew
-- ===================================
UPDATE public.restaurants
SET
  meal_times = ARRAY['lunch', 'dinner'],
  vibes = ARRAY['with_crew', 'date_night']
WHERE price_range = 3
  AND cuisine_type NOT IN ('bar', 'cafe', 'coffee', 'dessert', 'bakery', 'thai-street-food');

-- ===================================
-- BUDGET FRIENDLY (price_range = 1): All meals, cheap_fast, solo
-- ===================================
UPDATE public.restaurants
SET
  meal_times = ARRAY['breakfast', 'lunch', 'dinner'],
  vibes = ARRAY['cheap_fast', 'solo', 'comfort']
WHERE price_range = 1
  AND cuisine_type NOT IN ('bar', 'cafe', 'coffee', 'dessert', 'bakery', 'thai-street-food');

-- ===================================
-- MODERATE (price_range = 2): Lunch & dinner
-- ===================================
UPDATE public.restaurants
SET
  meal_times = ARRAY['lunch', 'dinner'],
  vibes = ARRAY['comfort', 'with_crew']
WHERE price_range = 2
  AND cuisine_type NOT IN ('bar', 'cafe', 'coffee', 'dessert', 'bakery', 'thai-street-food');

-- ===================================
-- SPECIFIC CUISINE OVERRIDES
-- ===================================

-- Japanese restaurants: Add solo vibe (good for solo dining)
UPDATE public.restaurants
SET vibes = array_append(vibes, 'solo')
WHERE cuisine_type = 'japanese'
  AND NOT ('solo' = ANY(vibes));

-- Ramen/noodle spots: Add cheap_fast if not expensive
UPDATE public.restaurants
SET vibes = array_append(vibes, 'cheap_fast')
WHERE (name ILIKE '%ramen%' OR name ILIKE '%noodle%')
  AND price_range <= 2
  AND NOT ('cheap_fast' = ANY(vibes));

-- Korean BBQ: Good for groups
UPDATE public.restaurants
SET vibes = array_append(vibes, 'with_crew')
WHERE cuisine_type = 'korean'
  AND NOT ('with_crew' = ANY(vibes));

-- Seafood restaurants: Good for groups
UPDATE public.restaurants
SET vibes = array_append(vibes, 'with_crew')
WHERE cuisine_type = 'seafood'
  AND NOT ('with_crew' = ANY(vibes));

-- American/Burgers: Comfort food
UPDATE public.restaurants
SET vibes = array_append(vibes, 'comfort')
WHERE cuisine_type = 'american'
  AND NOT ('comfort' = ANY(vibes));

-- BBQ restaurants: Add drunk_food tag
UPDATE public.restaurants
SET vibes = array_append(vibes, 'drunk_food')
WHERE (name ILIKE '%bbq%' OR name ILIKE '%smokin%' OR description ILIKE '%bbq%')
  AND NOT ('drunk_food' = ANY(vibes));

-- Isaan restaurants: Comfort food, good drunk food
UPDATE public.restaurants
SET vibes = array_append(vibes, 'comfort')
WHERE cuisine_type = 'thai-isaan'
  AND NOT ('comfort' = ANY(vibes));

UPDATE public.restaurants
SET vibes = array_append(vibes, 'drunk_food')
WHERE cuisine_type = 'thai-isaan'
  AND NOT ('drunk_food' = ANY(vibes));

-- Italian: Good for dates
UPDATE public.restaurants
SET vibes = array_append(vibes, 'date_night')
WHERE cuisine_type = 'italian'
  AND price_range >= 2
  AND NOT ('date_night' = ANY(vibes));

-- French: Fancy, date night
UPDATE public.restaurants
SET vibes = array_append(vibes, 'fancy')
WHERE cuisine_type = 'french'
  AND NOT ('fancy' = ANY(vibes));

-- Vegetarian: Cafe vibe
UPDATE public.restaurants
SET vibes = array_append(vibes, 'cafe')
WHERE cuisine_type = 'vegetarian'
  AND NOT ('cafe' = ANY(vibes));

-- Fusion restaurants: Date night vibe
UPDATE public.restaurants
SET vibes = array_append(vibes, 'date_night')
WHERE cuisine_type = 'fusion'
  AND NOT ('date_night' = ANY(vibes));

-- ===================================
-- VERIFY: Show counts by meal_times and vibes
-- ===================================
-- SELECT
--   unnest(meal_times) as meal_time,
--   COUNT(*)
-- FROM public.restaurants
-- GROUP BY 1
-- ORDER BY 2 DESC;

-- SELECT
--   unnest(vibes) as vibe,
--   COUNT(*)
-- FROM public.restaurants
-- GROUP BY 1
-- ORDER BY 2 DESC;
