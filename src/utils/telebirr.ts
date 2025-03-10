// Telebirr API integration utilities
import {
  createNonceStr,
  createTimeStamp,
  signRequestObject,
} from "./telebirr-sign";

// Telebirr API credentials
const TELEBIRR_APP_ID = process.env.TELEBIRR_APP_ID || "1384407564441608";
const TELEBIRR_FABRIC_APP_ID =
  process.env.TELEBIRR_FABRIC_APP_ID || "c4182ef8-9249-458a-985e-06d191f4d505";
const TELEBIRR_APP_SECRET = process.env.TELEBIRR_APP_SECRET || "167393";
const TELEBIRR_BASE_URL =
  process.env.TELEBIRR_BASE_URL || "https://api-telebirr.et";
const TELEBIRR_PRIVATE_KEY =
  process.env.TELEBIRR_PRIVATE_KEY || "DEMO_PRIVATE_KEY";
const TELEBIRR_SHORT_CODE = process.env.TELEBIRR_SHORT_CODE || "6007";

/**
 * Get authentication token from Telebirr API
 */
export async function getTelebirrToken() {
  try {
    // Create request payload
    const requestPayload = {
      appSecret: TELEBIRR_APP_SECRET,
    };

    const response = await fetch(`${TELEBIRR_BASE_URL}/payment/v1/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-APP-Key": TELEBIRR_FABRIC_APP_ID,
      },
      body: JSON.stringify(requestPayload),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get token: ${response.status} ${response.statusText}`,
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error getting Telebirr token:", error);
    throw error;
  }
}

/**
 * Create a payment request with Telebirr
 */
export async function createPaymentRequest(params: {
  phoneNumber: string;
  amount: number;
  outTradeNo: string;
  subject: string;
  returnUrl: string;
  notifyUrl: string;
}) {
  try {
    // First get the token
    const tokenResponse = await getTelebirrToken();

    if (!tokenResponse.accessToken) {
      throw new Error("Failed to get valid access token");
    }

    // Create request payload
    const nonce = createNonceStr();
    const timestamp = createTimeStamp();

    const requestPayload = {
      appId: TELEBIRR_APP_ID,
      outTradeNo: params.outTradeNo,
      subject: params.subject,
      totalAmount: params.amount.toString(),
      shortCode: TELEBIRR_SHORT_CODE,
      notifyUrl: params.notifyUrl,
      returnUrl: params.returnUrl,
      timeoutExpress: "30", // 30 minutes timeout
      nonce: nonce,
      timestamp: timestamp,
      msisdn: params.phoneNumber,
    };

    // Sign the request
    const signature = signRequestObject(requestPayload, TELEBIRR_PRIVATE_KEY);

    // Add signature to payload
    const finalPayload = {
      ...requestPayload,
      sign: signature,
      sign_type: "SHA256withRSA",
    };

    // Create payment request
    const response = await fetch(`${TELEBIRR_BASE_URL}/payment/v1/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenResponse.accessToken}`,
      },
      body: JSON.stringify(finalPayload),
    });

    if (!response.ok) {
      throw new Error(
        `Payment request failed: ${response.status} ${response.statusText}`,
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error creating Telebirr payment:", error);
    throw error;
  }
}

/**
 * Check payment status
 */
export async function checkPaymentStatus(outTradeNo: string) {
  try {
    // First get the token
    const tokenResponse = await getTelebirrToken();

    if (!tokenResponse.accessToken) {
      throw new Error("Failed to get valid access token");
    }

    // Create request payload
    const nonce = createNonceStr();
    const timestamp = createTimeStamp();

    const requestPayload = {
      appId: TELEBIRR_APP_ID,
      outTradeNo: outTradeNo,
      nonce: nonce,
      timestamp: timestamp,
    };

    // Sign the request
    const signature = signRequestObject(requestPayload, TELEBIRR_PRIVATE_KEY);

    // Add signature to payload
    const finalPayload = {
      ...requestPayload,
      sign: signature,
      sign_type: "SHA256withRSA",
    };

    // Query payment status
    const response = await fetch(`${TELEBIRR_BASE_URL}/payment/v1/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenResponse.accessToken}`,
      },
      body: JSON.stringify(finalPayload),
    });

    if (!response.ok) {
      throw new Error(
        `Payment status check failed: ${response.status} ${response.statusText}`,
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error checking Telebirr payment status:", error);
    throw error;
  }
}
