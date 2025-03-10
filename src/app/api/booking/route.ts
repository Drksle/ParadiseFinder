import { NextResponse } from "next/server";
import { createClient } from "../../../../supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 },
      );
    }

    const { propertyId, viewingDate, notes } = await request.json();

    if (!propertyId || !viewingDate) {
      return NextResponse.json(
        { success: false, error: "Property ID and viewing date are required" },
        { status: 400 },
      );
    }

    // Create a new viewing record
    const { data, error } = await supabase
      .from("viewings")
      .insert({
        property_id: propertyId,
        user_id: user.id,
        viewing_date: viewingDate,
        notes: notes || "",
        status: "pending",
      })
      .select();

    if (error) {
      console.error("Database error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to schedule viewing" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      data: data[0],
      message: "Viewing scheduled successfully",
    });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to schedule viewing" },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const propertyId = searchParams.get("propertyId");

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { success: false, error: "Authentication required" },
      { status: 401 },
    );
  }

  let query = supabase.from("viewings").select("*").eq("user_id", user.id);

  if (propertyId) {
    query = query.eq("property_id", propertyId);
  }

  const { data, error } = await query.order("viewing_date", {
    ascending: false,
  });

  if (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch viewings" },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    data,
  });
}
