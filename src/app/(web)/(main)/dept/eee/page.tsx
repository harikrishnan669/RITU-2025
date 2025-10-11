"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import EEE_DEPT from "@/data/dept/eee";


export default function DeptPage() {

    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/civil.webp"
                title="Department of Electrical and Electronics Engineering"
                description="Explore workshops, seminars, and events organized by the Department of Electrical and Electronics Engineering."
            />
            <PosterListing events={EEE_DEPT}/>
        </section>
    )
}