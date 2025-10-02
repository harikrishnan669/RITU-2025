"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import COMPETITION from "@/data/events/competition";


export default function CompetitionPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                title="Competition"
                description="Competitions are a stage for talent, creativity, and determination, where participants challenge themselves, showcase their skills, and strive for excellence in a spirit of passion and healthy rivalry."
                bg="/bg/competition.webp"
                bgAlt=""
            />

            <PosterListing events={COMPETITION}/>
        </section>
    );
}
