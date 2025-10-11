"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import TINKERHUB_DATA from "@/data/socities/tinkerhub";

export default function DeptPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/civil.webp"
                title="TinkerHub RIT"
                description="Explore workshops, seminars, and events organized by the Tinkerhub RIT."
            />
            <PosterListing events={TINKERHUB_DATA}/>
        </section>
    )
}