import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function DELETE(request: Request) {
  const supabase = await createClient();
  const { slugs } = await request.json();

  if (!slugs || !Array.isArray(slugs)) {
    return NextResponse.json({ error: 'slugs array required' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('restaurants')
    .delete()
    .in('slug', slugs)
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ success: true, deleted: data?.length, restaurants: data });
}
