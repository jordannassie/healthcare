"use client";

import { useRef } from "react";

interface Plan {
  id: string;
  title: string;
  subtitle?: string;
  features: string[];
  cta: string;
}

const plans: Plan[] = [
  {
    id: "health",
    title: "Health Plans",
    features: ["Multiple plan options", "Price flexibility", "Comprehensive coverage"],
    cta: "Get Health Plan Pricing",
  },
  {
    id: "hmo",
    title: "HMO Plans",
    subtitle: "Health Maintenance Organization",
    features: ["Low premiums/copays", "In-network doctors", "100% of services covered"],
    cta: "Get HMO Plan Pricing",
  },
  {
    id: "ppo",
    title: "PPO Plans",
    subtitle: "Preferred Provider Organization",
    features: [
      "Higher out-of-pocket costs",
      "Your choice of providers",
      "Varying % of services covered",
    ],
    cta: "Get PPO Plan Pricing",
  },
  {
    id: "dental",
    title: "Dental Plans",
    subtitle: "Individual & Family Coverage",
    features: ["Preventive care covered", "Network dentists", "Orthodontia options"],
    cta: "Get Dental Plan Pricing",
  },
  {
    id: "vision",
    title: "Vision Plans",
    features: ["Eye exams included", "Frames & lenses", "Contact lens benefits"],
    cta: "Get Vision Plan Pricing",
  },
];

function InfoIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 inline-block mr-1 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-md p-6 flex flex-col border border-gray-100">
      <div className="mb-5">
        <h3 className="text-lg font-bold text-[#0a1e3d]">{plan.title}</h3>
        {plan.subtitle && (
          <p className="text-xs text-gray-400 mt-1">
            <InfoIcon />
            {plan.subtitle}
          </p>
        )}
      </div>

      <ul className="space-y-2.5 flex-1 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="text-gray-600 text-sm">
            {f}
          </li>
        ))}
      </ul>

      <button className="w-full py-3 px-4 rounded-full border-2 border-[#1a6fa8] text-[#1a6fa8] font-semibold text-sm hover:bg-[#1a6fa8] hover:text-white transition-colors cursor-pointer">
        {plan.cta}
      </button>
    </div>
  );
}

export default function PlansSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 288 + 24;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f5f7fa] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1e3d] mb-10 font-serif">
          Find your best fit from a wide range of plans.
        </h2>

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous plans"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border-2 border-[#1a6fa8] text-[#1a6fa8] bg-white flex items-center justify-center hover:bg-[#1a6fa8] hover:text-white transition-colors shadow-sm cursor-pointer"
          >
            <ChevronLeft />
          </button>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          >
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next plans"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border-2 border-[#1a6fa8] text-[#1a6fa8] bg-white flex items-center justify-center hover:bg-[#1a6fa8] hover:text-white transition-colors shadow-sm cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
