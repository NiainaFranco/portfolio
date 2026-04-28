import { ReactNode } from "react"

export function PricingList(props: {
    children:ReactNode       
}){
    return(
        <div className="[&>ul]:list-disc [&_li]:px-1">
            {props.children}
        </div>
    )
}