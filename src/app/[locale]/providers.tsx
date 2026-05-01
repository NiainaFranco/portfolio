import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

export default function Providers(props: {children: ReactNode}){
    return (
        <NextIntlClientProvider>
            {props.children}
        </NextIntlClientProvider>
    )
}