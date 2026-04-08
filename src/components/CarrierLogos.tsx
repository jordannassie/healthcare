const carriers = [
  {
    id: "aetna",
    render: () => (
      <div className="text-white font-bold text-2xl italic tracking-tight">
        <span className="text-pink-400 not-italic">♥</span> aetna
        <span className="text-sm align-super not-italic font-normal">™</span>
      </div>
    ),
  },
  {
    id: "ambetter",
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full border-2 border-pink-400 flex items-center justify-center">
          <span className="text-pink-400 font-bold text-sm">A</span>
        </div>
        <div className="text-white text-sm font-bold leading-tight">
          <div>ambetter</div>
          <div className="font-normal text-gray-300 text-xs">Health</div>
        </div>
      </div>
    ),
  },
  {
    id: "anthem",
    render: () => (
      <div className="text-white font-bold text-xl tracking-tight flex items-center gap-1.5">
        <span>Anthem</span>
        <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4 7v5c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V7l-8-5z" />
          <path fill="white" d="M10 14.5l-3-3 1.4-1.4 1.6 1.6 3.6-3.6 1.4 1.4-5 5z" />
        </svg>
        <span className="text-xs font-normal text-blue-200 leading-tight">
          BlueCross<br />BlueShield
        </span>
      </div>
    ),
  },
  {
    id: "cigna",
    render: () => (
      <div className="text-white font-bold text-2xl tracking-tight">
        cigna
        <span className="text-[10px] font-normal text-gray-300 ml-1 align-middle">healthcare</span>
      </div>
    ),
  },
  {
    id: "molina",
    render: () => (
      <div className="text-white font-bold text-xl flex items-center gap-1.5">
        <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <path d="M4 20c0-4 2-6 4-6h8c2 0 4 2 4 6H4z" />
        </svg>
        <span>
          MOLINA
          <span className="block text-[10px] font-normal text-gray-300 tracking-widest -mt-1">
            HEALTHCARE
          </span>
        </span>
      </div>
    ),
  },
  {
    id: "oscar",
    render: () => (
      <div className="text-white font-light text-3xl tracking-wide">oscar</div>
    ),
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-[#00b67a]" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export default function CarrierLogos() {
  return (
    <div className="bg-[#002868]">
      {/* Trust bar */}
      <div className="border-b border-white/10 py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {/* Trustpilot */}
          <div className="flex items-center gap-2 text-white text-sm">
            <span className="font-bold">Great</span>
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="text-[#00b67a] font-bold text-xs tracking-widest">Trustpilot</span>
          </div>

          <div className="flex items-center gap-2 text-white/70 text-sm">
            <PeopleIcon />
            10M+ shoppers have compared insurance with us.
          </div>

          <div className="flex items-center gap-2 text-white/70 text-sm">
            <ShieldCheckIcon />
            Free quotes, secure form, no spam.
          </div>
        </div>
      </div>

      {/* Carrier logos */}
      <div className="py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {carriers.map(({ id, render }) => (
            <div key={id}>{render()}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
