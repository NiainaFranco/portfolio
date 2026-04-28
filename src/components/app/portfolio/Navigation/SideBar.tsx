import { useDocumentRootRef } from "@/hooks/useOverlayRef"
import { ReactNode, useEffect } from "react"
import { createPortal } from "react-dom"

type SideBarPropsType = {
    children: ReactNode
    opened?: boolean
}

export function SideBar(props: SideBarPropsType) {
  const { children, opened } = props;
  const documentRootRef = useDocumentRootRef();
  return (
    documentRootRef && opened &&
    createPortal(<Wrapper>{children}</Wrapper>, documentRootRef)
  );
}

function Wrapper(props: {children: ReactNode}){
    return (
        <div className="w-screen fixed top-0 left-0 overflow-hidden bg-[#00000070] h-screen ">
            {props.children}
        </div>
    )
}
