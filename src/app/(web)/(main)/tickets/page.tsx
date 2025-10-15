import Header from "@/components/header";
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
            <a href="https://www.yepdesk.com/embed/buy-tickets/68ef439346e0fb0001904f81/private/8emivlhdsv"
                  className="flex-1 transition-transform duration-100 cursor-pointer select-none hover:scale-105"
            >
                <img alt="Day 1 Pass" src="/day-pass/day1.webp"
                     className="max-md:w-[65vw]"/>
            </a>
            <a href="https://www.yepdesk.com/embed/buy-tickets/68d3b8d346e0fb00011f7e64/private/4f5h1mqrgl"
                  className="flex-1 transition-transform duration-100 cursor-pointer select-none hover:scale-105"
            >
                <img alt="Day 2 Pass" src="/day-pass/day2.webp"
                     className="max-md:w-[65vw]"/>
            </a>

            <a href="https://www.yepdesk.com/embed/buy-tickets/68e8046746e0fb000170463c/private/l5umhjmd3p"
                  className="flex-1 transition-transform duration-100 cursor-pointer select-none hover:scale-105"

            >
                <img alt="Day 3 Pass" src="/day-pass/day3.webp"
                     className="max-md:w-[65vw]"/>
            </a>

            <GradientLine/>
        </div>

    </section>
}