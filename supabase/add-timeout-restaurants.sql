-- Add Top 50 Bangkok Restaurants from Time Out
-- Run this in your Supabase SQL Editor

-- 100 Mahaseth - Contemporary Asian
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('100 Mahaseth', '100-mahaseth', 'thai', '100 Mahaseth Road, Bang Rak', 'Riverside', 3, 'Contemporary Thai restaurant focusing on Thai-raised meats and local ingredients')
ON CONFLICT (slug) DO NOTHING;

-- Potong - Thai-Chinese fusion
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Potong', 'potong', 'chinese', '492 Song Wat Road, Samphanthawong', 'Chinatown', 4, 'Thai-Chinese fusion fine dining in a stunning heritage shophouse')
ON CONFLICT (slug) DO NOTHING;

-- Suhring - German
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Sühring', 'suhring', 'french', '10 Yen Akat Soi 3', 'Sathorn', 4, 'Twin German chefs serve modern German cuisine with Thai influences')
ON CONFLICT (slug) DO NOTHING;

-- Côte by Mauro Colagreco - French
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Côte by Mauro Colagreco', 'cote-by-mauro-colagreco', 'french', 'Capella Bangkok, 300/2 Charoenkrung Road', 'Riverside', 4, 'French Riviera cuisine by three-Michelin-starred chef Mauro Colagreco')
ON CONFLICT (slug) DO NOTHING;

-- Clara - Italian
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Clara', 'clara', 'italian', 'The Sukhothai Bangkok, 13/3 South Sathorn Road', 'Sathorn', 4, 'Refined Italian cuisine in an elegant hotel setting')
ON CONFLICT (slug) DO NOTHING;

-- Inddee - Indian
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Inddee', 'inddee', 'indian', 'Sukhumvit Soi 24', 'Sukhumvit', 3, 'Modern Indian dining with bold flavors and creative presentations')
ON CONFLICT (slug) DO NOTHING;

-- Blue by Alain Ducasse - French
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Blue by Alain Ducasse', 'blue-by-alain-ducasse', 'french', 'IconSiam, 299 Charoen Nakhon Road', 'Riverside', 4, 'French fine dining by legendary chef Alain Ducasse')
ON CONFLICT (slug) DO NOTHING;

-- China House - Chinese
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('China House', 'china-house', 'chinese', 'Mandarin Oriental Bangkok, 48 Oriental Avenue', 'Riverside', 4, 'Cantonese fine dining at the iconic Mandarin Oriental')
ON CONFLICT (slug) DO NOTHING;

-- Baan Tepa - Thai
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Baan Tepa', 'baan-tepa', 'thai', '35 Soi Yen Akat 2', 'Sathorn', 4, 'Traditional Thai recipes reimagined with premium ingredients')
ON CONFLICT (slug) DO NOTHING;

-- Villa Frantzen - European
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Villa Frantzen', 'villa-frantzen', 'french', '29 Soi Sukhumvit 53', 'Thonglor', 4, 'Contemporary European cuisine from acclaimed Swedish chef')
ON CONFLICT (slug) DO NOTHING;

-- Bisou - French
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Bisou', 'bisou', 'french', '9 Soi Somkid, Ploenchit', 'Siam', 3, 'Classic French bistro fare in a charming setting')
ON CONFLICT (slug) DO NOTHING;

-- Maison Dunand - French
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Maison Dunand', 'maison-dunand', 'french', '1079/3 Phaholyothin Road', 'Ari', 4, 'Intimate French fine dining experience')
ON CONFLICT (slug) DO NOTHING;

-- Haoma - Neo-Indian
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Haoma', 'haoma', 'indian', '231/3 Sukhumvit Soi 31', 'Sukhumvit', 4, 'Neo-Indian cuisine with farm-to-table ethos in a lush urban farm setting')
ON CONFLICT (slug) DO NOTHING;

-- Samrub Samrub Thai - Thai
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Samrub Samrub Thai', 'samrub-samrub-thai', 'thai', '461/7 Phra Sumen Road', 'Old Town', 3, 'Regional Thai cuisine showcasing forgotten recipes')
ON CONFLICT (slug) DO NOTHING;

-- Mia - Modern European
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Mia', 'mia', 'french', '30/1 Attha Kawi 1 Alley', 'Sukhumvit', 4, 'Modern European restaurant focused on sustainability')
ON CONFLICT (slug) DO NOTHING;

-- Riva del Fiume - Italian
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Riva del Fiume', 'riva-del-fiume', 'italian', 'Capella Bangkok, 300/2 Charoenkrung Road', 'Riverside', 4, 'Italian riverside dining at Capella Bangkok')
ON CONFLICT (slug) DO NOTHING;

-- Cagette - French
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Cagette', 'cagette', 'french', 'Sukhumvit Soi 39', 'Sukhumvit', 3, 'Charming French canteen with farm-fresh ingredients')
ON CONFLICT (slug) DO NOTHING;

-- Zao - Thai Isaan
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Zao', 'zao', 'thai-isaan', 'Sukhumvit Soi 51', 'Sukhumvit', 3, 'Modern Isaan cuisine celebrating northeastern Thai flavors')
ON CONFLICT (slug) DO NOTHING;

-- Methavalai Sorndaeng - Thai
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Methavalai Sorndaeng', 'methavalai-sorndaeng', 'thai', '78/2 Ratchadamnoen Klang Road', 'Old Town', 2, 'Classic Thai institution serving royal Thai recipes since 1957')
ON CONFLICT (slug) DO NOTHING;

-- Elements - French
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Elements', 'elements', 'french', 'The Okura Prestige Bangkok, 57 Wireless Road', 'Sukhumvit', 4, 'Modern French cuisine inspired by Ciel Bleu Amsterdam')
ON CONFLICT (slug) DO NOTHING;

-- Sushi Misaki - Japanese
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Sushi Misaki', 'sushi-misaki', 'japanese', 'Sukhumvit Soi 26', 'Sukhumvit', 4, 'Intimate omakase experience by a master sushi chef')
ON CONFLICT (slug) DO NOTHING;

-- Gaa - Modern Indian
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Gaa', 'gaa', 'indian', '68/4 Soi Langsuan', 'Siam', 4, 'Progressive Indian tasting menus by chef Garima Arora')
ON CONFLICT (slug) DO NOTHING;

-- Nahm - Thai
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Nahm', 'nahm', 'thai', 'COMO Metropolitan Bangkok, 27 South Sathorn Road', 'Sathorn', 4, 'Authentic Thai cuisine celebrating traditional recipes')
ON CONFLICT (slug) DO NOTHING;

-- Jhol - Coastal Indian
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Jhol', 'jhol', 'indian', '72 Soi Sukhumvit 18', 'Sukhumvit', 3, 'Coastal Indian cuisine with focus on seafood')
ON CONFLICT (slug) DO NOTHING;

-- El Mercado - Mediterranean
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('El Mercado', 'el-mercado', 'italian', 'Sukhumvit Soi 31', 'Sukhumvit', 2, 'Mediterranean market-style restaurant and deli')
ON CONFLICT (slug) DO NOTHING;

-- Tori Tama - Japanese
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Tori Tama', 'tori-tama', 'japanese', 'Sukhumvit Soi 33', 'Sukhumvit', 3, 'Authentic Japanese yakitori grilled over charcoal')
ON CONFLICT (slug) DO NOTHING;

-- Santiaga - Mexican
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Santiaga', 'santiaga', 'american', 'Sukhumvit Soi 36', 'Sukhumvit', 3, 'Modern Mexican cuisine with creative cocktails')
ON CONFLICT (slug) DO NOTHING;

-- Casa Lenzi - Italian
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Casa Lenzi', 'casa-lenzi', 'italian', '24 Soi Ruam Rudee', 'Siam', 3, 'Authentic Tuscan cuisine by chef Francesco Lenzi')
ON CONFLICT (slug) DO NOTHING;

-- Ms.Maria & Mr.Singh - Fusion
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Ms.Maria & Mr.Singh', 'ms-maria-mr-singh', 'indian', 'Sukhumvit Soi 31', 'Sukhumvit', 3, 'Mexican-Indian fusion creating unique flavor combinations')
ON CONFLICT (slug) DO NOTHING;

-- Charmgang - Thai
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Charmgang', 'charmgang', 'thai', 'Phra Athit Road', 'Old Town', 2, 'Bold Thai curries and regional dishes')
ON CONFLICT (slug) DO NOTHING;

-- Khua Kling + Pak Sod - Southern Thai
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Khua Kling + Pak Sod', 'khua-kling-pak-sod', 'thai-southern', 'Multiple locations', 'Sukhumvit', 2, 'Fiery southern Thai cuisine known for intense flavors')
ON CONFLICT (slug) DO NOTHING;

-- Cento - Italian
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Cento', 'cento', 'italian', 'The Prelude, Rajadamri Road', 'Siam', 3, 'Roman-style pizza and Italian classics')
ON CONFLICT (slug) DO NOTHING;

-- Nan Bei - Chinese
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Nan Bei', 'nan-bei', 'chinese', 'Rosewood Bangkok, 1041/38 Ploenchit Road', 'Siam', 4, 'Northern and southern Chinese cuisine at Rosewood Bangkok')
ON CONFLICT (slug) DO NOTHING;

-- Additional notable restaurants

-- Nusara - Thai
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Nusara', 'nusara', 'thai', 'Silom Soi 5', 'Silom', 4, 'Elevated Thai cuisine by chef Thitid "Ton" Tassanakajohn')
ON CONFLICT (slug) DO NOTHING;

-- Canvas - European
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Canvas', 'canvas', 'french', 'Sukhumvit Soi 55', 'Thonglor', 4, 'Creative European cuisine with artistic presentations')
ON CONFLICT (slug) DO NOTHING;

-- Ruen Urai - Thai
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Ruen Urai', 'ruen-urai', 'thai', 'Rose Hotel Bangkok, 118 Surawong Road', 'Silom', 3, 'Traditional Thai cuisine in a classic teak house setting')
ON CONFLICT (slug) DO NOTHING;

-- Saawaan - Thai
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Saawaan', 'saawaan', 'thai', '39/19 Soi Suanplu', 'Sathorn', 4, 'Zero-waste Thai fine dining with seasonal menus')
ON CONFLICT (slug) DO NOTHING;

-- Charoenkrung Seafood - Seafood
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Charoenkrung Seafood', 'charoenkrung-seafood', 'seafood', 'Charoenkrung Road', 'Riverside', 2, 'Fresh seafood prepared Chinese-Thai style')
ON CONFLICT (slug) DO NOTHING;

-- Somtum Der - Isaan
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Somtum Der', 'somtum-der', 'thai-isaan', 'Sala Daeng Soi 1', 'Silom', 2, 'Award-winning Isaan cuisine famous for somtum variations')
ON CONFLICT (slug) DO NOTHING;

-- Baan - Thai
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Baan', 'baan', 'thai', 'Ari Soi 1', 'Ari', 2, 'Homestyle Thai cooking with family recipes')
ON CONFLICT (slug) DO NOTHING;

-- Il Fumo - Italian
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Il Fumo', 'il-fumo', 'italian', 'Sukhumvit Soi 16', 'Sukhumvit', 3, 'Smoked meats and Italian cuisine')
ON CONFLICT (slug) DO NOTHING;

-- Meatlicious - American
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Meatlicious', 'meatlicious', 'american', 'Thonglor Soi 13', 'Thonglor', 3, 'Premium steaks and comfort food')
ON CONFLICT (slug) DO NOTHING;

-- Little Beast - American
INSERT INTO public.restaurants (name, slug, cuisine_type, address, district, price_range, description)
VALUES ('Little Beast', 'little-beast', 'american', 'Thonglor Soi 10', 'Thonglor', 2, 'Craft burgers and American-style brunch')
ON CONFLICT (slug) DO NOTHING;
