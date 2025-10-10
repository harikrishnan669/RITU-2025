import Header from "@/components/header";
import Link from "next/link";
import GradientLine from "@/components/gradient-line";
import React from "react";

export default function TicketPage() {
    return <section className="min-h-screen w-full overflow-x-hidden flex flex-col justify-center items-center">
        <Header title="Tickets" className="mb-4"/>
        <p className="text-center mb-20">
            Click on the
            <span className="highlighted-text text-black">tickets</span>
            to book!
        </p>

        <div className="px-20 gap-30 overflow-hidden w-full flex flex-row max-sm:flex-col justify-around max-sm:justify-center items-center max-md:gap-10 py-2 max-md:py-0 max-md:pt-2">
            <Link href="/workshop"
                  className="flex-1 transition-transform duration-100 cursor-pointer select-none hover:scale-105"
            >
                <img alt="" src="/day-pass/day1.webp"
                     className="max-md:w-[65vw]"/>
            </Link>
            <Link href="/workshop"
                  className="flex-1 transition-transform duration-100 cursor-pointer select-none hover:scale-105"
            >
                <img alt="" src="/day-pass/day2.webp"
                     className="max-md:w-[65vw]"/>
            </Link>

            <Link href="/workshop"
                  className="flex-1 transition-transform duration-100 cursor-pointer select-none hover:scale-105"

            >
                <img alt="" src="/day-pass/day3.webp"
                     className="max-md:w-[65vw]"/>
            </Link>

            <GradientLine/>
        </div>

    </section>
}