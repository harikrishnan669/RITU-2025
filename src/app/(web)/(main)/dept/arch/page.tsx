"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import ARCH_DEPT from "@/data/dept/arch";


export default function DeptPage() {

    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/civil.webp"
                title="School of Architecture"
                description="Explore workshops, seminars, and events organized by the School of Architecture."
            />
            <PosterListing events={ARCH_DEPT}/>
        </section>
    )
}