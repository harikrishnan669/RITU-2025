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
        <Header title="Events" id="events"/>
        <div
            className="relative flex flex-col items-center justify-start gap-25 overflow-hidden max-md:gap-10 mb-10 max-md:mb-10 mt-12 max-md:mt-10 px-15 max-md:px-0">
            {/* Centered Logo */}
            <div className="absolute inset-0 w-full h-full z-0 md:flex justify-center items-center hidden overflow-visible">
                <RITULogoDraw showSVG={showSVG} hovered={hovered}/>
            </div>

            <div className="w-full flex flex-row max-sm:flex-col justify-between max-sm:justify-center items-center gap-12 max-md:gap-10 py-2 max-md:py-0 max-md:pt-2">
                <Link href="/workshop"
                    className="reveal-right transition-transform duration-100 cursor-pointer select-none hover:scale-105"
                    onMouseEnter={() => setHovered('red')}
                    onMouseLeave={() => setHovered(null)}>
                    <img alt="" src="/events-listing-testImages/ticket1.png"
                        className="w-[28vw] max-md:w-[65vw]"/>
                </Link>
                <Link href={'/competition'}
                      className="reveal-left invert-reveal1 transition-transform duration-100 cursor-pointer select-none hover:scale-105"
                      onMouseEnter={() => setHovered('blue')}
                      onMouseLeave={() => setHovered(null)}>
                    <img alt="" src={'/events-listing-testImages/ticket2.png'}
                         className="w-[28vw] max-md:w-[65vw]"/>
                </Link>
            </div>
            <div className="w-full flex flex-row max-sm:flex-col justify-between max-sm:justify-center items-center gap-12 max-md:gap-10 py-2 max-sm:py-0 max-md:pb-2">
                <Link href={'/culturals'}
                      className="reveal-right invert-reveal2 transition-transform duration-100 cursor-pointer select-none hover:scale-105"
                      onMouseEnter={() => setHovered('yellow')}
                      onMouseLeave={() => setHovered(null)}>
                    <img alt="" src={'/events-listing-testImages/ticket3.png'}
                         className="w-[28vw] max-md:w-[65vw]"/>
                </Link>
                <Link href={'/gaming'}
                      className="reveal-left transition-transform duration-100 cursor-pointer select-none hover:scale-105"
                      onMouseEnter={() => setHovered('green')}
                      onMouseLeave={() => setHovered(null)}>
                    <img alt="" src={'/events-listing-testImages/ticket4.png'}
                         className="w-[28vw] max-md:w-[65vw]"/>
                </Link>
            </div>
        </div>
    </section>
}


//
// export default function EventsListing() {
//
//     const [hovered, setHovered] = useState(null);
//
//     const imageMap = {
//         Workshops: "/events-listing-testImages/ritu-red.png",
//         Competitions: "/events-listing-testImages/ritu-blue.png",
//         Culturals: "/events-listing-testImages/ritu-yellow.png",
//         Gaming: "/events-listing-testImages/ritu-green.png",
//     };
//
//     useEffect(() => {
//         const handleScroll = () => {
//             const reveals = document.querySelectorAll('.reveal-left, .reveal-right');
//             reveals.forEach((element) => {
//                 const windowHeight = window.innerHeight;
//                 const elementTop = element.getBoundingClientRect().top;
//                 const revealPoint = 10;
//
//                 if (elementTop < windowHeight - revealPoint) {
//                     element.classList.add('active');
//                 } else {
//                     element.classList.remove('active');
//                 }
//             });
//         };
//
//         window.addEventListener('scroll', handleScroll);
//         handleScroll();
//
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
//
//
//     return <section className="container-cont">
//         <Header title="Events"/>
//         <div
//             className="relative flex flex-col items-center justify-start min-h-[60vh] gap-15 max-md:gap-10 mb-10 max-md:mb-5 mt-12 max-md:mt-12 px-10 max-md:px-0">
//             {/* Centered Logo */}
//             <div className="absolute inset-0 w-full h-full z-0 md:flex justify-center items-center hidden">
//                 <img src={hovered ? imageMap[hovered] : "/events-listing-testImages/ritu-allcolour.png"} alt=""
//                      width='18%'/>
//             </div>
//
//             <div className="w-full flex flex-col justify-center items-start gap-12 max-md:gap-10">
//                 <Link href={'/workshop'}
//                     className="reveal-left bg-[#0f172a] transition-shadow duration-100 border-r-1 border-b-1 border-[#0a0a0a]/60
//                     shadow-[4px_4px_8px_rgba(0,0,0,0.4),6px_6px_12px_rgba(0,0,0,0.3),0_0_8px_2px_rgba(255,0,0,0.3),0_0_16px_4px_rgba(255,0,0,0.2)]
//                     hover:shadow-[6px_6px_10px_rgba(0,0,0,0.5),8px_8px_16px_rgba(0,0,0,0.4),0_0_10px_3px_rgba(255,0,0,0.5),0_0_20px_6px_rgba(255,0,0,0.3)]
//                     hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_4px_rgba(0,0,0,0.3),3px_3px_6px_rgba(0,0,0,0.2),0_0_6px_1px_rgba(255,0,0,0.4),0_0_12px_3px_rgba(255,0,0,0.25)]
//                     z-20 px-20 py-7 max-md:py-6 rounded-md min-w-[30vw] flex items-center justify-center cursor-pointer select-none max-md:max-w-[60vw] max-md:min-w-[60vw] max-md:px-5"
//                     onMouseEnter={() => setHovered('Workshops')}
//                     onMouseLeave={() => setHovered(null)}>
//                     <h2 className="text-white text-xl md:text-2xl font-light mr-1">Workshops</h2>
//                     <ArrowUpRight size={26} />
//                 </Link>
//                 <Link href={'/competition'}
//                     className="reveal-left invert-reveal1 max-md:self-end bg-[#0f172a] transition-shadow duration-100 border-r-1 border-b-1 border-[#0a0a0a]/60
//                     shadow-[4px_4px_8px_rgba(0,0,0,0.4),6px_6px_12px_rgba(0,0,0,0.3),0_0_8px_2px_rgba(0,123,255,0.3),0_0_16px_4px_rgba(0,123,255,0.2)]
//                     hover:shadow-[6px_6px_10px_rgba(0,0,0,0.5),8px_8px_16px_rgba(0,0,0,0.4),0_0_10px_3px_rgba(0,123,255,0.5),0_0_20px_6px_rgba(0,123,255,0.3)]
//                     hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_4px_rgba(0,0,0,0.3),3px_3px_6px_rgba(0,0,0,0.2),0_0_6px_1px_rgba(0,123,255,0.4),0_0_12px_3px_rgba(0,123,255,0.25)]
//                     z-20 px-20 py-7 max-md:py-6 rounded-md min-w-[30vw] flex items-center justify-center cursor-pointer select-none max-md:max-w-[60vw] max-md:min-w-[60vw] max-md:px-5"
//                     onMouseEnter={() => setHovered('Competitions')}
//                     onMouseLeave={() => setHovered(null)}>
//                     <h2 className="text-white text-xl md:text-2xl font-light mr-1">Competitions</h2>
//                     <ArrowUpRight size={26}/>
//                 </Link>
//             </div>
//             <div className="w-full flex flex-col justify-center items-end gap-12 max-md:gap-10">
//                 <Link href={'/gaming'}
//                     className="reveal-right invert-reveal2 max-md:self-start bg-[#0f172a] transition-shadow duration-100 border-r-1 border-b-1 border-[#0a0a0a]/60
//                     shadow-[4px_4px_8px_rgba(0,0,0,0.4),6px_6px_12px_rgba(0,0,0,0.3),0_0_8px_2px_rgba(0,255,128,0.3),0_0_16px_4px_rgba(0,255,128,0.2)]
//                     hover:shadow-[6px_6px_10px_rgba(0,0,0,0.5),8px_8px_16px_rgba(0,0,0,0.4),0_0_10px_3px_rgba(0,255,128,0.5),0_0_20px_6px_rgba(0,255,128,0.3)]
//                     hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_4px_rgba(0,0,0,0.3),3px_3px_6px_rgba(0,0,0,0.2),0_0_6px_1px_rgba(0,255,128,0.4),0_0_12px_3px_rgba(0,255,128,0.25)]
//                     z-20 px-20 py-7 max-md:py-6 rounded-md min-w-[30vw] flex items-center justify-center cursor-pointer select-none max-md:max-w-[60vw] max-md:min-w-[60vw] max-md:px-5"
//                     onMouseEnter={() => setHovered('Gaming')}
//                     onMouseLeave={() => setHovered(null)}>
//                     <h2 className="text-white text-xl md:text-2xl font-light mr-1">Gaming</h2>
//                     <ArrowUpRight size={26}/>
//                 </Link>
//                 <Link href={'/culturals'}
//                     className="reveal-right bg-[#0f172a] transition-shadow duration-100 border-r-1 border-b-1 border-[#0a0a0a]/60
//                     shadow-[4px_4px_8px_rgba(0,0,0,0.4),6px_6px_12px_rgba(0,0,0,0.3),0_0_8px_2px_rgba(255,221,0,0.3),0_0_16px_4px_rgba(255,221,0,0.2)]
//                     hover:shadow-[6px_6px_10px_rgba(0,0,0,0.5),8px_8px_16px_rgba(0,0,0,0.4),0_0_10px_3px_rgba(255,221,0,0.5),0_0_20px_6px_rgba(255,221,0,0.3)]
//                     hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_4px_rgba(0,0,0,0.3),3px_3px_6px_rgba(0,0,0,0.2),0_0_6px_1px_rgba(255,221,0,0.4),0_0_12px_3px_rgba(255,221,0,0.25)]
//                     z-20 px-20 py-7 max-md:py-6 rounded-md min-w-[30vw] flex items-center justify-center cursor-pointer select-none max-md:max-w-[60vw] max-md:min-w-[60vw] max-md:px-5"
//                     onMouseEnter={() => setHovered('Culturals')}
//                     onMouseLeave={() => setHovered(null)}>
//                     <h2 className="text-white text-xl md:text-2xl font-light mr-1">Culturals</h2>
//                     <ArrowUpRight size={26}/>
//                 </Link>
//             </div>
//         </div>
//     </section>
// }


//
// export default function EventsListing() {
//
//     const [hovered, setHovered] = useState(null);
//
//     const imageMap = {
//         Workshops: "/events-listing-testImages/ritu-red.png",
//         Competitions: "/events-listing-testImages/ritu-blue.png",
//         Exhibition: "/events-listing-testImages/ritu-yellow.png",
//         Gaming: "/events-listing-testImages/ritu-green.png",
//     };
//
//     const [windowWidth, setWindowWidth] = useState(0);
//     useEffect(() => {
//         const updateWindowWidth = () => {
//             setWindowWidth(window.innerWidth)
//         };
//         updateWindowWidth();
//
//         window.addEventListener("resize", updateWindowWidth);
//
//         return () => window.removeEventListener("resize", updateWindowWidth);
//     }, []);
//
//
//     useEffect(() => {
//         const handleScroll = () => {
//             const reveals = document.querySelectorAll('.reveal-left, .reveal-right');
//             reveals.forEach((element) => {
//                 const windowHeight = window.innerHeight;
//                 const elementTop = element.getBoundingClientRect().top;
//                 const revealPoint = 100;
//
//                 if (elementTop < windowHeight - revealPoint) {
//                     element.classList.add('active');
//                 } else {
//                     element.classList.remove('active');
//                 }
//             });
//         };
//
//         window.addEventListener('scroll', handleScroll);
//         handleScroll();
//
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
//
//
//     return <section className="container-cont">
//         <Header title="Events"/>
//         <div className="relative flex flex-col items-center justify-center h-[70vh] bg-grsfdcay-800/70">
//             {/* Centered Logo */}
//             <div className="absolute inset-0 w-full h-full z-0 md:flex justify-center items-center hidden">
//                 <img src={hovered ? imageMap[hovered] : "/events-listing-testImages/ritu-allcolour.png"} alt=""
//                      width='12%'/>
//             </div>
//
//             <div
//                 className="relative grid grid-cols-1 px-2 md:grid-cols-2 gap-x-38 gap-y-30 z-20 max-md:gap-8 bg-green-400r max-md:w-full max-md:mt-[-50px]">
//                 {/* Workshops */}
//                 <Link href="/workshop"
//                       className={`reveal-left relative bg-white/50 border-gray-200/20 border-t-1 border-l-1 p-8 md:p-12 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-105 flex justify-center items-center max-md:max-w-[70%] max-md:min-w-[70%] max-md:max-h-[80px] max-md:mr-auto`}
//                       style={{
//                           background: 'linear-gradient(135deg, rgba(99,210,228,0.5), rgba(96,180,242,0.4), rgba(112,143,242,0.4), rgba(157,108,240,0.4), rgba(170,96,240,0.4))',
//                           ...(windowWidth > 768 &&
//                               {
//                                   WebkitMaskImage: `radial-gradient(circle at calc(100% + 20px) calc(100% + 10px), transparent 0 25%, black 31px)`,
//                                   maskImage: `radial-gradient(circle at calc(100% + 20px) calc(100% + 10px), transparent 0 25%, black 31px)`,
//                                   WebkitMaskComposite: 'destination-out',
//                                   maskComposite: 'exclude',
//                               }),
//                       }}
//                       onMouseEnter={() => setHovered('Workshops')}
//                       onMouseLeave={() => setHovered(null)}
//                 >
//                     <div className="flex items-center justify-center gap-1">
//                         <h2 className="text-white text-xl md:text-2xl font-light">Workshops</h2>
//                         <ArrowUpRight size={28}/>
//                     </div>
//                 </Link>
//
//                 {/* Competitions */}
//                 <Link href="/competition"
//                       className={`reveal-right relative bg-white/50 border-t border-red-200/30 p-8 md:p-12 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-105 flex justify-center items-center max-md:max-w-[70%] max-md:min-w-[70%] max-md:max-h-[80px] max-md:ml-auto`}
//                       style={{
//                           background: 'linear-gradient(135deg, rgba(170,96,240,0.5), rgba(157,108,240,0.4), rgba(112,143,242,0.4), rgba(96,180,242,0.4), rgba(99,210,228,0.4))',
//                           ...(windowWidth > 768 &&
//                               {
//                                   WebkitMaskImage: `radial-gradient(circle at -20px calc(100% + 10px), transparent 0 25%, black 31px)`,
//                                   maskImage: `radial-gradient(circle at -20px calc(100% + 10px), transparent 0 25%, black 31px)`,
//                                   WebkitMaskComposite: 'destination-out',
//                                   maskComposite: 'exclude',
//                               }),
//                       }}
//                       onMouseEnter={() => setHovered('Competitions')}
//                       onMouseLeave={() => setHovered(null)}
//                 >
//                     <div className="flex items-center justify-center gap-1">
//                         <h2 className="text-white text-xl md:text-2xl font-light">Competitions</h2>
//                         <ArrowUpRight size={28}/>
//                     </div>
//                 </Link>
//
//                 {/* Culturals */}
//                 <Link href="/culturals"
//                       className={`reveal-left relative bg-white/50 border-gray-200/20 border-b-1 border-l-1 p-8 md:p-12 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-105 flex justify-center items-center max-md:max-w-[70%] max-md:min-w-[70%] max-md:max-h-[80px] max-md:mr-auto`}
//                       style={{
//                           background: 'linear-gradient(135deg, rgba(99,210,228,0.5), rgba(96,180,242,0.4), rgba(112,143,242,0.4), rgba(157,108,240,0.4), rgba(170,96,240,0.4))',
//                           ...(windowWidth > 768 &&
//                               {
//                                   WebkitMaskImage: `radial-gradient(circle at calc(100% + 20px) -10px, transparent 0 25%, black 31px)`,
//                                   maskImage: `radial-gradient(circle at calc(100% + 20px) -10px, transparent 0 25%, black 31px)`,
//                                   WebkitMaskComposite: 'destination-out',
//                                   maskComposite: 'exclude',
//                               }),
//                       }}
//                       onMouseEnter={() => setHovered('Exhibition')}
//                       onMouseLeave={() => setHovered(null)}
//                 >
//                     <div className="flex items-center justify-center gap-1">
//                         <h2 className="text-white text-xl md:text-2xl font-light">Culturals</h2>
//                         <ArrowUpRight size={28}/>
//                     </div>
//                 </Link>
//
//                 {/* Gaming */}
//                 <Link href="/gaming"
//                       className={`reveal-right relative bg-white/50 border-gray-200/20 border-b-1 border-r-1 p-8 md:p-12 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-105 flex justify-center items-center max-md:max-w-[70%] max-md:min-w-[70%] max-md:max-h-[80px] max-md:ml-auto`}
//                       style={{
//                           background: 'linear-gradient(135deg, rgba(170,96,240,0.5), rgba(157,108,240,0.4), rgba(112,143,242,0.4), rgba(96,180,242,0.4), rgba(99,210,228,0.4))',
//                           ...(windowWidth > 768 &&
//                               {
//                                   WebkitMaskImage: `radial-gradient(circle at -20px -10px, transparent 0 25%, black 31px)`,
//                                   maskImage: `radial-gradient(circle at -20px -10px, transparent 0 25%, black 31px)`,
//                                   WebkitMaskComposite: 'destination-out',
//                                   maskComposite: 'exclude',
//                               }),
//                       }}
//                       onMouseEnter={() => setHovered('Gaming')}
//                       onMouseLeave={() => setHovered(null)}
//                 >
//                     <div className="flex items-center justify-center gap-1 px-12">
//                         <h2 className="text-white text-xl md:text-2xl font-light">Gaming</h2>
//                         <ArrowUpRight size={28}/>
//                     </div>
//                 </Link>
//             </div>
//         </div>
//     </section>
// }