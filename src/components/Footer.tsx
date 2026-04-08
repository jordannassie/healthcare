function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-[#2d8653] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

const footerLinks = [
  "Contact Us",
  "Privacy Policy",
  "Your Privacy Choices",
  "Terms of Use",
  "Licenses",
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1e3d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Phone CTA row */}
        <div className="py-5 flex flex-wrap items-center justify-center gap-3 border-b border-white/10">
          <PhoneIcon />
          <span className="text-sm text-white/70">Speak to a Licensed Insurance Agent</span>
          <a
            href="tel:8338490822"
            className="font-bold text-white hover:text-green-400 transition-colors"
          >
            Call (833) 849-0822
          </a>
        </div>

        {/* Legal text */}
        <div className="py-8 text-center text-xs text-gray-400 max-w-4xl mx-auto leading-relaxed">
          <p>
            You are visiting a website owned by QuoteWizard.com, LLC (&ldquo;QuoteWizard&rdquo;), a
            subsidiary of LendingTree, LLC. Invitations for application for insurance may be made
            through QW Insurance Solutions, LLC (&ldquo;QWIS&rdquo;), a subsidiary of QuoteWizard,
            or through its designated agents, only where licensed and appointed. Licensing
            information for QWIS can be found{" "}
            <a href="#" className="underline hover:text-white transition-colors">
              here
            </a>
            .
          </p>
          <p className="mt-4 tracking-widest text-gray-500 text-[11px]">MULTIPLAN_QW.PH.WEB_C</p>
        </div>

        {/* Bottom links */}
        <div className="py-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-400">
          <span>&copy; 2026 PickHealth Insurance</span>
          {footerLinks.map((link) => (
            <a key={link} href="#" className="hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
