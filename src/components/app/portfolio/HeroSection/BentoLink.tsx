import { DiagonalArrowIcon } from "@/components/DynamiqueIcons/DiagonalArrowIcon";

export function BentoLink(props: {className?: string, aux: string, label: string, href?: string}){
    const {className, aux, href, label} = props;
    return(
        <a href={href} className={`group shadow-lg duration-[500ms] text-white hover:text-primary-600 hover:shadow-md hover:bg-[var(--background)] p-3 block relative rounded-3xl bg-primary-500 ${className}`} >
            <strong className="text-2xl lg:text-4xl">{label}</strong>
            <p className="text-md">{aux}</p>
            <div className="absolute w-[60px] h-[60px] bottom-0 right-0 p-1">
                <DiagonalArrowIcon className="fill-white w-full h-full duration-[500ms] group-hover:fill-primary-600" />
            </div>
        </a>        
    )
}