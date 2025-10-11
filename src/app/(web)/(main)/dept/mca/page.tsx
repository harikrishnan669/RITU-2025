"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import MCA_DEPT from "@/data/dept/mca";


export default function DeptPage() {

    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/civil.webp"
                title="Master of Computer Applications"
                description="Explore workshops, seminars, and events organized by the Department of Master of Computer Applications."
            />
            <PosterListing events={MCA_DEPT}/>
        </section>
    )
}