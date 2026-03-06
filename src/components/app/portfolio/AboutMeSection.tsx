import Image from "next/image";
import { SectionTitle } from "./SkillsSection/SkillsSection";

export default function AboutMeSection() {
  return (
    <div id="about-me" className="w-full">
      <div className="mb:px-3 lg:px[90] xl:px-[100]">
        <SectionTitle className="text-jade-standard">A propos de moi !</SectionTitle>
        <div className="flex-col items-center sm:flex-row lg:flex-row gap-9 flex justify-center w-full">
          <div className="rounded-2xl flex justify-center"> 
            <div className="w-[300] relative h-[300]">
              <div className="w-full absolute h-full rounded-2xl shadow-lg bg-jade-light mt-[15px] ml-[20px]"></div>
              <div className="mb:w-[100] mb:h-[100] overflow-hidden shadow-lg w-[300] rounded-2xl h-[300]">
                <Image
                  alt="hero"
                  className="rounded-2xl z-10"
                  style={{
                    transform: "matrix(2,0,0,1.9,20,-30)",
                    width: 250,
                    height: 350,
                  }}
                  width={600}
                  height={600}
                  src={"/images/hero-illustration.jpg"}
                />
              </div>
            </div>
          </div>
          <div className="max-w-[600px] p-4 mt-3 flex flex-col">
            <div className="w-full">
              <div className="text-lg text-justify">
                Je suis un developper fullstack localisé à{" "}
                <span className="text-jade-light">
                  Madagascar, Antananarivo
                </span>{" "}
                et je travaille surtout avec{" "}
                <span className="text-jade-light">Javascript</span> 
                comme language de programmation.
              </div>
              <div className="text-lg pt-4">
                Je suis ouvert à tout type de travail{" "}
                <span className="text-jade-light">
                  freelance (bug fix, ajout de fonctionnaliter)  et contrat a long term.
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
