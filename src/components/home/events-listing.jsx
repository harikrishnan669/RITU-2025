import Header from "@/components/header";
import {ArrowUpRight} from "lucide-react";
import {useState} from "react";


export default function EventsListing() {

    const [hovered, setHovered] = useState(null);

    const imageMap= {
        Workshops: "/ritu-red.png",
        Competitions: "/ritu-blue.png",
        Exhibition: "/ritu-yellow.png",
        Gaming: "/ritu-green.png",
    };

    return <section className="container-cont">
        <Header title="Events"/>
        <div className="relative flex flex-col items-center justify-center h-[70vh] bg-grsfdcay-800/70">
            {/*Centered Logo*/}
            <div className="absolute inset-0 w-full h-full z-0 md:flex justify-center items-center hidden">
                <img src={hovered ? imageMap[hovered] : "/ritu-logo-white.png"} alt="" width={`${hovered? '25%': '12%'}`} className={`${hovered && 'mt-14 ml-6'} -all -300 `}/>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-38 gap-y-30 max-md:gap-10 z-20">
                {/* Workshops - Top Left */}
                <div
                    className={`relative right-2 bg-white/50 border-gray-200/20 border-t-1 border-l-1 p-8 md:p-12 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-105`}
                     style={{
                         background: 'linear-gradient(135deg, rgba(99,210,228,0.3), rgba(96,180,242,0.3), rgba(112,143,242,0.3), rgba(157,108,240,0.3), rgba(170,96,240,0.3))',
                         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                         WebkitMaskImage: `radial-gradient(circle at calc(100% + 20px) calc(100% + 10px), transparent 0 25%, black 31px)`,
                         maskImage: `radial-gradient(circle at calc(100% + 20px) calc(100% + 10px), transparent 0 25%, black 31px)`,
                         WebkitMaskComposite: 'destination-out',
                         maskComposite: 'exclude',
                     }}
                    onMouseEnter={() => setHovered('Workshops')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <div className="flex items-center justify-center gap-1">
                        <h2 className="text-white text-2xl md:text-3xl font-light">Workshops</h2>
                        <ArrowUpRight size={28}/>
                    </div>
                </div>

                {/* Competitions - Top Right */}
                <div
                    className={`relative bg-[#cd222d]/20 backdrop-blur-xl border-t border-red-200/30 shadow-[0_8px_32px_0_rgba(205,34,45,0.37)] p-8 md:p-12 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-105`}
                    style={{
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                         WebkitMaskImage: `radial-gradient(circle at -20px calc(100% + 10px), transparent 0 25%, black 31px)`,
                         maskImage: `radial-gradient(circle at -20px calc(100% + 10px), transparent 0 25%, black 31px)`,
                         WebkitMaskComposite: 'destination-out',
                         maskComposite: 'exclude',
                     }}
                    onMouseEnter={() => setHovered('Competitions')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <div className="flex items-center justify-center gap-1">
                        <h2 className="text-white text-2xl md:text-3xl font-light">Competitions</h2>
                        <ArrowUpRight size={28}/>
                    </div>
                </div>

                {/* Exhibition - Bottom Left */}
                <div
                    className={`relative bg-white/50 border-gray-200/20 border-b-1 border-l-1 p-8 md:p-12 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-105`}
                    style={{
                        background: 'linear-gradient(135deg, rgba(20,184,166,0.7), rgba(59,130,246,0.7), rgba(147,51,234,0.7))',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        WebkitMaskImage: `radial-gradient(circle at calc(100% + 20px) -10px, transparent 0 25%, black 31px)`,
                        maskImage: `radial-gradient(circle at calc(100% + 20px) -10px, transparent 0 25%, black 31px)`,
                        WebkitMaskComposite: 'destination-out',
                        maskComposite: 'exclude',
                    }}
                    onMouseEnter={() => setHovered('Exhibition')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <div className="flex items-center justify-center gap-1">
                        <h2 className="text-white text-2xl md:text-3xl font-light">Exhibition</h2>
                        <ArrowUpRight size={28}/>
                    </div>
                </div>

                {/* Gaming - Bottom Right */}
                <div
                    className={`relative bg-white/50 border-gray-200/20 border-b-1 border-r-1 p-8 md:p-12 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-105`}
                    style={{
                        background: 'linear-gradient(135deg, rgba(99,210,228,0.3), rgba(96,180,242,0.3), rgba(112,143,242,0.3), rgba(157,108,240,0.3), rgba(170,96,240,0.3))',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        WebkitMaskImage: `radial-gradient(circle at -20px -10px, transparent 0 25%, black 31px)`,
                        maskImage: `radial-gradient(circle at -20px -10px, transparent 0 25%, black 31px)`,
                        WebkitMaskComposite: 'destination-out',
                        maskComposite: 'exclude',
                    }}
                    onMouseEnter={() => setHovered('Gaming')}
                    onMouseLeave={() => setHovered(null)}
                >
                    <div className="flex items-center justify-center gap-1">
                        <h2 className="text-white text-2xl md:text-3xl font-light">Gaming</h2>
                        <ArrowUpRight size={28}/>
                    </div>
                </div>
            </div>
        </div>
        {/*<div className="flex items-center justify-center h-[70vh] bg-green-400">*/}
        {/*    <div className="relative grid grid-cols-2 gap-x-10 gap-y-10 bg-yellow-200">*/}
        {/*        /!* Red boxes *!/*/}
        {/*        <div className="relative p-8 md:p-12 cursor-pointer rounded-lg z-10 bg-red-400">*/}
        {/*            Workshops*/}
        {/*        </div>*/}
        {/*        <div className="relative p-8 md:p-12 cursor-pointer rounded-lg z-10 bg-red-400">*/}
        {/*            Competitions*/}
        {/*        </div>*/}
        {/*        <div className="relative p-8 md:p-12 cursor-pointer rounded-lg z-10 bg-red-400">*/}
        {/*            Exhibition*/}
        {/*        </div>*/}
        {/*        <div className="relative p-8 md:p-12 cursor-pointer rounded-lg z-10 bg-red-400">*/}
        {/*            Gaming*/}
        {/*        </div>*/}

        {/*        /!* Red overlay with hole *!/*/}
        {/*        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 z-20 bg-yellow-200 rounded-full h-[10vw] w-[10vw]">*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </section>
}