export function ContactBentoLink(props: {size: number, iconName: string, href?: string}){
    const {size, href, iconName} = props;
    return(
        <a href={href} className="hover:shadow-xl duration-[500ms] border border-primary-600/0 hover:border-primary-600/75 rounded-xl shadow-md p-3 block" style={{
            width: size,
            height: size
        }}>
            <img className="" src={`/icons/${iconName}.svg`} alt="" />
        </a>        
    )
}