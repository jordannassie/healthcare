function ClockIcon() {
  return (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function QuestionBubbleIcon() {
  return (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}

const benefits = [
  {
    id: "time",
    Icon: ClockIcon,
    title: "Save Time",
    description: "Getting started takes less than 5 minutes.",
  },
  {
    id: "guesswork",
    Icon: QuestionBubbleIcon,
    title: "Skip the Guesswork",
    description: "Our expert advisors will help you pick the right coverage.",
  },
  {
    id: "fit",
    Icon: SparkleIcon,
    title: "Find Your Best Fit",
    description: "Compare plans to find your lowest rates.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: benefits list */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1e3d] mb-9 font-serif leading-tight">
              PickHealth Insurance makes it easy to save.
            </h2>

            <div className="space-y-7">
              {benefits.map(({ id, Icon, title, description }) => (
                <div key={id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-[#2d8653]">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e3d] mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: round photo */}
          <div className="flex-shrink-0">
            <div className="w-72 h-72 rounded-full overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&h=600&fit=crop&q=80"
                alt="Happy family outdoors"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
