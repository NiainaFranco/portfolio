import { SectionTitle } from "../SkillsSection/SkillsSection";
import { ProjectPresentation } from "./ProjectPresentation";

export default function ProjectsSection(){
    return (
      <div id="projects" className="w-full flex flex-col items-center">
        <div className="w-full">
          <div className="w-full p-3 flex justify-center flex-wrap gap-[100px]">
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
              url="https://github.com/hidden-machina/dark-thunder-ui.git"
            />
            <ProjectPresentation
              name="Mindi's"
              image="/images/mindi-s-project.png"
              technos={["Nest JS", "Angular", "Tailwind CSS", "PostgreSQL"]}
              description="All in one ecommerce management for Macramer products that has an admin dashboard page to manage what the customers can see in the presentation interface, and the sayed presentation interface made for customers to browse and order products catalogue."
              sub="E-commerce APP"
              url="https://github.com/hidden-machina/mindi-s-apk.git"
            />
          </div>
        </div>
      </div>
    );
}
