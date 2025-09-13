"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import WORKSHOPS from "@/data/workshop";


export default function WorkshopPage() {

    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/workshop.webp"
                title="Workshop"
                description="A set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."
            />
            <PosterListing events={WORKSHOPS}/>
        </section>
    )
}