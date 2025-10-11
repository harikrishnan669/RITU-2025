"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import MTECH_DEPT from "@/data/dept/mtech";


export default function DeptPage() {

    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/civil.webp"
                title="Master of Technology"
                description="Explore workshops, seminars, and events organized by the Department of Master of Technology."
            />
            <PosterListing events={MTECH_DEPT}/>
        </section>
    )
}