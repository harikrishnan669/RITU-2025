"use client";
import React ,{useState, useRef} from 'react';
import {Funnel,ChevronDown} from "lucide-react";
import EventCard from "@/components/cards";

const events = [
    {
        image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
        date: "May 15, 2025",
        title: "Digital Dreams Festival",
        description: "Experience the fusion of technology and music at our flagship event.",
        location: "Tech Arena, NYC",
        badge: "Featured",
    },
    {
        image: "https://static.vecteezy.com/system/resources/thumbnails/041/388/388/small/ai-generated-concert-crowd-enjoying-live-music-event-photo.jpg",
        date: "June 3, 2025",
        title: "Digital Art Summit",
        description: "Immerse yourself in the world of digital art and NFTs.",
        location: "Gallery X, London",
        badge: "Latest",
    },
    {
        image: "https://t3.ftcdn.net/jpg/14/12/13/58/360_F_1412135872_JPmb1j7ZubIRl6cgzC1lMdeiz1fJWij4.jpg",
        date: "July 21, 2025",
        title: "Tech Innovation Workshop",
        description: "Hands-on experience with cutting-edge technology and robotics.",
        location: "Innovation Hub, SF",
        badge: "New",
    },
    {
        image: "https://dht7q8fif4gks.cloudfront.net/2022-07/istockphoto-1247853982-612x612.jpg ",
        date: "July 21, 2025",
        title: "Tech Innovation Workshop",
        description: "Hands-on experience with cutting-edge technology and robotics.",
        location: "Innovation Hub, SF",
        badge: "New",
    },
    {
        image: "https://dht7q8fif4gks.cloudfront.net/2022-07/istockphoto-1247853982-612x612.jpg ",
        date: "July 21, 2025",
        title: "Tech Innovation Workshop",
        description: "Hands-on experience with cutting-edge technology and robotics.",
        location: "Innovation Hub, SF",
        badge: "New",
    },
    {
        image: "https://dht7q8fif4gks.cloudfront.net/2022-07/istockphoto-1247853982-612x612.jpg ",
        date: "July 21, 2025",
        title: "Tech Innovation Workshop",
        description: "Hands-on experience with cutting-edge technology and robotics.",
        location: "Innovation Hub, SF",
        badge: "New",
    },
];

export default function WorkshopPage() {
    const imageRef = useRef(null);
    const [visibleCount, setVisibleCount] = useState(3);
    const toggleMoreless=()=>{
        if (visibleCount === 3)
            setVisibleCount(events.length);
        else
            setVisibleCount(3);
    }
    return(
        <section className="min-h-screen flex flex-col justify-center items-center">
            <div className="relative w-full h-screen overflow_hidden">
                <img
                    className="absolute top-0 left-0 object-cover object-center -z-1 w-full h-screen"
                    src="/workshop.webp"
                    alt="Workshop image"
                    ref={imageRef}
                />
                <div className="size-full flex flex-col justify-center bg-black/30 pl-10">
                    <div className="w-full max-w-[600px] text-left px-4">
                        <h2 className="text-4xl md:text-5xl mb-4 text-white tracking-widest">
                            Workshop
                        </h2>
                        <p className="text-sm md:text-base lg:text-xl text-white">
                            a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.
                        </p>
                    </div>
                </div>
                <div
                    className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-40 text-3xl rounded-full p-1 cursor-pointer sm:text-4xl md:text-5xl animate-bounce"
                >
                    <ChevronDown size={50}/>
                </div>
            </div>
            <div className="w-full flex justify-end pr-6 mt-10">
                <button
                    className="bg-white/20 border border-white/30 text-white px-6 py-2 rounded-lg transition flex items-center gap-2 hover:bg-white hover:text-black">
                    Filter
                    <Funnel className="size-5"/>
                </button>
            </div>
            <div className="w-full max-w-[1200px] px-4 flex flex-col items-center py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full justify-items-center">
                    {events.slice(0, visibleCount).map((event, idx) => (
                        <EventCard key={idx} event={event}/>
                    ))}
                </div>
                <button onClick={toggleMoreless}
                        className="mt-10 bg-white/20 border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                    {visibleCount === 3 ? "View All" : "View Less"}
                </button>
            </div>
        </section>
    )
}