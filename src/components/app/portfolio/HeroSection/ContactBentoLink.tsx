import { ReactNode } from "react";

export function ContactBentoLink(props: {size: number, icon: ReactNode, href?: string}){
    const {size, href, icon } = props;
    return(
        <a href={href} className="shadow-sm hover:shadow-md group hover:bg-[var(--background)] duration-[500ms] bg-primary-600 rounded-xl p-3 block" style={{
            width: size,
            height: size
        }}>
            {icon}
        </a>        
    )
}