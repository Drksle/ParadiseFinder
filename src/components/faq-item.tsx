"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 py-6">
      <details className="group">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">{question}</h2>
          <span className="ml-6 flex h-7 items-center">
            <ChevronDown className="h-6 w-6 text-gray-500 group-open:hidden" />
            <ChevronUp className="hidden h-6 w-6 text-gray-500 group-open:block" />
          </span>
        </summary>
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      </details>
    </div>
  );
}
