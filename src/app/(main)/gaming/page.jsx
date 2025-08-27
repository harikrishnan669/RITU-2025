"use client";

import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import GAMING from "@/data/gaming";

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
        </section>
    );
}
