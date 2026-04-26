import { DiagonalArrowIcon } from "@/components/DynamiqueIcons/DiagonalArrowIcon";

export function BentoLink(props: {size: number, aux: string, label: string, href?: string}){
    const {size, aux, href, label} = props;
    return(
        <a href={href} className="group shadow-lg border-4 border-primary-800 duration-[500ms] text-black hover:text-primary-800 hover:shadow-md hover:bg-[var(--background)] p-3 block relative rounded-2xl bg-primary-500" style={{
            width: size,
            height: size
        }}>
            <strong className="text-4xl">{label}</strong>
            <p className="text-lg">{aux}</p>
            <div className="absolute w-[60px] h-[60px] bottom-0 right-0 p-1">
                <DiagonalArrowIcon className="fill-black w-full h-full duration-[500ms] group-hover:fill-primary-800" />
            </div>
        </a>        
    )
}