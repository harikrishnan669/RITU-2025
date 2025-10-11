"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import CIVIL_DEPT from "@/data/dept/civil";


export default function DeptPage() {

    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/civil.webp"
                title="Department of Civil Engineering"
                description="Explore workshops, seminars, and events organized by the Department of Civil Engineering."
            />
            <PosterListing events={CIVIL_DEPT}/>
        </section>
    )
}