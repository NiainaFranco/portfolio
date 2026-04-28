import AchievementsSection from "@/components/app/portfolio/AchievementsSection/AchievementsSection";
import Footer from "@/components/app/portfolio/Footer/Footer";
import HeroSection from "@/components/app/portfolio/HeroSection/HeroSection";
import { AboutMeSection } from "@/components/app/portfolio/LanguagesSection/AboutMeSection";
import TopBar from "@/components/app/portfolio/Navigation/TopBar";
import { PricingSection } from "@/components/app/portfolio/PricingSection/PricingSection";
import ProjectsSection from "@/components/app/portfolio/ProjectsSection/ProjectsSection";
import { ServicesSection } from "@/components/app/portfolio/ServicesSection/ServicesSection";
import { SectionSeparator } from "@/components/SectionSeparator";

export default function Portfolio(){
    return (
      <>
      <TopBar />
      <div>
        <div className="w-full text-primary-950">
            <div className="relative lg:w-full flex-col items-center w-full flex justify-center md:w-full">
              <HeroSection />
              <ServicesSection />
              <AboutMeSection />
              {/* <ProjectsSection />
              <PricingSection />
              <Footer /> */}
            </div>
        </div>
      </div>
      </>
    );
}