"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import WORKSHOPS from "@/data/events/workshop";


export default function WorkshopPage() {

    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                bg="/bg/workshop.webp"
                title="Workshop"
                description="Technical workshops are a dynamic platform for innovation and learning, bringing together curious minds to explore cutting-edge technologies, sharpen practical skills, and transform ideas into impactful creations through hands-on experience and expert guidance."
            />
            <PosterListing events={WORKSHOPS}/>
        </section>
    )
}