import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload = {
    email: String(formData.get('email') ?? ''),
    password: String(formData.get('password') ?? '')
  };

  if (!schema.safeParse(payload).success) {
    return NextResponse.json({ ok: false, error: 'Invalid credentials format' }, { status: 400 });
  }

  return NextResponse.redirect(new URL('/admin?login=requested', req.url));
}
