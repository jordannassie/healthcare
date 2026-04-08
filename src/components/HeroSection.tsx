"use client";

import { useState } from "react";

function PersonIcon() {
  return (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}

function DotsIcon() {
  return (
    <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  );
}

const insuranceTypes = [
  { id: "individual", label: "Individual", Icon: PersonIcon },
  { id: "family", label: "Family", Icon: FamilyIcon },
  { id: "other", label: "Other", Icon: DotsIcon },
];

const badges = [
  { label: "Localized coverage", Icon: MapPinIcon },
  { label: "Large agent network", Icon: NetworkIcon },
  { label: "Specialized plans", Icon: ClipboardIcon },
];

export default function HeroSection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80')",
        }}
      />
      {/* Gradient: dark on left fades to near-white on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-white/40 to-white/95" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full py-20 flex justify-end">
        <div className="w-full max-w-[480px]">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a1e3d] leading-tight mb-5">
            Compare plans to find your lowest rates
          </h1>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-7">
            {badges.map(({ label, Icon }) => (
              <span key={label} className="flex items-center gap-1.5 text-sm text-gray-700">
                <span className="text-[#2d8653]">
                  <Icon />
                </span>
                {label}
              </span>
            ))}
          </div>

          {/* Insurance type selector card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <p className="text-gray-800 font-medium mb-4 text-sm sm:text-base">
              What kind of insurance are you looking for?
            </p>
            <div className="grid grid-cols-3 gap-3">
              {insuranceTypes.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => setSelected(id)}
                  className={`flex flex-col items-center gap-2 rounded-xl border-2 py-4 px-2 text-sm font-medium transition-all cursor-pointer ${
                    selected === id
                      ? "border-[#1a6fa8] text-[#1a6fa8] bg-blue-50"
                      : "border-gray-200 text-gray-600 hover:border-[#1a6fa8] hover:text-[#1a6fa8]"
                  }`}
                >
                  <Icon />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
