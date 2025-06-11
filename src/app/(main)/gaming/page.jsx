"use client";

import Header from "@/components/header";
import EventCard from "@/components/cards";
import {ArrowDown, ArrowRight, Filter} from "lucide-react";
import React, {useRef, useState} from "react";

export default function Gaming() {
    const scrollRef = useRef(null);

    const handleScroll = () => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"});
    };

    const [visible, setVisible] = useState(3) //initially only 3 cards are visible

    function toggleVisibility() {
        if (visible === 3) {
            setVisible(Gaming.length)
        } else {
            setVisible(3)//default state

        }
    }


    const Gaming = [
        {
            image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
            date: "May 15, 2025",
            title: "Esports Championship 2025",
            description: "Witness top-tier teams battle it out in an electrifying esports arena.",
            location: "GameZone Stadium, NYC",
            badge: "Featured",
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/041/388/388/small/ai-generated-concert-crowd-enjoying-live-music-event-photo.jpg",
            date: "June 3, 2025",
            title: "Indie Game Expo",
            description: "Explore unique and creative games from independent developers worldwide.",
            location: "Pixel Gallery, London",
            badge: "Latest",
        },
        {
            image: "https://t3.ftcdn.net/jpg/14/12/13/58/360_F_1412135872_JPmb1j7ZubIRl6cgzC1lMdeiz1fJWij4.jpg",
            date: "July 21, 2025",
            title: "Virtual Reality Gaming Workshop",
            description: "Dive into the immersive world of VR with hands-on gameplay and demos.",
            location: "VR Lab, San Francisco",
            badge: "New",
        },
        {
            image: "https://dht7q8fif4gks.cloudfront.net/2022-07/istockphoto-1247853982-612x612.jpg",
            date: "August 10, 2025",
            title: "Retro Gaming Night",
            description: "Relive the golden era of gaming with classic consoles and tournaments.",
            location: "8Bit Lounge, Austin",
            badge: "New",
        },
        {
            image: "https://dht7q8fif4gks.cloudfront.net/2022-07/istockphoto-1247853982-612x612.jpg",
            date: "August 17, 2025",
            title: "LAN Party Reloaded",
            description: "Join fellow gamers for an all-night LAN party packed with fun and prizes.",
            location: "The Grid Hub, Chicago",
            badge: "New",
        },
        {
            image: "https://dht7q8fif4gks.cloudfront.net/2022-07/istockphoto-1247853982-612x612.jpg",
            date: "August 24, 2025",
            title: "Cosplay & Game Con",
            description: "Celebrate gaming culture with cosplay contests, game booths, and live panels.",
            location: "Gamers Arena, Tokyo",
            badge: "New",
        }
    ];

    return (
        <div className="flex flex-col">

            <div
                className="relative flex justify-center items-center h-screen bg-cover bg-center px-4 sm:px-8 "
                style={{backgroundImage: "url('/gaming.webp')"}}
            >
                <div className="flex flex-col justify-start items-start lg:m-20 w-full relative gap-1">
                    <Header title="Gaming"/>
                    <p className="text-white text-base sm:text-lg leading-relaxed max-w-xl mt-2">
                        Get ready to battle it out in the ultimate test of skill, speed, and strategy! Our gaming
                        competitions feature a variety of popular titles and thrilling challenges designed for both
                        casual
                        players and pro-level contenders. Compete for glory, prizes, and bragging rights—let the games
                        begin!
                    </p>
                </div>


                <button
                    onClick={handleScroll}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
                >
                    <ArrowDown size={50} className="text-white"/>
                </button>
            </div>
            {/*here sepearte both parts */}
            <div className="w-full flex justify-end px-4 sm:px-8 pt-10">
                <button
                    className="flex items-center justify-center gap-2 px-4 py-2 max-w-[120px] bg-gray-300 text-black rounded-md hover:bg-gray-400 transition duration-200"
                >
                    <span className="hidden md:inline">Filter</span> <Filter size={18}/>
                </button>
            </div>

            <div className="flex flex-col items-center min-h-screen p-25 gap-5 ">

                <div
                    ref={scrollRef}
                    className="flex flex-row flex-wrap gap-10 justify-center items-center mx-auto p-4 "
                >
                    {Gaming.slice(0, visible).map((gaming, index) => (
                        <EventCard key={index} event={gaming}/>
                    ))}

                </div>

                <button onClick={toggleVisibility}
                        className="bg-white/20 text-white border border-white p-5 mb-5 w-[280px] text-xl cursor-pointer hover:text-black hover:bg-white transition duration-300 rounded-md">
                    {visible === 3 ?
                        (
                            <span className="flex flex-row justify-center gap-2 tracking-wide items-center">
                                View All Workshops <ArrowRight size={20}/>
                            </span>
                        ) : (
                            "View less"
                        )
                    }
                </button>

            </div>
        </div>
    );
}
