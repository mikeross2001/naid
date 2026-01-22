-- NaiD Seed Data
-- Sample Bangkok restaurants for testing

INSERT INTO public.restaurants (name, slug, description, cuisine_type, address, district, price_range, average_rating, review_count, is_verified, cover_image) VALUES

-- Thai Restaurants
('Sorn', 'sorn', 'Two Michelin-starred restaurant showcasing Southern Thai cuisine with locally sourced ingredients.', 'thai-southern', '56 Sukhumvit 26', 'Sukhumvit', 4, 4.8, 156, true, 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800'),

('Jay Fai', 'jay-fai', 'Legendary street food stall famous for its crab omelet, run by a Michelin-starred chef in goggles.', 'thai-street-food', '327 Maha Chai Rd', 'Old Town', 3, 4.7, 423, true, 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800'),

('Paste Bangkok', 'paste-bangkok', 'Award-winning restaurant reviving ancient Thai recipes with modern techniques.', 'thai', '3rd Floor, Gaysorn Plaza', 'Siam', 4, 4.6, 89, true, 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'),

('Supanniga Eating Room', 'supanniga-eating-room', 'Home-style Isaan and Thai comfort food in a charming riverside setting.', 'thai-isaan', '392/25-26 Soi Wat Umong', 'Thonglor', 2, 4.5, 312, true, 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800'),

('Thipsamai', 'thipsamai', 'The most famous Pad Thai in Bangkok since 1966, known for their wrapped egg Pad Thai.', 'thai-street-food', '313 Maha Chai Rd', 'Old Town', 1, 4.4, 567, true, 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800'),

('Krua Apsorn', 'krua-apsorn', 'Famous for crab curry and stir-fried morning glory, a favorite of Thai royalty.', 'thai', '503-505 Samsen Rd', 'Old Town', 2, 4.5, 234, true, 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800'),

-- Japanese Restaurants
('Sushi Masato', 'sushi-masato', 'Intimate omakase experience with fish flown in directly from Tokyo''s Tsukiji market.', 'japanese', '3/22 Soi Sukhumvit 31', 'Sukhumvit', 4, 4.9, 78, true, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800'),

('Ramen Danbo', 'ramen-danbo', 'Authentic Fukuoka-style tonkotsu ramen with customizable noodle firmness and broth richness.', 'japanese', 'Emquartier, 693 Sukhumvit Rd', 'Sukhumvit', 2, 4.3, 445, true, 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800'),

('Yamazato', 'yamazato', 'Traditional kaiseki dining at The Okura Prestige with stunning city views.', 'japanese', 'The Okura Prestige Bangkok', 'Silom', 4, 4.7, 123, true, 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800'),

('Isao', 'isao', 'No-frills izakaya serving excellent sashimi and grilled dishes at reasonable prices.', 'japanese', '2 Sukhumvit Soi 31', 'Sukhumvit', 2, 4.4, 289, true, 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800'),

-- Korean Restaurants
('Jua', 'jua', 'Modern Korean gastropub with creative takes on classic dishes and excellent makgeolli selection.', 'korean', '672/51 Charoenkrung Soi 28', 'Riverside', 3, 4.5, 167, true, 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800'),

('Woo Galbi', 'woo-galbi', 'Premium Korean BBQ with high-quality imported beef and traditional banchan spread.', 'korean', '26 Sukhumvit Soi 19', 'Sukhumvit', 3, 4.4, 198, true, 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800'),

-- Chinese Restaurants
('China Table', 'china-table', 'Refined Cantonese cuisine with dim sum crafted by Hong Kong-trained chefs.', 'chinese', 'Mandarin Oriental', 'Riverside', 4, 4.6, 145, true, 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800'),

('T&K Seafood', 'tk-seafood', 'Chinatown institution famous for grilled river prawns and garlic pepper crab.', 'chinese', '49-51 Phadung Dao Rd', 'Chinatown', 2, 4.3, 378, true, 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800'),

-- Indian Restaurants
('Gaggan Anand', 'gaggan-anand', 'Progressive Indian cuisine from the chef behind the legendary (closed) Gaggan.', 'indian', '68/1 Soi Langsuan', 'Silom', 4, 4.8, 234, true, 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800'),

('Indus', 'indus', 'Contemporary Indian restaurant with stunning decor and reliable North Indian classics.', 'indian', '71 Sukhumvit Soi 26', 'Sukhumvit', 3, 4.4, 312, true, 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800'),

-- Italian Restaurants
('Appia', 'appia', 'Roman-style trattoria with house-made pasta and excellent Italian wine list.', 'italian', '20/4 Sukhumvit Soi 31', 'Sukhumvit', 3, 4.5, 267, true, 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800'),

('Peppina', 'peppina', 'Neapolitan pizzeria with wood-fired oven and imported Italian ingredients.', 'italian', '27 Sukhumvit Soi 33', 'Sukhumvit', 2, 4.4, 356, true, 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800'),

-- French Restaurants
('Le Du', 'le-du', 'Modern Thai-inspired French cuisine using local seasonal ingredients. One Michelin star.', 'french', '399/3 Silom Soi 7', 'Silom', 4, 4.7, 189, true, 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'),

('J''aime by Jean-Michel Lorain', 'jaime', 'Elegant fine dining by a three-Michelin-starred French chef.', 'french', 'U Sathorn Hotel', 'Sathorn', 4, 4.6, 145, true, 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800'),

-- Seafood
('Laem Charoen Seafood', 'laem-charoen-seafood', 'Popular seafood chain known for quality and consistency across multiple locations.', 'seafood', 'Siam Paragon', 'Siam', 2, 4.2, 534, true, 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800'),

('Savoey', 'savoey', 'Classic Thai seafood restaurant with fresh catches and riverside branches.', 'seafood', 'Multiple Locations', 'Riverside', 3, 4.3, 423, true, 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800'),

-- Cafes
('Roots Coffee', 'roots-coffee', 'Specialty coffee roaster and cafe with beans sourced from Thai highlands.', 'cafe', '5 Sukhumvit Soi 26', 'Sukhumvit', 2, 4.5, 312, true, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800'),

('After You Dessert Cafe', 'after-you', 'Famous for Shibuya honey toast and creative desserts that draw long queues.', 'dessert', 'Multiple Locations', 'Siam', 2, 4.4, 678, true, 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800'),

-- Fusion
('80/20', 'eighty-twenty', 'Thai-sourced ingredients meet modern European techniques. One Michelin star.', 'fusion', '1052-1054 Charoenkrung Rd', 'Riverside', 4, 4.6, 178, true, 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800'),

('Err Urban Rustic Thai', 'err', 'Modern Thai street food in a hip setting by the team behind Bo.lan.', 'fusion', '394/35 Maha Chai Rd', 'Old Town', 2, 4.4, 289, true, 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'),

-- American
('The Smokin'' Pug', 'smokin-pug', 'Texas-style BBQ with brisket smoked for 14+ hours.', 'american', '44 Sukhumvit Soi 33', 'Sukhumvit', 2, 4.5, 234, true, 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800'),

('Daniel Thaiger', 'daniel-thaiger', 'Gourmet burger food truck that grew into a beloved brick-and-mortar.', 'american', '30/8 Sukhumvit Soi 11', 'Sukhumvit', 2, 4.3, 445, true, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800'),

-- Vegetarian
('Broccoli Revolution', 'broccoli-revolution', 'Health-conscious cafe with vegan and vegetarian options using organic ingredients.', 'vegetarian', '899 Sukhumvit Rd', 'Sukhumvit', 2, 4.3, 267, true, 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800'),

('Veganerie', 'veganerie', 'All-vegan restaurant with impressive plant-based versions of Thai and Western dishes.', 'vegetarian', 'K Village, Sukhumvit 26', 'Sukhumvit', 2, 4.4, 198, true, 'https://images.unsplash.com/photo-1540914124281-342587941389?w=800');
