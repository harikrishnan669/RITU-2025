"use client";

import {ArrowRight, ArrowUpRight, ChevronRight, Globe, Mail, MapPin, PhoneCall} from "lucide-react";
import Link from "next/link";
import NavLinks from "@/data/nav-links";


export default function Footer() {
    return <section className="container-cont footer-background p-6 px-14 w-full">
        <div className="flex items-center justify-between max-lg:hidden">
            <a href='https://maps.app.goo.gl/beC6rhPdhPRUa5c16' className="flex items-center">
                <div className="p-2">
                    <MapPin size={32}/>
                </div>
                <div className="tracking-wide md:tracking-widest">
                    <p>Rajiv Gandhi Institute of Technology</p>
                    <p className="text-sm opacity-70">Pampady, Kottayam</p>
                </div>
            </a>
            <div className="flex items-center">
                <div className="p-2">
                    <PhoneCall size={32}/>
                </div>
                <div className="tracking-wide md:tracking-widest">
                    <p>+91 1234567890</p>
                    <p className="text-sm px-1 opacity-70">Hotline 24/7</p>
                </div>
            </div>
            <a href='https://www.rit.ac.in/' className="flex items-center">
                <div className="p-2">
                    <Globe size={32}/>
                </div>
                <div className="tracking-wide md:tracking-widest">
                    <p>www.rit.ac.in</p>
                    <p className="text-sm opacity-70">Vist College</p>
                </div>
            </a>
            <div className="flex gap-2 h-full">
                <p>GET IN TOUCH</p>
                <ChevronRight/>
            </div>
        </div>
        <hr className="my-6 border-gray-700 max-lg:hidden" color="#9483FF"/>

        <div className="flex w-full justify-between h-full gap-4 max-lg:flex-col">
            <div>
                <div className="text-4xl max-sm:text-2xl flex items-center gap-2 mb-1">
                    <img src="/icons/Vector.png" className="max-sm:h-5" alt=""/>
                    <p>RITU</p>
                </div>
                <p className="text-sm opacity-80 mt-4 max-sm:mt-2 max-w-[400px] max-sm:max-w-full">
                    RITU, the techno-cultural fest of RIT, is happening on
                    October 16–19. Join us for an unforgettable experience filled with innovation.
                </p>
                <div className="flex items-center gap-6 mt-5 max-sm:mt-2">
                    <a href="">
                        <img src="/icons/instagram.png" className="size-8 max-sm:size-6" alt=""/>
                    </a>
                    <a href="">
                        <img src="/icons/youtube.png" className="size-8 max-sm:size-6" alt=""/>
                    </a>
                    <a href="">
                        <img src="/icons/facebook.png" className="size-8 max-sm:size-6" alt=""/>
                    </a>
                </div>
            </div>
            <div className="lg:min-h-full max-lg:h-[1px] lg:w-[1px] max-lg:w-full bg-gray-700"></div>
            <div className="flex flex-col">
                <h1 className="text-xl w-full mb-4 max-sm:text-lg">Pages</h1>
                <div className="flex-1 grid grid-cols-2 max-lg:pr-6 max-sm:text-sm max-sm:gap-y-4">
                    {NavLinks.map((item, key) => (
                        <Link href={item.href} key={key} className="w-fit flex flex-col relative h-fit group">
                            <div className="flex gap-2 items-center">
                                <span className="opacity-90">{item.title}</span>
                                <ArrowUpRight
                                    className="group-hover:scale-125 group-hover:translate-x-1 transition-transform opacity-50 size-5 max-sm:size-4"/>
                            </div>
                            <div
                                className="group-hover:w-full absolute w-0 transition-[width_0.2s] h-[2px] rounded-full -bottom-1 bg-white opacity-70"></div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="min-h-full w-[1px] bg-gray-700"></div>
            <div className="flex flex-col">
                <h1 className="text-xl w-full mb-4 max-sm:text-lg">Get Updates</h1>
                <form className="relative bg-white rounded-full overflow-hidden flex items-center max-sm:text-sm">
                    <input className="w-full h-full text-black pl-6 py-3 max-sm:pl-5 max-sm:py-2.5" type="email"
                           required placeholder="Enter email"/>
                    <button
                        className="right-1 max-sm:right-0 absolute rounded-full bg-[#624de7] flex items-center justify-center p-2 max-sm:p-1.5 m-1 aspect-square">
                        <ArrowRight/>
                    </button>
                </form>
                <p className="opacity-80 mt-6 max-sm:text-sm">If you have any queries mail us at:</p>
                <div
                    className="max-sm:text-sm mt-2 hover:opacity-100 cursor-pointer flex gap-2 items-center opacity-80">
                    <Mail className="size-5"/><a href="mailto:ritu@rit.ac.in">ritu@rit.ac.in</a>
                </div>
            </div>
        </div>

        <p className="border-t max-sm:text-xs max-sm:pt-5 opacity-70 border-gray-700 mt-8 text-sm px-3 py-2 mb-1 md:mb-0 md:py-0 md:pt-3 text-center ">
            © 2025 RITU. All rights reserved.
        </p>
    </section>
}