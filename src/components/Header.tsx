import Link from "next/link";

function ShieldCheckIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 3L6 8.5v9c0 9.4 5.1 17.6 12 19.5 6.9-1.9 12-10.1 12-19.5v-9L18 3z"
        fill="#2d8653"
      />
      <path
        d="M15.5 23.3l-4.3-4.3 1.6-1.6 2.7 2.7 6.2-6.2 1.6 1.6-8 7.8z"
        fill="white"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <ShieldCheckIcon />
          <span className="text-xl text-[#0a1e3d] tracking-tight">
            <span className="font-extrabold">PickHealth</span>
            <span className="font-normal">Insurance</span>
          </span>
        </Link>

        <div className="text-right hidden sm:block">
          <p className="text-xs text-gray-400">Speak to a Licensed Insurance Agent</p>
          <a
            href="tel:8338490822"
            className="flex items-center justify-end gap-1.5 text-[#2d8653] font-bold text-sm"
          >
            <PhoneIcon />
            Call (833) 849-0822
          </a>
        </div>

        <a
          href="tel:8338490822"
          className="sm:hidden flex items-center gap-1.5 text-[#2d8653] font-bold text-sm"
        >
          <PhoneIcon />
          <span className="sr-only">Call (833) 849-0822</span>
        </a>
      </div>
    </header>
  );
}
