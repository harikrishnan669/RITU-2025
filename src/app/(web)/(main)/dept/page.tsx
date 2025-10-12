import DEPT_MAPPING from "@/data/dept-mapping";
import Link from "next/link";
import React from "react";
import {cn} from "@/lib/utils";
import Header from "@/components/header";
import SOCIETIES_MAPPING from "@/data/socities-mapping";

export default function DeptPage() {
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="max-h-[600px] h-screen flex flex-col justify-center items-center">
                <img src="/bg/bg-line-left.webp"
                     className="absolute left-0 w-[20%] max-sm:translate-y-[120px] h-[200px] max-sm:h-auto max-sm:w-[40%] opacity-50 z-0"/>
                <img src="/bg/bg-line-right.webp"
                     className="absolute right-0 w-[20%] h-[200px] max-sm:translate-y-[-120px] max-sm:h-auto max-sm:w-[40%] opacity-50 z-0"/>
                <h1 className="text-4xl font-bold z-10 max-sm:mx-10 text-center">Departments And Societies</h1>
                <p className="mt-4 text-lg text-center z-10 max-sm:mx-10">Welcome to the Departments and Societies. Click on the
                    cards below to view its events.</p>
            </div>

            <Header title="Departments"/>
            <div className="grid grid-cols-2 gap-10 justify-items-center max-lg:grid-cols-1">
                {DEPT_MAPPING.map((item, index) => (
                    <Link
                        href={item.page}
                        key={index}
                        className={cn("relative w-fit h-fit transition-transform duration-100 cursor-pointer select-none hover:scale-105", item.comingSoon && "flex items-center pointer-events-none")}
                    >
                        {item?.comingSoon && <div
                            className="absolute w-full text-center bg-black text-white px-2 py-1 text-2xl font-bold z-10 ">
                            Coming Soon
                        </div>}
                        <img
                            alt="Dept"
                            src={item.image}
                            className={cn("h-[200px] max-sm:h-auto max-sm:max-w-[90vw] max-md:w-[65vw]", item.comingSoon && "opacity-50 grayscale")}
                        />
                    </Link>
                ))}
            </div>
            <br/><br/>
            <br/><br/>
            <br/><br/>


            <Header title="Socities"/>
            <div className="flex flex-wrap justify-center gap-10 justify-items-center max-sm:grid-cols-1">
                {SOCIETIES_MAPPING.map((item, index) => (
                    <Link
                        href={item.page}
                        key={index}
                        className={cn("relative w-fit h-fit transition-transform duration-100 cursor-pointer select-none hover:scale-105", item.comingSoon && "flex items-center pointer-events-none")}
                    >
                        {item?.comingSoon && <div
                            className="absolute w-full text-center bg-black text-white px-2 py-1 text-2xl font-bold z-10 ">
                            Coming Soon
                        </div>}
                        <img
                            alt="Dept"
                            src={item.image}
                            className={cn("h-[200px] max-sm:h-auto max-sm:max-w-[90vw] max-md:w-[65vw]", item?.comingSoon && "opacity-50 grayscale")}
                        />
                    </Link>
                ))}
            </div>
            <br/><br/>
            <br/><br/>
            <br/><br/>
        </section>
    )
}