import { NextResponse } from "next/server";
import { createClient } from "../../../../../supabase/server";
import { createPaymentRequest, checkPaymentStatus } from "@/utils/telebirr";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Allow payment processing even if user is not authenticated
    // This enables guest users to make payments
    if (!user) {
      console.log("User not authenticated, proceeding with payment as guest");
    }

    const { phoneNumber, amount, propertyId, returnUrl } = await request.json();

    if (!phoneNumber || !amount) {
      return NextResponse.json(
        { success: false, error: "Phone number and amount are required" },
        { status: 400 },
      );
    }

    // Generate a unique outTradeNo
    const outTradeNo = `PF-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // For demo purposes, we'll simulate a successful response
    // In production, uncomment the following code to make actual API calls

    /*
    // Create payment request with Telebirr
    const paymentResponse = await createPaymentRequest({
      phoneNumber,
      amount,
      outTradeNo,
      subject: `Property Payment - ${propertyId || "General"}`,
      returnUrl: returnUrl || `${process.env.NEXT_PUBLIC_SITE_URL || "https://paradisefinder.com"}/payment/success`,
      notifyUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://paradisefinder.com"}/api/payment/webhook`,
    });
    
    if (!paymentResponse.success) {
      return NextResponse.json(
        { success: false, error: paymentResponse.message || "Payment initiation failed" },
        { status: 400 },
      );
    }
    
    // Use the actual response from Telebirr
    const telebirrResponse = {
      success: true,
      code: paymentResponse.code,
      message: paymentResponse.message,
      data: {
        toPayUrl: paymentResponse.data.toPayUrl,
        outTradeNo: outTradeNo,
        msisdn: phoneNumber,
        totalAmount: amount,
        transactionId: paymentResponse.data.transactionId,
      },
    };
    */

    // Simulate a successful response from Telebirr
    const simulatedResponse = {
      success: true,
      code: "0",
      message: "Success",
      data: {
        toPayUrl: "https://api-telebirr.et/payment/confirm", // This would be a real URL in production
        outTradeNo: outTradeNo,
        msisdn: phoneNumber,
        totalAmount: amount,
        transactionId: `TXN-${Date.now()}`,
      },
    };

    // Store the payment request in your database
    // Use service role client to bypass RLS policies
    const supabaseAdmin = await createClient();
    const { error: dbError } = await supabaseAdmin.from("payments").insert({
      user_id: user ? user.id : null,
      property_id: propertyId || "unknown",
      amount: amount,
      payment_method: "telebirr",
      status: "pending",
      transaction_id: simulatedResponse.data.transactionId,
      out_trade_no: outTradeNo,
      phone_number: phoneNumber,
    });

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { success: false, error: "Failed to record payment" },
        { status: 500 },
      );
    }

    return NextResponse.json(simulatedResponse);
  } catch (error) {
    console.error("Payment processing error:", error);
    return NextResponse.json(
      { success: false, error: "Payment processing failed" },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  // This endpoint would be used to check payment status
  const { searchParams } = new URL(request.url);
  const outTradeNo = searchParams.get("outTradeNo");

  if (!outTradeNo) {
    return NextResponse.json(
      { success: false, error: "Transaction reference is required" },
      { status: 400 },
    );
  }

  const supabase = await createClient();

  try {
    // For demo purposes, we'll check the database directly
    // In production, uncomment the following code to check with Telebirr API

    /*
    // Check payment status with Telebirr
    const statusResponse = await checkPaymentStatus(outTradeNo);
    
    if (statusResponse.success) {
      // Update the payment status in the database
      await supabase.from("payments").update({
        status: statusResponse.data.tradeStatus || "pending",
        updated_at: new Date().toISOString(),
      }).eq("out_trade_no", outTradeNo);
      
      return NextResponse.json({
        success: true,
        data: {
          status: statusResponse.data.tradeStatus || "pending",
          amount: statusResponse.data.totalAmount,
          transactionId: statusResponse.data.transactionId,
          timestamp: new Date().toISOString(),
        },
      });
    }
    */

    // Check payment status in your database
    const { data, error } = await supabase
      .from("payments")
      .select("*")
      .eq("out_trade_no", outTradeNo)
      .single();

    if (error) {
      return NextResponse.json(
        { success: false, error: "Transaction not found" },
        { status: 404 },
      );
    }

    // For demo purposes, randomly set some payments as completed
    if (Math.random() > 0.5) {
      await supabase
        .from("payments")
        .update({
          status: "completed",
          updated_at: new Date().toISOString(),
        })
        .eq("out_trade_no", outTradeNo);

      data.status = "completed";
    }

    return NextResponse.json({
      success: true,
      data: {
        status: data.status,
        amount: data.amount,
        transactionId: data.transaction_id,
        timestamp: data.created_at,
      },
    });
  } catch (error) {
    console.error("Error checking payment status:", error);
    return NextResponse.json(
      { success: false, error: "Failed to check payment status" },
      { status: 500 },
    );
  }
}
