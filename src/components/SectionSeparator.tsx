"use client"
import { ReactNode } from "react";
import { Parallax } from "react-scroll-parallax";

export function SectionSeparator(props: {children?: ReactNode}){
    return(
        <div className="w-full py-lg flex justify-start items-center">
          <h1 className="lg:text-4xl text-2xl w-full p-3 lg:p-5 text-black bg-primary-500 font-extrabold">
            {props.children}
          </h1>
        </div>
    )
}