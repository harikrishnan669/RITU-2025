import {ChevronDown} from "lucide-react";
import React from "react";


export default function LandingBanner({bg, bgAlt = '', title, description}) {
    return <div className="relative w-full h-screen overflow_hidden">
        <img
            className="absolute bottom-0 right-0 left-0 object-cover object-bottom -z-1 w-full h-screen"
            src={bg}
            alt={bgAlt || "Banner Image"}
        />
        <div className="size-full flex flex-col justify-center from-black/50 max-sm:from-black/100 to-black/0 bg-linear-to-b pl-10 max-sm:pl-0">
            <div className="w-full max-w-[600px] max-sm:max-w-full text-left px-4">
                <h2 className="text-4xl md:text-5xl mb-4 text-white tracking-widest">
                    {title}
                </h2>
                <p className="text-sm md:text-base lg:text-xl text-white">
                    {description}
                </p>
            </div>
        </div>
        <div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-40 text-3xl rounded-full p-1 cursor-pointer sm:text-4xl md:text-5xl animate-bounce"
        >
            <ChevronDown size={50} onClick={() => {
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
            }}/>
        </div>
    </div>
}