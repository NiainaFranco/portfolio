import { ReactNode } from "react"

export function PricingList(props: {
    children:ReactNode       
}){
    return(
        <div className="[&>ul]:list-disc">
            {props.children}
        </div>
    )
}