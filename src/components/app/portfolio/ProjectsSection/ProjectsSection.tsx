import { SectionSeparator } from "@/components/SectionSeparator";
import { ProjectPresentation } from "./ProjectPresentation";
import { useTranslations } from "next-intl";

export default function ProjectsSection() {
  const t = useTranslations("ProjectsSection");
  const tnavigation = useTranslations("Navigation");
  return (
    <div id="projects" className="w-full flex flex-col items-center">
      <div className="lg:w-[var(--max-width)] lg:p-7 p-3 w-full">
        <SectionSeparator>{tnavigation("projects")}</SectionSeparator>
        <div className="w-full py-7 flex justify-start flex-col gap-5">
          <ProjectPresentation
            name="Darkthunder ChatApp"
            image="/images/dark-thunder-ui.png"
            technos={[
              "React JS",
              "Tailwind CSS",
              "WebSocket",
              "Node js",
              "Express",
              "Laravel",
              "MySql",
            ]}
            description={t("project1")}
            sub="Messaging App"
            urls={[
              {
                flag: "Front",
                link: "https://github.com/hidden-machina/dark-thunder-ui.git",
              },
              {
                flag: "API",
                link: "https://github.com/hidden-machina/dark-thunder-api.git",
              },
            ]}
          />
          <ProjectPresentation
            name="Mindi's"
            image="/images/mindi-s-project.png"
            technos={["Nest JS", "Angular", "Tailwind CSS", "PostgreSQL"]}
            description={t("project2")}
            sub="E-commerce APP"
            urls={[
              {
                flag: "APK",
                link: "https://github.com/hidden-machina/mindi-s-apk.git",
              },
              {
                flag: "API",
                link: "https://github.com/hidden-machina/mindi-s-backend.git",
              },
              {
                flag: "Front",
                link: "https://github.com/hidden-machina/mindi-s-dashboard-v2.git",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
