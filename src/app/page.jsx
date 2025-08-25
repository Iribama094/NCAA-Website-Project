"use client";

import GlobalStyles from "@/components/AlumniLandingPage/GlobalStyles";
import NavigationBar from "@/components/AlumniLandingPage/NavigationBar";
import HeroSection from "@/components/AlumniLandingPage/HeroSection";
import AboutUsSection from "@/components/AlumniLandingPage/AboutUsSection";
import UniversityLogoSlideshow from "@/components/AlumniLandingPage/UniversityLogoSlideshow";
import MembershipSection from "@/components/AlumniLandingPage/MembershipSection";
import BenefitsSection from "@/components/AlumniLandingPage/BenefitsSection";
import EventsSection from "@/components/AlumniLandingPage/EventsSection";
import GivingSection from "@/components/AlumniLandingPage/GivingSection";
import NewsSection from "@/components/AlumniLandingPage/NewsSection";
import Footer from "@/components/AlumniLandingPage/Footer";

export default function AlumniLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <GlobalStyles />
      <NavigationBar />
      <main>
        <HeroSection />
        <AboutUsSection />
        <UniversityLogoSlideshow />
        <MembershipSection />
        <BenefitsSection />
        <EventsSection />
        <GivingSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}