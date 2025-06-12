
import { Github, Mail } from "lucide-react";

export default function WebCard({ imgSource, name, github, mail }) {
    return (
        <div className="shadow-xl rounded-xl overflow-hidden max-w-sm mx-auto  bg-[#424242]/8 border border-white/30">
            <div className="w-full px-6 md:px-8  flex items-center justify-center h-32 md:h-64  overflow-hidden">
                <img 
                    className="object-cover rounded-xl md:h-3/4 object-center" 
                    src={imgSource} 
                    alt={name} 
                />
            </div>
            <div className="flex flex-col justify-center items-center p-3 space-y-2">
                <h3 className="text-lg font-semibold text-center">{name}</h3>
                <div className="flex items-center justify-center gap-2">
                    <a href={mail}><i><Mail/></i></a>
                    <a href={github}><i><Github/></i></a>
                </div>
            </div>
        </div>
    );
}