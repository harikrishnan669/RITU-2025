import Header from "@/components/header";
import {ArrowUpRight} from "lucide-react";
import {useEffect, useState} from "react";
import Link from "next/link";


export default function EventsListing() {

    const [hovered, setHovered] = useState(null);

    const imageMap = {
        Workshops: "/events-listing-testImages/ritu-red.png",
        Competitions: "/events-listing-testImages/ritu-blue.png",
        Exhibition: "/events-listing-testImages/ritu-yellow.png",
        Gaming: "/events-listing-testImages/ritu-green.png",
    };

    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth)
        };
        updateWindowWidth();

        window.addEventListener("resize", updateWindowWidth);

        return () => window.removeEventListener("resize", updateWindowWidth);
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const reveals = document.querySelectorAll('.reveal-left, .reveal-right');
            reveals.forEach((element) => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const revealPoint = 100;

                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return <section className="container-cont">
        <Header title="Events"/>
        <div className="relative flex flex-col items-center justify-center h-[70vh] bg-grsfdcay-800/70">
            {/* Centered Logo */}
            <div className="absolute inset-0 w-full h-full z-0 md:flex justify-center items-center hidden">
                <img src={hovered ? imageMap[hovered] : "/events-listing-testImages/ritu-allcolour.png"} alt=""
                     width='12%'/>
            </div>

            <div
                className="relative grid grid-cols-1 px-2 md:grid-cols-2 gap-x-38 gap-y-30 z-20 max-md:gap-8 bg-green-400r max-md:w-full max-md:mt-[-50px]">
                {/* Workshops */}
                <Link href="/workshop"
                    className={`reveal-left relative bg-white/50 border-gray-200/20 border-t-1 border-l-1 p-8 md:p-12 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-105 flex justify-center items-center max-md:max-w-[70%] max-md:min-w-[70%] max-md:max-h-[80px] max-md:mr-auto`}
                    style={{
                        background: 'linear-gradient(135deg, rgba(99,210,228,0.5), rgba(96,180,242,0.4), rgba(112,143,242,0.4), rgba(157,108,240,0.4), rgba(170,96,240,0.4))',
                        ...(windowWidth > 768 &&
                            {
                                WebkitMaskImage: `radial-gradient(circle at calc(100% + 20px) calc(100% + 10px), transparent 0 25%, black 31px)`,
                                maskImage: `radial-gradient(circle at calc(100% + 20px) calc(100% + 10px), transparent 0 25%, black 31px)`,
                                WebkitMaskComposite: 'destination-out',
                                maskComposite: 'exclude',
                            }),
                    }}
                    onMouseEnter={() => setHovered('Workshops')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <div className="flex items-center justify-center gap-1">
                        <h2 className="text-white text-xl md:text-2xl font-light">Workshops</h2>
                        <ArrowUpRight size={28}/>
                    </div>
                </Link>

                {/* Competitions */}
                <Link href="/competition"
                    className={`reveal-right relative bg-white/50 border-t border-red-200/30 p-8 md:p-12 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-105 flex justify-center items-center max-md:max-w-[70%] max-md:min-w-[70%] max-md:max-h-[80px] max-md:ml-auto`}
                    style={{
                        background: 'linear-gradient(135deg, rgba(170,96,240,0.5), rgba(157,108,240,0.4), rgba(112,143,242,0.4), rgba(96,180,242,0.4), rgba(99,210,228,0.4))',
                        ...(windowWidth > 768 &&
                            {
                                WebkitMaskImage: `radial-gradient(circle at -20px calc(100% + 10px), transparent 0 25%, black 31px)`,
                                maskImage: `radial-gradient(circle at -20px calc(100% + 10px), transparent 0 25%, black 31px)`,
                                WebkitMaskComposite: 'destination-out',
                                maskComposite: 'exclude',
                            }),
                    }}
                    onMouseEnter={() => setHovered('Competitions')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <div className="flex items-center justify-center gap-1">
                        <h2 className="text-white text-xl md:text-2xl font-light">Competitions</h2>
                        <ArrowUpRight size={28}/>
                    </div>
                </Link>

                {/* Culturals */}
                <Link href="/culturals"
                    className={`reveal-left relative bg-white/50 border-gray-200/20 border-b-1 border-l-1 p-8 md:p-12 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-105 flex justify-center items-center max-md:max-w-[70%] max-md:min-w-[70%] max-md:max-h-[80px] max-md:mr-auto`}
                    style={{
                        background: 'linear-gradient(135deg, rgba(99,210,228,0.5), rgba(96,180,242,0.4), rgba(112,143,242,0.4), rgba(157,108,240,0.4), rgba(170,96,240,0.4))',
                        ...(windowWidth > 768 &&
                            {
                                WebkitMaskImage: `radial-gradient(circle at calc(100% + 20px) -10px, transparent 0 25%, black 31px)`,
                                maskImage: `radial-gradient(circle at calc(100% + 20px) -10px, transparent 0 25%, black 31px)`,
                                WebkitMaskComposite: 'destination-out',
                                maskComposite: 'exclude',
                            }),
                    }}
                    onMouseEnter={() => setHovered('Exhibition')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <div className="flex items-center justify-center gap-1">
                        <h2 className="text-white text-xl md:text-2xl font-light">Culturals</h2>
                        <ArrowUpRight size={28}/>
                    </div>
                </Link>

                {/* Gaming */}
                <Link href="/gaming"
                    className={`reveal-right relative bg-white/50 border-gray-200/20 border-b-1 border-r-1 p-8 md:p-12 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-105 flex justify-center items-center max-md:max-w-[70%] max-md:min-w-[70%] max-md:max-h-[80px] max-md:ml-auto`}
                    style={{
                        background: 'linear-gradient(135deg, rgba(170,96,240,0.5), rgba(157,108,240,0.4), rgba(112,143,242,0.4), rgba(96,180,242,0.4), rgba(99,210,228,0.4))',
                        ...(windowWidth > 768 &&
                            {
                                WebkitMaskImage: `radial-gradient(circle at -20px -10px, transparent 0 25%, black 31px)`,
                                maskImage: `radial-gradient(circle at -20px -10px, transparent 0 25%, black 31px)`,
                                WebkitMaskComposite: 'destination-out',
                                maskComposite: 'exclude',
                            }),
                    }}
                    onMouseEnter={() => setHovered('Gaming')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <div className="flex items-center justify-center gap-1 px-12">
                        <h2 className="text-white text-xl md:text-2xl font-light">Gaming</h2>
                        <ArrowUpRight size={28}/>
                    </div>
                </Link>
            </div>
        </div>
    </section>
}