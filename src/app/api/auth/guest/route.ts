import { createClient } from "../../../../../supabase/server";
import { NextResponse } from "next/server";

// Use predefined guest account credentials
const GUEST_EMAIL = "guest@paradisefinder.com";
const GUEST_PASSWORD = "GuestAccount123!";

export async function POST() {
  const supabase = await createClient();

  try {
    // Sign in with the predefined guest account
    const {
      data: { session, user },
      error: signInError,
    } = await supabase.auth.signInWithPassword({
      email: GUEST_EMAIL,
      password: GUEST_PASSWORD,
    });

    if (signInError) {
      console.error("Guest login error:", signInError);
      return NextResponse.json(
        { success: false, error: "Guest login failed" },
        { status: 401 },
      );
    }

    return NextResponse.json({ success: true, user, session });
  } catch (error) {
    console.error("Error during guest login:", error);
    return NextResponse.json(
      { success: false, error: "Failed to login as guest" },
      { status: 500 },
    );
  }
}
