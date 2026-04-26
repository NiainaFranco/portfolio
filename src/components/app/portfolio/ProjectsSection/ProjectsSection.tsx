import { SectionSeparator } from "@/components/SectionSeparator";
import { ProjectPresentation } from "./ProjectPresentation";

export default function ProjectsSection(){
    return (
      <div id="projects" className="w-full flex flex-col items-center">
        <div className="w-[var(--max-width)] p-7">
          <SectionSeparator>Projects</SectionSeparator>
          <div className="w-full p-3 py-7 flex justify-center flex-wrap gap-3">
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
              description="Realtime channel based messaging app using a WebSocket server paired with a Laravel Backend API and a React JS made UI."
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
              description="All in one ecommerce management for Macramer products that has an admin dashboard page to manage what the customers can see in the presentation interface, and the sayed presentation interface made for customers to browse and order products catalogue."
              sub="E-commerce APP"
              urls={[
                {
                  flag: "APK",
                  link: "https://github.com/hidden-machina/mindi-s-apk.git",
                },
              ]}
            />
          </div>
        </div>
      </div>
    );
}
