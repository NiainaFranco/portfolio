import { SectionSeparator } from "@/components/SectionSeparator";
import { ToolsList } from "./ToolsList";

export function LanguagesSection(){
  const frontend = ["ReactJS", "NextJS", "Angular", "Tailwindcss"]
  const backend = ["Node", "NestJS", "ExpressJS", "Java Spring Boot", "Laravel"]
  const database = ["PostgreSQL", "Sqlite", "MySQL"]
  const deployementPlatform = ["AWS", "Vercel"]
    return (
      <section id="tools" className="w-[var(--max-width)] p-7">
        <div>
          <SectionSeparator>Tools</SectionSeparator>
        </div>
        <div className="flex w-full py-7 gap-7 justify-start">
          <div className="w-[500px] h-[500px]">
            <img
              className="w-full h-full rounded-3xl"
              src={"/images/language-presentation-image.jpg"}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl mb-3">
              <strong className="text-secondary">Language</strong> I often use
              for my projects.
            </h2>
            <p className="text-justify text-lg">
              I'm a{" "}
              <strong className="text-secondary">software developer</strong>{" "}
              experienced with web developement. As such, my bread and butter is
              the <strong className="text-secondary">Javascript</strong>{" "}
              language witch is running on all modern browser and his vast
              ecosystem of library, frameworks and packages.
            </p>
          </div>
        </div>
        <div className="pt-7">
          <h2 className="text-3xl mb-7 w-full text-center">
            My {""}
            <strong className="text-secondary">Platforms</strong> and{" "}
            <strong className="text-secondary">Tools.</strong>
          </h2>
          <div className="flex justify-between gap-3 [&>div]:pl-5 [&>div]:border-l-8 [&>div]:border-primary-500 [&>div]:flex-1">
            <div>
              <ToolsList listName="Frontend" toolsNames={frontend} />
            </div>
            <div>
              <ToolsList listName="Backend" toolsNames={backend} />
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
      </section>
    );
}