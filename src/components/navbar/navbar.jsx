"use client";
import NavMenu from "@/components/navbar/nav-menu";
import {useIsLtMaxWidth} from "@/hooks/use-is-lt-max-width";
import MobileNavMenu from "@/components/navbar/mobile-navmenu";


export default function Navbar() {
    const isMobile = useIsLtMaxWidth();


    return <nav className="fixed w-full flex items-center justify-between py-4 z-50 container-cont">
        <img src="/ritu-25-white-with-text.webp" alt="RITU logo" className="h-[70px] drop-shadow-lg drop-shadow-black"/>
        {isMobile ? <MobileNavMenu/> :
            <NavMenu/>
        }


    </nav>
}