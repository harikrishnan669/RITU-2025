"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import ISTE_DATA from "@/data/socities/iste";

export default function DeptPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/civil.webp"
                title="ISTE RIT"
                description="Explore workshops, seminars, and events organized by the ISTE RIT."
            />
            <PosterListing events={ISTE_DATA}/>
        </section>
    )
}