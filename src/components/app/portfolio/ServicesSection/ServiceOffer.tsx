import { ReactNode } from "react";

export function ServiceOffer(props: {
    illustration: string;
    title: ReactNode;
    developement: ReactNode;
    children?: ReactNode
}){
    const {developement, children, illustration, title} = props
    return (
      <div className={`w-[900px] flex p-7 bg-white rounded-3xl`}>
        <div className="w-[300px] h-[300px] flex justify-center items-center p-2">
          <img
          height={300}
          width={300}
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