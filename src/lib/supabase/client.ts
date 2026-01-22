import { createBrowserClient } from '@supabase/ssr';

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

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a dummy client during build
    return {
      auth: {
        getUser: async () => ({ data: { user: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      },
      from: () => createChainMock(),
    } as ReturnType<typeof createBrowserClient>;
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
