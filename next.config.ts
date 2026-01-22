import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Unsplash & Supabase
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'uaxdajpgjfcdvfdlmhzy.supabase.co' },
      { protocol: 'https', hostname: '*.googleusercontent.com' },
      // Michelin Guide
      { protocol: 'https', hostname: 'axwwgrkdco.cloudimg.io' },
      // Official restaurant websites
      { protocol: 'https', hostname: 'thipsamai.com' },
      { protocol: 'https', hostname: 'www.thipsamai.com' },
      { protocol: 'https', hostname: 'image-tc.galaxy.tf' },
      { protocol: 'https', hostname: 'media.ffycdn.net' },
      { protocol: 'https', hostname: 'www.laemcharoenseafood.com' },
      { protocol: 'https', hostname: 'www.afteryoudessertcafe.com' },
      { protocol: 'https', hostname: 'www.savoey.co.th' },
      { protocol: 'https', hostname: 'www.veganerie.co.th' },
      { protocol: 'https', hostname: 'www.secret-retreats.com' },
      { protocol: 'https', hostname: 'images.squarespace-cdn.com' },
      // Food blogs
      { protocol: 'https', hostname: 'www.eatingthaifood.com' },
      { protocol: 'https', hostname: 'aroimakmak.com' },
      { protocol: 'https', hostname: 'www.bkmagazine.com' },
      // Flickr (for some food blog images)
      { protocol: 'http', hostname: 'farm6.staticflickr.com' },
      // Time Out
      { protocol: 'https', hostname: 'media.timeout.com' },
      // World's 50 Best
      { protocol: 'https', hostname: 'www.theworlds50best.com' },
      // Restaurant websites
      { protocol: 'https', hostname: 'centobangkok.com' },
      { protocol: 'https', hostname: 'danielfooddiary.com' },
      { protocol: 'https', hostname: 'img.wongnai.com' },
      // Coconuts Media
      { protocol: 'https', hostname: 'cdn.coconuts.co' },
      // Restaurant Guru
      { protocol: 'https', hostname: 'img.restaurantguru.com' },
      { protocol: 'https', hostname: 'img3.restaurantguru.com' },
      // Restaurant websites
      { protocol: 'https', hostname: 'sushizobangkok.com' },
      { protocol: 'https', hostname: 'thai-gohan.com' },
      { protocol: 'https', hostname: 'www.chowtraveller.com' },
    ],
  },
};

export default nextConfig;
