import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://zupikgtoimkjpcfiwbes.supabase.co/storage/v1/object/public/Healthcare/logo/ChatGPT%20Image%20Apr%208,%202026,%2012_38_34%20PM.png";

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-[#E8000D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <header className="bg-white border-b-4 border-[#7EC8E3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between py-3">
        <Link href="/">
          <Image
            src={LOGO_URL}
            alt="PickHealth Insurance"
            width={400}
            height={120}
            className="h-24 w-auto object-contain"
            priority
          />
        </Link>

        <div className="text-right hidden sm:block">
          <p className="text-xs text-gray-500">Speak with a Licensed Insurance Agent</p>
          <a
            href="tel:8338490822"
            className="flex items-center justify-end gap-1.5 font-bold text-[#E8000D] text-lg leading-tight"
          >
            <PhoneIcon />
            1-833-849-0822
          </a>
          <p className="text-xs text-gray-400">Mon–Thurs: 9am–6pm&nbsp;|&nbsp;Fri: 9am–5:30pm EST</p>
        </div>

        <a href="tel:8338490822" className="sm:hidden text-[#E8000D]">
          <PhoneIcon />
        </a>
      </div>
    </header>
  );
}
