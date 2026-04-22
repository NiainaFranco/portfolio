import { ReactNode } from "react";

export function OfferService(props: {
    illustration: string;
    title: ReactNode;
    developement: ReactNode;
    variation?: boolean
}){
    const {developement, illustration, variation, title} = props
    return (
      <div className={`flex p-7 ${variation && "bg-gray-200"} rounded-3xl`}>
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
          <div className="pt-3 text-md text-justify flex flex-col gap-2">
            {
                developement
            }
          </div>
        </div>
      </div>
    );
}