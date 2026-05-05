import { RichTagsFunction } from "next-intl";

export function highlight() : Record<string, string | number | Date | RichTagsFunction>{
    return {
        highlight: (chunk)=>{
            return (
                <strong className="text-secondary">{chunk}</strong>
            )
        }
    }
}