export function BentoLink(props: {size: number, aux: string, label: string, href?: string}){
    const {size, aux, href, label} = props;
    return(
        <a href={href} className="p-3 block rounded-3xl bg-primary-500" style={{
            width: size,
            height: size
        }}>
            <strong className="text-4xl">{label}</strong>
            <p>{aux}</p>
        </a>        
    )
}