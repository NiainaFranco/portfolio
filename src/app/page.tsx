import AboutMeSection from "@/components/app/portfolio/AboutMeSection";
import AchievementsSection from "@/components/app/portfolio/AchievementsSection/AchievementsSection";
import Footer from "@/components/app/portfolio/Footer/Footer";
import HeroSection from "@/components/app/portfolio/HeroSection/HeroSection";
import TopBar from "@/components/app/portfolio/Navigation/TopBar";
import { OfferSection } from "@/components/app/portfolio/OfferSection/OfferSection";
import ProjectsSection from "@/components/app/portfolio/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/app/portfolio/SkillsSection/SkillsSection";
import { SectionSeparator } from "@/components/SectionSeparator";

export default function Portfolio(){
    return (
      <div>
        <div className="w-full text-primary-950 flex justify-center items-center flex-col">
            <TopBar />
            <div className="w-[430px] mt-[40px] lg:w-full md:w-full max-w-[1280px]">
              <HeroSection />
              <SectionSeparator>Services</SectionSeparator> 
              <OfferSection />
              <SectionSeparator>Projects</SectionSeparator> 
              <ProjectsSection />
              {/* <AboutMeSection />
              <SkillsSection />
              <AchievementsSection /> */}
              <Footer />
            </div>
        </div>
      </div>
    );
}