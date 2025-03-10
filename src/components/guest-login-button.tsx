"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GuestLoginButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGuestLogin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/guest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        router.push("/dashboard");
        router.refresh();
      } else {
        console.error("Guest login failed:", data.error);
        alert("Guest login failed. Please try again or create an account.");
      }
    } catch (error) {
      console.error("Error during guest login:", error);
      alert("Error during guest login. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleGuestLogin}
      disabled={isLoading}
      className="w-full border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50/50"
    >
      {isLoading ? "Signing in as guest..." : "Continue as Guest"}
    </Button>
  );
}
