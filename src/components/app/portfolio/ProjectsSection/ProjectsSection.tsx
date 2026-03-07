import { SectionTitle } from "../SkillsSection/SkillsSection";
import { ProjectPresentation } from "./ProjectPresentation";

export default function ProjectsSection(){
    return (
      <div id="projects" className="w-full flex flex-col items-center">
        <SectionTitle>Mes projets personnels</SectionTitle>
        <div className="max-w-[1100px]">
          <div className="w-full p-3 flex justify-center flex-wrap gap-[40]">
            <ProjectPresentation
              name="Darkthunder ChatApp"
              image="/images/dark-thunder-ui.png"
              technos={["React JS", "Tailwind CSS", "Node js", "Express", "Laravel", "MySql"]}
              description="Application de messagerie en temps réel composer d’un Interface Utilisateur, API et d’un server Socket"
              sub="Messaging App"
              url="https://github.com/hidden-machina/dark-thunder-ui.git"
            />
            <ProjectPresentation
              name="Mindi's"
              image="/images/mindi-s-project.png"
              technos={["Expo CLI", "React Native", "Node js", "Typescript", "Electron js", "Laravel", "MySql"]}
              description="Une application mobile E-commerce pour faciliter la vie aux clients et aux vendeurs des produits de Mindi's (un business de vente de produit fait en Macramé) en automatisant tout ce qui est commande et publication des produits. La notion de palette de couleur étant importante dans ce business, cela a été mis en valeur dans l'application."
              sub="E-commerce APP"
              url="https://github.com/hidden-machina/mindi-s-apk.git"
            />
          </div>
        </div>
      </div>
    );
}
