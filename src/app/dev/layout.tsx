import type {ReactNode} from "react";



export default function DevLayout({children}: {children: ReactNode}) {
    return <div className="text-black">{children}</div>
}