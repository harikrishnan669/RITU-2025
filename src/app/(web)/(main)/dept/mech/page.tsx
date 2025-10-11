"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import MECH_DEPT from "@/data/dept/mech";


export default function DeptPage() {

    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/civil.webp"
                title="Department of Mechanical Engineering"
                description="Explore workshops, seminars, and events organized by the Department of Mechanical Engineering."
            />
            <PosterListing events={MECH_DEPT}/>
        </section>
    )
}