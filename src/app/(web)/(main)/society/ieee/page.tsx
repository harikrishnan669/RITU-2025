"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import IEEE_DATA from "@/data/socities/ieee";

export default function DeptPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/civil.webp"
                title="IEDC RIT"
                description="Explore workshops, seminars, and events organized by the IEDC RIT."
            />
            <PosterListing events={IEEE_DATA}/>
        </section>
    )
}