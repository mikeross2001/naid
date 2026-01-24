-- Add new restaurants and bars to NaiD database
-- Run this after the filter columns migration

-- =============================================
-- STREET FOOD / LOCAL THAI ($)
-- =============================================

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Rung Rueang Pork Noodle',
  'rung-rueang-pork-noodle',
  'thai',
  'Victory Monument Area',
  'Ratchathewi',
  1,
  'Legendary pork noodle soup, Michelin Bib Gourmand',
  ARRAY['breakfast', 'lunch'],
  ARRAY['comfort', 'cheap_fast', 'solo'],
  false,
  'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Kuay Jab Mr. Joe',
  'kuay-jab-mr-joe',
  'thai',
  'Yaowarat Road',
  'Chinatown',
  1,
  'Famous rolled rice noodle soup with pork offal',
  ARRAY['lunch', 'dinner', 'late_night'],
  ARRAY['comfort', 'cheap_fast', 'drunk_food'],
  true,
  'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'RUAY MITR Sathorn 10',
  'ruay-mitr-sathorn',
  'thai',
  'Sathorn Soi 10',
  'Sathorn',
  1,
  'Popular local Thai spot',
  ARRAY['lunch', 'dinner'],
  ARRAY['comfort', 'cheap_fast'],
  false,
  'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Saengchai Phochana',
  'saengchai-phochana',
  'thai',
  'Silom Area',
  'Silom',
  1,
  'Classic Thai comfort food',
  ARRAY['lunch', 'dinner'],
  ARRAY['comfort', 'cheap_fast'],
  false,
  'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Jeh O Chula',
  'jeh-o-chula',
  'thai',
  'Sam Yan, near Chulalongkorn University',
  'Silom',
  1,
  'Viral mama tom yum, famous late night spot',
  ARRAY['dinner', 'late_night'],
  ARRAY['drunk_food', 'comfort', 'with_crew'],
  true,
  'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=800'
) ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- HOTPOT / BBQ / CHAINS ($)
-- =============================================

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'CQK Hotpot Bangkok',
  'cqk-hotpot',
  'chinese',
  'Multiple Locations',
  'Sukhumvit',
  1,
  'Popular Chinese hotpot chain',
  ARRAY['lunch', 'dinner'],
  ARRAY['with_crew', 'comfort', 'date_night'],
  false,
  'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Momo Paradise',
  'momo-paradise',
  'japanese',
  'Multiple Locations',
  'Sukhumvit',
  1,
  'Japanese shabu shabu chain',
  ARRAY['lunch', 'dinner'],
  ARRAY['with_crew', 'comfort'],
  false,
  'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Suki Masa',
  'suki-masa',
  'thai',
  'Multiple Locations',
  'Sukhumvit',
  1,
  'Thai suki chain',
  ARRAY['lunch', 'dinner'],
  ARRAY['with_crew', 'comfort'],
  false,
  'https://images.unsplash.com/photo-1547928578-bca3e9c5a0ab?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Suki Teenoi',
  'suki-teenoi',
  'thai',
  'Multiple Locations',
  'Sukhumvit',
  1,
  'Budget-friendly suki chain',
  ARRAY['lunch', 'dinner', 'late_night'],
  ARRAY['cheap_fast', 'with_crew', 'comfort'],
  true,
  'https://images.unsplash.com/photo-1547928578-bca3e9c5a0ab?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'MK Suki',
  'mk-suki',
  'thai',
  'Multiple Locations',
  'Siam',
  1,
  'Thailand''s most famous suki chain',
  ARRAY['lunch', 'dinner'],
  ARRAY['with_crew', 'comfort'],
  false,
  'https://images.unsplash.com/photo-1547928578-bca3e9c5a0ab?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Gen Korean BBQ',
  'gen-korean-bbq',
  'korean',
  'Ekkamai',
  'Ekkamai',
  1,
  'Popular Korean BBQ buffet',
  ARRAY['lunch', 'dinner'],
  ARRAY['with_crew', 'date_night'],
  false,
  'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800'
) ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- JAPANESE ($-$$)
-- =============================================

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Sushiro',
  'sushiro',
  'japanese',
  'Multiple Locations',
  'Sukhumvit',
  1,
  'Conveyor belt sushi chain from Japan',
  ARRAY['lunch', 'dinner'],
  ARRAY['cheap_fast', 'with_crew', 'solo'],
  false,
  'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Nippon Tei',
  'nippon-tei',
  'japanese',
  'Silom Area',
  'Silom',
  1,
  'Classic Japanese restaurant',
  ARRAY['lunch', 'dinner'],
  ARRAY['comfort', 'solo', 'date_night'],
  false,
  'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'CoCo Ichibanya',
  'coco-ichibanya',
  'japanese',
  'Multiple Locations',
  'Sukhumvit',
  1,
  'Japanese curry chain',
  ARRAY['lunch', 'dinner'],
  ARRAY['comfort', 'solo', 'cheap_fast'],
  false,
  'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Kimi Nomu Restaurant',
  'kimi-nomu',
  'japanese',
  'Sukhumvit Area',
  'Sukhumvit',
  2,
  'Upscale Japanese dining',
  ARRAY['dinner'],
  ARRAY['date_night', 'fancy'],
  false,
  'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Din Tai Fung',
  'din-tai-fung',
  'chinese',
  'Multiple Locations (Central World, EmQuartier)',
  'Siam',
  1,
  'World-famous xiao long bao',
  ARRAY['lunch', 'dinner'],
  ARRAY['with_crew', 'comfort'],
  false,
  'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800'
) ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- FINE DINING / UPSCALE ($$)
-- =============================================

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Soma Bangkok',
  'soma-bangkok',
  'fusion',
  'Sukhumvit Area',
  'Sukhumvit',
  3,
  'Fine dining experience',
  ARRAY['dinner'],
  ARRAY['date_night', 'fancy'],
  false,
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Coda Bangkok',
  'coda-bangkok',
  'fusion',
  'Thonglor',
  'Thonglor',
  3,
  'Chef''s table experience',
  ARRAY['dinner'],
  ARRAY['date_night', 'fancy'],
  false,
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Gaston Bangkok',
  'gaston-bangkok',
  'french',
  'Sukhumvit 19',
  'Sukhumvit',
  3,
  'French bistro dining',
  ARRAY['lunch', 'dinner'],
  ARRAY['date_night', 'fancy'],
  false,
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Arthur''s Bangkok',
  'arthurs-bangkok',
  'steakhouse',
  'Thonglor',
  'Thonglor',
  3,
  'Upscale steakhouse',
  ARRAY['dinner'],
  ARRAY['date_night', 'fancy'],
  false,
  'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Man Ho',
  'man-ho-jw-marriott',
  'chinese',
  'JW Marriott Hotel, Sukhumvit',
  'Sukhumvit',
  3,
  'Hotel Chinese fine dining, Cantonese cuisine',
  ARRAY['lunch', 'dinner'],
  ARRAY['date_night', 'fancy', 'with_crew'],
  false,
  'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'You and Mee',
  'you-and-mee-erawan',
  'thai',
  'Grand Hyatt Erawan',
  'Siam',
  1,
  'Thai noodles at Grand Hyatt Erawan',
  ARRAY['lunch', 'dinner'],
  ARRAY['comfort', 'with_crew'],
  false,
  'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Terra Sathorn',
  'terra-sathorn',
  'fusion',
  'Sathorn',
  'Sathorn',
  3,
  'Fine dining in Sathorn',
  ARRAY['dinner'],
  ARRAY['date_night', 'fancy'],
  false,
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'
) ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- CASUAL DINING ($)
-- =============================================

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Took Lae Dee',
  'took-lae-dee',
  'thai',
  'Foodland Supermarkets (Multiple Locations)',
  'Sukhumvit',
  1,
  '24hr Thai food at Foodland supermarkets',
  ARRAY['breakfast', 'lunch', 'dinner', 'late_night'],
  ARRAY['cheap_fast', 'drunk_food', 'solo'],
  true,
  'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Easy Buddy Bangkok',
  'easy-buddy',
  'thai',
  'Thonglor',
  'Thonglor',
  1,
  'Casual Thai dining',
  ARRAY['lunch', 'dinner'],
  ARRAY['with_crew', 'comfort'],
  false,
  'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Greyhound Cafe',
  'greyhound-cafe',
  'fusion',
  'Multiple Locations',
  'Siam',
  1,
  'Iconic Thai fashion cafe brand',
  ARRAY['lunch', 'dinner'],
  ARRAY['cafe', 'with_crew'],
  false,
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'EatThai',
  'eatthai-central-embassy',
  'thai',
  'Central Embassy',
  'Siam',
  1,
  'Upscale Thai food court',
  ARRAY['lunch', 'dinner'],
  ARRAY['cheap_fast', 'with_crew', 'comfort'],
  false,
  'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Zaew Thonglor',
  'zaew-thonglor',
  'seafood',
  'Thonglor',
  'Thonglor',
  1,
  'Thai seafood restaurant',
  ARRAY['lunch', 'dinner'],
  ARRAY['with_crew', 'comfort'],
  false,
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Chefman',
  'chefman',
  'thai',
  'Sukhumvit',
  'Sukhumvit',
  1,
  'Thai comfort food',
  ARRAY['lunch', 'dinner'],
  ARRAY['comfort', 'with_crew'],
  false,
  'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Kaithong Pratunam Chicken Rice',
  'kaithong-pratunam',
  'thai',
  'Pratunam',
  'Ratchathewi',
  1,
  'Famous chicken rice, green shirts',
  ARRAY['breakfast', 'lunch', 'dinner'],
  ARRAY['cheap_fast', 'comfort', 'solo'],
  false,
  'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Colimited',
  'colimited',
  'cafe',
  'Thonglor',
  'Thonglor',
  1,
  'Trendy cafe',
  ARRAY['breakfast', 'lunch', 'dinner'],
  ARRAY['cafe', 'solo'],
  false,
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Ranichi Thonglor',
  'ranichi-thonglor',
  'japanese',
  'Thonglor',
  'Thonglor',
  1,
  'Japanese fusion restaurant',
  ARRAY['lunch', 'dinner'],
  ARRAY['with_crew', 'comfort'],
  false,
  'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800'
) ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- FAST FOOD ($)
-- =============================================

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'KFC Thailand',
  'kfc-thailand',
  'american',
  'Multiple Locations',
  'Sukhumvit',
  1,
  'Colonel''s chicken with Thai menu items',
  ARRAY['lunch', 'dinner', 'late_night'],
  ARRAY['cheap_fast', 'drunk_food', 'solo'],
  true,
  'https://images.unsplash.com/photo-1626645738196-c2a72c7d6f1c?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'McDonald''s Thailand',
  'mcdonalds-thailand',
  'american',
  'Multiple Locations',
  'Sukhumvit',
  1,
  'Golden arches, samurai pork burger',
  ARRAY['breakfast', 'lunch', 'dinner', 'late_night'],
  ARRAY['cheap_fast', 'drunk_food', 'solo'],
  true,
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'BonChon',
  'bonchon-bangkok',
  'korean',
  'Multiple Locations',
  'Sukhumvit',
  1,
  'Korean fried chicken chain',
  ARRAY['lunch', 'dinner'],
  ARRAY['cheap_fast', 'with_crew'],
  false,
  'https://images.unsplash.com/photo-1626645738196-c2a72c7d6f1c?w=800'
) ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- CAFES ($)
-- =============================================

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Coffee Bean by Dao',
  'coffee-bean-by-dao',
  'cafe',
  'Multiple Locations',
  'Sukhumvit',
  1,
  'Thai specialty coffee chain',
  ARRAY['breakfast', 'lunch'],
  ARRAY['cafe', 'solo'],
  false,
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800'
) ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- BARS
-- =============================================

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Modkaew Wine Bar',
  'modkaew-wine-bar',
  'bar',
  'Ari',
  'Ari',
  2,
  'Natural wine bar',
  ARRAY['dinner', 'late_night'],
  ARRAY['date_night', 'fancy'],
  true,
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Siwilai Bar',
  'siwilai-bar',
  'bar',
  'Central Embassy, Siwilai City Club',
  'Siam',
  2,
  'Rooftop bar at Siwilai City Club',
  ARRAY['dinner', 'late_night'],
  ARRAY['date_night', 'fancy'],
  true,
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Ruby''s Bar',
  'rubys-bar-kimpton',
  'bar',
  'Kimpton Maa-Lai, Langsuan',
  'Silom',
  2,
  'Stylish hotel bar',
  ARRAY['dinner', 'late_night'],
  ARRAY['date_night', 'fancy'],
  true,
  'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Bar Yard',
  'bar-yard-kimpton',
  'bar',
  'Kimpton Maa-Lai, Langsuan',
  'Silom',
  1,
  'Outdoor beer garden at Kimpton',
  ARRAY['dinner', 'late_night'],
  ARRAY['with_crew', 'comfort'],
  true,
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'BKK Social Club',
  'bkk-social-club',
  'bar',
  'Four Seasons Hotel, Sathorn',
  'Sathorn',
  3,
  'Award-winning speakeasy at Four Seasons',
  ARRAY['dinner', 'late_night'],
  ARRAY['date_night', 'fancy'],
  true,
  'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Stella Bar',
  'stella-bar',
  'bar',
  'Thonglor',
  'Thonglor',
  1,
  'Casual neighborhood bar',
  ARRAY['dinner', 'late_night'],
  ARRAY['with_crew', 'comfort', 'drunk_food'],
  true,
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description, meal_times, vibes, late_night, cover_image)
VALUES (
  'Cafe Stagiaires Bar',
  'cafe-stagiaires-bar',
  'bar',
  'Thonglor',
  'Thonglor',
  1,
  'Wine and small plates',
  ARRAY['dinner', 'late_night'],
  ARRAY['with_crew', 'comfort'],
  true,
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800'
) ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- SUMMARY
-- =============================================
-- Total new entries: 45 restaurants/bars
-- Street Food: 5
-- Hotpot/BBQ: 6
-- Japanese: 6
-- Fine Dining: 7
-- Casual: 9
-- Fast Food: 3
-- Cafes: 1
-- Bars: 7
