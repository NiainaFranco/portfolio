import { SectionSeparator } from "@/components/SectionSeparator";
import { ToolsList } from "./ToolsList";

export function AboutMeSection() {
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
    <section id="about-me" className="lg:w-[var(--max-width)] w-full p-3 lg:p-7">
      <div>
        <SectionSeparator>About Me</SectionSeparator>
      </div>
      <div className="flex w-full py-7 gap-7 justify-start">
          <img
            className="w-[500px] hidden lg:block h-[500px] rounded-3xl"
            src={"/images/language-presentation-image.jpg"}
          />
        <div className="flex-1 relative flex flex-col gap-8 lg:p-3">
          <div className="w-full">
            <h2 className="lg:text-3xl text-xl text-primary-600 lg:mb-3">
              I'm a{" "}
              <strong className="text-secondary">Javascript Developer</strong>.
            </h2>
            <div className="w-full">
              <div className="lg:p-3 w-full h-full block lg:hidden">
                <img
                  className="w-full h-full rounded-3xl"
                  src={"/images/language-presentation-image.jpg"}
                />
              </div>
              <p className="text-justify mt-3 text-md lg:text-lg">
                I'm a{" "}
                software developer{" "}
                experienced with <strong className="text-secondary">web developement</strong>. As such, my bread and butter is
                the Javascript{" "}
                language which is running on all modern browser and his vast
                ecosystem of library, frameworks and packages.
              </p>
            </div>
          </div>
          <div>
            <h2 className="lg:text-3xl text-xl text-primary-600 mb-4 w-full">
              Platforms and{" "}
              Tools I use.
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
