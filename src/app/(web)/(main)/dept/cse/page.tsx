"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import CSE_DEPT from "@/data/dept/cse";


export default function DeptPage() {

    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/civil.webp"
                title="Department of Computer Science and Engineering"
                description="Explore workshops, seminars, and events organized by the Department of Computer Science and Engineering."
            />
            <PosterListing events={CSE_DEPT}/>
        </section>
    )
}