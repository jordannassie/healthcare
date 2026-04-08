import Link from "next/link";
import Image from "next/image";

const LOGO_URL =
  "https://zupikgtoimkjpcfiwbes.supabase.co/storage/v1/object/public/Healthcare/logo/ChatGPT%20Image%20Apr%208,%202026,%2012_38_34%20PM.png";

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
        <Link href="/" className="flex items-center">
          <Image
            src={LOGO_URL}
            alt="PickHealth Insurance"
            width={180}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
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
