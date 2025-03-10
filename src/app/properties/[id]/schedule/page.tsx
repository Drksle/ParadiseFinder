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
import ScheduleViewing from "@/components/schedule-viewing";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ScheduleViewingPageProps {
  params: {
    id: string;
  };
}

export default function ScheduleViewingPage({
  params,
}: ScheduleViewingPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [propertyTitle, setPropertyTitle] = useState("");

  useEffect(() => {
    const titleParam = searchParams.get("title");
    if (titleParam) {
      setPropertyTitle(decodeURIComponent(titleParam));
    }
  }, [searchParams]);

  const handleSuccess = () => {
    router.push(`/dashboard/viewings`);
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
          href={`/properties/${params.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Property
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Schedule a Viewing</h1>
          <p className="text-gray-600">
            {propertyTitle
              ? `For: ${propertyTitle}`
              : "Select your preferred date and time"}
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <ScheduleViewing
            propertyId={params.id}
            propertyTitle={propertyTitle || `Property #${params.id}`}
            onSuccess={handleSuccess}
            onCancel={handleCancel}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
