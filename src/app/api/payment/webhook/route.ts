import { NextResponse } from "next/server";
import { createClient } from "../../../../../supabase/server";

// This would be your Telebirr webhook handler
export async function POST(request: Request) {
  try {
    // In a real implementation, you would:
    // 1. Verify the webhook signature using Telebirr's public key
    // 2. Parse the notification data
    // 3. Update the payment status in your database

    // Get the raw request body for signature verification
    const rawBody = await request.text();
    const payload = JSON.parse(rawBody);

    // Extract relevant fields
    const { outTradeNo, transactionId, tradeStatus, sign, sign_type } = payload;

    // Verify signature (commented out for demo)
    /*
    const isValidSignature = verifySignature(rawBody, sign, TELEBIRR_PUBLIC_KEY);
    if (!isValidSignature) {
      console.error("Invalid webhook signature");
      return NextResponse.json(
        { success: false, error: "Invalid signature" },
        { status: 401 },
      );
    }
    */

    if (!outTradeNo || !tradeStatus) {
      return NextResponse.json(
        { success: false, error: "Invalid webhook payload" },
        { status: 400 },
      );
    }

    const supabase = await createClient();

    // Map Telebirr status to our status
    const paymentStatus =
      tradeStatus === "SUCCESS"
        ? "completed"
        : tradeStatus === "FAILED"
          ? "failed"
          : tradeStatus === "PENDING"
            ? "pending"
            : "unknown";

    // Update payment status in your database
    const { error } = await supabase
      .from("payments")
      .update({
        status: paymentStatus,
        transaction_id: transactionId || payload.transactionId,
        updated_at: new Date().toISOString(),
      })
      .eq("out_trade_no", outTradeNo);

    if (error) {
      console.error("Database error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to update payment status" },
        { status: 500 },
      );
    }

    // If payment is successful and it's for a property rental/purchase
    if (paymentStatus === "completed") {
      // Get the payment details
      const { data: paymentData } = await supabase
        .from("payments")
        .select("property_id, user_id, amount")
        .eq("out_trade_no", outTradeNo)
        .single();

      if (paymentData && paymentData.property_id) {
        // Create a booking or purchase record
        await supabase.from("bookings").insert({
          property_id: paymentData.property_id,
          user_id: paymentData.user_id,
          payment_id: outTradeNo,
          amount: paymentData.amount,
          status: "confirmed",
        });
      }
    }

    // Return success to Telebirr
    return NextResponse.json({
      success: true,
      code: "SUCCESS",
      message: "Notification received successfully",
    });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { success: false, error: "Webhook processing failed" },
      { status: 500 },
    );
  }
}
