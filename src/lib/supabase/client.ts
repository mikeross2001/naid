import { createBrowserClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a mock client for build time when env vars aren't available
const mockClient = {
  auth: {
    getUser: async () => ({ data: { user: null }, error: null }),
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signOut: async () => ({ error: null }),
    signInWithPassword: async () => ({ data: { user: null, session: null }, error: { message: 'Not configured' } }),
    signUp: async () => ({ data: { user: null, session: null }, error: { message: 'Not configured' } }),
  },
  from: () => ({
    select: () => ({ data: [], error: null, order: () => ({ data: [], error: null }) }),
    insert: () => ({ data: null, error: null }),
    update: () => ({ data: null, error: null }),
    delete: () => ({ data: null, error: null }),
  }),
} as unknown as SupabaseClient;

export function createClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return mockClient;
  }
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
