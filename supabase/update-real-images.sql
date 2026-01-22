-- Update ALL restaurant images with REAL photos from official sources
-- Sources: Michelin Guide, Official websites, BK Magazine, EatingThaiFood, AroiMakMak
-- Run this in your Supabase SQL Editor

-- === MICHELIN GUIDE IMAGES ===

-- Sushi Masato
UPDATE public.restaurants SET cover_image = 'https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/336ea5bdc8e64066876032c5373e7b1b.jpeg' WHERE slug = 'sushi-masato';

-- Jay Fai
UPDATE public.restaurants SET cover_image = 'https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/3f84b5bba5a145c0a4a640236fd10a3a.jpg' WHERE slug = 'jay-fai';

-- Sorn
UPDATE public.restaurants SET cover_image = 'https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/28e95eb0490347fa8bbbccc03fa9d0cb.jpeg' WHERE slug = 'sorn';

-- Le Du
UPDATE public.restaurants SET cover_image = 'https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/428c834a0d194e9db0fcc5eb56433267.jpg' WHERE slug = 'le-du';

-- Gaggan Anand
UPDATE public.restaurants SET cover_image = 'https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/0fa466457bab4c9ba965bd09aa54b845.jpg' WHERE slug = 'gaggan-anand';

-- 80/20
UPDATE public.restaurants SET cover_image = 'https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/aafa21c519a94919a6b29a9acafacfdc.jpg' WHERE slug = 'eighty-twenty';

-- Jua
UPDATE public.restaurants SET cover_image = 'https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/3051a1421c054235b6bd751a51c33c97.jpg' WHERE slug = 'jua';

-- Indus
UPDATE public.restaurants SET cover_image = 'https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/4fc2d43533be4323a262d972c10d9af6.jpeg' WHERE slug = 'indus';

-- Krua Apsorn
UPDATE public.restaurants SET cover_image = 'https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/5ead377e916d4332ab3e8f9517e67cd6.jpeg' WHERE slug = 'krua-apsorn';

-- Paste Bangkok
UPDATE public.restaurants SET cover_image = 'https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/86b2e8e4b18246358fd30d5ed707f9a7.jpg' WHERE slug = 'paste-bangkok';

-- J'aime by Jean-Michel Lorain
UPDATE public.restaurants SET cover_image = 'https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/63d39af44a3e4ab1945668bd402fd569.jpeg' WHERE slug = 'jaime';

-- === OFFICIAL WEBSITE IMAGES ===

-- Thipsamai
UPDATE public.restaurants SET cover_image = 'https://thipsamai.com/wp-content/uploads/2019/07/cropped-61978411_2510163829008242_6070810245670633472_o-1.jpg' WHERE slug = 'thipsamai';

-- Yamazato (Okura Prestige)
UPDATE public.restaurants SET cover_image = 'https://image-tc.galaxy.tf/wijpeg-cvrl8xofmi2id82zleqon6oce/dsc02947.jpg?width=1920' WHERE slug = 'yamazato';

-- China Table (Mandarin Oriental)
UPDATE public.restaurants SET cover_image = 'https://media.ffycdn.net/eu/mandarin-oriental-hotel-group/EGPe2M7GoXm5qVoV4Rna.jpg' WHERE slug = 'china-table';

-- Laem Charoen Seafood
UPDATE public.restaurants SET cover_image = 'https://www.laemcharoenseafood.com/wp-content/uploads/2019/05/pic2.jpg' WHERE slug = 'laem-charoen-seafood';

-- After You
UPDATE public.restaurants SET cover_image = 'https://www.afteryoudessertcafe.com/wp-content/uploads/2025/10/AU_bua-loy-kakigori_web-au.jpg' WHERE slug = 'after-you';

-- Savoey Seafood
UPDATE public.restaurants SET cover_image = 'https://www.savoey.co.th/wp-content/uploads/2024/11/2resv_sea2992-1.webp' WHERE slug = 'savoey';

-- Veganerie
UPDATE public.restaurants SET cover_image = 'https://www.veganerie.co.th/wp-content/uploads/2018/09/head-a3-min.jpg' WHERE slug = 'veganerie';

-- Supanniga Eating Room
UPDATE public.restaurants SET cover_image = 'https://www.secret-retreats.com/wp-content/uploads/2019/11/secret-tables-supanniga-eating-room-cuisine.jpg' WHERE slug = 'supanniga-eating-room';

-- Err Urban Rustic Thai
UPDATE public.restaurants SET cover_image = 'https://images.squarespace-cdn.com/content/v1/557a6036e4b0cc5bdc66fa51/1434423206148-8KX1A0LX9OAQWJ92YLHY/image-asset.jpeg' WHERE slug = 'err';

-- === FOOD BLOG IMAGES ===

-- T&K Seafood (EatingThaiFood)
UPDATE public.restaurants SET cover_image = 'https://www.eatingthaifood.com/wp-content/uploads/2011/05/IMG_0791.jpg' WHERE slug = 'tk-seafood';

-- Daniel Thaiger (EatingThaiFood)
UPDATE public.restaurants SET cover_image = 'https://www.eatingthaifood.com/wp-content/uploads/2016/05/daniel-thaiger-burger-in-bangkok.jpg' WHERE slug = 'daniel-thaiger';

-- Isao (AroiMakMak)
UPDATE public.restaurants SET cover_image = 'https://aroimakmak.com/wp-content/uploads/2015/09/isaobangkok-jackie.jpg' WHERE slug = 'isao';

-- === BK MAGAZINE IMAGES ===

-- Peppina
UPDATE public.restaurants SET cover_image = 'https://www.bkmagazine.com/wp-content/uploads/2025/07/pep1.jpg' WHERE slug = 'peppina';

-- Appia
UPDATE public.restaurants SET cover_image = 'https://www.bkmagazine.com/wp-content/uploads/2025/07/appia_bangkok.jpg' WHERE slug = 'appia';

-- Roots Coffee
UPDATE public.restaurants SET cover_image = 'https://www.bkmagazine.com/wp-content/uploads/2025/07/roots_the_common5.jpg' WHERE slug = 'roots-coffee';

-- Smokin Pug
UPDATE public.restaurants SET cover_image = 'https://www.bkmagazine.com/wp-content/uploads/2025/07/smokin_0.jpg' WHERE slug = 'smokin-pug';

-- Broccoli Revolution
UPDATE public.restaurants SET cover_image = 'https://www.bkmagazine.com/wp-content/uploads/2025/07/dsc0181.jpg' WHERE slug = 'broccoli-revolution';

-- === REMAINING (keep existing Unsplash - couldn't find real photos) ===
-- woo-galbi - Korean BBQ (no specific restaurant found)
-- ramen-danbo - Ramen (no Bangkok location confirmed)
