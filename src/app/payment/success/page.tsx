"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/footer"), {
  ssr: false,
});
import { Button } from "@/components/ui/button";
import { Check, Home } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState(0);
  const [propertyId, setPropertyId] = useState<string | null>(null);

  useEffect(() => {
    const amountParam = searchParams.get("amount");
    const propertyIdParam = searchParams.get("propertyId");

    if (amountParam) {
      setAmount(parseInt(amountParam, 10));
    }

    if (propertyIdParam) {
      setPropertyId(propertyIdParam);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>

          <p className="text-gray-600 mb-2">
            Your payment of{" "}
            <span className="font-semibold">
              {amount.toLocaleString()} Birr
            </span>{" "}
            has been processed successfully.
          </p>

          <p className="text-gray-600 mb-6">
            A confirmation has been sent to your email and phone number.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mb-8 text-left">
            <h3 className="font-semibold mb-2">Payment Details</h3>
            <div className="flex justify-between mb-1">
              <span className="text-gray-600">Amount:</span>
              <span>{amount.toLocaleString()} Birr</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-600">Payment Method:</span>
              <span>Telebirr</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-600">Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Transaction ID:</span>
              <span>TXN-{Date.now().toString().slice(-8)}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {propertyId && (
              <Link href={`/properties/${propertyId}`}>
                <Button variant="outline" className="w-full">
                  Return to Property
                </Button>
              </Link>
            )}

            <Link href="/dashboard">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Home className="mr-2 h-4 w-4" />
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
