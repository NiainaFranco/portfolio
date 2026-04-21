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
    if (newScrollPos.value <= 200) {
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
      style={{ marginTop: show ? 0 : "-100px" }}
      className="duration-[500ms] fixed z-40 w-full top-3 px-2"
    >
      <div
        className={`
          shadow-sm pl-3 backdrop-blur-sm flex flex-row justify-start font-semibold w-full text-primary-800 rounded-full
          md:justify-end
          lg:justify-end
        `}
      >
        <a className="p-3 w-[fit-content] relative block" href="#hero">
          Home
        </a>
        <a className="p-3 w-[fit-content] relative block" href="#services">
          Services
        </a>
        <a className="p-3 w-[fit-content] relative block" href="#projects">
          Projets
        </a>
        <a
          className="m-1 px-3 rounded-full items-center w-[fit-content] text-white relative bg-primary-500 flex"
          href="#footer"
        >
          <span className="w-full">Contacts</span>
        </a>
      </div>
    </nav>
  );
}
