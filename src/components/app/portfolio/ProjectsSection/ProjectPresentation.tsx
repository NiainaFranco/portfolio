import { CopyIcon } from "@/components/DynamiqueIcons/CopyIcon";
import Image from "next/image";
import { ProjectPresentationSourceCodeLink } from "./ProjectPresentationSourceCodeLink";

export type ProjectPresentationPropsType = {
  name: string;
  sub?: string;
  description?: string;
  technos: string[];
  urls?: {
    link: string;
    flag: "Front" | "API" | "APK";
  }[];
  image?: string;
};

export function ProjectPresentation(props: ProjectPresentationPropsType) {
  const { name, technos, image, description, sub, urls } = props;
  return (
    <div className="w-full h-[fit-content] lg:flex-row flex-col shadow-md/20 bg-white flex gap-6 pt-8 p-7 p-3 rounded-2xl">
      {image && (
        <div className="py-3 rounded-3xl">
          <div className="aspect-3/2 w-[300px] h-[200px] overflow-hidden rounded-xl shadow-lg flex justify-center">
            <Image
              style={{
                transform: "matrix(1.2,0,0,1.2,1.2,1)",
              }}
              src={image || "/images/broken-image.png"}
              className="w-full h-full"
              width={400}
              height={200}
              alt="mindi-s-project"
            />
          </div>
        </div>
      )}
      <div>
        <div>
          <h1 className="lg:text-3xl text-xl text-primary-600 font-bold">{name}</h1>
          <h2 className="lg:text-xl text-lg text-secondary">{sub}</h2>
        </div>
        <div>
          <p className="pt-2 text-sm lg:text-lg text-justify">{description}</p>
        </div>
        <div className="flex flex-col">
          <div className="overflow-hidden pt-3 w-full relative">
            <TehcnoLister languages={technos} />
          </div>
          <div className="text-gray-800 pt-5 flex flex-wrap gap-3">
            {urls?.map((url, index) => {
              return <ProjectPresentationSourceCodeLink url={url} key={"project-presentation-source-code" + url.flag + index} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


function TehcnoLister(props: { languages: string[] }) {
  const { languages } = props;
  return (
    <div className="w-full flex flex-wrap gap-2">
      {languages.map((language, index) => {
        return (
          <span
            key={language + index}
            className="p-2 lg:text-lg text-sm bg-primary-200"
          >
            {language}
          </span>
        );
      })}
    </div>
  );
}
