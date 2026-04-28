import { ReactNode } from "react"

export function PricingListSeparator(props: {
    children: ReactNode,
    variant?: boolean
}){
    return(
        <div className="relative flex justify-center py-5 items-center w-full">
            <div className={`w-full h-1 ${props.variant ? "bg-[var(--background)]" : "bg-primary-300"} rounded-full`}></div>
            <span className="px-2 text-lg">{props.children}</span>
            <div className={`w-full h-1 ${props.variant ? "bg-[var(--background)]" : "bg-primary-300"} rounded-full`}></div>
        </div>
    )
}