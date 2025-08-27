import {cn} from "@/lib/utils";


export default function Header({title, id = '', className = ''}) {
    return <h2 className={cn("text-4xl mb-20 text-center text-white tracking-widest uppercase", className)} id={id}>
        {title}
    </h2>
}
