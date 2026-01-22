import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const keyStart = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 20);

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('restaurants')
      .select('id, name')
      .limit(3);

    return NextResponse.json({
      envCheck: {
        urlSet: !!url,
        urlValue: url,
        keySet: !!keyStart,
        keyStart: keyStart + '...',
      },
      dbCheck: {
        success: !error,
        error: error?.message,
        count: data?.length || 0,
        sample: data,
      },
    });
  } catch (e) {
    return NextResponse.json({
      envCheck: {
        urlSet: !!url,
        urlValue: url,
        keySet: !!keyStart,
        keyStart: keyStart + '...',
      },
      error: String(e),
    });
  }
}
