"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import COMPETITION from "@/data/events/competition";


export default function CompetitionPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                title="Competition"
                description="A set of words that is complete in itself, typically containing a subject and predicate..."
                bg="/bg/competition.webp"
                bgAlt=""
            />

            <PosterListing events={COMPETITION}/>
        </section>
    );
}
