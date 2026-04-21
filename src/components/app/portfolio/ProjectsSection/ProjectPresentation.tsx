import Image from "next/image";

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
    <div className="sm:w-[450px] h-[fit-content] shadow-md flex flex-col gap-6 pt-8 p-7 border shadow-primary-100 border-primary-200 rounded-3xl">
      <div>
        <h1 className="text-3xl text-primary-600 font-bold">{name}</h1>
        <h2 className="text-lg text-secondary">{sub}</h2>
      </div>
      {image && (
        <div className="py-3 rounded-3xl">
          <div className="w-full overflow-hidden rounded-xl shadow-lg flex justify-center">
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
      <div>
        <p className="pt-2 text-md text-gray-700 text-justify">{description}</p>
      </div>
      <div className="flex flex-col">
        <div className="overflow-hidden w-full relative">
          <TehcnoLister languages={technos} />
        </div>
        <div className="text-black pt-5 flex">
          <div className="w-full flex border border-primary-500 rounded-xl overflow-hidden justify-end">
            <input type="text" className="w-full h-full p-2" readOnly value={url} />
            <a
              className="p-2 text-white shadow-md bg-primary-500 rounded-r-xl"
              href={url}
            >
              <img className="w-[40px] h-[40px]" src="/icons/github.svg" alt="github icon" />
            </a>
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
      {
        languages.map((language, index)=>{
          return (
            <span key={language + index} className="p-2 bg-primary-200">{language}</span>
          )
        })
      }
      
    </div>
  );
}

