import { ReactNode } from "react";

export function SectionSeparator(props: {children?: ReactNode}){
    return(
        <div className="w-full p-7 flex justify-center items-center">
          <h1 className="text-5xl bg-primary-500 p-5 text-white font-extrabold">
            {props.children}
          </h1>
        </div>
    )
}