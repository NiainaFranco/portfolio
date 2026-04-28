"use client"

import { HamburgerIcon } from "@/components/DynamiqueIcons/HamburgerIcon";
import { SideBar } from "./SideBar";
import { useState } from "react";

export function MobileTopBar() {
  const [showSidebar, setShowSidebar] = useState(false);
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
      <SideBar opened={showSidebar}>something</SideBar>
    </nav>
  );
}
