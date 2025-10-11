"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import ECE_DEPT from "@/data/dept/ece";


export default function DeptPage() {

    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/civil.webp"
                title="Department of Electronics and Communication Engineering"
                description="Explore workshops, seminars, and events organized by the Department of Electronics and Communication Engineering."
            />
            <PosterListing events={ECE_DEPT}/>
        </section>
    )
}