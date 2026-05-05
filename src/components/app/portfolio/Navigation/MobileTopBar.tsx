"use client"

import { HamburgerIcon } from "@/components/DynamiqueIcons/HamburgerIcon";
import { SideBar } from "./SideBar";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CrossIcon } from "@/components/DynamiqueIcons/CrossIcon";

export function MobileTopBar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const tnavigation = useTranslations("Navigation")
  return (
    <nav className="w-full top-0 block md:hidden lg:hidden left-0 relative z-40 sticky">
      <div className="p-3 bg-primary-500">
        <div className="w-[40px] h-[40px]">
          <button
            className="w-full h-full"
            onClick={() => {
              setShowSidebar(true);
              console.log("show");
            }}
          >
            <HamburgerIcon className="stroke-white" />
          </button>
        </div>
      </div>
      <SideBar setOpened={setShowSidebar} opened={showSidebar}>
        <div className="h-full min-w-[200px] bg-primary-500">
            <button onClick={()=>setShowSidebar(false)} className="w-[60px] h-[60px]">
              <CrossIcon className="fill-white" />
            </button>
          <div
            className={`
            flex-col
            [&>a]:rounded-xl
            [&>a]:hover:bg-primary-400
            [&>a]:duration-[500ms]
            [&>a]:p-2 
            text-white
            text-xl
            `}
          >
            <a className="w-[fit-content] relative block" href="#hero">
              {tnavigation("home")}
            </a>
            <a className="w-[fit-content] relative block" href="#services">
              {tnavigation("services")}
            </a>
            <a className="w-[fit-content] relative block" href="#about-me">
              {tnavigation("aboutMe")}
            </a>
            <a className="w-[fit-content] relative block" href="#projects">
              {tnavigation("projects")}
            </a>
            <a className="w-[fit-content] relative block" href="#pricing">
              {tnavigation("pricing")}
            </a>
            <a className="w-[fit-content] relative block" href="#contacts">
              {tnavigation("contacts")}
            </a>
          </div>
        </div>
      </SideBar>
    </nav>
  );
}
