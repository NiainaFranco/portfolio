"use client"

import Image from "next/image";
import React, { useEffect, useRef } from "react";



export function Carrousel (props: {carrouselImages?: string[]}){
    const {carrouselImages} = props
    const scrollableContainer = useRef<HTMLDivElement>(null);
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-[500px] flex items-center flex-col gap-3">
                <h2 className="text-xl text-gray-700">Mon travail sur quelques UI.</h2>
                <div ref={scrollableContainer} className="flex shadow-inner rounded-xl flex-col overflow-y-scroll items-center py-[34px] w-full h-[250px] snap-mandatory border border-gray-200 snap-y gap-[24px] overflow-x-hidden ">
                    {
                        carrouselImages?.map((carrouselImage, index)=>{
                            return <CarrouselImage key={`Carrousel-image-${carrouselImage}-${index}`} src={carrouselImage} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export function CarrouselImage(props: {src: string}){
    return (
      <div className="w-[400px] snap-center shrink-0 h-[200px] shadow-lg overflow-hidden rounded-lg">
        <Image
          className="w-full h-full"
          height={300}
          width={500}
          alt="showcase image"
          {...props}
        />
      </div>
    );
}