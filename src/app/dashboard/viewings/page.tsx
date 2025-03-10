"use client";

import { useEffect, useState } from "react";
import DashboardNavbar from "@/components/dashboard-navbar";
import { Calendar, MapPin, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Viewing {
  id: string;
  property_id: string;
  viewing_date: string;
  status: string;
  notes: string;
  created_at: string;
}

export default function ViewingsPage() {
  const [viewings, setViewings] = useState<Viewing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchViewings = async () => {
      try {
        const response = await fetch("/api/booking");
        const data = await response.json();

        if (data.success) {
          setViewings(data.data);
        } else {
          console.error("Failed to fetch viewings:", data.error);
        }
      } catch (error) {
        console.error("Error fetching viewings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchViewings();
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return <Badge variant="success">Confirmed</Badge>;
      case "pending":
        return <Badge variant="warning">Pending</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      case "completed":
        return <Badge variant="secondary">Completed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <DashboardNavbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Property Viewings</h1>
          <Link href="/properties">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Schedule New Viewing
            </Button>
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading your viewings...</p>
          </div>
        ) : viewings.length > 0 ? (
          <div className="grid gap-6">
            {viewings.map((viewing) => (
              <div
                key={viewing.id}
                className="bg-white rounded-lg shadow-sm border p-6"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-1">
                      Property ID: {viewing.property_id}
                    </h2>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{formatDate(viewing.viewing_date)}</span>
                    </div>
                  </div>
                  <div>{getStatusBadge(viewing.status)}</div>
                </div>

                {viewing.notes && (
                  <div className="bg-gray-50 p-4 rounded-md mb-4">
                    <div className="flex items-start">
                      <FileText className="h-4 w-4 mr-2 mt-1 text-gray-500" />
                      <p className="text-gray-600">{viewing.notes}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 mt-4">
                  <Link href={`/properties/${viewing.property_id}`}>
                    <Button variant="outline" size="sm">
                      View Property
                    </Button>
                  </Link>

                  {viewing.status === "pending" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      Cancel Viewing
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border">
            <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              No Viewings Scheduled
            </h2>
            <p className="text-gray-600 mb-6">
              You haven't scheduled any property viewings yet.
            </p>
            <Link href="/properties">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Browse Properties
              </Button>
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
