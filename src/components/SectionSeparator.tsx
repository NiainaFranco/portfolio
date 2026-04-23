"use client"
import { ReactNode } from "react";
import { Parallax } from "react-scroll-parallax";

export function SectionSeparator(props: {children?: ReactNode}){
    return(
        <div className="w-full py-[70px] flex justify-center items-center">
          <h1 className="text-5xl bg-primary-500 p-5 text-white font-extrabold">
            {props.children}
          </h1>
        </div>
    )
}