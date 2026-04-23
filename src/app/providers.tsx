"use client"

import { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Providers(props: {children: ReactNode}){
    return (
        <ParallaxProvider>
            {props.children}
        </ParallaxProvider>

    )
}