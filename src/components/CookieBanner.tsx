"use client";

import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white px-4 py-3 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-start justify-between gap-4">
        <p className="text-xs text-gray-300 leading-relaxed">
          This website uses cookies, pixels, and similar technologies to enhance and improve our
          marketing. By using this website, you consent to the collection, use, and disclosure of
          your data as described in our{" "}
          <a href="#" className="text-red-400 underline hover:text-red-300">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-red-400 underline hover:text-red-300">
            Cookie Policy
          </a>
          . If you wish to opt-out of our use of these technologies, click{" "}
          <a href="#" className="text-red-400 underline hover:text-red-300">
            Manage Preferences
          </a>
          .
        </p>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss cookie notice"
          className="shrink-0 text-gray-400 hover:text-white text-xl leading-none cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
