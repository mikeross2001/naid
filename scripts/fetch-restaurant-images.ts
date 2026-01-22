/**
 * Fetch real restaurant images from Google Places API
 *
 * Usage:
 * 1. Set your Google API key in .env.local as GOOGLE_PLACES_API_KEY
 * 2. Run: npx tsx scripts/fetch-restaurant-images.ts
 */

const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

if (!GOOGLE_API_KEY) {
  console.error('Error: GOOGLE_PLACES_API_KEY not found in environment');
  console.log('Add GOOGLE_PLACES_API_KEY=your_key to .env.local');
  process.exit(1);
}

// Restaurant data from our database
const restaurants = [
  { slug: 'sorn', name: 'Sorn', location: 'Sukhumvit 26, Bangkok' },
  { slug: 'jay-fai', name: 'Jay Fai', location: 'Maha Chai Road, Bangkok' },
  { slug: 'paste-bangkok', name: 'Paste Bangkok', location: 'Gaysorn Plaza, Bangkok' },
  { slug: 'supanniga-eating-room', name: 'Supanniga Eating Room', location: 'Thonglor, Bangkok' },
  { slug: 'thipsamai', name: 'Thipsamai Pad Thai', location: 'Maha Chai Road, Bangkok' },
  { slug: 'krua-apsorn', name: 'Krua Apsorn', location: 'Samsen Road, Bangkok' },
  { slug: 'sushi-masato', name: 'Sushi Masato', location: 'Sukhumvit 31, Bangkok' },
  { slug: 'ramen-danbo', name: 'Ramen Danbo', location: 'Emquartier, Bangkok' },
  { slug: 'yamazato', name: 'Yamazato', location: 'Okura Prestige, Bangkok' },
  { slug: 'isao', name: 'Isao', location: 'Sukhumvit 31, Bangkok' },
  { slug: 'jua', name: 'Jua', location: 'Charoenkrung, Bangkok' },
  { slug: 'woo-galbi', name: 'Woo Galbi', location: 'Sukhumvit 19, Bangkok' },
  { slug: 'china-table', name: 'China Table', location: 'Mandarin Oriental, Bangkok' },
  { slug: 'tk-seafood', name: 'T&K Seafood', location: 'Chinatown, Bangkok' },
  { slug: 'gaggan-anand', name: 'Gaggan Anand', location: 'Soi Langsuan, Bangkok' },
  { slug: 'indus', name: 'Indus', location: 'Sukhumvit 26, Bangkok' },
  { slug: 'appia', name: 'Appia', location: 'Sukhumvit 31, Bangkok' },
  { slug: 'peppina', name: 'Peppina', location: 'Sukhumvit 33, Bangkok' },
  { slug: 'le-du', name: 'Le Du', location: 'Silom Soi 7, Bangkok' },
  { slug: 'jaime', name: "J'aime by Jean-Michel Lorain", location: 'U Sathorn, Bangkok' },
  { slug: 'laem-charoen-seafood', name: 'Laem Charoen Seafood', location: 'Siam Paragon, Bangkok' },
  { slug: 'savoey', name: 'Savoey Seafood', location: 'Bangkok' },
  { slug: 'roots-coffee', name: 'Roots Coffee', location: 'Sukhumvit 26, Bangkok' },
  { slug: 'after-you', name: 'After You Dessert Cafe', location: 'Siam, Bangkok' },
  { slug: 'eighty-twenty', name: '80/20', location: 'Charoenkrung, Bangkok' },
  { slug: 'err', name: 'Err Urban Rustic Thai', location: 'Maha Chai Road, Bangkok' },
  { slug: 'smokin-pug', name: 'The Smokin Pug', location: 'Sukhumvit 33, Bangkok' },
  { slug: 'daniel-thaiger', name: 'Daniel Thaiger', location: 'Sukhumvit 11, Bangkok' },
  { slug: 'broccoli-revolution', name: 'Broccoli Revolution', location: 'Sukhumvit, Bangkok' },
  { slug: 'veganerie', name: 'Veganerie', location: 'K Village, Bangkok' },
];

interface PlaceResult {
  place_id: string;
  name: string;
  photos?: { photo_reference: string }[];
}

interface PlacesResponse {
  candidates: PlaceResult[];
  status: string;
}

async function findPlace(query: string): Promise<PlaceResult | null> {
  const url = new URL('https://maps.googleapis.com/maps/api/place/findplacefromtext/json');
  url.searchParams.set('input', query);
  url.searchParams.set('inputtype', 'textquery');
  url.searchParams.set('fields', 'place_id,name,photos');
  url.searchParams.set('key', GOOGLE_API_KEY!);

  const response = await fetch(url.toString());
  const data: PlacesResponse = await response.json();

  if (data.status === 'OK' && data.candidates.length > 0) {
    return data.candidates[0];
  }
  return null;
}

function getPhotoUrl(photoReference: string, maxWidth: number = 800): string {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photo_reference=${photoReference}&key=${GOOGLE_API_KEY}`;
}

async function main() {
  console.log('Fetching restaurant images from Google Places API...\n');

  const updates: string[] = [];
  const errors: string[] = [];

  for (const restaurant of restaurants) {
    const query = `${restaurant.name} restaurant ${restaurant.location}`;
    console.log(`Searching: ${query}`);

    try {
      const place = await findPlace(query);

      if (place && place.photos && place.photos.length > 0) {
        const photoUrl = getPhotoUrl(place.photos[0].photo_reference);
        console.log(`  ✓ Found: ${place.name}`);

        updates.push(
          `UPDATE public.restaurants SET cover_image = '${photoUrl}' WHERE slug = '${restaurant.slug}';`
        );
      } else {
        console.log(`  ✗ No photo found`);
        errors.push(restaurant.name);
      }
    } catch (error) {
      console.log(`  ✗ Error: ${error}`);
      errors.push(restaurant.name);
    }

    // Rate limiting - wait 200ms between requests
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log('\n' + '='.repeat(60));
  console.log('SQL UPDATE STATEMENTS');
  console.log('='.repeat(60));
  console.log('\n-- Run these in your Supabase SQL Editor:\n');
  console.log(updates.join('\n'));

  if (errors.length > 0) {
    console.log('\n' + '='.repeat(60));
    console.log('RESTAURANTS WITHOUT PHOTOS');
    console.log('='.repeat(60));
    errors.forEach(name => console.log(`- ${name}`));
  }

  console.log('\n✓ Done! Copy the SQL above and run it in Supabase.');
}

main().catch(console.error);
