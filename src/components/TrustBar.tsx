function StarIcon({ half = false }: { half?: boolean }) {
  if (half) {
    return (
      <svg className="w-4 h-4" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="#00b67a" />
            <stop offset="50%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>
        <path
          fill="url(#half)"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 text-[#00b67a]" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg className="w-4 h-4 text-[#2d8653]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-4 h-4 text-[#2d8653]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

const partners = [
  {
    id: "bcbs",
    render: () => (
      <div className="flex items-center gap-1.5">
        <div className="w-8 h-8 rounded bg-[#00539B] flex items-center justify-center text-white font-bold text-base leading-none">
          +
        </div>
        <div className="text-xs leading-tight">
          <div className="font-bold text-[#6ab3e8]">BlueCross</div>
          <div className="font-bold text-[#6ab3e8]">BlueShield</div>
        </div>
      </div>
    ),
  },
  {
    id: "aetna",
    render: () => (
      <div className="text-white font-bold text-lg italic tracking-tight">
        <span className="text-[#cc0066] not-italic mr-0.5">♥</span>aetna
        <span className="text-xs align-super not-italic font-normal">™</span>
      </div>
    ),
  },
  {
    id: "cigna",
    render: () => (
      <div className="font-bold text-xl tracking-tight">
        <span className="text-[#44b4c8]">c</span>
        <span className="text-white">igna</span>
        <span className="text-[#44b4c8] text-sm ml-0.5">healthcare</span>
      </div>
    ),
  },
  {
    id: "uhc",
    render: () => (
      <div className="text-xs text-white">
        <div className="font-bold text-sm">UnitedHealthcare</div>
        <div className="text-gray-400 text-[10px]">Golden Rule Insurance Co.</div>
      </div>
    ),
  },
  {
    id: "ambetter",
    render: () => (
      <div className="flex items-center gap-1.5">
        <div className="w-7 h-7 rounded-full bg-[#E91E8C] flex items-center justify-center text-white font-bold text-xs">
          A
        </div>
        <div className="text-white text-xs font-bold leading-tight">
          <div>ambetter</div>
          <div className="font-normal text-gray-400 text-[10px]">HEALTH</div>
        </div>
      </div>
    ),
  },
];

export default function TrustBar() {
  return (
    <div className="bg-[#0a1e3d]">
      {/* Social proof row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-white/10">
        {/* Trustpilot */}
        <div className="flex items-center gap-2 text-white text-sm">
          <span className="font-bold">Great</span>
          <div className="flex gap-0.5">
            {[0, 1, 2, 3].map((i) => (
              <StarIcon key={i} />
            ))}
            <StarIcon half />
          </div>
          <span className="text-[#00b67a] font-bold text-xs tracking-widest">Trustpilot</span>
        </div>

        <div className="flex items-center gap-2 text-white/70 text-sm">
          <PeopleIcon />
          10M+ shoppers have compared insurance with us.
        </div>

        <div className="flex items-center gap-2 text-white/70 text-sm">
          <ShieldIcon />
          Free quotes, secure form, no spam.
        </div>
      </div>

      {/* Partner logos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {partners.map(({ id, render }) => (
          <div key={id}>{render()}</div>
        ))}
      </div>
    </div>
  );
}
