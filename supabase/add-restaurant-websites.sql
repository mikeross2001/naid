-- Add website URLs for restaurants and bars
-- Run this to enable direct links from "Let's Go" button

-- =============================================
-- FINE DINING / MICHELIN
-- =============================================

UPDATE public.restaurants SET website = 'https://www.restaurantsorn.com/' WHERE slug = 'sorn';
UPDATE public.restaurants SET website = 'https://www.gaggananand.com/' WHERE slug = 'gaggan-anand';
UPDATE public.restaurants SET website = 'https://www.ledubkk.com/' WHERE slug = 'le-du';
UPDATE public.restaurants SET website = 'https://www.pastebangkok.com/' WHERE slug = 'paste-bangkok';
UPDATE public.restaurants SET website = 'https://www.80-20bkk.com/' WHERE slug = 'eighty-twenty';

-- =============================================
-- THAI RESTAURANTS
-- =============================================

UPDATE public.restaurants SET website = 'https://www.thipsamai.com/' WHERE slug = 'thipsamai';
UPDATE public.restaurants SET website = 'https://www.supannigaeatingroom.com/' WHERE slug = 'supanniga-eating-room';
UPDATE public.restaurants SET website = 'https://www.err.co.th/' WHERE slug = 'err';
UPDATE public.restaurants SET website = 'https://www.greyhoundcafe.co.th/' WHERE slug = 'greyhound-cafe';

-- =============================================
-- JAPANESE
-- =============================================

UPDATE public.restaurants SET website = 'https://www.sushiro-global.com/' WHERE slug = 'sushiro';
UPDATE public.restaurants SET website = 'https://www.ichibanya.co.jp/english/' WHERE slug = 'coco-ichibanya';
UPDATE public.restaurants SET website = 'https://www.okurabangkok.com/dining/yamazato' WHERE slug = 'yamazato';
UPDATE public.restaurants SET website = 'https://www.momoparadise.com/' WHERE slug = 'momo-paradise';

-- =============================================
-- KOREAN
-- =============================================

UPDATE public.restaurants SET website = 'https://www.genkoreanbbq.com/' WHERE slug = 'gen-korean-bbq';
UPDATE public.restaurants SET website = 'https://bonchon.co.th/' WHERE slug = 'bonchon-bangkok';

-- =============================================
-- CHINESE / TAIWANESE
-- =============================================

UPDATE public.restaurants SET website = 'https://www.dintaifung.com.tw/' WHERE slug = 'din-tai-fung';
UPDATE public.restaurants SET website = 'https://www.mandarinoriental.com/bangkok/chao-phraya-river/fine-dining/restaurants/chinese-cuisine/china-table' WHERE slug = 'china-table';

-- =============================================
-- ITALIAN
-- =============================================

UPDATE public.restaurants SET website = 'https://www.appia-bangkok.com/' WHERE slug = 'appia';
UPDATE public.restaurants SET website = 'https://www.peppinabkk.com/' WHERE slug = 'peppina';

-- =============================================
-- FRENCH
-- =============================================

UPDATE public.restaurants SET website = 'https://www.jaikimicho.com/' WHERE slug = 'jaime';

-- =============================================
-- INDIAN
-- =============================================

UPDATE public.restaurants SET website = 'https://www.indusbangkok.com/' WHERE slug = 'indus';

-- =============================================
-- AMERICAN / CASUAL
-- =============================================

UPDATE public.restaurants SET website = 'https://www.danielthaiger.com/' WHERE slug = 'daniel-thaiger';
UPDATE public.restaurants SET website = 'https://www.kfranchise.com/' WHERE slug = 'kfc-thailand';
UPDATE public.restaurants SET website = 'https://www.mcdonalds.co.th/' WHERE slug = 'mcdonalds-thailand';

-- =============================================
-- CAFES
-- =============================================

UPDATE public.restaurants SET website = 'https://www.rootsbkk.com/' WHERE slug = 'roots-coffee';
UPDATE public.restaurants SET website = 'https://www.afteryoudessert.com/' WHERE slug = 'after-you';
UPDATE public.restaurants SET website = 'https://www.broccolirevolution.com/' WHERE slug = 'broccoli-revolution';
UPDATE public.restaurants SET website = 'https://www.veganerie.com/' WHERE slug = 'veganerie';

-- =============================================
-- SUKI / HOTPOT
-- =============================================

UPDATE public.restaurants SET website = 'https://www.mkrestaurant.com/' WHERE slug = 'mk-suki';

-- =============================================
-- BARS
-- =============================================

UPDATE public.restaurants SET website = 'https://www.bkksocialclub.com/' WHERE slug = 'bkk-social-club';
UPDATE public.restaurants SET website = 'https://www.ihg.com/kimptonhotels/hotels/us/en/bangkok/bkkmd/hoteldetail/dining' WHERE slug = 'rubys-bar-kimpton';
UPDATE public.restaurants SET website = 'https://www.ihg.com/kimptonhotels/hotels/us/en/bangkok/bkkmd/hoteldetail/dining' WHERE slug = 'bar-yard-kimpton';
UPDATE public.restaurants SET website = 'https://www.centralembassy.com/en/store/siwilai-city-club' WHERE slug = 'siwilai-bar';

-- =============================================
-- SEAFOOD
-- =============================================

UPDATE public.restaurants SET website = 'https://www.laemcharoenseafood.com/' WHERE slug = 'laem-charoen-seafood';
UPDATE public.restaurants SET website = 'https://www.savoey.co.th/' WHERE slug = 'savoey';

-- =============================================
-- VERIFY: Count restaurants with websites
-- =============================================
-- SELECT COUNT(*) as with_website FROM public.restaurants WHERE website IS NOT NULL;
-- SELECT COUNT(*) as without_website FROM public.restaurants WHERE website IS NULL;
-- SELECT name, website FROM public.restaurants WHERE website IS NOT NULL ORDER BY name;
