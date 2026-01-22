-- NaiD Database Schema
-- Run this in your Supabase SQL Editor

-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Profiles table (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique not null,
  full_name text,
  avatar_url text,
  bio text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,

  constraint username_length check (char_length(username) >= 3 and char_length(username) <= 30),
  constraint username_format check (username ~* '^[a-zA-Z0-9_]+$')
);

-- Restaurants table
create table public.restaurants (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text unique not null,
  description text,
  cuisine_type text not null,
  address text not null,
  district text not null,
  latitude decimal(10, 8),
  longitude decimal(11, 8),
  phone text,
  website text,
  price_range smallint not null default 2 check (price_range between 1 and 4),
  cover_image text,
  images text[] default '{}',
  average_rating decimal(2, 1) default 0,
  review_count integer default 0,
  is_verified boolean default false,
  submitted_by uuid references public.profiles(id) on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Reviews table
create table public.reviews (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  restaurant_id uuid references public.restaurants(id) on delete cascade not null,
  rating smallint not null check (rating between 1 and 5),
  content text not null,
  images text[] default '{}',
  helpful_count integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,

  unique(user_id, restaurant_id)
);

-- Favorites table
create table public.favorites (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  restaurant_id uuid references public.restaurants(id) on delete cascade not null,
  list_name text not null default 'Saved',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,

  unique(user_id, restaurant_id, list_name)
);

-- Follows table
create table public.follows (
  id uuid default uuid_generate_v4() primary key,
  follower_id uuid references public.profiles(id) on delete cascade not null,
  following_id uuid references public.profiles(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,

  unique(follower_id, following_id),
  check (follower_id != following_id)
);

-- Helpful votes table (for review helpfulness)
create table public.helpful_votes (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  review_id uuid references public.reviews(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,

  unique(user_id, review_id)
);

-- Create indexes for performance
create index idx_restaurants_cuisine on public.restaurants(cuisine_type);
create index idx_restaurants_district on public.restaurants(district);
create index idx_restaurants_rating on public.restaurants(average_rating desc);
create index idx_restaurants_slug on public.restaurants(slug);
create index idx_reviews_restaurant on public.reviews(restaurant_id);
create index idx_reviews_user on public.reviews(user_id);
create index idx_favorites_user on public.favorites(user_id);
create index idx_favorites_restaurant on public.favorites(restaurant_id);
create index idx_follows_follower on public.follows(follower_id);
create index idx_follows_following on public.follows(following_id);
create index idx_profiles_username on public.profiles(username);

-- Function to update restaurant rating when a review is added/updated/deleted
create or replace function update_restaurant_rating()
returns trigger as $$
begin
  if TG_OP = 'DELETE' then
    update public.restaurants
    set
      average_rating = coalesce((
        select round(avg(rating)::numeric, 1)
        from public.reviews
        where restaurant_id = OLD.restaurant_id
      ), 0),
      review_count = (
        select count(*)
        from public.reviews
        where restaurant_id = OLD.restaurant_id
      ),
      updated_at = now()
    where id = OLD.restaurant_id;
    return OLD;
  else
    update public.restaurants
    set
      average_rating = coalesce((
        select round(avg(rating)::numeric, 1)
        from public.reviews
        where restaurant_id = NEW.restaurant_id
      ), 0),
      review_count = (
        select count(*)
        from public.reviews
        where restaurant_id = NEW.restaurant_id
      ),
      updated_at = now()
    where id = NEW.restaurant_id;
    return NEW;
  end if;
end;
$$ language plpgsql;

-- Trigger for updating restaurant rating
create trigger on_review_change
  after insert or update or delete on public.reviews
  for each row execute function update_restaurant_rating();

-- Function to update helpful count on reviews
create or replace function update_helpful_count()
returns trigger as $$
begin
  if TG_OP = 'DELETE' then
    update public.reviews
    set helpful_count = (
      select count(*)
      from public.helpful_votes
      where review_id = OLD.review_id
    )
    where id = OLD.review_id;
    return OLD;
  else
    update public.reviews
    set helpful_count = (
      select count(*)
      from public.helpful_votes
      where review_id = NEW.review_id
    )
    where id = NEW.review_id;
    return NEW;
  end if;
end;
$$ language plpgsql;

-- Trigger for updating helpful count
create trigger on_helpful_vote_change
  after insert or delete on public.helpful_votes
  for each row execute function update_helpful_count();

-- Function to auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, full_name, avatar_url)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data->>'username',
      'user_' || substr(new.id::text, 1, 8)
    ),
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'),
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger for auto-creating profile
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Row Level Security (RLS) policies

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.restaurants enable row level security;
alter table public.reviews enable row level security;
alter table public.favorites enable row level security;
alter table public.follows enable row level security;
alter table public.helpful_votes enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone"
  on public.profiles for select
  using (true);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Restaurants policies
create policy "Restaurants are viewable by everyone"
  on public.restaurants for select
  using (true);

create policy "Authenticated users can insert restaurants"
  on public.restaurants for insert
  with check (auth.role() = 'authenticated');

create policy "Users can update restaurants they submitted"
  on public.restaurants for update
  using (auth.uid() = submitted_by);

-- Reviews policies
create policy "Reviews are viewable by everyone"
  on public.reviews for select
  using (true);

create policy "Authenticated users can insert reviews"
  on public.reviews for insert
  with check (auth.uid() = user_id);

create policy "Users can update own reviews"
  on public.reviews for update
  using (auth.uid() = user_id);

create policy "Users can delete own reviews"
  on public.reviews for delete
  using (auth.uid() = user_id);

-- Favorites policies
create policy "Users can view own favorites"
  on public.favorites for select
  using (auth.uid() = user_id);

create policy "Users can insert own favorites"
  on public.favorites for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own favorites"
  on public.favorites for delete
  using (auth.uid() = user_id);

-- Follows policies
create policy "Follows are viewable by everyone"
  on public.follows for select
  using (true);

create policy "Authenticated users can follow"
  on public.follows for insert
  with check (auth.uid() = follower_id);

create policy "Users can unfollow"
  on public.follows for delete
  using (auth.uid() = follower_id);

-- Helpful votes policies
create policy "Helpful votes are viewable by everyone"
  on public.helpful_votes for select
  using (true);

create policy "Authenticated users can vote helpful"
  on public.helpful_votes for insert
  with check (auth.uid() = user_id);

create policy "Users can remove helpful vote"
  on public.helpful_votes for delete
  using (auth.uid() = user_id);

-- Function to generate slug from name
create or replace function generate_slug(name text)
returns text as $$
begin
  return lower(regexp_replace(regexp_replace(name, '[^a-zA-Z0-9\s-]', '', 'g'), '\s+', '-', 'g'));
end;
$$ language plpgsql;
