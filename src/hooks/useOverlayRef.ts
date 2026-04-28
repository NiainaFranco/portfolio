import { useEffect, useState } from "react";

export function useDocumentRootRef(){
    const [ref, setRef] = useState<HTMLElement | null>(null);
    useEffect(()=>{
        const overlayRef = document.getElementById("rootId") 
        setRef(overlayRef)
    })
    return ref
}