"use client";

import { useEffect, useState } from "react";
import DashboardNavbar from "@/components/dashboard-navbar";
import { CreditCard, Calendar, Check, X, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Payment {
  id: string;
  property_id: string;
  amount: number;
  payment_method: string;
  status: string;
  transaction_id: string;
  created_at: string;
}

export default function PaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching payments from API
    const fetchPayments = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/payments');
        // const data = await response.json();

        // For demo purposes, we'll use mock data
        setTimeout(() => {
          setPayments([
            {
              id: "1",
              property_id: "1",
              amount: 65000,
              payment_method: "telebirr",
              status: "completed",
              transaction_id: "TXN-12345678",
              created_at: new Date().toISOString(),
            },
            {
              id: "2",
              property_id: "2",
              amount: 35000,
              payment_method: "telebirr",
              status: "pending",
              transaction_id: "TXN-87654321",
              created_at: new Date(Date.now() - 86400000).toISOString(), // Yesterday
            },
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching payments:", error);
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return (
          <Badge variant="success" className="flex items-center gap-1">
            <Check className="h-3 w-3" /> Completed
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="warning" className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> Pending
          </Badge>
        );
      case "failed":
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <X className="h-3 w-3" /> Failed
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
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
        <h1 className="text-2xl font-bold mb-6">Payment History</h1>

        {loading ? (
          <div className="text-center py-12">
            <div className="h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading your payment history...</p>
          </div>
        ) : payments.length > 0 ? (
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left">Date</th>
                    <th className="px-6 py-3 text-left">Property</th>
                    <th className="px-6 py-3 text-left">Amount</th>
                    <th className="px-6 py-3 text-left">Payment Method</th>
                    <th className="px-6 py-3 text-left">Transaction ID</th>
                    <th className="px-6 py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {payments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {formatDate(payment.created_at)}
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/properties/${payment.property_id}`}
                          className="text-blue-600 hover:underline"
                        >
                          Property #{payment.property_id}
                        </Link>
                      </td>
                      <td className="px-6 py-4 font-medium">
                        {payment.amount.toLocaleString()} Birr
                      </td>
                      <td className="px-6 py-4 capitalize">
                        <div className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-2 text-blue-600" />
                          {payment.payment_method}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-mono">
                        {payment.transaction_id}
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(payment.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border">
            <CreditCard className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold mb-2">No Payment History</h2>
            <p className="text-gray-600 mb-6">
              You haven't made any payments yet.
            </p>
            <Link href="/properties" className="text-blue-600 hover:underline">
              Browse Properties
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
