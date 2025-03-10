"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function FigmaDesignLink() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://www.figma.com/file/Tz4mRJgCEPLPCQMjhOVAeP/Paradise-Finder-Real-Estate-App?type=design&node-id=0%3A1&mode=design&t=Hl8Yd3Iy3Yd3Iy-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 shadow-lg">
          <span>Open Figma Design</span>
          <ExternalLink size={16} />
        </Button>
      </a>
    </div>
  );
}
