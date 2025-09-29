"use client";
import PosterListing from "@/components/pages/poster-listing";
import BE_A_PART from "@/data/be-a-part";

export default function CompetitionPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            {/*<LandingBanner*/}
            {/*    title="Competition"*/}
            {/*    description="A set of words that is complete in itself, typically containing a subject and predicate..."*/}
            {/*    bg="/bg/competition.webp"*/}
            {/*    bgAlt=""*/}
            {/*/>*/}


            <PosterListing events={BE_A_PART}/>
        </section>
    );
}
