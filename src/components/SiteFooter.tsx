const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Licensing Legal", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Do Not Call Policy", href: "#" },
  { label: "Our Carrier Partners", href: "#" },
  { label: "Use of My Personal Information", href: "#" },
];

function BbbBadge() {
  return (
    <div className="flex flex-col items-center border border-gray-200 rounded p-2 text-center w-24 shrink-0">
      <div className="flex gap-0.5 mb-1">
        {["B", "B", "B"].map((l, i) => (
          <span key={i} className="text-[#0066a4] font-extrabold text-xl leading-none">
            {l}
          </span>
        ))}
      </div>
      <div className="text-[8px] text-gray-500 uppercase tracking-widest leading-tight">
        Accredited<br />Business
      </div>
      <div className="mt-1 text-[9px] text-gray-500">BBB Rating: A+</div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Top row: copyright + BBB */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <p className="text-sm text-gray-700 font-medium">
            Copyright 2026 PickHealth Insurance, All Rights Reserved.
          </p>
          <BbbBadge />
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-1 gap-y-1 mb-5">
          {footerLinks.map((link, i) => (
            <span key={link.label} className="flex items-center">
              <a href={link.href} className="text-sm text-blue-600 hover:underline">
                {link.label}
              </a>
              {i < footerLinks.length - 1 && (
                <span className="mx-1 text-gray-400 text-sm">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Legal text */}
        <div className="space-y-3 text-xs text-gray-500 leading-relaxed">
          <p>
            This website is owned and operated by PickHealth Insurance, LLC, a licensed health
            insurance agency. This website is not affiliated with the federal government or the
            federal Health Insurance Marketplace.
          </p>
          <p>
            By using this website you agree to a web session recording by TrustedForm.
          </p>
          <p>
            Enrollment in a plan may be limited to certain times of the year unless you qualify for
            a Special Enrollment Period.
          </p>
          <p>
            Not all plans offer all of these benefits. Benefits may vary by carrier and location.
            Limitations and exclusions may apply.
          </p>
          <p>This is a solicitation for insurance.</p>
          <p>
            The plans we represent and their subsidiaries do not discriminate on the basis of race,
            color, national origin, age, disability, sex, sexual orientation, gender identity, or
            religion. To learn more about our nondiscrimination policy, please{" "}
            <a href="#" className="text-blue-600 hover:underline">
              click here
            </a>
            .
          </p>
          <p>
            Other Business Phone Numbers: 1-833-849-0822 / TTY: 711
          </p>
        </div>
      </div>
    </footer>
  );
}
