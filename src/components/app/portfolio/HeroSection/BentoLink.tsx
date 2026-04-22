export function BentoLink(props: {size: number, aux: string, label: string, href?: string}){
    const {size, aux, href, label} = props;
    return(
        <a href={href} className="duration-[500ms] text-white hover:shadow-md hover:bg-primary-500 p-3 block relative rounded-3xl bg-primary-500" style={{
            width: size,
            height: size
        }}>
            <strong className="text-4xl">{label}</strong>
            <p>{aux}</p>
            <div className="absolute w-[60px] h-[60px] bottom-0 right-0 p-1">
                <img src="/icons/diagonal-arrow.svg" alt="" />
            </div>
        </a>        
    )
}