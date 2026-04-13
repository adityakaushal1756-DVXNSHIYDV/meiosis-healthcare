import { ABDMSection } from "@/components/landing/ABDMSection";
import { ClinicalToolsSection } from "@/components/landing/ClinicalToolsSection";
import { CommunicationSection } from "@/components/landing/CommunicationSection";
import { DocumentsSection } from "@/components/landing/DocumentsSection";
import { EMREfficiencySection } from "@/components/landing/EMREfficiencySection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FluidDotsAnimation } from "@/components/landing/FluidDotsAnimation";
import { HeroSection } from "@/components/landing/HeroSection";
import { ManagementSection } from "@/components/landing/ManagementSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { PrivacySection } from "@/components/landing/PrivacySection";
import { TechTrustBar } from "@/components/landing/TechTrustBar";
import { TrustSection } from "@/components/landing/TrustSection";

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Full-viewport background animation — fixed, behind all content */}
      <FluidDotsAnimation />

      {/* Page content stacked above the animation */}
      <div className="relative" style={{ zIndex: 1 }}>
        <HeroSection />
        <TechTrustBar />
        <FeaturesSection />
        <CommunicationSection />
        <EMREfficiencySection />
        <ManagementSection />
        <PrivacySection />
        <ABDMSection />
        <ClinicalToolsSection />
        <DocumentsSection />
        <PricingSection />
        <TrustSection />
        <FinalCTASection />
      </div>
    </div>
  );
}
