import { ReactNode } from "react";

export function ServiceOffer(props: {
    illustration: string;
    title: ReactNode;
    developement: ReactNode;
    children?: ReactNode
}){
    const {developement, children, illustration, title} = props
    return (
      <div className={`w-[900px] items-center flex pl-[40px] p-7 bg-[var(--background)] overflow-hidden relative`}>
        <div className="w-[200px] h-[200px] flex justify-center items-center p-2">
          <img
          height={200}
          width={200}
            src={`/images/illustrations/${illustration}.png`}
            alt="rocket illustration"
          />
        </div>
        <div className="flex-1 p-7">
          <h2 className="text-2xl">
            {
                title
            }
          </h2>
          <div className="pt-3 text-md text-justify flex flex-col gap-3">
            {
                developement
            }
          </div>
            {
              children 
            }
        </div>
      </div>
    );
}