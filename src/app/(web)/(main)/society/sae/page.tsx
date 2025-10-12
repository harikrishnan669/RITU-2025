"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import SAE_DATA from "@/data/socities/sae";

export default function DeptPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/civil.webp"
                title="SAE RIT"
                description="Explore workshops, seminars, and events organized by the SAE RIT."
            />
            <PosterListing events={SAE_DATA}/>
        </section>
    )
}