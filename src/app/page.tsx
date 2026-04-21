import AboutMeSection from "@/components/app/portfolio/AboutMeSection";
import AchievementsSection from "@/components/app/portfolio/AchievementsSection/AchievementsSection";
import Footer from "@/components/app/portfolio/Footer/Footer";
import HeroSection from "@/components/app/portfolio/HeroSection/HeroSection";
import TopBar from "@/components/app/portfolio/Navigation/TopBar";
import { OfferSection } from "@/components/app/portfolio/OfferSection/OfferSection";
import ProjectsSection from "@/components/app/portfolio/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/app/portfolio/SkillsSection/SkillsSection";

export default function Portfolio(){
    return (
      <div>
        <div className="w-full flex justify-center items-center flex-col">
            <div className="w-[430px] lg:w-full md:w-full max-w-[1280px]">
              <HeroSection />
              <OfferSection />
              {/* <AboutMeSection />
              <SkillsSection />
              <ProjectsSection />
              <AchievementsSection /> */}
            </div>
        </div>
      </div>
    );
}