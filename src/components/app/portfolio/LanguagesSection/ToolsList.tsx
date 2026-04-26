
type ToolsListPropsType = {
    toolsNames: string[] 
    listName?: string
}

export function ToolsList(props: ToolsListPropsType){
    return(
    <div>
        <h2 className="text-2xl py-2 text-primary-600 font-bold">{props.listName}</h2>
        <ul className="list-disc px-3 text-lg text-black">
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