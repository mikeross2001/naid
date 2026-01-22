-- Add Bangkok Top Bars
-- Run this in your Supabase SQL Editor

-- Goldsmith Bar
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Goldsmith Bar', 'goldsmith-bar', 'bar', '2/F, 328 Yaowarat Road', 'Chinatown', 3, 'Hidden 1930s Shanghai-themed speakeasy with ornate decor and vintage vibes')
ON CONFLICT (slug) DO NOTHING;

-- Marie
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Marie', 'marie', 'bar', '2/F, Nihonmachi, Sukhumvit Soi 26', 'Sukhumvit', 3, 'Tokyo-style sake bar with hundreds of curated labels')
ON CONFLICT (slug) DO NOTHING;

-- PrumPlum Stand
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('PrumPlum Stand', 'prumplum-stand', 'bar', '857 Talat Noi', 'Chinatown', 2, 'Cosy umeshu bar in Talad Noi with tasting sets')
ON CONFLICT (slug) DO NOTHING;

-- Cul de Sac
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Cul de Sac', 'cul-de-sac', 'bar', '10/F, The Quartier Hotel, Sukhumvit 39', 'Sukhumvit', 3, '1980s-themed rooftop with outdoor screen and laid-back backyard vibe')
ON CONFLICT (slug) DO NOTHING;

-- Paper Plane Project
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Paper Plane Project', 'paper-plane-project', 'bar', '40/F, T-One Building 8, Soi Phra Khanong', 'Sukhumvit', 3, 'Co-working bar blending productivity with cocktails')
ON CONFLICT (slug) DO NOTHING;

-- Wasteland
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Wasteland', 'wasteland', 'bar', '3/19 Pridi Banomyong 1, Soi Edison', 'Sukhumvit', 3, 'Creative cocktail bar using upcycled ingredients in sustainable space')
ON CONFLICT (slug) DO NOTHING;

-- Xin Xe Goi
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Xin Xe Goi', 'xin-xe-goi', 'bar', '15-17 Soi Nana, Yaowarat', 'Chinatown', 3, 'Three-floor venue with Chinese-modern aesthetic and reimagined classics')
ON CONFLICT (slug) DO NOTHING;

-- La Copita
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('La Copita', 'la-copita', 'bar', '205 Thanon Yaowaphanit', 'Chinatown', 3, 'Standing agave bar with rotating bartenders and weekly changing menu')
ON CONFLICT (slug) DO NOTHING;

-- Sanctuary Bangkok
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Sanctuary Bangkok', 'sanctuary-bangkok', 'bar', '34/F, Intercontinental, Sukhumvit Road', 'Sukhumvit', 4, 'Rooftop bar with bamboo, rattan and Thai-inspired cocktails')
ON CONFLICT (slug) DO NOTHING;

-- Residents Only
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Residents Only', 'residents-only', 'bar', '160/17 Thong Lo', 'Thonglor', 3, 'Kowloon Walled City-inspired venue with street food cocktails')
ON CONFLICT (slug) DO NOTHING;

-- The National Bar
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('The National Bar', 'the-national-bar', 'bar', '1350 Song Wat Road', 'Chinatown', 3, 'Historic bar with vintage decor and character-driven cocktails')
ON CONFLICT (slug) DO NOTHING;

-- Pickle.BKK
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Pickle BKK', 'pickle-bkk', 'bar', '1/3 Sala Daeng Road', 'Silom', 2, 'LGBTQ+ community space with art, fashion, music and playful cocktails')
ON CONFLICT (slug) DO NOTHING;

-- EAU DE TOILETTE
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('EAU DE TOILETTE', 'eau-de-toilette', 'bar', '2/F Silom Soi 4 Building', 'Silom', 3, 'Shower room concept venue with drag performances')
ON CONFLICT (slug) DO NOTHING;

-- SIN Rooftop Bar
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('SIN Rooftop Bar', 'sin-rooftop-bar', 'bar', '27/F, Avani+ Riverside Bangkok, Charoen Nakhon Road', 'Riverside', 3, 'Chao Phraya River-view rooftop with modern-classic aesthetic')
ON CONFLICT (slug) DO NOTHING;

-- Spire Rooftop Bar
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Spire Rooftop Bar', 'spire-rooftop-bar', 'bar', '39M/F, Dusit Thani Bangkok, Rama IV Road', 'Silom', 4, 'Elegant terrace overlooking Golden Spire with Lumphini Park views')
ON CONFLICT (slug) DO NOTHING;

-- Nobu Bangkok
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Nobu Bangkok', 'nobu-bangkok', 'bar', '57-58/F, The Empire, 1 S Sathon Road', 'Sathorn', 4, 'World''s largest and highest Nobu with Japanese-Peruvian cuisine and rooftop bar')
ON CONFLICT (slug) DO NOTHING;

-- Muan Bangkok
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Muan Bangkok', 'muan-bangkok', 'bar', '3/F Phahonyothin Road', 'Ari', 2, 'Colorful market-inspired space with Isan food and Thai music')
ON CONFLICT (slug) DO NOTHING;

-- Coucou
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Coucou', 'coucou', 'bar', '19/1 Ekkamai 12 Alley', 'Sukhumvit', 2, 'Board game bar with pizza and playful cocktails')
ON CONFLICT (slug) DO NOTHING;

-- The Red Door
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('The Red Door', 'the-red-door', 'bar', '3/F, Staybridge Suites, Sukhumvit 24', 'Sukhumvit', 3, 'Parisian cafe-bar with live jazz nights')
ON CONFLICT (slug) DO NOTHING;

-- Chinatown Yacht Club
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Chinatown Yacht Club', 'chinatown-yacht-club', 'bar', '92 Soi Nana, Yaowarat', 'Chinatown', 3, 'Three-level historic shophouse with rooftop garden and classic cocktails')
ON CONFLICT (slug) DO NOTHING;
