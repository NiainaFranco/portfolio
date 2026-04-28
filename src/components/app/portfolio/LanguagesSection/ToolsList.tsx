
type ToolsListPropsType = {
    toolsNames: string[] 
    listName?: string
}

export function ToolsList(props: ToolsListPropsType){
    return(
    <div>
        <h2 className="lg:text-2xl text-xl pb-2 text-secondary font-bold">{props.listName}</h2>
        <ul className="list-disc px-4 [&>li]:pb-2 text-md text-black">
        {
            props.toolsNames.map((toolName, index)=>{
                return(
                    <li key={toolName + index}>{toolName}</li>
                )
            })
        }
        </ul>
    </div>
    )
}