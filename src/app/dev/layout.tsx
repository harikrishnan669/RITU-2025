import type {ReactNode} from "react";
import "../app.css"
import "../globals.css"

export default function DevLayout({children}: {children: ReactNode}) {
    return <div className="text-black">{children}</div>
}