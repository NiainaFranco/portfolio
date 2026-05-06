"use client";

import { HamburgerIcon } from "@/components/DynamiqueIcons/HamburgerIcon";
import { SideBar } from "./SideBar";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CrossIcon } from "@/components/DynamiqueIcons/CrossIcon";
import { useParams, useRouter } from "next/navigation";

export function MobileTopBar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const tnavigation = useTranslations("Navigation");
  const [changeClicked, setChangeClicked] = useState(false);
  const navigate = useRouter();
  const urlLocale = useParams().locale?.toString() as "fr" | "en";
  const [locale, setLocale] = useState<"fr" | "en">(urlLocale);
  const changeLanguage = () => {
    setChangeClicked(true);
    setLocale((state) => {
      if (state === "en") {
        return "fr";
      }
      return "en";
    });
    if (urlLocale === "en") {
      navigate.replace("fr");
      return;
    }
    navigate.replace("en");
    return;
  };
  return (
    <nav className="w-full top-0 block md:hidden lg:hidden left-0 relative z-40 sticky">
      <div className="p-3 bg-primary-500 flex justify-between">
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
        <div className="h-full flex items-center">
          <label
            htmlFor="changeLanguageSwitch"
            className={`${
              locale === "en" ? "justify-start" : "justify-end"
            } w-[60px] block p-1 rounded-full bg-primary-100 flex`}
          >
            <input
              id="changeLanguageSwitch"
              disabled={changeClicked}
              onChange={changeLanguage}
              type="checkbox"
              hidden
            />
            <span className="flex justify-center items-center bg-primary-400 shadow-lg/10 text-sm rounded-full w-[30px] h-[30px] text-center text-white">
              <strong>{locale}</strong>
            </span>
          </label>
        </div>
      </div>
      <SideBar setOpened={setShowSidebar} opened={showSidebar}>
        <div className="h-full min-w-[200px] bg-primary-500">
          <button
            onClick={() => setShowSidebar(false)}
            className="w-[60px] h-[60px]"
          >
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
            <a className="w-[fit-content] relative block" href="#contacts">
              {tnavigation("contacts")}
            </a>
          </div>
        </div>
      </SideBar>
    </nav>
  );
}
