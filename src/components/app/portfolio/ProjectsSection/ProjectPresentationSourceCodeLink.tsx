"use client"
import { CopyIcon } from "@/components/DynamiqueIcons/CopyIcon";
import { CorrectIcon } from "@/components/DynamiqueIcons/CorrectIcon";
import { CrossIcon } from "@/components/DynamiqueIcons/CrossIcon";
import { useState } from "react";

export function ProjectPresentationSourceCodeLink(props: {
  url: {
    link: string;
    flag: "Front" | "API" | "APK";
  };
}) {
  const { url } = props;
  const [copied, setCopied] = useState<"T" | "F" | "E">("F");
  const copyUrl = async (arg:string)=>{
    if(navigator.clipboard){
        navigator.clipboard.writeText(arg).then(()=>{
            setCopied("T")
        }).catch(()=>{
            alert("could not copy to clipboard")
            setCopied("E")
        });
    }else{
        setCopied("E")
    }
  }
  return (
    <div className="pl-2 justify-between flex rounded-xl overflow-hidden shadow-md bg-primary-600 items-center">
      <a
        className="block p-1 flex-1 flex gap-2 items-center text-white"
        href={url.link}
      >
        <img
          className="w-[35px] h-[35px]"
          src="/icons/github.svg"
          alt="github icon"
        />
        <div className="pr-3 text-sm font-bold text-white">{url.flag}</div>
      </a>
      <div className="flex justify-center px-2 h-full rounded-r-xl bg-primary-500 items-center">
        <button onClick={()=>{copyUrl(url.link)}} className="w-[30px] h-[30px] relative">
          <div className="w-full z-10 h-full">
            <div className={`${copied === "F" ? "block" : "hidden"}`}>
                <CopyIcon
                  frontClassName="fill-primary-100"
                  backClassName="fill-primary-200"
                />
            </div>
            <div className={`${copied === "T" ? "block" : "hidden"}`}>
                <CorrectIcon className="fill-primary-100" />
            </div>
            <div className={`${copied === "E" ? "block" : "hidden"}`}>
                <CrossIcon className="fill-primary-100" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}