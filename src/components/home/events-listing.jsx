import Header from "@/components/header";
import {useEffect, useState} from "react";
import Link from "next/link";
import RITULogoDraw from "@/components/ritu-logo/ritu-logo-draw";


export default function EventsListing() {
    const [showSVG, setShowSVG] = useState(false);
    const [hovered, setHovered] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const reveals = document.querySelectorAll('.reveal-left, .reveal-right');
            reveals.forEach((element) => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const revealPoint = 10;

                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active');
                    setShowSVG(true);
                } else {
                    element.classList.remove('active');
                    setShowSVG(false);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <section className="container-cont mt-5">
        <Header title="Events" id="events" className="mb-5"/>
        <div>
            <p className="text-center">Click the<span
                className="highlighted-text text-black">tickets</span> to know more </p>
        </div>
        <div
            className="relative flex flex-col items-center justify-start gap-25 overflow-hidden max-md:gap-10 mb-10 max-md:mb-10 mt-12 max-md:mt-10 px-15 max-md:px-0">
            {/* Centered Logo */}
            <div
                className="absolute inset-0 w-full h-full z-0 md:flex justify-center items-center hidden overflow-visible">
                <RITULogoDraw showSVG={showSVG} hovered={hovered}/>
            </div>

            <div
                className="w-full flex flex-row max-sm:flex-col justify-between max-sm:justify-center items-center gap-12 max-md:gap-10 py-2 max-md:py-0 max-md:pt-2">
                <Link href="/workshop"
                      className="reveal-right transition-transform duration-100 cursor-pointer select-none hover:scale-105"
                      onMouseEnter={() => setHovered('red')}
                      onMouseLeave={() => setHovered(null)}>
                    <img alt="" src="/events-listing/ticket1.webp"
                         className="w-[28vw] max-md:w-[65vw]"/>
                </Link>
                <Link href={'/competition'}
                      className="reveal-left invert-reveal1 transition-transform duration-100 cursor-pointer select-none hover:scale-105"
                      onMouseEnter={() => setHovered('blue')}
                      onMouseLeave={() => setHovered(null)}>
                    <img alt="" src={'/events-listing/ticket2.webp'}
                         className="w-[28vw] max-md:w-[65vw]"/>
                </Link>
            </div>
            <div
                className="w-full flex flex-row max-sm:flex-col justify-between max-sm:justify-center items-center gap-12 max-md:gap-10 py-2 max-sm:py-0 max-md:pb-2">
                <Link href={'/culturals'}
                      className="reveal-right invert-reveal2 transition-transform duration-100 cursor-pointer select-none hover:scale-105"
                      onMouseEnter={() => setHovered('yellow')}
                      onMouseLeave={() => setHovered(null)}>
                    <img alt="" src={'/events-listing/ticket3.webp'}
                         className="w-[28vw] max-md:w-[65vw]"/>
                </Link>
                <Link href={'/gaming'}
                      className="reveal-left transition-transform duration-100 cursor-pointer select-none hover:scale-105"
                      onMouseEnter={() => setHovered('green')}
                      onMouseLeave={() => setHovered(null)}>
                    <img alt="" src={'/events-listing/ticket4.webp'}
                         className="w-[28vw] max-md:w-[65vw]"/>
                </Link>
            </div>
        </div>

        <div className="flex justify-center">
            <Link href='/dept'
                  className="reveal-left transition-transform duration-100 cursor-pointer select-none hover:scale-105"
            >
                <img alt="" src='/events-listing/dept.webp'
                     className="w-[28vw] max-md:w-[65vw]"/>
            </Link>
        </div>
    </section>
}
