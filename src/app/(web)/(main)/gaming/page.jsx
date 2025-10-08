"use client";

import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import GAMING from "@/data/events/gaming";
import Header from "@/components/header";

export default function Gaming() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                title="Gaming"
                description="Get ready to battle it out in the ultimate test of skill, speed, and strategy! Our gaming
                        competitions feature a variety of popular titles and thrilling challenges designed for both
                        casual
                        players and pro-level contenders. Compete for glory, prizes, and bragging rights—let the games
                        begin!"
                bg="/bg/gaming.webp"
            />
            <PosterListing events={GAMING}/>

            <hr className="w-[70%] opacity-20"/>
            <br/><br/>

            <Header title="Our Sponsors" className="mb-8"/>

            <div className="w-full flex justify-center items-center flex-wrap">
                <a href="https://www.legendaryiasmentor.com" target="_blank">
                    <img src="/sponsors/gaming/legendary.webp" alt="Legendary"
                         className="w-[150px]"/>
                </a>
            </div>
            <br/><br/><br/>
            <Header title="Word From Our Sponsors" className="mb-10"/>

            <div className="w-full flex flex-col justify-center items-center flex-wrap">
                <a href="https://www.legendaryiasmentor.com" target="_blank">
                    <img src="/sponsors/gaming/legendary-poster.webp" alt="Legendary Mentor"
                         className="w-[300px] border rounded-lg"/>
                </a>
            </div>

            <br/><br/><br/>
            <br/><br/><br/>

        </section>
    );
}
