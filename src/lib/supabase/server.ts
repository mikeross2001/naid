import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Chainable mock for build time
const createChainMock = (): any => {
  const mock: any = {
    data: [],
    error: null,
    count: 0,
  };
  const chainable = () => createChainMock();
  mock.select = chainable;
  mock.order = chainable;
  mock.eq = chainable;
  mock.or = chainable;
  mock.single = () => ({ data: null, error: null });
  mock.limit = chainable;
  mock.insert = chainable;
  mock.update = chainable;
  mock.delete = chainable;
  return mock;
};

export async function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a dummy client during build
    return {
      auth: {
        getUser: async () => ({ data: { user: null }, error: null }),
      },
      from: () => createChainMock(),
    } as ReturnType<typeof createServerClient>;
  }

  const cookieStore = await cookies();

  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing sessions.
          }
        },
      },
    }
  );
}
