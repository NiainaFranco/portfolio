"use client";

import { useEffect, useState } from "react";

export default function TopBar() {
  const [oldScrollPos, setOldScrollPos] = useState({ value: 0 });
  const [newScrollPos, setNewScrollPos] = useState({ value: 0 });
  const [show, setShow] = useState(true);

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
  return (
    <nav
      className={`${
        show ? "top-[15px]" : "top-[-200px]"
      } duration-[300ms] sticky z-40 w-full hidden lg:flex justify-center top-3`}
    >
      <div className="px-7 w-[var(--max-width)] max-w-[var(--max-width)]">
        <div
          className={`
            shadow-sm pl-3 p-1 backdrop-blur-sm flex flex-row justify-start font-semibold w-full bg-primary-500 rounded-2xl
            [&>a]:rounded-xl
            [&>a]:hover:bg-primary-400
            [&>a]:duration-[500ms]
            [&>a]:p-2 
            text-white
            md:justify-end
            lg:justify-end
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
      </div>
    </nav>
  );
}
