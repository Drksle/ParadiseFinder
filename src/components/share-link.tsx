"use client";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareLinkProps {
  shareableLink: string;
}

export default function ShareLink({ shareableLink }: ShareLinkProps) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableLink);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border">
      <code className="text-sm text-blue-600">{shareableLink}</code>
      <Button
        variant="ghost"
        size="sm"
        className="p-1"
        onClick={handleCopyLink}
      >
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
