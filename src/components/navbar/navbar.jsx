"use client";
import NavMenu from "@/components/navbar/nav-menu";
import {useIsLtMaxWidth} from "@/hooks/use-is-lt-max-width";
import MobileNavMenu from "@/components/navbar/mobile-navmenu";
import {useEffect, useState} from "react";


export default function Navbar() {
    const isMobile = useIsLtMaxWidth();
    const [hideLogo, setHideLogo] = useState(false);

    useEffect(() => {
        function handleNavScroll() {
            if (window.scrollY > 100) {
                setHideLogo(true);
            } else {
                setHideLogo(false);
            }
        }

        window.addEventListener('scroll', handleNavScroll);

        return () => {
            window.removeEventListener('scroll', handleNavScroll);
        }
    }, []);

    return <nav className="fixed w-full flex items-center justify-between py-4 z-50 container-cont overflow-hidden">
        <img src="/ritu-25-white-with-text.webp" alt="RITU logo" className={`h-[70px] max-sm:h-[50px] transition-transform ${hideLogo && "translate-y-[-100px]"}`}/>
        {isMobile ? <MobileNavMenu/> :
            <NavMenu/>
        }
    </nav>
}