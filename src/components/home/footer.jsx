"use client";

import { ArrowRight, ChevronRight, MailOpen, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";



export default function Footer() {
    return <section className={`container-cont footer-background p-6 px-14 w-full `}>
        <div>
            <div className="md:hidden" >
                <h1 className="text-2xl font-medium mb-4 px-1">GET UPDATES</h1>
                <div className="relative w-full max-w-md mb-3">
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="w-full border border-gray-300 rounded-full px-4 py-2 pr-12"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-3 py-1 rounded-full">
                        <p><ArrowRight /></p>
                    </button>
                </div>
                <p className="px-3">Mail us for queries</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-2 md:px-3 py-2">
                <Link href='https://maps.app.goo.gl/beC6rhPdhPRUa5c16'>
                    <div className="flex items-center  mt-3 md:mt-6" >
                        <div className="p-2">
                            <MapPin size={32} />
                        </div>
                        <div className="tracking-wide md:tracking-widest" >
                            <p >Rajiv Gandhi Institute of Technology</p>
                            <p className="text-sm">Pampady, Kottayam</p>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center  mt-3" >
                    <div className="p-2">
                        <PhoneCall size={32} />
                    </div>
                    <div className="tracking-wide md:tracking-widest">
                        <p >+91 1234567890</p>
                        <p className="text-sm px-1">Hotline 24/7</p>
                    </div>
                </div>
                <Link href='https://www.rit.ac.in/'>
                    <div className="flex items-center  my-3" >
                        <div className="p-3">
                            <MailOpen size={32} />
                        </div>
                        <div className="tracking-wide md:tracking-widest" >
                            <p >www.rit.ac.in</p>
                            <p className="text-sm ">Free consult</p>
                        </div>
                    </div>
                </Link>
                <div className="hidden md:flex md:items-center md:justify-center md:tracking-widest">
                    <p>GET IN TOUCH</p>
                    <ChevronRight />
                </div>
            </div>
            <hr className="hidden md:block  max-w-[90vw] mx-auto my-6" />
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-6 md:px-3 py-2">
                <div className="hidden md:block ">
                    <div className="text-4xl px-3 py-2  flex items-center gap-2">
                        <img src="/icons/Vector.png" alt="" />
                        <p>RITU</p>
                    </div>
                    <div className="px-3 py-2 max-w-[25vw] md:tracking-widest ">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates placeat, repudiandae nemo nulla amet id officiis molestias.</p>
                    </div>
                    <div className="flex items-center gap-6 px-3 py-2">
                        <img src="/icons/instagram.png" alt="" />
                        <img src="/icons/youtube.png" alt="" />
                        <img src="/icons/facebook.png" alt="" />
                    </div>
                </div>
                <div className="md:tracking-widest">
                    <h1 className="text-xl px-3 py-2">PAGES</h1>
                    <div>
                        <Link href="/" className="px-2 py-2 block flex"><ChevronRight />Home</Link>
                        <Link href="/contact" className="px-2 py-2 block flex"><ChevronRight />About</Link>
                        <Link href="/gallery" className="px-2 py-2 block flex"><ChevronRight />Team</Link>
                        <Link href="/gallery" className="px-2 py-2 block flex"><ChevronRight />FAQs</Link>
                    </div>
                </div>
                <div className="hidden md:block md:tracking-widest">
                    <h1 className="text-xl px-3 py-2">CULTURALS</h1>
                    <div>
                        <Link href="/" className="px-2 py-2 block flex"><ChevronRight />Gauri Lakshmi</Link>
                        <Link href="/contact" className="px-2 py-2 block flex"><ChevronRight />DJ</Link>
                        <Link href="/gallery" className="px-2 py-2 block flex"><ChevronRight />DJ</Link>
                        <Link href="/gallery" className="px-2 py-2 block flex"><ChevronRight />DJ</Link>
                    </div>
                </div>
                <div className="hidden md:block md:tracking-widest">
                    <h1 className="text-2xl font-medium mb-4 px-1">GET UPDATES</h1>
                    <div className="relative w-full max-w-md mb-3">
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="w-full border border-gray-300 rounded-full px-4 py-2 pr-12"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-3 py-1 rounded-full">
                            <p><ArrowRight /></p>
                        </button>
                    </div>
                    <p className="px-3">Mail us for queries</p>
                </div>
            </div>

            <div className="md:hidden">
                <div className="text-4xl px-3 py-2  flex items-center gap-2">
                    <img src="/icons/Vector.png" alt="" />
                    <p>RITU</p>
                </div>
                <div className="flex items-center gap-6 px-3 py-2">
                    <img src="/icons/instagram.png" alt="" />
                    <img src="/icons/youtube.png" alt="" />
                    <img src="/icons/facebook.png" alt="" />
                </div>
            </div>

            <div>
                <p className="text-sm bg-black/5 px-3 py-2 mb-2 md:mb-0 md:py-0 md:pt-3 text-center ">© 2025 RITU. All rights reserved.</p>
            </div>
        </div>
    </section >
}