import {useState} from "react"
import {X} from "lucide-react"
import {cn} from "@/lib/utils";
import "./style.css"

// https://www.yepdesk.com/embed/buy-tickets/68ef678b46e0fb0001910834/private/42d851k5kd


export default function FlashSaleBanner() {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    return (
        <div className="absolute inset-0 z-50">
            <div
                className="absolute left-0 right-0 pointer-events-auto"
                style={{
                    top: "40%",
                    transform: "rotate(3deg)",
                    transformOrigin: "left center",
                    height: "80px",
                }}
            >

                <a href={"https://www.yepdesk.com/embed/buy-tickets/68ef678b46e0fb0001910834/private/42d851k5kd"} className={cn("block relative bg-red-600 animate-flash-bg h-full shadow-2xl")}>
                    <div className="relative overflow-hidden h-full flex items-center">
                        {/* Scrolling marquee content */}
                        <div className="flex animate-marquee whitespace-nowrap">
                            <MarqueeContent/>
                            <MarqueeContent/>
                        </div>
                    </div>

                    {/* Close button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-1/2 right-4 -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-1.5 transition-colors z-10"
                        aria-label="Close banner"
                    >
                        <X className="h-5 w-5"/>
                    </button>
                </a>
            </div>
        </div>
    )
}

function MarqueeContent() {
    return (
        <div className="flex items-center gap-8 px-8">
              <span className="text-white font-bold text-xl uppercase tracking-wider drop-shadow-lg">
                Flash Sale from 7pm to 8pm
              </span>
            <span className="text-yellow-300 font-bold text-xl">•</span>
            <span className="text-white font-bold text-xl uppercase tracking-wider drop-shadow-lg">
                Limited Time Only - Grab Your Spots
              </span>
            <span className="text-yellow-300 font-bold text-xl">•</span>
            <span className="text-white font-bold text-xl uppercase tracking-wider drop-shadow-lg">
                RITU Festival 2025 - October 16-19
              </span>
            <span className="text-yellow-300 font-bold text-xl">•</span>
            <span className="text-white font-bold text-xl uppercase tracking-wider drop-shadow-lg">
                Click on the banner
              </span>
            <span className="text-yellow-300 font-bold text-xl">•</span>
        </div>
    )
}
