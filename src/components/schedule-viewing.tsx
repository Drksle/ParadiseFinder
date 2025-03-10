"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Check, Loader2 } from "lucide-react";

interface ScheduleViewingProps {
  propertyId: string | number;
  propertyTitle: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function ScheduleViewing({
  propertyId,
  propertyTitle,
  onSuccess,
  onCancel,
}: ScheduleViewingProps) {
  const [viewingDate, setViewingDate] = useState("");
  const [viewingTime, setViewingTime] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Combine date and time
      const dateTimeString = `${viewingDate}T${viewingTime}:00`;

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          propertyId,
          viewingDate: dateTimeString,
          notes,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoading(false);
        setIsSuccess(true);
        setTimeout(() => {
          if (onSuccess) onSuccess();
        }, 2000);
      } else {
        alert("Failed to schedule viewing: " + (data.error || "Unknown error"));
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error scheduling viewing:", error);
      alert("Failed to schedule viewing. Please try again.");
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
  };

  // Get tomorrow's date as the minimum date for scheduling
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      {isSuccess ? (
        <div className="text-center py-6">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Viewing Scheduled!</h3>
          <p className="text-gray-600 mb-6">
            Your viewing for {propertyTitle} has been scheduled successfully.
            The property agent will contact you to confirm the appointment.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={onSuccess}>
            Continue
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Schedule a Viewing</h3>
            <p className="text-gray-600">
              Select your preferred date and time to view this property.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="viewingDate">Preferred Date</Label>
              <Input
                id="viewingDate"
                type="date"
                min={minDate}
                value={viewingDate}
                onChange={(e) => setViewingDate(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="viewingTime">Preferred Time</Label>
              <Input
                id="viewingTime"
                type="time"
                min="09:00"
                max="18:00"
                value={viewingTime}
                onChange={(e) => setViewingTime(e.target.value)}
                required
                className="mt-1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Business hours: 9:00 AM - 6:00 PM
              </p>
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any specific requirements or questions..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-1"
                rows={3}
              />
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
                disabled={isLoading || !viewingDate || !viewingTime}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Schedule Viewing"
                )}
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
