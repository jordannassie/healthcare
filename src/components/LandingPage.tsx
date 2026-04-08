"use client";

import { useState } from "react";

/* ─── Types ─────────────────────────────────────────────── */
type Step =
  | "landing"
  | "insurance"
  | "birthyear"
  | "state"
  | "household"
  | "contact"
  | "done";

interface FormData {
  zip: string;
  hasInsurance: string;
  birthYear: string;
  state: string;
  household: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

const STEP_META: Record<Step, { progress: number; message: string }> = {
  landing:   { progress: 0,   message: "" },
  insurance: { progress: 35,  message: "Takes less than 2 minutes to request your quote." },
  birthyear: { progress: 45,  message: "You're halfway to your quote." },
  state:     { progress: 60,  message: "Almost there!" },
  household: { progress: 75,  message: "Just a couple more details." },
  contact:   { progress: 90,  message: "Final step!" },
  done:      { progress: 100, message: "You're all set!" },
};

/* ─── Progress bar ───────────────────────────────────────── */
function ProgressBar({ pct }: { pct: number }) {
  return (
    <div className="w-full max-w-sm mx-auto mb-2">
      <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full rounded-full bg-[#E8000D] transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* ─── Quiz wrapper ───────────────────────────────────────── */
function QuizShell({
  step,
  children,
}: {
  step: Step;
  children: React.ReactNode;
}) {
  const { progress, message } = STEP_META[step];
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Find the right plan for you!
        </h2>
        <p className="text-gray-500 text-sm mb-5">
          Please answer the following questions so we can provide you with an accurate quote.
        </p>

        <ProgressBar pct={progress} />

        <p className="text-sm mb-8">
          <span className="font-bold">{progress}% COMPLETE!</span>{" "}
          <span className="text-gray-600">{message}</span>
        </p>

        {children}
      </div>
    </div>
  );
}

/* ─── Landing / ZIP step ─────────────────────────────────── */
function LandingHero({
  zip,
  onChange,
  onStart,
}: {
  zip: string;
  onChange: (v: string) => void;
  onStart: () => void;
}) {
  const handleStart = () => {
    if (zip.trim().length === 5) onStart();
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-16 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
        Explore Health Insurance Plans
      </h1>
      <p className="text-lg font-semibold text-gray-700 mb-8">
        Get your quote in minutes!
      </p>

      <div className="w-full max-w-md">
        <p className="text-sm text-left font-medium text-gray-700 mb-2">
          Start with your ZIP code:
        </p>
        <div className="flex gap-0 rounded-md overflow-hidden border border-gray-300 shadow-sm">
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            placeholder="Enter ZIP Code"
            value={zip}
            onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
            onKeyDown={(e) => e.key === "Enter" && handleStart()}
            className="flex-1 px-4 py-3 text-base outline-none"
          />
          <button
            onClick={handleStart}
            className="px-8 py-3 bg-[#E8000D] hover:bg-[#b50009] text-white font-bold text-base transition-colors cursor-pointer"
          >
            Start
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 mt-5 text-sm text-gray-500 font-medium">
          <span>Top Carriers &amp; Plans</span>
          <span className="text-gray-300">|</span>
          <span>Hassle-Free Process</span>
          <span className="text-gray-300">|</span>
          <span>100% Safe &amp; Secure</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Step: Current insurance ────────────────────────────── */
function InsuranceStep({
  onAnswer,
}: {
  onAnswer: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Do you currently have health insurance?
      </h3>
      <div className="flex flex-col gap-3">
        {["Yes", "No"].map((opt) => (
          <button
            key={opt}
            onClick={() => onAnswer(opt)}
            className="w-full py-4 border-2 border-gray-300 rounded-lg text-base font-medium text-gray-800 hover:border-[#002868] hover:text-[#002868] transition-colors cursor-pointer"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Step: Birth year ───────────────────────────────────── */
function BirthYearStep({
  value,
  onChange,
  onNext,
}: {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        What <span className="underline">Year</span> were you born?
      </h3>
      <input
        type="text"
        inputMode="numeric"
        maxLength={4}
        placeholder="Enter Birth Year"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
        onKeyDown={(e) => e.key === "Enter" && value.length === 4 && onNext()}
        className="w-full px-4 py-4 border-2 border-[#002868] rounded-lg text-base text-center outline-none mb-4 focus:border-[#E8000D]"
      />
      <button
        onClick={onNext}
        disabled={value.length !== 4}
        className="w-full py-4 bg-[#002868] hover:bg-[#001a45] disabled:opacity-40 text-white font-bold text-base rounded-lg transition-colors cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

/* ─── Step: State ────────────────────────────────────────── */
function StateStep({
  value,
  onChange,
  onNext,
}: {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        What <span className="underline">state</span> do you live in?
      </h3>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-4 border-2 border-[#002868] rounded-lg text-base outline-none mb-4 bg-white focus:border-[#E8000D]"
      >
        <option value="">Select your state</option>
        {US_STATES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <button
        onClick={onNext}
        disabled={!value}
        className="w-full py-4 bg-[#002868] hover:bg-[#001a45] disabled:opacity-40 text-white font-bold text-base rounded-lg transition-colors cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

/* ─── Step: Household size ───────────────────────────────── */
function HouseholdStep({ onAnswer }: { onAnswer: (v: string) => void }) {
  const options = ["Just me", "Me + spouse", "Me + child(ren)", "Family (3+)"];
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Who needs <span className="underline">coverage</span>?
      </h3>
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onAnswer(opt)}
            className="w-full py-4 border-2 border-gray-300 rounded-lg text-base font-medium text-gray-800 hover:border-[#002868] hover:text-[#002868] transition-colors cursor-pointer"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Step: Contact info ─────────────────────────────────── */
function ContactStep({
  data,
  onChange,
  onSubmit,
}: {
  data: Pick<FormData, "firstName" | "lastName" | "email" | "phone">;
  onChange: (field: keyof FormData, value: string) => void;
  onSubmit: () => void;
}) {
  const ready = data.firstName && data.lastName && data.email && data.phone;
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Where should we send your quote?
      </h3>
      <p className="text-sm text-gray-500 mb-5">
        Your information is 100% secure and never sold.
      </p>
      <div className="flex flex-col gap-3 text-left">
        <div className="flex gap-3">
          <input
            placeholder="First Name"
            value={data.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-[#002868]"
          />
          <input
            placeholder="Last Name"
            value={data.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-[#002868]"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-[#002868]"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-[#002868]"
        />
      </div>
      <button
        onClick={onSubmit}
        disabled={!ready}
        className="w-full mt-4 py-4 bg-[#E8000D] hover:bg-[#b50009] disabled:opacity-40 text-white font-bold text-base rounded-lg transition-colors cursor-pointer"
      >
        Get My Free Quote →
      </button>
      <p className="text-xs text-gray-400 mt-3 leading-relaxed">
        By clicking above, I agree to be contacted by a licensed insurance agent via calls, texts,
        or email. This consent is not required to purchase insurance.
      </p>
    </div>
  );
}

/* ─── Done screen ────────────────────────────────────────── */
function DoneScreen() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-[#002868]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-3">You&apos;re all set!</h2>
      <p className="text-gray-600 max-w-sm">
        A licensed insurance agent will be in touch shortly with your personalized quote. Check your
        email and phone for next steps.
      </p>
      <a
        href="tel:8338490822"
        className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#E8000D] hover:bg-[#b50009] text-white font-bold rounded-lg transition-colors"
      >
        Call Now: 1-833-849-0822
      </a>
    </div>
  );
}

/* ─── Root export ────────────────────────────────────────── */
export default function LandingPage() {
  const [step, setStep] = useState<Step>("landing");
  const [form, setForm] = useState<FormData>({
    zip: "",
    hasInsurance: "",
    birthYear: "",
    state: "",
    household: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (step === "landing") {
    return (
      <LandingHero
        zip={form.zip}
        onChange={(v) => update("zip", v)}
        onStart={() => setStep("insurance")}
      />
    );
  }

  if (step === "done") return <DoneScreen />;

  return (
    <QuizShell step={step}>
      {step === "insurance" && (
        <InsuranceStep
          onAnswer={(v) => {
            update("hasInsurance", v);
            setStep("birthyear");
          }}
        />
      )}

      {step === "birthyear" && (
        <BirthYearStep
          value={form.birthYear}
          onChange={(v) => update("birthYear", v)}
          onNext={() => setStep("state")}
        />
      )}

      {step === "state" && (
        <StateStep
          value={form.state}
          onChange={(v) => update("state", v)}
          onNext={() => setStep("household")}
        />
      )}

      {step === "household" && (
        <HouseholdStep
          onAnswer={(v) => {
            update("household", v);
            setStep("contact");
          }}
        />
      )}

      {step === "contact" && (
        <ContactStep
          data={{
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
          }}
          onChange={update}
          onSubmit={() => setStep("done")}
        />
      )}
    </QuizShell>
  );
}
