-- Add Bangkok Cafes and Coffee Shops
-- Run this in your Supabase SQL Editor

-- Roots Coffee
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Roots Coffee', 'roots-coffee', 'coffee', 'The Commons, Thonglor Soi 17', 'Thonglor', 2, 'Pioneer specialty coffee roaster showcasing Thai coffee since 2013')
ON CONFLICT (slug) DO NOTHING;

-- Factory Coffee
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Factory Coffee', 'factory-coffee', 'coffee', '49 Phaya Thai Road, Ratchathewi', 'Phaya Thai', 2, 'Award-winning coffee shop with Thailand Barista Champion and creative latte art')
ON CONFLICT (slug) DO NOTHING;

-- PAGA Microroastery
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('PAGA Microroastery', 'paga-microroastery', 'coffee', '45/1 Soi Sukhumvit 31', 'Sukhumvit', 2, 'Minimalist Apple Store-style cafe with rare single-origin coffees')
ON CONFLICT (slug) DO NOTHING;

-- Gallery Drip Coffee
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Gallery Drip Coffee', 'gallery-drip-coffee', 'coffee', 'Bangkok Art & Culture Centre, Rama 1 Road', 'Siam', 2, 'Artsy cafe specializing in drip coffee inside BACC with coffee cup sculptures')
ON CONFLICT (slug) DO NOTHING;

-- La Cabra
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('La Cabra', 'la-cabra', 'coffee', '813 Charoen Krung Road, Talad Noi', 'Chinatown', 3, 'Danish specialty coffee roaster with Nordic minimalist design in historic shophouse')
ON CONFLICT (slug) DO NOTHING;

-- Mother Roaster
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Mother Roaster', 'mother-roaster', 'coffee', '457 Maha Chai Road, Phra Nakhon', 'Old Town', 2, 'Vintage cafe with 70-year-old grandma barista serving Thai single-origin filter coffee')
ON CONFLICT (slug) DO NOTHING;

-- Roast Coffee and Eatery
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Roast', 'roast', 'cafe', 'EmQuartier, 693 Sukhumvit Road', 'Sukhumvit', 2, 'Popular all-day brunch cafe with specialty coffee and comfort food')
ON CONFLICT (slug) DO NOTHING;

-- WWA Portal
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('WWA Portal', 'wwa-portal', 'coffee', '27 Soi Sukhumvit 19', 'Sukhumvit', 3, 'Futuristic silver coffee bar specializing in exceptional single-origin filter coffees')
ON CONFLICT (slug) DO NOTHING;

-- Kurasu Bangkok
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Kurasu', 'kurasu', 'coffee', '1109/2 Sukhumvit 57, Thonglor', 'Thonglor', 2, 'Kyoto-born specialty coffee serving Thai and Japanese roasted beans')
ON CONFLICT (slug) DO NOTHING;

-- Craftsman Roastery at Old Town
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Craftsman Roastery', 'craftsman-roastery', 'coffee', '23 Bamrung Mueang Road, Phra Nakhon', 'Old Town', 2, 'Specialty coffee in a 127-year-old Sino-Portuguese printing house')
ON CONFLICT (slug) DO NOTHING;

-- Rough & Round
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Rough & Round', 'rough-and-round', 'coffee', '496/4 Song Wat Road, Samphanthawong', 'Chinatown', 2, 'Minimalist hideaway designed to foster community among coffee lovers')
ON CONFLICT (slug) DO NOTHING;

-- Morgen Coffee
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Morgen Coffee', 'morgen-coffee', 'coffee', '3/5 Soi Phromsri 1, Khlong Tan Nuea', 'Sukhumvit', 2, 'Quiet pause cafe with Brazilian Arabica and fresh-baked financiers')
ON CONFLICT (slug) DO NOTHING;

-- Piccolo Vicolo
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Piccolo Vicolo', 'piccolo-vicolo', 'cafe', '775 Maha Chai Road, Wang Burapha Phirom', 'Old Town', 2, 'Community-minded hideout spanning four shophouses with library co-working')
ON CONFLICT (slug) DO NOTHING;

-- Coffee Room Yaowarat
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Coffee Room Yaowarat', 'coffee-room-yaowarat', 'coffee', '206-208 Yaowarat Road, Samphanthawong', 'Chinatown', 2, 'On-site roastery with gentle pricing and upstairs co-working space')
ON CONFLICT (slug) DO NOTHING;

-- Leek Coffee
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Leek Coffee', 'leek-coffee', 'coffee', '301/25 Soi Pridi Banomyong 42', 'Sukhumvit', 2, 'Calm weekend morning vibes in a cozy neighborhood setting')
ON CONFLICT (slug) DO NOTHING;

-- Halfway Brunch & Roastery
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Halfway Brunch & Roastery', 'halfway-brunch-roastery', 'cafe', '8 Ngam Duphli Alley, Sathon', 'Sathorn', 2, 'Brutalist collaboration with Australian-inspired brunch')
ON CONFLICT (slug) DO NOTHING;

-- Little Giant
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Little Giant', 'little-giant', 'coffee', '452/2 Ratchawithi Road, Ratchathewi', 'Phaya Thai', 2, 'Slows everything down near Victory Monument with Port Coffee blends')
ON CONFLICT (slug) DO NOTHING;

-- Thirdbase
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Thirdbase', 'thirdbase', 'coffee', '38 Charoen Chai Alley, Watthana', 'Sukhumvit', 2, 'Community space with low-lit corners for extended stays')
ON CONFLICT (slug) DO NOTHING;

-- WWA Hua Lamphong
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('WWA Hua Lamphong', 'wwa-hua-lamphong', 'coffee', '318 Maha Phruettharam Road, Bang Rak', 'Riverside', 2, 'Calm and polished space blending local and international coffee')
ON CONFLICT (slug) DO NOTHING;

-- Two Hands Coffee
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Two Hands Coffee', 'two-hands-coffee', 'coffee', 'BLOQyard, Silom', 'Silom', 2, 'Standout blue brick facade with minimal design')
ON CONFLICT (slug) DO NOTHING;

-- Patchworks BKK
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Patchworks BKK', 'patchworks-bkk', 'cafe', '293/2 Charan Sanit Wong Road, Bang Phlat', 'Bang Phlat', 2, 'Brutalist venue combining French patisserie with all-day brunch')
ON CONFLICT (slug) DO NOTHING;

-- Cuckoo & Friends
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Cuckoo & Friends', 'cuckoo-and-friends', 'cafe', 'Ekkamai 21 Alley', 'Sukhumvit', 2, 'Retro-styled living room cafe with cozy vibes')
ON CONFLICT (slug) DO NOTHING;
