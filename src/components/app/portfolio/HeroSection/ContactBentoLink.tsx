export function ContactBentoLink(props: {size: number, iconName: string, href?: string}){
    const {size, href, iconName} = props;
    return(
        <a href={href} className="hover:shadow-md hover:bg-primary-400 duration-[500ms] bg-primary-500 rounded-xl p-3 block" style={{
            width: size,
            height: size
        }}>
            <img className="" src={`/icons/${iconName}.svg`} alt="" />
        </a>        
    )
}