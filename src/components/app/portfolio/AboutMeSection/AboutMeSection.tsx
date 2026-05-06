import { SectionSeparator } from "@/components/SectionSeparator";
import { ToolsList } from "./ToolsList";
import { useTranslations } from "next-intl";
import { highlight } from "@/components/Highlight";

export function AboutMeSection() {
  const t = useTranslations("AboutMeSection");
  const tnavigation = useTranslations("Navigation")
  const frontend = ["ReactJS", "NextJS", "Angular", "Tailwindcss"];
  const backend = [
    "Node",
    "NestJS",
    "ExpressJS",
    "Java Spring Boot",
    "Laravel",
  ];
  const database = ["PostgreSQL", "Sqlite", "MySQL"];
  const deployementPlatform = ["AWS", "Vercel"];

  return (
    <section id="about-me" className="lg:max-w-[var(--max-width)] w-[var(--max-width)] w-full p-3 lg:p-7">
      <div>
        <SectionSeparator>{tnavigation("aboutMe")}</SectionSeparator>
      </div>
      <div className="flex w-full py-7 gap-7 justify-start">
          <img
            className="lg:w-[500px] md:w-[300px] md:h-[300px] hidden md:block lg:block lg:h-[500px] rounded-3xl"
            src={"/images/language-presentation-image.jpg"}
          />
        <div className="flex-1 relative flex flex-col gap-8 lg:p-3">
          <div className="w-full">
            <h2 className="lg:text-3xl text-xl text-primary-600 lg:mb-3">
              {t.rich("title1", highlight())}
            </h2>
            <div className="w-full sm:flex sm:flex-col sm:items-center">
              <div className="lg:p-3 sm:w-[400px] sm:h-[400px] w-full h-full block md:hidden lg:hidden">
                <img
                  className="w-full h-full rounded-3xl"
                  src={"/images/language-presentation-image.jpg"}
                />
              </div>
              <p className="text-justify mt-3 text-md lg:text-lg">
                {t.rich("text", highlight())}
              </p>
            </div>
          </div>
          <div>
            <h2 className="lg:text-3xl text-xl text-primary-600 mb-4 w-full">
              {t("title2")}
            </h2>
            <div className="flex flex-wrap justify-start gap-3 [&>div]:flex-1">
              <div>
                <ToolsList listName="Backend" toolsNames={backend} />
              </div>
              <div>
                <ToolsList listName="Frontend" toolsNames={frontend} />
              </div>
              <div>
                <ToolsList listName="Databases" toolsNames={database} />
              </div>
              <div>
                <ToolsList
                  listName="Deployement Platform"
                  toolsNames={deployementPlatform}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
