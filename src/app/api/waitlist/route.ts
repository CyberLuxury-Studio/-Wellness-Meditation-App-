import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // MOCK DELAY: Simulate network request to a database/service (e.g., Resend, Supabase, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // MOCK SUCCESS: In a real app, save the email to your DB here.
    return NextResponse.json(
      { message: 'Successfully added to waitlist.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
