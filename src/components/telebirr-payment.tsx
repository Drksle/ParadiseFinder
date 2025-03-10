"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Loader2 } from "lucide-react";
import Image from "next/image";

interface TelebirrPaymentProps {
  amount: number;
  propertyId?: string | number;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function TelebirrPayment({
  amount,
  propertyId,
  onSuccess,
  onCancel,
}: TelebirrPaymentProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Make actual API call to Telebirr endpoint
      const response = await fetch("/api/payment/telebirr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer guest-access-token", // Add a dummy token for guest access
        },
        body: JSON.stringify({
          phoneNumber,
          amount,
          propertyId,
          returnUrl: window.location.origin + "/payment/success",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoading(false);
        setStep(2);
      } else {
        alert("Payment initiation failed: " + (data.error || "Unknown error"));
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Failed to initiate payment. Please try again.");
      setIsLoading(false);
    }
  };

  const handleConfirm = async () => {
    setIsLoading(true);

    try {
      // Check payment status
      const response = await fetch(
        `/api/payment/telebirr?outTradeNo=PF-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        {
          method: "GET",
        },
      );

      const data = await response.json();

      if (data.success && data.data?.status === "completed") {
        setIsLoading(false);
        setIsSuccess(true);
        if (onSuccess) onSuccess();
      } else if (data.success && data.data?.status === "pending") {
        // Payment still pending
        alert(
          "Your payment is still being processed. Please check your Telebirr app and confirm the payment.",
        );
        setIsLoading(false);
      } else {
        alert(
          "Payment verification failed. Please try again or contact support.",
        );
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      alert("Failed to verify payment status. Please try again.");
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-center mb-6">
        <Image
          src="https://developer.ethiotelecom.et/assets/images/telebirr-logo-color.svg"
          alt="Telebirr Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>

      {isSuccess ? (
        <div className="text-center py-6">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Payment Successful!</h3>
          <p className="text-gray-600 mb-6">
            Your payment of {amount.toLocaleString()} Birr has been processed
            successfully.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={onSuccess}>
            Continue
          </Button>
        </div>
      ) : step === 1 ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Telebirr Payment</h3>
            <p className="text-gray-600">
              Enter your Telebirr registered phone number to proceed with the
              payment.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                placeholder="e.g. 0911234567"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                pattern="^0[0-9]{9}$"
                className="mt-1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter your 10-digit Telebirr registered phone number
              </p>
            </div>

            <div>
              <Label>Amount</Label>
              <div className="mt-1 p-3 border border-gray-300 rounded-md bg-gray-50">
                {amount.toLocaleString()} Birr
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handleCancel}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                disabled={isLoading || !phoneNumber.match(/^0[0-9]{9}$/)}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Continue"
                )}
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Confirm Payment</h3>
            <p className="text-gray-600">
              A payment request has been sent to your Telebirr account. Please
              check your phone and confirm the payment.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Phone Number:</span>
              <span className="font-medium">{phoneNumber}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Amount:</span>
              <span className="font-medium">
                {amount.toLocaleString()} Birr
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Reference:</span>
              <span className="font-medium">
                PF-{propertyId || Math.floor(Math.random() * 10000)}
              </span>
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setStep(1)}
              disabled={isLoading}
            >
              Back
            </Button>
            <Button
              type="button"
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              onClick={handleConfirm}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "I've Confirmed Payment"
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
