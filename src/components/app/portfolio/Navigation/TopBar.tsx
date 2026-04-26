"use client";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

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
    } else {
      setOldScrollPos({ value: newScrollPos.value });
      setShow(false);
    }
  }, [newScrollPos]);
  return (
       <nav
        style={{ top: show ? "15px" : "-200px" }}
        className="duration-[300ms] sticky z-40 w-[var(--max-width)] max-w-[var(--max-width)] top-3 px-7"
      >
        <div
          className={`
            shadow-sm pl-3 p-1 backdrop-blur-sm flex flex-row justify-start font-semibold w-full bg-primary-500 rounded-2xl
            [&>a]:rounded-xl
            [&>a]:hover:bg-primary-400
            [&>a]:duration-[500ms]
            [&>a]:p-2
            text-black
            border-4
            border-primary-700
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
          <a className="w-[fit-content] relative block" href="#projects">
            Projets
          </a>
          <a className="w-[fit-content] relative block" href="#footer">
            Contacts
          </a>
        </div>
      </nav>     

  );
}
