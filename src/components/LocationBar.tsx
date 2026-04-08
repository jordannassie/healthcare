"use client";

import { useEffect, useState } from "react";

interface GeoData {
  city: string;
  region: string;
  region_code: string;
}

function PinIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

export default function LocationBar() {
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data: GeoData) => {
        if (data.city && data.region_code) {
          setLocation(`${data.city}, ${data.region_code}`);
        }
      })
      .catch(() => {
        // silently fail — bar just won't render
      });
  }, []);

  if (!location) return null;

  return (
    <div className="bg-[#002868] border-t border-white/10 py-2 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-1.5 text-white text-xs font-semibold tracking-widest uppercase">
        <PinIcon />
        <span>
          Serving: <span className="text-[#E8000D]">{location}</span>
        </span>
      </div>
    </div>
  );
}
