import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({ email: z.string().email() });

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload = { email: String(formData.get('email') ?? '') };

  if (!schema.safeParse(payload).success) {
    return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
  }

  return NextResponse.redirect(new URL('/contact?subscribed=1', req.url));
}
