import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import LocationBar from "@/components/LocationBar";
import CarrierLogos from "@/components/CarrierLogos";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-2 bg-[#002868] w-full" />
      <Header />
      <main className="flex-1 flex flex-col">
        <LandingPage />
      </main>
      <LocationBar />
      <CarrierLogos />
      <SiteFooter />
      <CookieBanner />
    </div>
  );
}
