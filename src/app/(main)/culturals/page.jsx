"use client";
import LandingBanner from "@/components/pages/landing-banner";
import PosterListing from "@/components/pages/poster-listing";
import CULTURALS from "@/data/culturals";


export default function CulturalsPage() {

    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <LandingBanner
                title="Culturals"
                description="Culturals are a vibrant celebration of diverse traditions, showcasing the richness of music,
                            dance, art, and heritage from around the world, bringing people together through shared
                            expressions of creativity and identity."
                bg="/bg/culturals.webp"
            />

            <PosterListing events={CULTURALS}/>
        </section>
    );
}