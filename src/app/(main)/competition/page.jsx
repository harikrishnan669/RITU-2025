"use client";
import React, { useRef } from "react";
import {useState} from "react";
import {Calendar,MapPin,Funnel} from "lucide-react"

function EventCard({ event }) {
    return (
        <div className="bg-white/10 border border-white/20 rounded-xl shadow-lg overflow-hidden max-w-sm w-full flex flex-col">
            <div className="relative">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover"
                />
                {event.badge && (
                    <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {event.badge}
          </span>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-white-500 mb-1">
                    <span className="mr-2"><Calendar className="size-5"/></span> {event.date}
                </div>
                <h2 className="text-lg font-semibold text-white-800 mb-1">
                    {event.title}
                </h2>
                <p className="text-white-600 mb-3 flex-grow text-sm">{event.description}</p>
                <div className="flex items-center text-sm text-white-500 mb-3">
                    <span className="mr-2"><MapPin className="size-5" /></span> {event.location}
                </div>
                <button
                    className="bg-purple-900 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition self-end">
                    Book Now
                </button>
            </div>
        </div>
    );
}
export default function Test({titleHeight = "100vh"}) {
    const imageRef = useRef(null);
    const [visibleCount, setVisibleCount] = useState(3);

    const toggleMoreless=()=>{
        if(visibleCount === 3)
            setVisibleCount(events.length);
        else
            setVisibleCount(3);
    }
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
    return (
        <div className="relative">
            <div className="relative z-0">
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center z-10 max-h-[500vh] min-h-[500px] filter brightness-60 contrast-120 saturate-100"
                    src="/competitions.webp"
                    alt="Competitions image"
                    ref={imageRef}
                />
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-10 md:bg-black/90 md:backdrop-blur" />
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none md:bg-gradient-to-t from-black to-transparent" />
            </div>
            <div
                className="relative z-30 flex flex-col items-center justify-center bg-black/20 transition-all duration-300 ease-in-out px-4"
                style={{minHeight: titleHeight}}>
                <div className="absolute top-[10%] left-[5%] z-40 w-full max-w-[500px] text-left px-4 md:max-w-[600px]">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl mb-4 md:mb-8 text-white tracking-widest">
                        Competition
                    </h2>
                    <p className="text-sm md:text-base lg:text-xl text-white">
                        a set of words that is complete in itself, typically containing a subject and predicate,
                        conveying a statement, question, exclamation, or command, and consisting of a main clause and
                        sometimes one or more subordinate clauses.
                    </p>
                </div>
                <div className="mt-[60vh] w-full flex justify-end pr-6">
                    <button
                        className="bg-white/20 backdrop-blur border border-white/30 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition flex items-center gap-2 hover:bg-white hover:text-black">
                        Filter
                        <Funnel className="size-5"/>
                    </button>
                </div>
                <div className="mt-8 md:pt-30 w-full max-w-[1200px] px-4 flex flex-col items-center pb-10 pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-0 sm:px-4">
                        {events.slice(0, visibleCount).map((event, idx) => (
                            <EventCard key={idx} event={event}/>
                        ))}
                    </div>

                    <button
                        onClick={toggleMoreless}
                        className="mt-8 bg-white/20 backdrop-blur border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
                    >
                        {visibleCount === 3 ? "View All Competitions" : "View Less"}
                    </button>
                </div>
            </div>
        </div>
    );
}
