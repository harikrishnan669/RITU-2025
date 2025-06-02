"use client";
import Link from "next/link";



export default function Footer() {
    return <section className={`container-cont footer-background p-6 px-14 w-full h-[710px] md:h-[300px]`}>
        <div className="md:hidden">
            <h1 className="text-2xl font-medium mb-4 px-1">GET UPDATES</h1>
            <div className="relative w-full max-w-md mb-3">
                <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="w-full border border-gray-300 rounded-full px-4 py-2 pr-12"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-3 py-1 rounded-full">
                    <p>→</p>
                </button>
            </div>
            <p className="px-3">Mail us for queries</p>
            <Link href='https://maps.app.goo.gl/beC6rhPdhPRUa5c16'>
                <div className="flex items-center  mt-3" >
                    <div className="p-2">
                        <img className="w-9 " src="icons/location.png" alt="" />
                    </div>
                    <div>
                        <p >Rajiv Gandhi Institute of Technology</p>
                        <p className="text-sm">Pampady, Kottayam</p>
                    </div>
                </div>
            </Link>
            <div className="flex items-center  mt-3" >
                <div className="p-3">
                    <img className="w-7" src="icons/phone.png" alt="" />
                </div>
                <div>
                    <p >+91 1234567890</p>
                    <p className="text-sm px-1">Hotline 24/7</p>
                </div>
            </div>
            <Link href='https://www.rit.ac.in/'>
                <div className="flex items-center  my-3" >
                    <div className="p-3">
                        <img className="w-7" src="icons/mail.png" alt="" />
                    </div>
                    <div className="px-1">
                        <p >www.rit.ac.in</p>
                        <p className="text-sm ">Free consult</p>
                    </div>
                </div>
            </Link>
            <div>
                <h1 className="text-xl px-3 py-2">PAGES</h1>
                <div>
                    <Link href="/" className="px-3 py-2 block">〉Home</Link>
                    <Link href="/contact" className="px-3 py-2 block">〉About</Link>
                    <Link href="/gallery" className="px-3 py-2 block">〉Team</Link>
                    <Link href="/gallery" className="px-3 py-2 block">〉FAQs</Link>
                </div>
            </div>
            <div className="text-4xl px-3 py-2 flex items-center gap-2">
                <img src="/icons/Vector.png" alt="" />
                <p>RITU</p>
            </div>
            <div className="flex items-center gap-6 px-3 py-2">
                <img src="/icons/instagram.png" alt="" />
                <img src="/icons/youtube.png" alt="" />
                <img src="/icons/facebook.png" alt="" />
            </div>
            <div>
                <p className="text-sm bg-black/5 px-3 py-2 mb-2 text-center ">© 2025 RITU. All rights reserved.</p>
            </div>
    </div>
    </section >
}