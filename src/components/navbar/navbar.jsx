"use client";
import NavMenuDesktop from "@/components/navbar/nav-menu-desktop";
import {useIsLtMaxWidth} from "@/hooks/use-is-lt-max-width";
import {useEffect, useState} from "react";
import NavMenuMobile from "@/components/navbar/nav-menu-mobile";
import Link from "next/link";

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

    return <nav className="fixed w-full flex items-center justify-between py-4 z-50 container-cont overflow-hidden max-sm:px-6 sm:px-4">
        <Link href="/">
            <img src="/ritu-25-white-with-text.webp" alt="RITU logo" className={`h-[70px] max-sm:h-[50px] transition-transform ${hideLogo && "translate-y-[-100px]"}`}/>
        </Link>
        {isMobile ? <NavMenuMobile/> :
            <NavMenuDesktop/>
        }
    </nav>
}