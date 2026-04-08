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

export default function CarrierLogos() {
  return (
    <div className="bg-[#1e3c87] py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {carriers.map(({ id, render }) => (
          <div key={id}>{render()}</div>
        ))}
      </div>
    </div>
  );
}
