import Header from "@/components/header";
import {ArrowUpRight} from "lucide-react";
import {useState} from "react";


export default function EventsListing() {

    const [isHovered, setIsHovered] = useState(false);

    return <section className="container-cont">
        <Header title="Events"/>
        <div className="relative flex flex-col items-center justify-center h-[70vh] bg-grsfdcay-800/70">
            {/*Centered Logo*/}
            <div className="absolute inset-0 w-full h-full z-0 flex justify-center items-center">
                <img src={'/ritu-logo-white.png'} alt="" width="12%"/>
            </div>

            <div className="relative grid grid-cols-2 gap-x-38 gap-y-30 z-20">
                {/* Workshops - Top Left */}
                <div
                    className={`relative bg-black/40 p-8 md:p-12 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ${
                        isHovered ? "shadow-red-glow-hover bg-green-400" : "shadow-red-glow"
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                     style={{
                         WebkitMaskImage: `radial-gradient(circle at calc(100% + 20px) calc(100% + 10px), transparent 0 25%, black 31px)`,
                         maskImage: `radial-gradient(circle at calc(100% + 20px) calc(100% + 10px), transparent 0 25%, black 31px)`,
                         WebkitMaskComposite: 'destination-out',
                         maskComposite: 'exclude',
                     }}>
                    <div className="flex items-center justify-center gap-1">
                        <h2 className="text-white text-2xl md:text-3xl font-light">Workshops</h2>
                        <ArrowUpRight size={28}/>
                    </div>
                </div>

                {/* Competitions - Top Right */}
                <div className="relative bg-black/40 p-8 md:p-12 cursor-pointer rounded-lg border-[2px] border-blue-500"
                     style={{
                         WebkitMaskImage: `radial-gradient(circle at -20px calc(100% + 10px), transparent 0 25%, black 31px)`,
                         maskImage: `radial-gradient(circle at -20px calc(100% + 10px), transparent 0 25%, black 31px)`,
                         WebkitMaskComposite: 'destination-out',
                         maskComposite: 'exclude',
                     }}>
                    <div className="flex items-center justify-center gap-1">
                        <h2 className="text-white text-2xl md:text-3xl font-light">Competitions</h2>
                        <ArrowUpRight size={28}/>
                    </div>
                </div>

                {/* Exhibition - Bottom Left */}
                <div
                    className="relative bg-black/40 p-8 md:p-12 cursor-pointer rounded-lg border-[2px] border-orange-500"
                    style={{
                        WebkitMaskImage: `radial-gradient(circle at calc(100% + 20px) -10px, transparent 0 25%, black 31px)`,
                        maskImage: `radial-gradient(circle at calc(100% + 20px) -10px, transparent 0 25%, black 31px)`,
                        WebkitMaskComposite: 'destination-out',
                        maskComposite: 'exclude',
                    }}>
                    <div className="flex items-center justify-center gap-1">
                        <h2 className="text-white text-2xl md:text-3xl font-light">Exhibition</h2>
                        <ArrowUpRight size={28}/>
                    </div>
                </div>

                {/* Gaming - Bottom Right */}
                <div
                    className="relative bg-black/40 p-8 md:p-12 cursor-pointer rounded-lg border-[2px] border-green-500"
                    style={{
                        WebkitMaskImage: `radial-gradient(circle at -20px -10px, transparent 0 25%, black 31px)`,
                        maskImage: `radial-gradient(circle at -20px -10px, transparent 0 25%, black 31px)`,
                        WebkitMaskComposite: 'destination-out',
                        maskComposite: 'exclude',
                    }}>
                    <div className="flex items-center justify-center gap-1">
                        <h2 className="text-white text-2xl md:text-3xl font-light">Gaming</h2>
                        <ArrowUpRight size={28}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
}