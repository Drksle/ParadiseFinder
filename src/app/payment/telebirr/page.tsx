"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/footer"), {
  ssr: false,
});
import TelebirrPayment from "@/components/telebirr-payment";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TelebirrPaymentPage() {
  const router = useRouter();
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

  const handleSuccess = () => {
    router.push(`/payment/success?amount=${amount}&propertyId=${propertyId}`);
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href={propertyId ? `/properties/${propertyId}` : "/properties"}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Property
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Complete Your Payment</h1>
          <p className="text-gray-600">
            Secure payment via Telebirr for your property rental
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <TelebirrPayment
            amount={amount}
            propertyId={propertyId || undefined}
            onSuccess={handleSuccess}
            onCancel={handleCancel}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
