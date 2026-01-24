-- Add filter columns to restaurants table
-- Run this migration to add meal_times, vibes, and late_night columns

-- Add new columns for filter functionality
ALTER TABLE public.restaurants
  ADD COLUMN IF NOT EXISTS meal_times TEXT[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS vibes TEXT[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS late_night BOOLEAN DEFAULT false;

-- Create GIN indexes for efficient array queries
CREATE INDEX IF NOT EXISTS idx_restaurants_meal_times ON public.restaurants USING GIN (meal_times);
CREATE INDEX IF NOT EXISTS idx_restaurants_vibes ON public.restaurants USING GIN (vibes);
CREATE INDEX IF NOT EXISTS idx_restaurants_late_night ON public.restaurants (late_night);

-- Comment on columns for documentation
COMMENT ON COLUMN public.restaurants.meal_times IS 'Array of meal times: breakfast, lunch, dinner, late_night';
COMMENT ON COLUMN public.restaurants.vibes IS 'Array of vibe tags: date_night, cheap_fast, drunk_food, comfort, fancy, cafe, with_crew, solo';
COMMENT ON COLUMN public.restaurants.late_night IS 'Whether restaurant is open late night (after 10pm)';
