"use client"

import { useDocumentRootRef } from "@/hooks/useOverlayRef"
import { Dispatch, ReactNode, SetStateAction } from "react"
import { createPortal } from "react-dom"

type SideBarPropsType = {
    children: ReactNode
    opened?: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
}

export function SideBar(props: SideBarPropsType) {
  const { children, opened, setOpened} = props;
  const documentRootRef = useDocumentRootRef();
  return (
    documentRootRef && opened &&
    createPortal(<Wrapper setOpened={setOpened}>{children}</Wrapper>, documentRootRef)
  );
};

function Wrapper(props: {
  children: ReactNode;
  setOpened: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="w-screen flex fixed top-0 left-0 overflow-hidden z-90 h-screen">
      <div className="w-[fit-content] h-full">
        {props.children}
      </div>
      <div onClick={()=>props.setOpened(false)} className="flex-1 bg-[#00000070]"></div>
    </div>
  );
}
