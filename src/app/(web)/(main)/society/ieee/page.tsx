"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import IEDC_DATA from "@/data/socities/iedc";

export default function DeptPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/civil.webp"
                title="IEDC RIT"
                description="Explore workshops, seminars, and events organized by the IEDC RIT."
            />
            <PosterListing events={IEDC_DATA}/>
        </section>
    )
}