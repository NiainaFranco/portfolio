import Image from "next/image";
import { ReactNode } from "react";
import { keyframes } from "styled-components";
import { ClientSideAutoSlider } from "./ClientSideAutoSlider";

export type ProjectPresentationPropsType = {
  name: string;
  sub?: string;
  description?: string;
  technos: string[];
  url?: string;
  image?: string
};

export function ProjectPresentation(props: ProjectPresentationPropsType) {
  const { name, technos, image, description, sub, url } = props;

  return (
    <div className="sm:w-[450px] shadow-lg justify-between flex flex-col gap-6 pt-8 p-7 border border-gray-200 rounded-3xl text-white">
      <div>
        <h1 className="text-2xl font-bold text-gold">{name}</h1>
        <h2 className="text-lg text-jade-light">{sub}</h2>
        <p className="pt-2 text-md text-gray-700 text-justify">{description}</p>
      </div>
      {image && (
        <div className="p-3 rounded-3xl">
          <div className="w-full overflow-hidden rounded-xl shadow-lg flex justify-center min-h-[130]">
            <Image
              style={{
                transform: "matrix(1.2,0,0,1.2,1.2,1)",
              }}
              src={image || "/images/broken-image.png"}
              width={400}
              height={200}
              alt="mindi-s-project"
            />
          </div>
        </div>
      )}
      <div className="flex flex-row">
        <div className="overflow-hidden w-[200px] mb:w-[250px] relative">
          <AutoSlider languages={technos} />
        </div>
        <div className="flex-1 text-black flex">
          <div className="w-full flex justify-center items-center">
            <a
              className="rounded-full py-2 px-4 text-white shadow-md bg-jade-light"
              href={url}
            >
              Repository Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutoSlider(props: { languages: string[] }) {
  const { languages } = props;
  return (
    <div className="w-full p-3 overflow-hidden">
      <ClientSideAutoSlider animationDuration="6s" itemNumber={languages.length}>
        {languages.map((language, index) => (
          <span
            className="min-w-[100px] text-jade-light  whitespace-nowrap text-ellipsis overflow-hidden p-2 py-1 border rounded-full text-center"
            key={"auto-slider-" + language + "-" + index}
          >
            {language}
          </span>
        ))}
      </ClientSideAutoSlider>
    </div>
  );
}

