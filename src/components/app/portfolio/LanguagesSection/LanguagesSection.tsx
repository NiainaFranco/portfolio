import { SectionSeparator } from "@/components/SectionSeparator";
import { ToolsList } from "./ToolsList";

export function LanguagesSection() {
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
    <section id="about-me" className="w-[var(--max-width)] p-7">
      <div>
        <SectionSeparator>About Me</SectionSeparator>
      </div>
      <div className="flex w-full py-7 gap-7 justify-start">
        <div className="w-[500px] h-[500px]">
          <img
            className="w-full h-full rounded-3xl"
            src={"/images/language-presentation-image.jpg"}
          />
        </div>
        <div className="flex-1 flex flex-col gap-8 p-3">
          <div>
            <h2 className="text-3xl text-primary-600 mb-3">
              I'm a{" "}
              <strong className="text-secondary">Javascript Developer</strong>.
            </h2>
            <p className="text-justify text-lg">
              I'm a{" "}
              software developer{" "}
              experienced with web developement. As such, my bread and butter is
              the Javascript{" "}
              language which is running on all modern browser and his vast
              ecosystem of library, frameworks and packages.
            </p>
          </div>
          <div>
            <h2 className="text-3xl text-primary-600 mb-4 w-full">
              Platforms and{" "}
              Tools I use.
            </h2>
            <div className="flex justify-start gap-3 [&>div]:flex-1">
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
