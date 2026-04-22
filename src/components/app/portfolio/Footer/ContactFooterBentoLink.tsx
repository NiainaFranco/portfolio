export function ContactFooterBentoLink(props: {width?: number,children?: string, iconName: string, href?: string}){
    const {width, href, iconName, children} = props;
    return(
        <a href={href} className="hover:shadow-xl flex items-center bg-primary-500 duration-[500ms] border border-primary-600/0 hover:border-primary-600/75 rounded-xl shadow-md p-2 gap-2" style={{
            width: width,
        }}>
            <img className="w-[40px] h-[40px]" src={`/icons/${iconName}.svg`} alt="" />
            {
                children &&
                <span className="text-xl text-white">{children}</span>
            }
        </a>        
    )
}