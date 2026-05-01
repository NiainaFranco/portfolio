"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [oldScrollPos, setOldScrollPos] = useState({ value: 0 });
  const [newScrollPos, setNewScrollPos] = useState({ value: 0 });
  const [show, setShow] = useState(true);
  const navigate = useRouter();
  const urlLocale = useParams().locale?.toString() as "fr" | "en"
  const [locale, setLocale] = useState<"fr" | "en">(urlLocale)
  const [changeClicked, setChangeClicked] = useState(false);

  useEffect(() => {
    window.addEventListener("scrollend", (e) => {
      setNewScrollPos({ value: window.scrollY });
    });
  }, []);
  useEffect(() => {
    if (newScrollPos.value <= 50) {
      setShow(true);
      return;
    }
    if (newScrollPos.value < oldScrollPos.value) {
      setOldScrollPos({ value: newScrollPos.value });
      setShow(true);
      console.log("scroll up");
    } else {
      setOldScrollPos({ value: newScrollPos.value });
      setShow(false);
    }
  }, [newScrollPos]);
  const changeLanguage = ()=>{
    setChangeClicked(true)
    setLocale((state)=>{
      if(state==="en"){
        return "fr"
      }
      return "en"
    })
    if(urlLocale === "en"){
      navigate.replace("fr")
      return;
    }
    navigate.replace("en")
    return;
  }
  return (
    <nav
      className={`${
        show ? "top-[15px]" : "top-[-200px]"
      } duration-[300ms] sticky z-40 w-full hidden lg:flex justify-center top-3`}
    >
      <div className="px-7 w-[var(--max-width)] max-w-[var(--max-width)]">
        <div
          className={`
            shadow-sm pl-3 p-1 backdrop-blur-sm flex flex-row font-semibold w-full bg-primary-500 rounded-2xl
            text-white
            md:justify-between
            lg:justify-between
          `}
        >
          <div
            className={`
            flex
            [&>a]:rounded-xl
            [&>a]:hover:bg-primary-400
            [&>a]:duration-[500ms]
            [&>a]:p-2 
            `}
          >
            <a className="w-[fit-content] relative block" href="#hero">
              Home
            </a>
            <a className="w-[fit-content] relative block" href="#services">
              Services
            </a>
            <a className="w-[fit-content] relative block" href="#about-me">
              About Me
            </a>
            <a className="w-[fit-content] relative block" href="#projects">
              Projets
            </a>
            <a className="w-[fit-content] relative block" href="#pricing">
              Pricing
            </a>
            <a className="w-[fit-content] relative block" href="#contacts">
              Contacts
            </a>
          </div>
          <div className="h-full flex items-center">
            <label htmlFor="changeLanguageSwitch" className={`${locale === "en" ? "justify-start" : "justify-end"} w-[60px] block p-1 rounded-full bg-primary-100 flex`}>
              <input id="changeLanguageSwitch" disabled={changeClicked} onChange={changeLanguage} type="checkbox" hidden />
              <span className="flex justify-center items-center bg-primary-400 text-sm rounded-full w-[30px] h-[30px] text-center text-white">
                <strong>
                  {locale}
                </strong>
              </span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
