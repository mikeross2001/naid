-- Fix restaurant addresses with correct Google Maps locations
-- Run this to update addresses to accurate locations

-- =============================================
-- MAJOR ADDRESS CORRECTIONS
-- =============================================

-- Supanniga Eating Room - Wrong address entirely
UPDATE public.restaurants
SET address = '160/11 Soi Sukhumvit 55 (Thonglor), Klongton Nuea, Watthana, Bangkok 10110'
WHERE slug = 'supanniga-eating-room';

-- Gaggan Anand - Moved to new location
UPDATE public.restaurants
SET address = '68 Sukhumvit 31, Khlong Toei Nuea, Watthana, Bangkok 10110',
    district = 'Sukhumvit'
WHERE slug = 'gaggan-anand';

-- Rung Rueang Pork Noodle - NOT at Victory Monument
UPDATE public.restaurants
SET address = '10/3 Soi Sukhumvit 26, Khlong Tan, Khlong Toei, Bangkok 10110',
    district = 'Sukhumvit'
WHERE slug = 'rung-rueang-pork-noodle';

-- =============================================
-- VAGUE ADDRESSES - NOW PRECISE
-- =============================================

-- Jeh O Chula
UPDATE public.restaurants
SET address = '113/1 Thanon Charat Mueang, Rong Mueang, Pathum Wan, Bangkok 10330'
WHERE slug = 'jeh-o-chula';

-- Kaithong Pratunam Chicken Rice
UPDATE public.restaurants
SET address = '960-962 Phetchaburi Rd, Makkasan, Ratchathewi, Bangkok 10400'
WHERE slug = 'kaithong-pratunam';

-- =============================================
-- MINOR CORRECTIONS - MORE COMPLETE ADDRESSES
-- =============================================

-- Sorn
UPDATE public.restaurants
SET address = '56 Sukhumvit 26 Alley, Khlong Tan, Khlong Toei, Bangkok 10110'
WHERE slug = 'sorn';

-- Jay Fai
UPDATE public.restaurants
SET address = '327 Maha Chai Rd, Samran Rat, Phra Nakhon, Bangkok 10200'
WHERE slug = 'jay-fai';

-- Paste Bangkok
UPDATE public.restaurants
SET address = '3F, Gaysorn Village, 999 Phloen Chit Rd, Lumphini, Pathum Wan, Bangkok 10330'
WHERE slug = 'paste-bangkok';

-- Thipsamai
UPDATE public.restaurants
SET address = '313-315 Mahachai Rd, Samranrat, Phra Nakhon, Bangkok 10200'
WHERE slug = 'thipsamai';

-- Le Du
UPDATE public.restaurants
SET address = '399/3 Silom Soi 7, Silom, Bang Rak, Bangkok 10500'
WHERE slug = 'le-du';

-- Sushi Masato
UPDATE public.restaurants
SET address = '3/22 Soi Sawasdee 1, Sukhumvit 31, Khlong Toei Nuea, Watthana, Bangkok 10110'
WHERE slug = 'sushi-masato';

-- BKK Social Club
UPDATE public.restaurants
SET address = '300/1 Charoen Krung Rd, Yan Nawa, Sathon, Bangkok 10120 (Four Seasons Hotel)'
WHERE slug = 'bkk-social-club';
